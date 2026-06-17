export const CONTACT_EMAIL = 'hello@rhine-media.com';
export const TELEGRAM_URL = 'https://t.me/rhinemedia';
export const TELEGRAM_HANDLE = '@rhinemedia';

export interface Kpi {
  value: string;
  label: string;
}

export const heroKpis: Kpi[] = [
  { value: '$12M+', label: 'Monthly Ad Spend' },
  { value: '340%', label: 'Average Campaign ROI' },
  { value: '8+', label: 'Traffic Channels' },
  { value: '60+', label: 'GEOs Worldwide' },
];

export interface Stat {
  num: string;
  label: string;
  sub: string;
}

export const stats: Stat[] = [
  { num: '4.2B+', label: 'Ad Impressions / Month', sub: 'Across all traffic sources' },
  { num: '340%', label: 'Average ROI', sub: 'Verified by partners' },
  { num: '7', label: 'Verticals Mastered', sub: 'Dating, Nutra, Gambling & more' },
  { num: '60+', label: 'Global GEOs', sub: 'Tier-1 & emerging markets' },
];

export interface Vertical {
  emoji: string;
  name: string;
  desc: string;
  pill: string;
}

export const verticals: Vertical[] = [
  { emoji: '💘', name: 'Dating', desc: 'Mainstream & adult dating campaigns. SOI, DOI and trial offers across tier-1 GEOs with proven funnels.', pill: 'High Volume' },
  { emoji: '💊', name: 'Nutra', desc: 'Weight loss, supplements, skincare. Native & push traffic specialization with compliant creatives.', pill: 'Premium GEOs' },
  { emoji: '🎰', name: 'Gambling', desc: 'Online casino, sports betting, poker. FTD-focused funnels with high player LTV and retention.', pill: 'Top ROI' },
  { emoji: '🔞', name: 'Adult', desc: 'Adult content & services. Compliant campaigns via premium adult traffic networks at scale.', pill: 'Specialized' },
  { emoji: '🎁', name: 'Sweepstakes', desc: 'CC-submit & SOI sweeps. Push, pop and display traffic with high conversion rates globally.', pill: 'Mass Scale' },
  { emoji: '₿', name: 'Crypto Offers', desc: 'Crypto trading platforms, wallets and exchange offers. FTD & CPA models in regulated GEOs.', pill: 'Emerging' },
  { emoji: '📱', name: 'Mainstream', desc: 'App installs, e-commerce, utilities. Google, Meta and TikTok performance campaigns at scale.', pill: 'Versatile' },
  { emoji: '🎮', name: 'iGaming', desc: 'Fantasy sports, esports betting and skill-based gaming platforms. Fast-growing vertical expertise.', pill: 'Fast Growth' },
];

export interface TrafficSource {
  ico: string;
  name: string;
  sub: string;
}

export const trafficSources: TrafficSource[] = [
  { ico: '🚀', name: 'PropellerAds', sub: 'Push / Pop / OnClick' },
  { ico: '🔍', name: 'Google Ads', sub: 'Search / Display / YouTube' },
  { ico: '🍎', name: 'Apple Search Ads', sub: 'iOS App Install' },
  { ico: '📘', name: 'Meta Ads', sub: 'Facebook / Instagram' },
  { ico: '🎵', name: 'TikTok Ads', sub: 'In-Feed / TopView / Spark' },
  { ico: '📰', name: 'Native Ads', sub: 'Taboola / Outbrain' },
  { ico: '🔔', name: 'Push Notifications', sub: 'Web & In-App Push' },
  { ico: '💥', name: 'Pop Traffic', sub: 'Popunder / Interstitial' },
];

export interface Partner {
  ico: string;
  name: string;
}

