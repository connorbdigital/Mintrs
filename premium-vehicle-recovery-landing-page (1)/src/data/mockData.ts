export interface ServiceItem {
  id: string;
  title: string;
  category: 'commercial' | 'domestic' | 'both';
  badge: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  iconName: string;
  highlight?: boolean;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'emergency-breakdown',
    title: '24/7 Emergency Breakdown Recovery',
    category: 'both',
    badge: 'Immediate Dispatch',
    description: 'Rapid response roadside and motorway recovery for broken-down cars, vans, 4x4s and light commercial vehicles across Whalley, Clitheroe, Lancashire and nationwide.',
    features: [
      'Average 30-45 minute response time in North West',
      'Direct contact with your recovery driver on duty',
      'Damage-free flatbed loading & soft nylon wheel strapping',
      'Safe transport for driver and up to 4 passengers',
    ],
    specs: [
      { label: 'Availability', value: '24/7/365' },
      { label: 'Coverage', value: 'North West & UK-Wide' },
      { label: 'Transit Insurance', value: '£5,000,000' },
    ],
    iconName: 'AlertTriangle',
    highlight: true,
  },
  {
    id: 'commercial-fleet',
    title: 'Commercial Fleet & Courier Priority',
    category: 'commercial',
    badge: 'B2B Priority SLA',
    description: 'Dedicated vehicle recovery and logistics support for delivery couriers, tradespeople, corporate fleets, and dealership networks. Minimize vehicle downtime and maintain delivery promises.',
    features: [
      'Guaranteed rapid SLA response times',
      '3.5t to 7.5t flatbed and spec-lift capacity',
      'Credit account facilities & automated VAT invoicing',
      'Depot-to-depot or direct garage recovery routing',
    ],
    specs: [
      { label: 'Max Payload', value: 'Up to 5.5 Tonnes' },
      { label: 'Account Terms', value: '30-Day Invoicing' },
      { label: 'Fleet Types', value: 'Vans, LCVs, Luton, Tippers' },
    ],
    iconName: 'Truck',
    highlight: true,
  },
  {
    id: 'prestige-supercar',
    title: 'Prestige, EV & Supercar Transport',
    category: 'domestic',
    badge: 'Ultra-Low Approach',
    description: 'Specialist low-approach hydraulic tilt-and-slide recovery designed specifically for supercars, low-clearance sports cars, classic vehicles, and high-voltage Electric Vehicles (EVs).',
    features: [
      'Ultra-shallow 4-degree approach angle (Zero bumper scuffing)',
      'Certified high-voltage EV recovery protocols (Tesla, Porsche, BMW)',
      'Fully enclosed winch recovery with non-marking over-wheel straps',
      'Specialist dealer delivery & classic show transport',
    ],
    specs: [
      { label: 'Approach Angle', value: 'Ultra-Low 4°' },
      { label: 'EV Certified', value: 'High Voltage Safe' },
      { label: 'Strapping', value: 'Over-Wheel Soft Chocks' },
    ],
    iconName: 'ShieldCheck',
  },
  {
    id: 'accident-recovery',
    title: 'Accident Clearance & Off-Road Winching',
    category: 'both',
    badge: 'Heavy Winch Unit',
    description: 'Professional accident recovery, collision clearance, and heavy-winch extraction from ditches, mud, embankments, and rural Ribble Valley moors.',
    features: [
      'Heavy-duty hydraulic winches for difficult extractions',
      'Scene safety management with high-intensity warning amber lightbars',
      'Direct liaison with insurance providers and repair body shops',
      'Debris clearing and hazardous fluid containment',
    ],
    specs: [
      { label: 'Winch Pull', value: '12,000 lbs Hydraulic' },
      { label: 'Terrain', value: 'Mud, Snow, Ditches, Slopes' },
      { label: 'Compliance', value: 'PAS 43 Verified' },
    ],
    iconName: 'Anchor',
  },
  {
    id: 'nationwide-transport',
    title: 'Nationwide Vehicle Transport & Relocation',
    category: 'both',
    badge: 'All UK Destinations',
    description: 'Scheduled and expedited vehicle transport across England, Scotland, Wales and Northern Ireland. Trusted by dealerships, online buyers, auction winners, and private collectors.',
    features: [
      'Door-to-door GPS tracked vehicle transport',
      'Auction collection (BCA, Copart, Synetiq, Manheim)',
      'Pre-transport visual condition appraisal & photo reports',
      'Flexible same-day or planned scheduled delivery slots',
    ],
    specs: [
      { label: 'Tracking', value: 'Live Satellite GPS' },
      { label: 'Routes', value: 'All UK Postcodes' },
      { label: 'Condition Report', value: 'Digital Inspection' },
    ],
    iconName: 'Compass',
  },
  {
    id: 'roadside-repairs',
    title: 'Rapid Roadside Assistance & Battery Boost',
    category: 'domestic',
    badge: 'On-The-Spot Fix',
    description: 'Mobile diagnostic triage, heavy-duty 12V/24V jump-starts, wheel changes, emergency fuel delivery, and lockout assistance aimed at getting you moving without a tow whenever safe.',
    features: [
      'High-output 12V/24V battery boosters for diesel & hybrid models',
      'Commercial-grade pneumatic wheel change jacks and air supplies',
      'Emergency diesel / unleaded fuel delivery on motorway shoulders',
      'Electronic fault code reading and preliminary clearance',
    ],
    specs: [
      { label: 'Fix-on-Scene Rate', value: 'High Success' },
      { label: 'Boost Voltage', value: '12V & 24V Systems' },
      { label: 'Response Target', value: '< 30 Minutes Local' },
    ],
    iconName: 'Zap',
  },
];

