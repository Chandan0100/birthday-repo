export interface TeamMemberMessage {
  id: string;
  name: string;
  role: string;
  avatarBg?: string;
  message: string;
}

export interface MetricItem {
  label: string;
  value: number;
  highlight?: boolean;
}

export interface TaughtConcept {
  id: string;
  title: string;
  tag: string;
  quote: string;
  iconName: string;
}

export const BIRTHDAY_CONFIG = {
  // Authentication & Core Info
  secretPassword: "launch",
  personName: "Kevin",
  personRole: "CTO",
  teamName: "Team Zenmonk",
  releaseVersion: "v2026.09.17",
  environment: "PRODUCTION",
  initiatedBy: "TEAM ZENMONK",
  priority: "VERY HIGH",
  releaseDate: "September 17, 2026",

  // Stage 2: Deployment sequence logs with DDD & Architectural Easter Eggs
  deploymentSteps: [
    { text: "Initializing deployment environment...", duration: 300 },
    { text: "Validating domain boundaries & bounded contexts...", duration: 350 },
    { text: "Verifying aggregate consistency & invariants...", duration: 350 },
    { text: "Initializing application services & command bus...", duration: 350 },
    { text: "Reviewing architectural patterns & clean abstractions...", duration: 400 },
    { text: "Verifying cake integrity & candle telemetry [OK]...", duration: 300 },
    { text: "Dispatching BirthdayCelebratedDomainEvent...", duration: 350 },
    { text: "Deployment successful. Kevin v2026.09.17 is LIVE in Production!", duration: 400 },
  ],

  // Stage 3: Release Notes
  releaseNotes: {
    version: "KEVIN v2026.09.17",
    tagline: "Birthday Release Notes",
    status: "Stable",
    nextMilestone: "Another great year.",
    categories: [
      {
        title: "Added",
        type: "added" as const,
        items: [
          "+1 year of experience & engineering wisdom",
          "New memories and milestone achievements unlocked",
          "More wisdom points added to leadership skill tree",
          "Another year of visionary technical leadership",
          "Unlimited CTO-level architecture discussions",
        ],
      },
      {
        title: "Improved",
        type: "improved" as const,
        items: [
          "Problem solving velocity under complex constraints",
          "System thinking & high-scale architectural design",
          "Team building and empowering engineers to own outcomes",
          "Patience with engineers submitting 500-line PRs",
        ],
      },
      {
        title: "Known Issues",
        type: "issues" as const,
        items: [
          'Engineers still claim: "It\'s just a small 5-minute change."',
          '"One quick question" continues to take at least 30 minutes.',
          "Production incidents continue to appear at the worst possible time.",
          "CTO remains statistically impossible to escape from in Slack threads.",
        ],
      },
    ],
  },

  // Stage 4: What You Taught Us (Kevin's Engineering Legacy)
  whatYouTaughtUs: {
    heading: "Some things don't belong in a release note.",
    subheading: "They become part of how a team thinks.",
    centralTheme: "You didn't just teach us how to build software. You taught us how to think about building software.",
    concepts: [
      {
        id: "ddd",
        title: "Domain-Driven Design",
        tag: "DOMAIN FIRST",
        quote: "You taught us to understand the domain before rushing into the code.",
        iconName: "Compass",
      },
      {
        id: "arch",
        title: "Software Architecture",
        tag: "BOUNDARIES & DECISIONS",
        quote: "You taught us that good architecture is about decisions, boundaries, and the problems we're solving — not just folders and frameworks.",
        iconName: "Boxes",
      },
      {
        id: "system",
        title: "System Design",
        tag: "THE BIGGER PICTURE",
        quote: "You taught us to think about the system as a whole, not just the feature in front of us.",
        iconName: "Network",
      },
      {
        id: "thinking",
        title: "Engineering Thinking",
        tag: "FIRST PRINCIPLES",
        quote: 'You pushed us to ask "Why?" before asking "How?"',
        iconName: "HelpCircle",
      },
      {
        id: "excellence",
        title: "Technical Excellence",
        tag: "CRAFTSMANSHIP",
        quote: "You showed us that making something work is only the beginning.",
        iconName: "Layers",
      },
    ] as TaughtConcept[],
    transitionHeader: "And somewhere along the way...",
    transitionText: "These stopped being things you taught us.",
    transitionPunchline: "They became the way we build.",
    transitionLegacy: "That's probably the best part of your legacy with us.",
  },

  // Stage 5: Team Messages
  teamMessages: [
    {
      id: "chandan",
      name: "Chandan",
      role: "Engineering",
      avatarBg: "from-amber-500 to-orange-600",
      message: `Kevin,

Thank you for teaching us to look at software differently.

DDD, architecture, system design, and all the engineering principles you've shared with us have become much more than technical concepts. They have changed the way we approach problems, make decisions, and think about the systems we build.

You've pushed us to go beyond simply making things work — to understand the domain, question our decisions, think about boundaries, and care about the quality of what we create.

More importantly, you've given us the opportunity to learn, experiment, make mistakes, and grow as engineers.

Thank you for being the person who taught us not just how to build software, but how to think like engineers.

Happy Birthday, Kevin. ❤️`,
    },
    {
      id: "satvik",
      name: "Satvik",
      role: "Engineering",
      avatarBg: "from-blue-500 to-indigo-600",
      message: `Happy Birthday Kevin! Working under your guidance has been an incredible experience. Your ability to break down complex architectural bottlenecks into actionable decisions inspires all of us every single day.

Hope you take some well-deserved time off to celebrate this milestone!`,
    },
    {
      id: "harish",
      name: "Harish",
      role: "Engineering",
      avatarBg: "from-emerald-500 to-teal-600",
      message: `Wishing you a fantastic Birthday, Kevin! Thank you for fostering a culture where engineering excellence meets genuine warmth and continuous learning.

Here's to building even bigger and better systems together in the coming year!`,
    },
  ] as TeamMemberMessage[],

  // Stage 6: CTO System Status Dashboard
  systemMetrics: [
    { label: "ARCHITECTURE & DDD", value: 100, highlight: true },
    { label: "SYSTEM DESIGN", value: 100, highlight: true },
    { label: "PROBLEM SOLVING", value: 100, highlight: true },
    { label: "TEAM TRUST", value: 98, highlight: false },
    { label: "LEADERSHIP & MENTORSHIP", value: 100, highlight: true },
    { label: "PATIENCE WITH DEVS", value: 91, highlight: false },
    { label: "COFFEE INTAKE", value: 100, highlight: true },
  ] as MetricItem[],
  systemStatusNote: "No critical issues detected. Although the team continues to generate unexpected requirements.",

  // Stage 7: The Real Message (Stronger version)
  realMessage: {
    heading: "Every engineer remembers the people who taught them to code.",
    subheading: "But the people who teach us how to think stay with us much longer.",
    bulletPoints: [
      "You've taught us to question assumptions.",
      "To understand the domain.",
      "To think in boundaries.",
      "To design before we implement.",
      "And to care about the systems we're building — not just the code we're writing.",
    ],
    closingQuote: "Those lessons will travel much further than any project we've built together.",
    gratitude: "Thank you, Kevin.",
    greeting: "Happy Birthday. 🎂",
    subtext: "— Team Zenmonk ❤️",
  },

  // Stage 8: Celebration
  celebration: {
    buttonText: "DEPLOY BIRTHDAY WISHES 🎂",
    heading: "🎉 HAPPY BIRTHDAY, KEVIN! 🎉",
    deploymentStatusText: "Deployment completed successfully.",
    progressPercentage: 100,
    nextReleaseText: "Kevin v2027",
    domainEvent: {
      event: "BirthdayCelebrated",
      aggregate: "Kevin",
      command: "CelebrateBirthday",
      status: "SUCCESS",
    },
  },
};
