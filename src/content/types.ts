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
  subtext: string;
  buttonText: string;
  cardNote: string;
}

export interface StoryContent {
  badge: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
  quote: string;
  buttonText: string;
}

export interface LegacyPillar {
  id: string;
  title: string;
  tag: string;
  quote: string;
  description: string;
  iconName: string;
}

export interface LegacyContent {
  heading: string;
  subheading: string;
  badge: string;
  leadQuote: string;
  pillars: LegacyPillar[];
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
  value: number;
  highlight?: boolean;
}

export interface CtoStatusContent {
  heading: string;
  subheading: string;
  badge: string;
  panelTitle: string;
  healthStatus: string;
  uptime: string;
  systemStatusNote: string;
  easterEgg: {
    event: string;
    aggregate: string;
    command: string;
    status: string;
    checks: string[];
  };
  metrics: StatusMetric[];
  buttonText: string;
}

export interface FinalMessageContent {
  badge: string;
  heading: string;
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
