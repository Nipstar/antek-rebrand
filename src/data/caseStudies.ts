export interface CaseStudy {
  id: string;
  industry: string;
  headline: string;
  meta: string;
  illustrative: true;
  challenge: {
    title: string;
    description: string;
  };
  solution: {
    title: string;
    description: string;
  };
  results: {
    title: string;
    metrics: Array<{
      number: string;
      label: string;
      detail: string;
    }>;
    benefits: string[];
  };
  testimonial: {
    quote: string;
    author: string;
    business: string;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'restaurant',
    industry: 'HOSPITALITY',
    headline: '3-DAY PAYBACK FROM MISSED CALLS ALONE',
    meta: 'Indian Restaurant | Manchester, UK',
    illustrative: true,
    challenge: {
      title: 'The Challenge:',
      description: '160 missed calls per month. Language barriers with complex dish names. Staff interrupted constantly during peak hours.'
    },
    solution: {
      title: 'The Solution:',
      description: 'AI voice agent handling 98% of calls with perfect accent recognition and multilingual support (English, Urdu, Hindi).'
    },
    results: {
      title: 'ILLUSTRATIVE RESULTS',
      metrics: [
        {
          number: '95%',
          label: 'REDUCTION IN\nMISSED CALLS',
          detail: '160 → 8 calls/month'
        },
        {
          number: '£2.2K',
          label: 'RECOVERED\nIN 72 HOURS',
          detail: '3-day ROI payback'
        },
        {
          number: '10%',
          label: 'AVERAGE TICKET\nINCREASE',
          detail: 'Via AI upselling'
        }
      ],
      benefits: [
        '98% accuracy handling Urdu, Hindi & complex dish names',
        '8 hours/week freed for customer service',
        '24/7 ordering without human oversight'
      ]
    },
    testimonial: {
      quote: 'We thought it\'d take a month to see any ROI. It took three days. The AI doesn\'t just understand "Biryani"—it knows regional styles and asks better questions than we do.',
      author: 'Restaurant Owner',
      business: 'Indian Restaurant, Manchester'
    },
  },
  {
    id: 'chatbot-website-leads',
    industry: 'PROFESSIONAL SERVICES',
    headline: 'AFTER-HOURS WEBSITE VISITORS TURNED INTO BOOKED CALLS',
    meta: 'Professional Services Firm | UK',
    illustrative: true,
    challenge: {
      title: 'The Challenge:',
      description: 'Plenty of website traffic, but visitors arriving in the evenings and at weekends hit a static contact form and left. Most never came back.'
    },
    solution: {
      title: 'The Solution:',
      description: 'AI chatbot trained on the firm’s services and pricing — it answers questions instantly, qualifies the visitor, and books a call straight into the calendar.'
    },
    results: {
      title: 'ILLUSTRATIVE RESULTS',
      metrics: [
        {
          number: '38%',
          label: 'OF ENQUIRIES\nCAPTURED OUT OF HOURS',
          detail: 'Evenings & weekends'
        },
        {
          number: '24/7',
          label: 'INSTANT RESPONSE\nTO VISITORS',
          detail: 'No contact-form wait'
        },
        {
          number: '2x',
          label: 'QUALIFIED CALLS\nBOOKED',
          detail: 'Vs. form-only baseline'
        }
      ],
      benefits: [
        'Captures leads that used to leave at 10pm',
        'Qualifies visitors before they reach your inbox',
        'Books straight into the calendar, no back-and-forth'
      ]
    },
    testimonial: {
      quote: 'Visitors used to land after hours, see a form, and bounce. Now they get answers there and then — and the good ones are booked in before we’re back at our desks.',
      author: 'Managing Director',
      business: 'Professional Services Firm, UK'
    },
  },
  {
    id: 'cleaning-services',
    industry: 'OPERATIONS',
    headline: '£5,000/MONTH SAVED ON ADMIN ALONE',
    meta: 'Commercial Cleaning | South East England',
    illustrative: true,
    challenge: {
      title: 'The Challenge:',
      description: '20+ hours weekly on admin tasks. Invoice chasing, booking confirmations, calendar updates. Small team drowning in repetitive work.'
    },
    solution: {
      title: 'The Solution:',
      description: 'n8n (open-source workflow automation) connecting CRM, calendar, invoicing, and communication tools into seamless automated processes.'
    },
    results: {
      title: 'ILLUSTRATIVE RESULTS',
      metrics: [
        {
          number: '90%',
          label: 'REDUCTION IN\nADMIN TIME',
          detail: '20hrs → 2hrs/week'
        },
        {
          number: '£5K+',
          label: 'MONTHLY LABOUR\nCOST SAVINGS',
          detail: 'Permanent reduction'
        },
        {
          number: '167%',
          label: 'CLIENT GROWTH',
          detail: '15 → 40 clients, same team'
        }
      ],
      benefits: [
        'Significant reduction in data entry errors',
        '18 hours/week freed for client acquisition',
        'Automated invoice delivery and follow-up'
      ]
    },
    testimonial: {
      quote: 'We were spending 20+ hours every week on admin—invoice chasing, booking emails, calendar updates. The workflows eliminated 90% of it. Now data flows between systems automatically.',
      author: 'Operations Manager',
      business: 'Commercial Cleaning Company, South East England'
    },
  },
  {
    id: 'geo-visibility',
    industry: 'GEO',
    headline: 'FROM INVISIBLE TO CITED IN AI ANSWERS',
    meta: 'Local Service Firm | UK',
    illustrative: true,
    challenge: {
      title: 'The Challenge:',
      description: 'When buyers asked ChatGPT, Perplexity or Google’s AI Overviews for a business like this one, a competitor got named every time. The firm wasn’t in the conversation at all.'
    },
    solution: {
      title: 'The Solution:',
      description: 'A GEO audit followed by fixes — structured data, entity and content work — so AI search engines can understand, trust and cite the business for its core services.'
    },
    results: {
      title: 'ILLUSTRATIVE RESULTS',
      metrics: [
        {
          number: 'Cited',
          label: 'NAMED IN AI\nANSWERS',
          detail: 'From zero to cited'
        },
        {
          number: '4',
          label: 'AI ENGINES\nCOVERED',
          detail: 'ChatGPT, Perplexity, Google, Gemini'
        },
        {
          number: '90d',
          label: 'TO ESTABLISH\nVISIBILITY',
          detail: 'Audit, fix, monitor'
        }
      ],
      benefits: [
        'Cited instead of a competitor in AI answers',
        'Structured data and entity signals AI engines trust',
        'Ongoing monitoring as AI search shifts'
      ]
    },
    testimonial: {
      quote: 'Customers kept saying they’d “asked AI” and ended up elsewhere. Now we’re the name that comes back for what we do.',
      author: 'Founder',
      business: 'Local Service Firm, UK'
    },
  }
];