export const partners: Partner[] = [
  { ico: '🌐', name: 'Ads.com' },
  { ico: '⚡', name: 'Tonic' },
  { ico: '🔭', name: 'Visymo' },
  { ico: '💼', name: 'ClickDealer' },
  { ico: '🏅', name: 'VortexHub' },
  { ico: '🎯', name: 'AdVance Pro' },
  { ico: '💎', name: 'PeakNet CPA' },
  { ico: '🔗', name: 'LynkAffiliates' },
  { ico: '🚀', name: 'FluxMedia' },
  { ico: '🌟', name: 'NorthStar Network' },
  { ico: '📊', name: 'Affiliate Networks' },
  { ico: '🤝', name: 'CPA Networks' },
];

export interface CheckItem {
  title: string;
  body: string;
}

export const checkItems: CheckItem[] = [
  { title: 'Full Funnel Optimization', body: 'From creative A/B testing to post-click landing page optimization. Every touchpoint tracked and improved continuously.' },
  { title: 'Direct Publisher Relationships', body: 'We maintain direct deals with top publishers and ad networks — cutting costs and boosting campaign performance.' },
  { title: 'Real-Time Reporting Dashboards', body: 'Live dashboards with full transparency on spend, impressions, conversions and revenue attribution — 24/7.' },
  { title: 'Dedicated Account Manager', body: 'Every partner gets a dedicated team member. No ticket queues, no delays — direct Telegram/Skype communication.' },
];

export interface FeatureCard {
  ico: string;
  title: string;
  body: string;
}

export const featureCards: FeatureCard[] = [
  { ico: '📈', title: 'Data-Driven Buying', body: 'Bidding strategies informed by real conversion data. No guesswork — pure performance logic at scale.' },
  { ico: '🛡️', title: 'Brand-Safe Traffic', body: 'Custom placement lists and negative keyword exclusions to protect your brand at all times.' },
  { ico: '🌍', title: 'Global GEO Coverage', body: 'Tier-1, LATAM, APAC and MENA — we have the infrastructure to scale to any region instantly.' },
  { ico: '⚡', title: '48h Campaign Launch', body: 'From brief to live in under 48 hours. Streamlined onboarding means you never miss a traffic window.' },
];

export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  {
    q: 'What verticals does Rhine Media specialise in?',
    a: 'We specialise in Dating, Nutra, Gambling, iGaming, Sweepstakes, Adult, Crypto Offers and Mainstream verticals. Our team has deep domain expertise in each of these niches and maintains direct relationships with top publishers and affiliate networks across all major GEOs.',
  },
  {
    q: 'What is the minimum monthly budget to work with you?',
    a: 'We typically work with partners investing a minimum of $5,000/month in media spend. For certain verticals or exclusive deal structures, higher minimums may apply. Contact us to discuss your specific situation — we\'re flexible for the right partnerships.',
  },
  {
    q: 'How quickly can you launch a campaign?',
    a: 'Once we have all required materials (creatives, landing pages, offer details, tracking setup), we can typically launch campaigns within 24–48 hours. Our streamlined onboarding process ensures you\'re never waiting long to get traffic flowing.',
  },
  {
    q: 'Do you work on a CPA, CPL or revenue share basis?',
    a: 'We work across multiple pricing models including managed spend (flat fee + performance bonus), CPA, CPL, RevShare and hybrid structures. The right model depends on your vertical, volume and offer type. We\'ll recommend the most suitable approach during our initial consultation.',
  },
  {
    q: 'Which GEOs do you cover?',
    a: 'We have active campaigns running in 60+ GEOs worldwide, including all Tier-1 markets (US, UK, DE, AU, CA, FR), LATAM (BR, MX, CO), APAC (IN, PH, TH, JP), and MENA (AE, SA, EG). If you need a specific GEO, let us know and we\'ll confirm our capabilities.',
  },
  {
    q: 'What reporting and tracking do you provide?',
    a: 'All clients receive access to real-time performance dashboards with full transparency on impressions, clicks, conversions, spend and revenue. We integrate with all major tracking platforms including Voluum, Binom, RedTrack, and custom S2S postback setups. Weekly summary reports are provided as standard.',
  },
];
