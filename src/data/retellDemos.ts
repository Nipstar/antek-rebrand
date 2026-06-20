// Shareable Retell AI demo "orbs" — each is a public share URL from Retell.
// To add an industry: create the orb in Retell, hit Share, paste the URL below.
// Note: these share URLs embed a public token by design (they're meant to be shared).
// If you regenerate/revoke a token in Retell, update the matching `orbUrl` here.

export interface RetellDemo {
  /** stable key used for filtering + React keys */
  industry: string;
  /** card title */
  label: string;
  /** one-line card description */
  blurb: string;
  /** single letter for the brand Icon tile */
  icon: string;
  /** Retell orb share URL */
  orbUrl: string;
}

export const retellDemos: RetellDemo[] = [
  {
    industry: 'heating',
    label: 'Plumbing & Heating',
    blurb: 'Hear the AI take a boiler or leak call — book the job, capture the details, never miss a lead.',
    icon: 'P',
    orbUrl:
      'https://agent.retellai.com/orb/agent_e4686e0176e2bdd1eec7c542e6?token=2fbaca22cc6c6090ecff0e2227409dd1',
  },
  {
    industry: 'hvac',
    label: 'HVAC',
    blurb: 'A cooling callout in a heatwave — the AI books it, triages the urgent ones and logs the rest.',
    icon: 'A',
    orbUrl:
      'https://agent.retellai.com/orb/agent_80138964a5f2ad2ab8ef39ae32?token=69145f60732b92a8826b623b82ac4d4b',
  },
  {
    industry: 'electrical',
    label: 'Electricians',
    blurb: 'A fault call mid-job — the AI captures the address and the problem and books the visit.',
    icon: 'E',
    orbUrl:
      'https://agent.retellai.com/orb/agent_d09b5b92385dd243758ac4ffe1?token=b2499396c91cdb3e491bfcd7741768fd',
  },
  {
    industry: 'legal',
    label: 'Accident & Injury',
    blurb: 'An after-hours personal-injury enquiry — the AI runs the intake and captures the claim while the office is shut.',
    icon: 'L',
    orbUrl:
      'https://agent.retellai.com/orb/agent_bfd31fb0d2e28f7cb1d66c2edb?token=e8eb5c7f2cc77f8305f6cbf7158b1374',
  },
  {
    industry: 'restaurant',
    label: 'Restaurant & Hospitality',
    blurb: 'A booking between services — the AI takes the reservation and answers the regulars without anyone leaving the floor.',
    icon: 'R',
    orbUrl:
      'https://agent.retellai.com/orb/agent_818f1d6b2b50a40d422f6a9484?token=5d7f10dd0451b4ff3de04a8bb3eff543',
  },
  {
    industry: 'lawyer',
    label: 'Solicitors',
    blurb: 'A new client calling for advice — the AI screens the matter, captures the details and books the consultation.',
    icon: 'S',
    orbUrl:
      'https://agent.retellai.com/orb/agent_dccd0f35065650365bc6892527?token=7eea293160c3b439b8c982721fb3d3a8',
  },
  // Add more orbs here as you create them in Retell (Share → paste URL).
];

// The curated set shown on every location page (the voice service page shows all six).
// Trim or reorder these industry keys to change what features on the town pages.
export const LOCATION_DEMO_INDUSTRIES: string[] = ['heating', 'hvac', 'electrical', 'lawyer', 'restaurant'];
