export interface BrandContent {
  name: string;
  subtext: string;
  badge: string;
  madeWith: string;
  forPerson: string;
}

export interface PersonContent {
  name: string;
  role: string;
}

export interface ReleaseCategory {
  title: string;
  type: 'added' | 'improved' | 'issues';
  items: string[];
}

export interface ReleaseContent {
  version: string;
  environment: string;
  initiatedBy: string;
  priority: string;
  tagline: string;
  headline: string;
  headlineHighlight: string;
  description: string;
  status: string;
  nextMilestone: string;
  categories: ReleaseCategory[];
}

export interface DeploymentStep {
  text: string;
  duration: number;
}

export interface DeploymentContent {
  terminalCommand: string;
  pipelineLabel: string;
  steps: DeploymentStep[];
}

export interface LegacyConcept {
  id: string;
  title: string;
  tag: string;
  quote: string;
  iconName: string;
}

export interface LegacyContent {
  heading: string;
  subheading: string;
  badge: string;
  centralTheme: string;
  concepts: LegacyConcept[];
  transitionHeader: string;
  transitionText: string;
  transitionPunchline: string;
  transitionLegacy: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatarBg?: string;
  message: string;
}

export interface TeamMessagesContent {
  heading: string;
  subheading: string;
  badge: string;
  buttonText: string;
  members: TeamMember[];
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
  panelStatus: string;
  healthStatus: string;
  uptime: string;
  systemStatusNote: string;
  metrics: StatusMetric[];
}

export interface FinalMessageContent {
  badge: string;
  heading: string;
  subheading: string;
  bulletPoints: string[];
  closingQuote: string;
  gratitude: string;
  greeting: string;
  subtext: string;
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
  deploymentStatusText: string;
  statusLabel: string;
  statusValue: string;
  nextReleaseLabel: string;
  nextReleaseText: string;
  buttonText: string;
  modesLabel: string;
  replaySurpriseText: string;
  domainEvent: {
    event: string;
    aggregate: string;
    command: string;
    status: string;
  };
  modes: CelebrationModeItem[];
}

export interface ExperienceContent {
  brand: BrandContent;
  person: PersonContent;
  release: ReleaseContent;
  deployment: DeploymentContent;
  legacy: LegacyContent;
  teamMessages: TeamMessagesContent;
  ctoStatus: CtoStatusContent;
  finalMessage: FinalMessageContent;
  celebration: CelebrationContent;
}

