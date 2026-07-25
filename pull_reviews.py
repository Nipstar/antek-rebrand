"""Pull Google Business Profile reviews via Apify → src/data/reviews.json.

Ad-hoc trust-signal refresh (run monthly or whenever). Not scheduled — this
isn't time-sensitive like GEO monitoring, so a manual run beats webhook plumbing.

Setup:
    pip install apify-client

Run:
    export APIFY_TOKEN="your_apify_token"
    python pull_reviews.py            # writes src/data/reviews.json

Then commit src/data/reviews.json and redeploy. The site reads it at build time;
if it's empty/missing the reviews component simply doesn't render.

reviewCountTotal / ratingAverageTotal are computed from the FULL unfiltered set
and feed the AggregateRating schema — not the trimmed 30-review display set.
"""
import json
import os
from datetime import datetime

from apify_client import ApifyClient

APIFY_TOKEN = os.environ["APIFY_TOKEN"]           # shell env — never hardcode
GBP_PLACE_ID = "ChIJf6wpo4wHdEgRbRqC845lL_I"        # Antek Automation, Andover (Google Place ID)
OUTPUT_PATH = "src/data/reviews.json"              # where the site build reads it

client = ApifyClient(APIFY_TOKEN)

run_input = {
    "placeIds": [GBP_PLACE_ID],
    "maxReviews": 100,
    "reviewsSort": "newest",
    "language": "en",
}

run = client.actor("compass/Google-Maps-Reviews-Scraper").call(run_input=run_input)

raw_reviews = list(client.dataset(run["defaultDatasetId"]).iterate_items())

# Towns/counties we run location pages for — used to tag a review to a page.
TOWNS = ["Andover", "Salisbury", "Portsmouth", "Southampton", "Winchester",
         "Basingstoke", "Newbury", "Reading", "Bournemouth", "Hampshire", "Berkshire"]


def match_location(text):
    for town in TOWNS:
        if town.lower() in text.lower():
            return town
    return None


def short_author(name):
    parts = (name or "Anonymous").split()
    first = parts[0] if parts else "Anonymous"
    initial = (parts[-1][:1] + ".") if len(parts) > 1 else ""
    return (first + " " + initial).strip()


filtered = []
for r in raw_reviews:
    text = r.get("text") or ""
    rating = r.get("stars") or r.get("rating") or 0
    if rating >= 4 and len(text.split()) >= 15:
        filtered.append({
            "id": r.get("reviewId", ""),
            "author": short_author(r.get("name")),
            "rating": rating,
            "text": text,
            "date": r.get("publishedAtDate", ""),
            "location": match_location(text),
            "source": "google",
        })

filtered.sort(key=lambda x: x["date"], reverse=True)
filtered = filtered[:30]

total = len(raw_reviews)
output = {
    "updatedAt": datetime.utcnow().isoformat() + "Z",
    "reviewCountTotal": total,
    "ratingAverageTotal": round(
        sum((r.get("stars") or r.get("rating") or 0) for r in raw_reviews) / total, 2
    ) if total else 0,
    "reviews": filtered,
}

os.makedirs(os.path.dirname(OUTPUT_PATH), exist_ok=True)
with open(OUTPUT_PATH, "w") as f:
    json.dump(output, f, indent=2)

print(f"Wrote {len(filtered)} filtered reviews (from {total} total) to {OUTPUT_PATH}")
