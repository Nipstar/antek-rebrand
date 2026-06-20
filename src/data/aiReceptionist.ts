export interface BeforeAfter {
  without: string
  with: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface IndustryData {
  slug: string
  name: string
  metaTitle: string
  metaDescription: string
  iconName: 'Zap' | 'Droplets' | 'Thermometer' | 'Calculator' | 'Scale' | 'Stethoscope' | 'Smile' | 'Brain'
  gridDescription: string

  heroEyebrow: string
  heroH1: string
  heroSubhead: string

  problemH2: string
  problemParagraphs: string[]

  beforeAfter: BeforeAfter

  howItWorks: [string, string, string]

  captures: string[]

  integrations: string

  alsoPopularWith: string[] // slugs

  faqs: FAQ[]

  bottomCtaH2: string
  bottomCtaSubhead: string
}

export const industries: Record<string, IndustryData> = {
  electricians: {
    slug: 'electricians',
    name: 'Electricians',
    metaTitle: 'AI Receptionist for Electricians UK | Never Miss a Job',
    metaDescription: 'An AI receptionist for UK electricians \u2014 answers every call and books jobs 24/7 while you\u2019re on the tools. Certified Retell partner. Hear a live demo.',
    iconName: 'Zap',
    gridDescription: 'AI phone answering that screens emergency vs routine calls while you\u2019re on the tools.',

    heroEyebrow: 'AI RECEPTIONIST FOR ELECTRICIANS',
    heroH1: 'You Can\u2019t Answer the Phone With Your Hands in a Consumer Unit',
    heroSubhead: 'Emergency call at 6pm on a Friday? Someone wanting a quote for a full rewire? A landlord needing an EICR? Your AI receptionist handles all of it \u2014 screening callers, capturing job details, and booking the ones worth your time. From \u00a397/month.',

    problemH2: 'Every Missed Call Is a Job That Went to the Bloke Who Answered',
    problemParagraphs: [
      'You\u2019re halfway through a board change. The phone rings. You can\u2019t answer \u2014 and you shouldn\u2019t, because you\u2019re working with live electrics.',
      'By the time you call back, they\u2019ve already booked someone else. Emergency calls, rewire enquiries, EICR requests \u2014 gone. Not because you\u2019re not good enough. Because you were busy doing the work.',
      'Meanwhile, the calls that do get through? Half of them are \u2018can you just change a plug socket\u2019 jobs that aren\u2019t worth driving across town for. You need someone to screen these before they eat your evening.',
    ],

    beforeAfter: {
      without: 'Customer calls about a tripping RCD. Voicemail. They call the next electrician on Google. You call back two hours later \u2014 too late. Result: Lost a \u00a3400 emergency callout to a competitor who picked up.',
      with: 'Customer calls about a tripping RCD. AI answers immediately. Screens for emergency \u2014 confirms power is partially out, identifies potential safety issue. Captures property type, consumer unit age, and contact details. Books emergency slot for today. Result: Emergency callout booked with full job context before you finished the current job.',
    },

    howItWorks: [
      'Share your website. We pull your services \u2014 whether that\u2019s domestic rewires, commercial installations, EICRs, or emergency callouts \u2014 plus your service area and hours.',
      'Emergency vs routine. Domestic vs commercial. Minimum job value. Whether you do EV charger installs or just traditional sparky work. You set the rules.',
      '30 seconds. Your AI receptionist answers calls while you\u2019re on the tools, screens every enquiry, and books the ones that are worth your time.',
    ],

    captures: [
      'Emergency or routine',
      'Domestic or commercial property',
      'Issue type (tripping RCD, no power, burning smell, rewire quote, EICR, EV charger)',
      'Property type and age of consumer unit',
      'Preferred date/time',
      'Contact details and address',
      'Whether they need a certificate (EICR, Part P)',
    ],

    integrations: 'Connects with Jobber, Housecall Pro, ServiceM8, Tradify, Google Calendar, Outlook, and most CRM tools. Running something else? Ask us.',

    alsoPopularWith: ['plumbers', 'hvac'],

    faqs: [
      { question: 'Can it tell the difference between an emergency and a routine enquiry?', answer: 'Yes. You define what counts as emergency \u2014 no power, burning smell, exposed wiring \u2014 and the AI screens for those triggers on every call. Emergencies get priority routing.' },
      { question: 'What about Part P and certification questions?', answer: 'It captures what type of work is needed and whether a certificate is required. It doesn\u2019t give electrical advice \u2014 it gathers the information so you can assess the job properly.' },
      { question: 'Will it handle commercial enquiries differently from domestic?', answer: 'If you want it to, yes. You can set different screening flows for domestic vs commercial, so commercial enquiries capture site access details, project scope, and decision-maker contact information.' },
      { question: 'I work with a mate / small team \u2014 can we all see the bookings?', answer: 'Yes. Bookings go into a shared calendar, and call summaries can be sent to multiple people. Everyone sees what\u2019s coming in.' },
      { question: 'How much does it cost?', answer: 'Plans from \u00a397/month with 120 call minutes included. Setup from \u00a3249. Additional minutes at £0.18/min. Book a quick call for an exact quote.' },
    ],

    bottomCtaH2: 'Stop Losing Jobs Because You\u2019re Busy Doing Jobs',
    bottomCtaSubhead: 'Try the demo. Then imagine it running on your number while you\u2019re on the tools.',
  },

  plumbers: {
    slug: 'plumbers',
    name: 'Plumbers',
    metaTitle: 'AI Receptionist for Plumbers UK | Never Miss a Callout',
    metaDescription: 'An AI receptionist for UK plumbers \u2014 answers every call and books callouts 24/7 while you\u2019re on the job. Certified Retell partner. Hear a live demo.',
    iconName: 'Droplets',
    gridDescription: 'AI phone answering that captures emergency leaks and boiler breakdowns while you\u2019re on a job.',

    heroEyebrow: 'AI RECEPTIONIST FOR PLUMBERS',
    heroH1: 'A Burst Pipe Waits for No One. Neither Should Your Phone.',
    heroSubhead: 'When someone\u2019s kitchen is flooding, they\u2019re calling three plumbers. First to answer wins. Your AI receptionist picks up instantly \u2014 screens for emergencies, captures the details, and books the callout. Even when you\u2019re elbow-deep in someone else\u2019s U-bend. From \u00a397/month.',

    problemH2: 'They Called. You Were Under a Sink. They Called Someone Else.',
    problemParagraphs: [
      'A homeowner\u2019s got water pouring through their ceiling. They Google \u2018emergency plumber near me\u2019 and call the first three results. You\u2019re one of them \u2014 but you\u2019re on a job. By the time you see the missed call, they\u2019ve already got someone on the way.',
      'That\u2019s a \u00a3300-\u00a3500 emergency callout you lost because you were doing your job.',
      'And the non-emergencies? Boiler service requests, tap replacements, quote enquiries \u2014 they pile up in your voicemail and half of them never get returned. Not because you don\u2019t care. Because you\u2019re knackered by 6pm and there\u2019s another 12 missed calls to deal with.',
    ],

    beforeAfter: {
      without: 'Homeowner calls about a leak. Voicemail. They call the next plumber. You call back at 7pm \u2014 they\u2019ve already had it fixed. Result: Lost a \u00a3450 emergency callout.',
      with: 'Homeowner calls about a leak. AI answers immediately. Confirms water is actively leaking, captures location in the property, asks if stopcock is turned off, books emergency slot. Result: Emergency callout booked with full context. You arrive knowing what you\u2019re walking into.',
    },

    howItWorks: [
      'Share your website. We pull your services \u2014 emergency callouts, boiler servicing, bathroom fits, commercial contracts \u2014 plus your service area and hours.',
      'Emergency triggers, job minimums, Gas Safe work, commercial vs domestic flows. You set the rules, the AI follows them.',
      '30 seconds. Your AI receptionist answers calls instantly, triages leaks and breakdowns, and books the callouts that are worth your time.',
    ],

    captures: [
      'Emergency or routine',
      'Issue type (leak, burst pipe, no hot water, boiler fault, blocked drain, tap/toilet repair)',
      'Is water actively flowing',
      'Has the stopcock been turned off',
      'Property type (house, flat, commercial)',
      'Boiler make and model (if applicable)',
      'Preferred date/time',
      'Contact details and address',
    ],

    integrations: 'Connects with Jobber, ServiceM8, Tradify, Housecall Pro, Google Calendar, Outlook, and most CRM tools.',

    alsoPopularWith: ['electricians', 'hvac'],

    faqs: [
      { question: 'Can it guide callers to turn off their stopcock?', answer: 'Yes. For active leaks, it can walk them through locating and turning off the stopcock while capturing the rest of the details. It won\u2019t give plumbing advice, but it can help with basic safety steps you define.' },
      { question: 'I do Gas Safe work \u2014 can it capture boiler details?', answer: 'It asks about boiler make, model, and the nature of the fault. It captures whether there\u2019s a smell of gas and advises them to call the Gas Emergency line if needed before continuing the screening.' },
      { question: 'What about commercial contracts vs domestic one-offs?', answer: 'You can set different screening flows. Commercial enquiries capture site contact, access arrangements, and contract details. Domestic calls focus on the immediate issue and booking.' },
      { question: 'How much does it cost?', answer: 'Plans from \u00a397/month. Setup from \u00a3249. 120 call minutes included per month, £0.18/min over. Book a quick call for an exact quote.' },
      { question: 'How quickly can I go live?', answer: 'Most plumbers are live within 24\u201348 hours. We pull your services from your website, you tell us your screening rules and emergency criteria, and you forward your number. That\u2019s it.' },
    ],

    bottomCtaH2: 'The Plumber Who Answers First Gets the Job. Make Sure That\u2019s You.',
    bottomCtaSubhead: 'Try the demo. Then imagine it running on your number \u2014 answering every leak, every time.',
  },

  hvac: {
    slug: 'hvac',
    name: 'HVAC Engineers',
    metaTitle: 'AI Receptionist for HVAC Engineers UK | Never Miss a Job',
    metaDescription: 'An AI receptionist for UK HVAC engineers \u2014 answers every call and books jobs 24/7, even through peak season. Certified Retell partner. Hear a live demo.',
    iconName: 'Thermometer',
    gridDescription: 'AI phone answering that triages heating and cooling emergencies while you\u2019re on a rooftop.',

    heroEyebrow: 'AI RECEPTIONIST FOR HVAC ENGINEERS',
    heroH1: 'It\u2019s January. Their Boiler\u2019s Dead. You\u2019re on Another Job.',
    heroSubhead: 'No heating in winter is a crisis, not a voicemail. Your AI receptionist picks up instantly, screens for emergencies, captures system details, and books the callout \u2014 while you\u2019re finishing the job you\u2019re already on. From \u00a397/month.',

    problemH2: 'Peak Season Doesn\u2019t Care That You\u2019re Already Flat Out',
    problemParagraphs: [
      'First cold snap of the year. Your phone rings non-stop \u2014 boilers down, radiators cold, heat pumps throwing fault codes. You can\u2019t answer because you\u2019re up in a loft fitting a new system.',
      'Every call you miss goes to another engineer. The ones that do leave voicemail? You\u2019ve got 30 of them by 5pm and no idea which ones are genuine emergencies.',
      'Summer\u2019s the same story \u2014 air con failures, system installs, commercial units on the blink. You don\u2019t have a call volume problem. You have a \u2018can\u2019t-answer-while-working\u2019 problem.',
    ],

    beforeAfter: {
      without: 'Customer calls \u2014 no heating, three kids in the house. Voicemail. They call another engineer. You find the missed call at 6pm. Result: Lost an emergency callout and a potential long-term maintenance customer.',
      with: 'Customer calls \u2014 no heating, three kids. AI answers. Confirms no heating across the property, captures boiler make and model, error code if visible, and books emergency slot for today. Result: Emergency booked with full system context. Customer thinks you\u2019ve got the best phone service in the area.',
    },

    howItWorks: [
      'Share your website. We pull your service range \u2014 gas boilers, heat pumps, air con, underfloor, commercial HVAC \u2014 plus your coverage and hours.',
      'You define emergency triggers, F-Gas boundaries, commercial vs domestic flows, and which callers need to go to your out-of-hours provider.',
      '30 seconds. Your AI receptionist triages breakdowns, captures system details, and books callouts while you\u2019re on the rooftop.',
    ],

    captures: [
      'Emergency or routine (no heating, no cooling, gas smell, fault code)',
      'Heating or cooling system',
      'Boiler/heat pump/AC make and model',
      'Error code if visible',
      'Property type (domestic, commercial, landlord)',
      'How many units affected (commercial)',
      'Existing maintenance contract',
      'Preferred date/time',
      'Contact details and address',
    ],

    integrations: 'Connects with ServiceTitan, Jobber, Housecall Pro, Tradify, Google Calendar, Outlook, and most CRM tools.',

    alsoPopularWith: ['electricians', 'plumbers'],

    faqs: [
      { question: 'Can it handle both heating and cooling enquiries?', answer: 'Yes. You define your service range \u2014 boilers, heat pumps, air conditioning, underfloor heating, commercial HVAC \u2014 and it screens accordingly.' },
      { question: 'What about F-Gas and refrigerant handling questions?', answer: 'It doesn\u2019t give technical advice. It captures system type, refrigerant concerns, and fault symptoms, then routes the information to you for assessment.' },
      { question: 'We do maintenance contracts \u2014 can it capture renewal enquiries?', answer: 'Yes. It can identify existing contract holders, capture renewal interest from new callers, and flag commercial maintenance opportunities separately from one-off repair calls.' },
      { question: 'What happens when someone calls with no heating in winter?', answer: 'It treats loss of heating as a priority. It captures the property details, system type, and how urgent the situation is, then flags the call to you straight away so genuine breakdowns jump the queue during a cold snap.' },
      { question: 'How much does it cost?', answer: 'Plans from \u00a397/month with 120 call minutes included. Setup from \u00a3249. Additional minutes at £0.18/min. Book a quick call for an exact quote.' },
    ],

    bottomCtaH2: 'Peak Season Is Coming. Make Sure Every Call Gets Answered.',
    bottomCtaSubhead: 'Try the demo. Then imagine it running through the next cold snap while you\u2019re on the tools.',
  },

  accountants: {
    slug: 'accountants',
    name: 'Accountants',
    metaTitle: 'AI Receptionist for Accountants UK | Never Miss a Client',
    metaDescription: 'An AI receptionist for UK accountants \u2014 answers every call, screens enquiries and books consultations 24/7. Certified Retell partner. Hear a live demo.',
    iconName: 'Calculator',
    gridDescription: 'AI phone answering that screens new client enquiries while you\u2019re buried in returns.',

    heroEyebrow: 'AI RECEPTIONIST FOR ACCOUNTANTS',
    heroH1: 'A Business Owner Called Looking for a New Accountant. You Were Doing Someone Else\u2019s Tax Return.',
    heroSubhead: 'That missed call might be a sole trader needing basic bookkeeping. Or it might be a limited company doing \u00a3800K turnover looking to switch accountants. Your AI receptionist finds out before you lift a finger. From \u00a397/month.',

    problemH2: 'You Don\u2019t Get 50 Calls a Day. But the Ones You Get Could Be Worth \u00a350,000.',
    problemParagraphs: [
      'You\u2019re not a call centre. You might get five calls a day outside tax season, maybe fifteen during it. But when a business owner calls looking for a new accountant, that\u2019s not a \u00a3200 tax return \u2014 that\u2019s a \u00a35,000-a-year client who\u2019ll stay for a decade.',
      'Miss that call because you\u2019re in a client meeting? They\u2019ll call the next practice on the list. And they won\u2019t call you back.',
      'Tax season is worse. You\u2019re drowning in Self Assessment deadlines, HMRC queries, and VAT returns. The phone becomes an interruption you can\u2019t afford, but every unanswered call could be the next big client walking straight past your door.',
    ],

    beforeAfter: {
      without: 'Business owner calls about switching accountants. Voicemail. They call two more practices. By the time you call back, they\u2019ve already booked a consultation elsewhere. Result: Lost a potential \u00a350,000 lifetime client.',
      with: 'Business owner calls. AI answers. Screens for business type (sole trader, LTD, partnership), turnover range, current pain points, and services needed. Books a consultation for Thursday. Result: Consultation booked with full business context. You walk in knowing exactly what they need.',
    },

    howItWorks: [
      'Share your website. We pull your services \u2014 tax returns, bookkeeping, VAT, payroll, advisory \u2014 plus your sectors and specialisms.',
      'Define what a good-fit client looks like. Sector filters. Turnover thresholds. NHS vs private. You decide what gets booked in.',
      '30 seconds. Your AI receptionist screens every call, captures business context, and books the consultations that are worth your time.',
    ],

    captures: [
      'New client enquiry or existing client',
      'Business type (sole trader, LTD company, partnership, LLP)',
      'Approximate turnover',
      'Services needed (tax returns, bookkeeping, management accounts, VAT, payroll, advisory)',
      'Current accountant situation (switching, first time, outgrown DIY)',
      'Industry/sector',
      'Urgency (upcoming deadline)',
      'Preferred consultation date/time',
      'Contact details',
    ],

    integrations: 'Works with Xero, QuickBooks, FreeAgent, TaxCalc, Dext, and most practice management tools.',

    alsoPopularWith: ['lawyers', 'therapists'],

    faqs: [
      { question: 'Can it handle calls from existing clients too?', answer: 'Yes. It identifies existing clients and either takes a message, transfers the call, or captures what they need \u2014 depending on your preference. New enquiries get the full screening treatment.' },
      { question: 'What about confidentiality?', answer: 'All calls are encrypted. You control what questions are asked and what information is captured. It doesn\u2019t access your systems or client data \u2014 it just handles the front door.' },
      { question: 'We specialise in specific sectors \u2014 can it filter for that?', answer: 'Absolutely. If you only work with property landlords and construction businesses, it can screen for sector fit and politely decline enquiries outside your specialisation.' },
      { question: 'Can it handle the rush around tax deadlines?', answer: 'Yes. During self-assessment and year-end peaks it answers every call at once, screens new enquiries, and books consultations into your diary, so deadline season no longer means missed calls and lost instructions.' },
      { question: 'How much does it cost?', answer: 'Plans from \u00a397/month with 120 call minutes included. Setup from \u00a3249. Additional minutes at £0.18/min. Book a quick call for an exact quote.' },
    ],

    bottomCtaH2: 'Stop Losing Clients Because You Were Busy Serving Clients',
    bottomCtaSubhead: 'Try the demo. Then imagine it screening your next big instruction while you\u2019re in a meeting.',
  },

  lawyers: {
    slug: 'lawyers',
    name: 'Lawyers & Solicitors',
    metaTitle: 'AI Receptionist for Law Firms UK | Never Miss a Client',
    metaDescription: 'An AI receptionist for UK law firms \u2014 answers every call, screens enquiries and books consultations 24/7. Certified Retell partner. Hear a live demo.',
    iconName: 'Scale',
    gridDescription: 'AI phone answering that screens client enquiries and captures case details while you\u2019re in meetings.',

    heroEyebrow: 'AI RECEPTIONIST FOR LAW FIRMS',
    heroH1: 'Your Next Client Called While You Were With Your Current One',
    heroSubhead: 'Personal injury, conveyancing, family law, commercial disputes \u2014 when someone needs a solicitor, they need one now. Your AI receptionist screens every call, captures the case details, and books consultations so you never lose an instruction because you were doing your job. From \u00a397/month.',

    problemH2: 'They Won\u2019t Leave a Voicemail. They\u2019ll Just Call Another Firm.',
    problemParagraphs: [
      'People calling a law firm aren\u2019t browsing. They\u2019ve got a problem \u2014 a divorce they didn\u2019t see coming, an accident claim, a contract dispute, a house purchase with a tight deadline. They want to speak to someone now.',
      'If they get voicemail, they\u2019re not waiting. They\u2019re calling the next firm on the list. And the cost of that missed call isn\u2019t just the initial instruction \u2014 it\u2019s the ongoing relationship, the referrals, the repeat business.',
      'Your receptionist handles it during office hours. But what about evenings? Weekends? When they\u2019re on lunch or already on a call? That\u2019s when the leakage happens.',
    ],

    beforeAfter: {
      without: 'Potential client calls about a commercial lease dispute at 5:30pm. Office closed. Voicemail. They call a firm with evening availability. Result: Lost a \u00a35,000+ instruction.',
      with: 'Potential client calls at 5:30pm. AI answers. Screens for matter type, urgency, conflict check basics, and preferred consultation time. Books an appointment for tomorrow morning. Result: New instruction captured with full case context. You review the summary before the meeting.',
    },

    howItWorks: [
      'Share your website. We pull your practice areas \u2014 family, conveyancing, personal injury, commercial, wills \u2014 and your fee earners.',
      'Define intake flows per area of law. Conflict check capture. Legal aid vs private. How to handle sensitive callers and out-of-hours enquiries.',
      '30 seconds. Your AI receptionist routes enquiries to the right fee earner\u2019s diary, captures matter context, and books consultations 24/7.',
    ],

    captures: [
      'New enquiry or existing client',
      'Area of law (family, conveyancing, personal injury, commercial, employment, wills & probate, criminal, immigration)',
      'Brief description of the matter',
      'Urgency and any deadlines',
      'Opposing party name (for conflict checking)',
      'How they found the firm',
      'Preferred consultation date/time',
      'Contact details',
    ],

    integrations: 'Works with Clio, Leap, PracticePanther, Smokeball, Google Calendar, Outlook, and most case management tools.',

    alsoPopularWith: ['accountants', 'therapists'],

    faqs: [
      { question: 'Can it handle conflict checking?', answer: 'It captures opposing party details so you can run your conflict check before the consultation. It doesn\u2019t access your case management system or make conflict decisions \u2014 that stays with you.' },
      { question: 'We have multiple fee earners \u2014 can it route to the right person?', answer: 'Yes. Based on the area of law, it can route the booking to the right person\u2019s calendar. Family matters go to your family team, conveyancing to your property team, and so on.' },
      { question: 'What about legal aid vs private client?', answer: 'You can include screening for funding type. It\u2019ll capture whether they\u2019re looking for legal aid, have insurance cover, or are paying privately \u2014 so you know before the consultation.' },
      { question: 'Is it SRA-compliant?', answer: 'It handles call answering only \u2014 it doesn\u2019t give legal advice, doesn\u2019t access client files, and doesn\u2019t make decisions about matters. All data is encrypted. You remain in full control of client relationships and regulatory compliance.' },
      { question: 'How much does it cost?', answer: 'Plans from \u00a397/month with 120 call minutes included. Setup from \u00a3249. Additional minutes at £0.18/min. Book a quick call for an exact quote.' },
    ],

    bottomCtaH2: 'Every Missed Call Is an Instruction That Went to Another Firm',
    bottomCtaSubhead: 'Try the demo. Then imagine it answering after hours while you\u2019re home with the family.',
  },

  'veterinary-practices': {
    slug: 'veterinary-practices',
    name: 'Veterinary Practices',
    metaTitle: 'AI Receptionist for Vets UK | Never Miss a Call',
    metaDescription: 'An AI receptionist for UK vets \u2014 answers every call, triages urgent cases and books appointments 24/7. Certified Retell partner. Hear a live demo.',
    iconName: 'Stethoscope',
    gridDescription: 'AI phone answering that triages emergencies and books appointments while your team focuses on patients.',

    heroEyebrow: 'AI RECEPTIONIST FOR VETS',
    heroH1: 'Your Receptionist Is Dealing With a Distressed Owner. The Phone\u2019s Ringing. Again.',
    heroSubhead: 'Vet reception is one of the hardest front-desk jobs going. Your team is juggling walk-ins, dispensing meds, calming anxious owners, and trying to answer a phone that never stops. Your AI receptionist takes the calls they can\u2019t get to \u2014 triaging emergencies, booking routine appointments, and capturing the details your team needs. From \u00a397/month.',

    problemH2: 'Your Reception Team Is Brilliant. They\u2019re Also Overwhelmed.',
    problemParagraphs: [
      'Front-of-house in a vet practice is relentless. Phones ringing constantly. An owner in tears at the desk. A dog that won\u2019t stop barking. Repeat prescriptions to process. And a queue of people who all think their appointment should be next.',
      'Your receptionists are doing five jobs at once, and the phone is the thing that suffers most. Calls ring out. Owners get frustrated. Some go to another practice. The ones who do get through face hold times that make them anxious \u2014 which is the last thing they need when their pet is unwell.',
      'You\u2019ve probably thought about hiring another receptionist. But good luck finding one who can handle the emotional intensity of veterinary reception.',
    ],

    beforeAfter: {
      without: 'Owner calls \u2014 dog hasn\u2019t eaten for two days and is lethargic. Phone rings out. They call another practice. Result: Lost a client and a potentially urgent case.',
      with: 'Owner calls. AI answers. Screens for urgency \u2014 captures symptoms (not eating, lethargic, duration), pet species and breed, age, existing patient status. Flags as potentially urgent and books a same-day appointment. Result: Urgent case triaged and booked. Your vet sees the summary before the appointment.',
    },

    howItWorks: [
      'Share your website. We pull your services, species treated, and hours. Existing client database rules are yours to define.',
      'Triage criteria. Urgency flags. OOH routing. Repeat prescription handling. You set the clinical rules, the AI follows them.',
      '30 seconds. Your AI receptionist answers overflow calls, triages emergencies, and books routine appointments while your team looks after the patients in front of them.',
    ],

    captures: [
      'Emergency or routine',
      'Pet species, breed, age, and name',
      'Existing patient or new registration',
      'Symptoms and duration',
      'Vaccination/neutering/routine check enquiry',
      'Prescription refill request',
      'Owner name and contact details',
      'Preferred appointment time',
      'Whether it\u2019s an insurance claim case',
    ],

    integrations: 'Works alongside your practice management system. Call summaries and booking details feed into your existing workflow. We can discuss specific PMS integrations for your practice.',

    alsoPopularWith: ['dentists', 'therapists'],

    faqs: [
      { question: 'Can it tell the difference between a genuine emergency and a worried owner?', answer: 'You define the triage criteria \u2014 symptoms that need same-day attention vs ones that can wait. It screens based on your clinical team\u2019s guidelines, not its own judgment.' },
      { question: 'What about out-of-hours calls?', answer: 'It handles them however you want. Route genuine emergencies to your OOH provider\u2019s number. Take messages for everything else. Or screen and book the first available morning appointment.' },
      { question: 'We use a practice management system \u2014 does it integrate?', answer: 'It works alongside your PMS rather than replacing it. Call summaries and booking details feed into your existing workflow. We can discuss specific PMS integrations for your practice.' },
      { question: 'Our clients are often distressed \u2014 is the AI sensitive to that?', answer: 'The voice is calm, patient, and reassuring. It doesn\u2019t rush callers. It acknowledges concern and gathers information at the caller\u2019s pace. It won\u2019t replace human empathy, but it won\u2019t make things worse either.' },
      { question: 'How much does it cost?', answer: 'Plans from \u00a397/month with 120 call minutes included. Setup from \u00a3249. Additional minutes at £0.18/min. Book a quick call for an exact quote.' },
    ],

    bottomCtaH2: 'Your Team Shouldn\u2019t Have to Choose Between the Phone and the Patient in Front of Them',
    bottomCtaSubhead: 'Try the demo. Then imagine it handling the overflow while your reception focuses on the practice.',
  },

  dentists: {
    slug: 'dentists',
    name: 'Dentists',
    metaTitle: 'AI Receptionist for Dentists UK | Fill Every Appointment',
    metaDescription: 'An AI receptionist for UK dentists \u2014 answers every call and fills appointments 24/7, even out of hours. Certified Retell partner. Hear a live demo.',
    iconName: 'Smile',
    gridDescription: 'AI phone answering that books appointments and triages dental emergencies while your team treats patients.',

    heroEyebrow: 'AI RECEPTIONIST FOR DENTISTS',
    heroH1: 'The Phone Rang 40 Times Today. Your Receptionist Answered 25.',
    heroSubhead: 'Dental reception desks are chaos. Check-ins, payments, nervous patients, treatment plan questions \u2014 and a phone that won\u2019t stop ringing. Your AI receptionist handles the overflow, booking appointments and screening emergencies so your front desk can focus on the people actually in the practice. From \u00a397/month.',

    problemH2: 'You\u2019re Not Losing Patients Because of Your Dentistry. You\u2019re Losing Them Because Nobody Answered the Phone.',
    problemParagraphs: [
      'Most dental practices lose 30-40% of inbound calls during busy periods. The receptionist is checking someone in, processing a payment, or explaining a treatment plan \u2014 and the phone rings out.',
      'That missed call might be a new patient enquiry worth years of check-ups, hygiene appointments, and cosmetic work. Or it might be an emergency \u2014 a cracked tooth, severe pain, an avulsed tooth that needs immediate attention.',
      'Either way, they\u2019re calling another practice. And they\u2019re probably not calling you back.',
    ],

    beforeAfter: {
      without: 'New patient calls to register and book a check-up. Hold music for two minutes, then voicemail. They Google another practice. Result: Lost a patient worth years of recurring appointments.',
      with: 'New patient calls. AI answers immediately. Captures whether they\u2019re NHS or private, any specific concerns, preferred appointment day, and contact details. Books a new patient appointment for next Tuesday. Result: New patient registered and booked. Reception sees the details when they\u2019re ready.',
    },

    howItWorks: [
      'Share your website. We pull your services \u2014 NHS, private, cosmetic, orthodontic, hygiene \u2014 plus your practitioners and availability.',
      'Emergency criteria. NHS vs private screening. Practitioner routing. Cancellation backfill rules. You set them, the AI follows.',
      '30 seconds. Your AI receptionist handles overflow, books new patients, and triages dental emergencies so your front desk can focus on chair-side care.',
    ],

    captures: [
      'Emergency or routine',
      'New patient or existing',
      'NHS or private',
      'Reason for call (check-up, hygiene, toothache, cosmetic, orthodontic enquiry)',
      'Symptoms and urgency (if emergency)',
      'Preferred appointment time',
      'Last dental visit',
      'Contact details',
    ],

    integrations: 'Works with Dentally, Software of Excellence, Exact, Google Calendar, Outlook, and most dental practice management tools.',

    alsoPopularWith: ['veterinary-practices', 'therapists'],

    faqs: [
      { question: 'Can it handle NHS vs private patient screening?', answer: 'Yes. It asks whether they\u2019re looking for NHS or private treatment and screens accordingly. If you\u2019re not accepting NHS patients currently, it can let them know politely.' },
      { question: 'What about nervous patients calling to enquire?', answer: 'The AI is patient and reassuring. It doesn\u2019t rush the conversation. For callers who mention dental anxiety, it can highlight any nervous patient services you offer.' },
      { question: 'We have multiple practitioners \u2014 can it book into specific diaries?', answer: 'Yes. Hygiene appointments go to the hygienist\u2019s diary. Emergency slots go to the duty dentist. New patient check-ups go wherever you want them.' },
      { question: 'Can it deal with out-of-hours dental emergencies?', answer: 'Yes. Outside opening hours it captures the caller\u2019s details and symptoms, explains your emergency policy, and flags genuine emergencies so you can follow up first thing rather than losing them to another practice overnight.' },
      { question: 'How much does it cost?', answer: 'Plans from \u00a397/month with 120 call minutes included. Setup from \u00a3249. Additional minutes at £0.18/min. Book a quick call for an exact quote.' },
    ],

    bottomCtaH2: 'Every Missed Call Is a Patient Who Went Somewhere Else',
    bottomCtaSubhead: 'Try the demo. Then imagine it answering every overflow call while your reception handles the chair.',
  },

  therapists: {
    slug: 'therapists',
    name: 'Therapists',
    metaTitle: 'AI Receptionist for Therapists UK | 24/7 Booking',
    metaDescription: 'An AI receptionist for therapy practices \u2014 answers calls, books sessions and handles enquiries 24/7, so you never interrupt a session. Book a free demo.',
    iconName: 'Brain',
    gridDescription: 'AI phone answering that handles enquiries and books consultations while you\u2019re in session.',

    heroEyebrow: 'AI RECEPTIONIST FOR THERAPISTS',
    heroH1: 'You Can\u2019t Answer the Phone When You\u2019re With a Client. But They Can\u2019t Wait Until You\u2019re Free.',
    heroSubhead: 'Someone reaches out for therapy when they\u2019re ready \u2014 not when it\u2019s convenient for your diary. Your AI receptionist answers that call with warmth and care, captures what they need, and books an initial consultation. No missed opportunities. No pressure. From \u00a397/month.',

    problemH2: 'The Hardest Part of Getting Therapy Is Making That First Call. Don\u2019t Let It Go to Voicemail.',
    problemParagraphs: [
      'For most people, calling a therapist is one of the hardest phone calls they\u2019ll ever make. They\u2019ve thought about it for weeks, maybe months. They\u2019ve finally picked up the phone.',
      'And they get voicemail.',
      'Most won\u2019t leave a message. Some won\u2019t call back. The moment passes. You\u2019ve lost a client \u2014 not because you didn\u2019t want to help, but because you were doing exactly what you should be doing: helping someone else.',
      'Between sessions, during sessions, at the end of a long day when you\u2019ve got nothing left \u2014 you can\u2019t always answer. But that call still matters.',
    ],

    beforeAfter: {
      without: 'Someone calls during a session. Voicemail. They don\u2019t leave a message. They don\u2019t call back. Result: Someone who needed help didn\u2019t get it. You never even knew they called.',
      with: 'Someone calls during a session. AI answers warmly. Captures what kind of support they\u2019re looking for, any preferences (in-person vs online, specific modalities), and books an initial consultation for next week. Result: Initial consultation booked. They feel heard from the first interaction.',
    },

    howItWorks: [
      'Share your website. We pull your modalities, specialisms, and availability. You tell us your boundaries.',
      'Crisis protocol. Gender preferences. In-person vs online. Funding type. You set the tone, the AI handles the enquiry with care.',
      '30 seconds. Your AI receptionist answers every call warmly, captures what callers need, and books initial consultations on your schedule.',
    ],

    captures: [
      'New enquiry or existing client',
      'Type of support sought (individual, couples, family, child/adolescent)',
      'Presenting concern (general terms \u2014 anxiety, depression, relationship, bereavement, trauma, work stress)',
      'Preference for in-person or online sessions',
      'Any therapist gender preference',
      'Insurance or self-funding',
      'Preferred day/time for initial consultation',
      'Contact details',
      'How they found you',
    ],

    integrations: 'Works with Jane App, Cliniko, WriteUpp, Google Calendar, Outlook, and most practice management tools.',

    alsoPopularWith: ['veterinary-practices', 'dentists'],

    faqs: [
      { question: 'This is sensitive \u2014 will the AI handle it appropriately?', answer: 'The tone is warm, calm, and non-judgmental. It doesn\u2019t probe for clinical detail. It captures broad presenting concerns in the caller\u2019s own words and books a consultation. It\u2019s a front door, not a therapy session.' },
      { question: 'What if someone calls in crisis?', answer: 'You define the protocol. For callers expressing immediate distress, it can provide your specified crisis resources (Samaritans on 116 123, Crisis Text Line \u2014 text SHOUT to 85258) and flag the call for your urgent attention.' },
      { question: 'I work from a home office \u2014 I don\u2019t want to share my address until I\u2019ve screened the client.', answer: 'It doesn\u2019t share your location. It books the consultation and lets you decide what information to share after you\u2019ve reviewed the enquiry.' },
      { question: 'Can it handle multiple therapists in a group practice?', answer: 'Yes. It can route based on specialisation \u2014 CBT, EMDR, couples, children \u2014 and book into the right therapist\u2019s calendar.' },
      { question: 'How much does it cost?', answer: 'Plans from \u00a397/month with 120 call minutes included. Setup from \u00a3249. Additional minutes at £0.18/min. Book a quick call for an exact quote.' },
    ],

    bottomCtaH2: 'Make Sure the Hardest Call They Ever Make Gets Answered',
    bottomCtaSubhead: 'Try the demo. Then imagine it answering with warmth while you\u2019re with a client.',
  },
}

export function getIndustryBySlug(slug: string): IndustryData | undefined {
  return industries[slug]
}

export function getAllIndustries(): IndustryData[] {
  return Object.values(industries)
}

const SITE = 'https://www.antekautomation.com'

export function getIndustryHeadData(slug: string) {
  const industry = industries[slug]
  if (!industry) throw new Error(`Unknown industry: ${slug}`)

  const canonical = `${SITE}/ai-receptionist/${industry.slug}`

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'AI Receptionist', item: `${SITE}/ai-receptionist` },
      { '@type': 'ListItem', position: 3, name: industry.name, item: canonical },
    ],
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${canonical}#service`,
    name: `AI Receptionist for ${industry.name}`,
    description: industry.metaDescription,
    provider: { '@id': `${SITE}/#organization` },
    serviceType: 'AI Phone Answering Service',
    areaServed: { '@type': 'Country', name: 'United Kingdom' },
    audience: { '@type': 'BusinessAudience', name: industry.name },
    url: canonical,
    offers: {
      '@type': 'Offer',
      price: '97',
      priceCurrency: 'GBP',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '97',
        priceCurrency: 'GBP',
        unitText: 'month',
      },
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: industry.faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }

  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    canonical,
    breadcrumbSchema,
    serviceSchema,
    faqSchema,
  }
}
