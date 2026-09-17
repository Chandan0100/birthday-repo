# Interactive Digital Experience 🎂

An interactive production release experience built by the engineering team.

## 🚀 Experience Flow & Stages

1. **Gate 0 (Restricted Access)**: Classified terminal authorization gate.
   - **Access Code**: Configured in content files.
2. **Stage 1 (Deployment Reveal)**: Warm hero announcement banner (`RELEASE v2026.09.17`).
3. **Stage 2 (Story & Context)**: The story and philosophy behind the architecture.
4. **Stage 3 (Core Principles & Legacy)**: Core architectural pillars, Domain-Driven Design concepts, and design decisions.
5. **Stage 4 (Team Messages)**: Personal notes, appreciation letters, and comments from the engineering team.
6. **Stage 5 (CTO System Status)**: Real-time telemetry dashboard & system health monitoring.
7. **Stage 6 (Final Message)**: Sincere reflections and celebration message.
8. **Stage 7 (Celebration)**: Interactive celebration module with multi-stage confetti cannons, pulsing cake, and dynamic celebration effects.

---

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS (warm orange & cream aesthetic)
- **Animations**: Framer Motion
- **Celebration FX**: Canvas Confetti
- **Icons**: Lucide React

---

## 💻 Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Dev Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

---

## ⚙️ Content Configuration

Environment-specific content is isolated into:
- `src/content/development.json` (Generic office-safe data for development)
- `src/content/production.json` (Target payload for production)
