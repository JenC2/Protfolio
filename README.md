# 3D Portfolio

A 3D interactive portfolio.

The site highlights my production fintech experience, selected projects, technical stack, and contact details in a polished single-page React experience.

## Overview

I am a full stack developer focused on fintech, web, and mobile applications. My current stack includes React, Django, Elixir/Phoenix, Flutter, AWS, SQL, MongoDB, Docker, and Git.

## Featured Projects

### TripTribe

A travel community platform where users can share destinations, trip ideas, and explore travel content.

- Built with Vue.js and Django
- Implemented authentication, REST APIs, database models, content posting flows, and responsive UI screens
- GitHub: [trip-tribe](https://github.com/JenC2/trip-tribe)

### Adventure Guides

A travel information platform focused on destination discovery and visual data presentation.

- Built as a collaborative data visualization project
- Focused on destination information and travel guide content
- GitHub: [projet_collectif_dataviz-dataviz](https://github.com/JenC2/projet_collectif_dataviz-dataviz)

### AI Career Assistant

An in-progress LLM-powered assistant for career support.

- Exploring prompt design, LLM API integration, and conversation flows
- Current direction includes interview coaching and resume review support
- GitHub: [AI-Career-Assistant-In-Progress](https://github.com/JenC2/AI-Career-Assistant-In-Progress)

## Tech Stack

- Frontend: React, JavaScript, Tailwind CSS
- 3D and animation: Three.js, React Three Fiber, Drei, GSAP
- Tooling: Vite, ESLint, Git
- Contact form: EmailJS

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Run lint checks:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Environment Variables

The contact form uses EmailJS. Create a `.env` file in the project root with:

```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

Do not commit real environment values to the repository.

## Project Structure

```txt
src/
  components/      Reusable UI and 3D components
  sections/        Page sections such as Hero, Projects, Experience, Skills, Contact
  constants/       Portfolio data used across sections
  index.css        Tailwind CSS theme and custom styles
public/
  images/          Project images, icons, and visual assets
  models/          3D model assets
```

## Contact

- LinkedIn: [jenny-chen-chou](https://www.linkedin.com/in/jenny-chen-chou)
- GitHub: [JenC2](https://github.com/JenC2)
- Email: [jenny.chenchou@gmail.com](mailto:jenny.chenchou@gmail.com)