export const coverageAreas = [
  {
    hub: 'Whalley & Clitheroe Core',
    eta: '15 - 25 mins',
    tag: 'Immediate Local Base',
    towns: ['Whalley', 'Clitheroe', 'Billington', 'Barrow', 'Langho', 'Sabden', 'Chatburn', 'Waddington', 'Hurst Green', 'Wiswell'],
    description: 'Our primary local dispatch zone. Emergency trucks stationed near the A59 corridor for fastest possible Ribble Valley arrival.',
  },
  {
    hub: 'East Lancashire & Ribble Valley',
    eta: '25 - 35 mins',
    tag: 'Regional Rapid Unit',
    towns: ['Blackburn', 'Burnley', 'Accrington', 'Nelson', 'Colne', 'Darwen', 'Great Harwood', 'Rishton', 'Padiham'],
    description: 'Rapid response covering East Lancs towns and connecting rural B-roads, farms and remote properties.',
  },
  {
    hub: 'North West Motorway Network',
    eta: '25 - 35 mins',
    tag: 'Arterial Emergency Unit',
    towns: ['M6 (J28-J34)', 'M65 (J1-J14)', 'M66 / A56', 'M61 Corridor', 'M60 Ring Road', 'A59 Express', 'A666 Ribble'],
    description: 'Dedicated high-visibility rescue units patrolling and responding to dangerous motorway hard shoulders and live lanes.',
  },
  {
    hub: 'Greater North West & Cumbria',
    eta: '35 - 50 mins',
    tag: 'County Wide',
    towns: ['Preston', 'Lancaster', 'Southport', 'Blackpool', 'Bolton', 'Bury', 'Manchester', 'Kendal & South Lakes'],
    description: 'Extensive multi-truck fleet providing continuous coverage across the North West region.',
  },
  {
    hub: 'Nationwide Long-Distance Logistics',
    eta: 'Same-Day / Scheduled',
    tag: 'UK-Wide Coverage',
    towns: ['London & South East', 'Midlands & Birmingham', 'Yorkshire & Leeds', 'North East & Newcastle', 'Scotland & Wales'],
    description: 'Professional long-distance single and multi-car transport with comprehensive goods in transit insurance.',
  },
];

