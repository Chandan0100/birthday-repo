export interface BrandContent {
  name: string;
  subtext: string;
  badge: string;
  teamTagline: string;
  madeWith: string;
  forPerson: string;
}

export interface BirthdayHeroContent {
  badge: string;
  greetingPrefix: string;
  greetingHighlight: string;
  name: string;
  photoUrl?: string;
  subtext: string;
  playfulSubtext: string;
  requirementsTitle: string;
  requirements: string[];
  requirementOne: string;
  requirementStatus: string;
  buttonText: string;
  cardNote: string;
}

export interface StoryContent {
  badge: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
  quote: string;
  photoSection?: {
    title: string;
    subtitle: string;
    photoUrl?: string;
    annotations: string[];
  };
  ageGapJoke: {
    title: string;
    ageLabel: string;
    ageValue: string;
    archLabel: string;
    archValue: string;
    punchline: string;
  };
  buttonText: string;
}

export interface LegacyPillar {
  id: string;
  title: string;
  tag: string;
  quote: string;
  caption?: string;
  description: string;
  iconName: string;
}

export interface LegacyContent {
  heading: string;
  subheading: string;
  badge: string;
  leadQuote: string;
  pillars: LegacyPillar[];
  seriousMoment: {
    heading: string;
    text1: string;
    punchline: string;
    text2: string;
    closing: string;
  };
  transitionLead: string;
  transitionPause1: string;
  transitionPunchline: string;
  transitionNote: string;
  buttonText: string;
}

export interface TeamMemberMessage {
  id: string;
  name: string;
  role: string;
  avatarBg?: string;
  message: string;
  tags?: string[];
}

export interface TeamMessagesContent {
  heading: string;
  subheading: string;
  badge: string;
  chandanLetter: {
    salutation: string;
    paragraphs: string[];
    author: string;
    role: string;
  };
  members: TeamMemberMessage[];
  buttonText: string;
}

export interface StatusMetric {
  label: string;
  value: string;
  percentage: number;
  highlight?: boolean;
}

export interface StatusIndicator {
  label: string;
  status: string;
  badgeType?: 'success' | 'warning' | 'info' | 'neutral';
}

export interface CtoStatusContent {
  heading: string;
  subheading: string;
  badge: string;
  panelTitle: string;
  healthStatus: string;
  systemQuotes: {
    line1: string;
    line2: string;
  };
  metrics: StatusMetric[];
  statusIndicators: StatusIndicator[];
  easterEgg: {
    event: string;
    aggregate: string;
    command: string;
    domain: string;
    status: string;
    checks: string[];
  };
  eventStorming: {
    title: string;
    steps: string[];
    consistency: string;
  };
  buttonText: string;
}

export interface FinalMessageContent {
  badge: string;
  heading: string;
  photoUrl?: string;
  paragraphs: string[];
  closingLesson: string;
  birthdayWish: string;
  signoff: string;
  buttonText: string;
}

export interface CelebrationModeItem {
  id: string;
  label: string;
  description: string;
  iconName: string;
}

export interface CelebrationContent {
  heading: string;
  subheading: string;
  modesLabel: string;
  replayPrompt: string;
  restartButtonText: string;
  modes: CelebrationModeItem[];
}

export interface ExperienceContent {
  brand: BrandContent;
  hero: BirthdayHeroContent;
  story: StoryContent;
  legacy: LegacyContent;
  teamMessages: TeamMessagesContent;
  ctoStatus: CtoStatusContent;
  finalMessage: FinalMessageContent;
  celebration: CelebrationContent;
}
