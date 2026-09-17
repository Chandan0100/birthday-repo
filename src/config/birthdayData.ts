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

export const BIRTHDAY_CONFIG = {
  // Authentication & Core Info
  secretPassword: "launch",
  personName: "Kevin",
  personRole: "CTO",
  teamName: "Team Zenmonk",
  releaseVersion: "v2026.09.17",
  environment: "PRODUCTION",
  initiatedBy: "THE TEAM",
  priority: "VERY HIGH",
  releaseDate: "September 17, 2026",

  // Stage 2: Deployment sequence logs
  deploymentSteps: [
    { text: "Initializing deployment environment...", duration: 350 },
    { text: "Verifying security credentials & clearance...", duration: 400 },
    { text: "Loading high-resolution memories & milestones...", duration: 450 },
    { text: "Preparing team messages & gratitude payload...", duration: 400 },
    { text: "Compiling appreciation modules...", duration: 500 },
    { text: "Verifying birthday cake integrity [OK]...", duration: 350 },
    { text: "Checking candle spark telemetry [OK]...", duration: 350 },
    { text: "Running final architectural & team review...", duration: 450 },
    { text: "Deployment successful. Kevin v2026.09.17 is LIVE!", duration: 400 },
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

  // Stage 4: Team Messages
  teamMessages: [
    {
      id: "chandan",
      name: "Chandan",
      role: "Engineering",
      avatarBg: "from-amber-500 to-orange-600",
      message: `Thank you for trusting us, challenging us, and constantly pushing us to think beyond just implementation.

Working with you has taught us to look at engineering from a much broader perspective — architecture, ownership, decisions, and the bigger picture.

Wishing you an amazing birthday and an even better year ahead!`,
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

  // Stage 5: CTO System Status Dashboard
  systemMetrics: [
    { label: "ARCHITECTURE", value: 100, highlight: true },
    { label: "PROBLEM SOLVING", value: 100, highlight: true },
    { label: "TEAM TRUST", value: 98, highlight: false },
    { label: "LEADERSHIP", value: 100, highlight: true },
    { label: "PATIENCE WITH DEVS", value: 91, highlight: false },
    { label: "COFFEE INTAKE", value: 100, highlight: true },
  ] as MetricItem[],
  systemStatusNote: "No critical issues detected. Although the team continues to generate unexpected requirements.",

  // Stage 6: The Real Message
  realMessage: {
    heading: "But seriously...",
    paragraphs: [
      "A CTO doesn't just build systems.",
      "A great leader creates an environment where people learn to build better systems themselves.",
      "Thank you for the trust, the guidance, the challenges, and the opportunities to grow.",
      "We're genuinely grateful to have you leading us.",
    ],
    greeting: "Happy Birthday, Kevin. 🎂",
    subtext: "From all of us at Team Zenmonk ❤️",
  },

  // Stage 7: Celebration
  celebration: {
    buttonText: "DEPLOY BIRTHDAY WISHES 🎂",
    heading: "🎉 HAPPY BIRTHDAY, KEVIN! 🎉",
    deploymentStatusText: "Deployment completed successfully.",
    progressPercentage: 100,
    nextReleaseText: "Kevin v2027",
  },
};