export const testimonialsData = [
  {
    name: 'Marcus Hetherington',
    role: 'Logistics Operations Director, North West Couriers',
    location: 'Blackburn / Whalley Area',
    rating: 5,
    text: 'Mintrs Ltd are our exclusive commercial recovery partner. When our 3.5t delivery vans breakdown during peak delivery windows, Mintrs are on site in under 30 minutes. Their drivers are polite, professional, and treat commercial fleets with top urgency. Invaluable partner.',
    vehicle: 'Mercedes Sprinter Fleet',
    date: '2 days ago',
  },
  {
    name: 'Eleanor Vance',
    role: 'Private Motorist',
    location: 'Clitheroe, Lancashire',
    rating: 5,
    text: 'Broke down in the dark on the A59 near Clitheroe with my two young children in the car. Called the major motor club who quoted 4 hours! Called Mintrs Ltd directly and a lovely driver arrived in exactly 22 minutes. Loaded my car with extreme care and got us home warm and safe.',
    vehicle: 'Volvo XC90',
    date: '1 week ago',
  },
  {
    name: 'Julian Croft',
    role: 'Managing Director, Croft Performance Prestige Cars',
    location: 'Ribble Valley',
    rating: 5,
    text: 'I entrust Mintrs Ltd with 6-figure supercars and classic Porsche models. Their tilt-and-slide flatbed has an ultra-low approach angle, so front splitters never touch the ground. Fully insured, clean modern trucks, impeccable service every single time.',
    vehicle: 'Porsche 911 GT3 & Aston Martin Vantage',
    date: '3 weeks ago',
  },
  {
    name: 'Gareth Pendlebury',
    role: 'Commercial Fleet Driver',
    location: 'M65 Junction 7',
    rating: 5,
    text: 'Catastrophic alternator failure on the M65 hard shoulder on a wet Friday evening. Mintrs arrived faster than the police. Loaded safely in heavy rain and recovered my work van to our depot in Burnley. Honest upfront quote, no surprises.',
    vehicle: 'Ford Transit Custom',
    date: '1 month ago',
  },
];

export const faqData = [
  {
    question: 'How quickly can Mintrs Ltd reach me in Whalley or Clitheroe?',
    answer: 'For emergency breakdowns in Whalley, Clitheroe, and surrounding Ribble Valley villages, our average arrival time is typically 15 to 30 minutes. We have trucks actively stationed across the A59 and East Lancashire corridors ready for immediate rolling dispatch 24/7/365.',
  },
  {
    question: 'Do you handle commercial vans and fleet vehicles?',
    answer: 'Yes! We specialize in commercial vehicle recovery up to 7.5 tonnes, including high-roof Mercedes Sprinters, Luton box vans, curtain-siders, tippers, and trade pickups. We offer corporate 30-day billing accounts and priority SLA response times for North West businesses.',
  },
  {
    question: 'Can you safely recover Electric Vehicles (EVs) and low sports cars?',
    answer: 'Absolutely. We operate modern hydraulic tilt-and-slide flatbed transporters with an ultra-shallow 4-degree approach angle to prevent any undercarriage or bumper scraping. Our operators are trained in EV safety protocols (wheel-skate neutral towing and zero wheel-drag loading) to protect batteries and drivetrain components.',
  },
  {
    question: 'How do your recovery prices work? Are there hidden costs?',
    answer: 'We pride ourselves on 100% transparent pricing with zero surprise add-ons. Our quotes include call-out, recovery hook-up, transport mileage, and passenger carriage in our heated crew cab. You will receive an exact fixed quote before we dispatch.',
  },
  {
    question: 'Do you operate nationwide across the UK?',
    answer: 'Yes! While our primary emergency rapid-response base covers Whalley, Clitheroe, and the North West (M6, M65, M66), we regularly undertake nationwide vehicle relocations, auction transport, and long-distance breakdown transfers across England, Scotland, and Wales.',
  },
  {
    question: 'What insurance cover do you have in place for my vehicle?',
    answer: 'Mintrs Ltd carries comprehensive £5,000,000 Goods In Transit insurance, full motor trade road risk coverage, and £10,000,000 Public Liability insurance. Your vehicle is completely protected from the moment our winch cable engages until safe delivery.',
  },
  {
    question: 'Can I travel inside the recovery truck with my vehicle?',
    answer: 'Yes. Our modern recovery vehicles feature comfortable, climate-controlled crew cabs that can safely seat you and your passengers to take you either home or to a designated repair garage.',
  },
];
