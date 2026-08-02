<script setup lang="ts">
const projects = [
  {
    name: 'ITU AUV Software',
    year: '2024–2026',
    description: 'The ITU AUV Team’s main software stack, bringing together vehicle control, navigation, simulation, hardware integration, teleoperation, and computer vision.',
    tags: ['ROS', 'Python', 'C++', 'Robotics'],
    href: 'https://github.com/itu-auv/auv-software',
  },
  {
    name: 'AUVRL',
    year: '2026',
    description: 'A reinforcement learning environment for Taluy, an autonomous underwater vehicle. It brings together vehicle dynamics, hydrodynamics, thruster models, task design, and PPO training on MJLab.',
    tags: ['Python', 'mjlab', 'Reinforcement Learning', 'Robotics'],
    href: 'https://github.com/talhabw/auvrl',
  },
  {
    name: 'AutoSeg',
    year: '2026',
    description: 'An image segmentation annotation tool with SAM-powered mask generation and automatic propagation across sequential images using visual encoders.',
    tags: ['Python', 'Computer Vision', 'SAM', 'DINOv3'],
    href: 'https://github.com/talhabw/autoseg',
  },
  {
    name: 'Thought Completion',
    year: '2026',
    description: 'An Obsidian plugin that suggests what to think or write about next. It offers contextual prompts as unobtrusive ghost text without writing the content for you.',
    tags: ['TypeScript', 'Obsidian', 'AI'],
    href: 'https://github.com/talhabw/obsidian-thought-completion',
  },
]
</script>

<template>
  <div class="site-shell">
    <main id="home" class="page">
      <header class="site-header">
        <nav aria-label="Primary navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="https://tbw.bearblog.dev/blog/" target="_blank" rel="noreferrer">
            Blog
            <svg class="external-icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M15 4h5v5M14 10l6-6M20 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6" /></svg>
          </a>
        </nav>
      </header>

      <section class="hero" aria-labelledby="page-title">
        <div class="hero-copy">
          <h1 id="page-title">Talha Karasu</h1>

          <div class="contact-links" aria-label="Contact links">
            <a href="mailto:talha@karasu.me">
              <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M3 7l9 6 9-6M5 5h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" /></svg>
              Mail
            </a>
            <a href="https://github.com/talhabw" target="_blank" rel="noreferrer">
              <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.7-1.4 5.7-6.2a4.8 4.8 0 0 0-1.3-3.4 4.5 4.5 0 0 0-.1-3.4s-1-.3-3.5 1.3a12 12 0 0 0-6.4 0C6.4 2.2 5.4 2.5 5.4 2.5a4.5 4.5 0 0 0-.1 3.4A4.8 4.8 0 0 0 4 9.3c0 4.8 2.9 5.9 5.7 6.2-.6.6-.6 1.2-.5 2V21" /></svg>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/talhakarasu/" target="_blank" rel="noreferrer">
              <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 4m0 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4M2 9h4v12H2zM10 9h4v2c.9-1.5 2.3-2.3 4-2.2 3 0 4 2 4 5.2v7h-4v-6c0-1.5-.5-2.5-2-2.5s-2 1-2 2.5v6h-4z" /></svg>
              LinkedIn
            </a>
            <a href="/files/talha-karasu-cv-en.pdf" target="_blank">
              <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M14 3v4a1 1 0 0 0 1 1h4M5 13v-8a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2h-5M2 19l2 2 4-4" /></svg>
              CV
            </a>
            <a class="garfield-link" href="/garfield" target="_blank">
              <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M11 16.5c0 1.4-1.3 2.5-3 2.5s-3-1.1-3-2.5S6.3 14 8 14s3 1.1 3 2.5zm8 0c0 1.4-1.3 2.5-3 2.5s-3-1.1-3-2.5 1.3-2.5 3-2.5 3 1.1 3 2.5zM15.5 8c0 1.4-1.1 2.5-2.5 2.5S10.5 9.4 10.5 8 11.6 5.5 13 5.5s2.5 1.1 2.5 2.5zM9 10.5C9 11.9 7.9 13 6.5 13S4 11.9 4 10.5 5.1 8 6.5 8 9 9.1 9 10.5zm11 0c0 1.4-1.1 2.5-2.5 2.5S15 11.9 15 10.5 16.1 8 17.5 8s2.5 1.1 2.5 2.5z" /></svg>
              random garfield comic
            </a>
          </div>
        </div>
      </section>

      <section id="about" class="section about" aria-labelledby="about-title">
        <div class="section-content">
          <h2 id="about-title">hi!</h2>
          <div class="about-copy">
            <p>
              i'm an undergraduate at
              <a
                class="important"
                href="https://itu.edu.tr"
                target="_blank"
                rel="noreferrer"
              >Istanbul Technical University</a>,
              studying <span class="important">Robotics Engineering</span>.
              i have a strong interest in <span class="important">ai and robotics</span>,
              and have been working in the
              <a
                class="important"
                href="https://auv.itu.edu.tr"
                target="_blank"
                rel="noreferrer"
              >itu autonomous underwater vehicle team</a>
              for 2 years. lately, i am more interested in
              <span class="important">legged robotics</span>.
            </p>
            <p>feel free to reach out about anything!</p>
          </div>
        </div>
      </section>

      <section id="projects" class="section projects" aria-labelledby="projects-title">
        <div class="section-content">
          <h2 id="projects-title">Selected Projects</h2>

          <div class="project-list">
            <article v-for="project in projects" :key="project.name" class="project">
              <div class="project-title">
                <h3><a :href="project.href" target="_blank" rel="noreferrer">{{ project.name }}</a></h3>
                <span>{{ project.year }}</span>
              </div>
              <p>{{ project.description }}</p>
              <div class="project-footer">
                <ul class="tags" :aria-label="`${project.name} technologies`">
                  <li v-for="tag in project.tags" :key="tag">{{ tag }}</li>
                </ul>
                <a :href="project.href" target="_blank" rel="noreferrer" :aria-label="`View ${project.name} on GitHub`">View project <span aria-hidden="true">↗</span></a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style>
:root {
  color-scheme: dark;
  --background: #581c87;
  --ink: #fffaf0;
  --muted: #eadff2;
  --quiet: #b99bce;
  --accent: #f97316;
  --rule: rgb(240 220 255 / 24%);
  --tag: rgb(255 255 255 / 9%);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: var(--background);
  color: var(--ink);
  font-family: "Inter", ui-sans-serif, system-ui, sans-serif;
  font-size: 16px;
  line-height: 1.65;
  text-transform: lowercase;
  -webkit-font-smoothing: antialiased;
}

a {
  color: inherit;
}

.site-shell {
  min-height: 100vh;
  background:
    radial-gradient(circle at 85% 5%, rgb(161 89 213 / 24%), transparent 30rem),
    var(--background);
}

.page {
  width: min(100% - 56px, 760px);
  margin: 0 auto;
  padding: 40px 0 64px;
}

.site-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 15px;
  border-bottom: 1px solid var(--ink);
}

nav {
  display: flex;
  gap: 26px;
}

nav a {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: var(--muted);
  font-size: 0.82rem;
  text-decoration: none;
  transition: color 160ms ease;
}

.external-icon {
  width: 12px;
  height: 12px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
}

nav a:hover,
nav a:focus-visible {
  color: var(--accent);
}

.hero {
  padding: 30px 0 0;
}

h1,
h2,
h3,
p {
  margin-top: 0;
}

h1,
h2,
h3 {
  font-family: "Fraunces", Georgia, serif;
}

h1 {
  margin: 10px 0 7px;
  font-size: 42px;
  font-weight: 600;
  letter-spacing: -0.01em;
  line-height: 1.05;
}

.contact-links {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px 22px;
}

.contact-links a,
.project-footer > a {
  color: var(--muted);
  font-size: 0.83rem;
  text-decoration-color: var(--rule);
  text-underline-offset: 5px;
  transition: color 160ms ease, border-color 160ms ease, text-decoration-color 160ms ease;
}

.contact-links a {
  display: inline-flex;
  align-items: center;
  padding-bottom: 1px;
  border-bottom: 1.5px solid var(--rule);
  text-decoration: none;
}

.contact-links a:hover,
.contact-links a:focus-visible {
  border-color: var(--accent);
}

.contact-links .garfield-link {
  color: #f97316;
  border-color: rgb(249 115 22 / 45%);
}

.contact-links .garfield-link svg {
  stroke: currentColor;
}

.contact-links .garfield-link:hover,
.contact-links .garfield-link:focus-visible {
  color: #fb923c;
  border-color: #fb923c;
}

.contact-links a:hover,
.contact-links a:focus-visible,
.project-footer > a:hover,
.project-footer > a:focus-visible {
  color: var(--accent);
  text-decoration-color: var(--accent);
}

.contact-links svg {
  width: 16px;
  height: 16px;
  margin-right: 5px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.7;
  stroke-linecap: round;
  stroke-linejoin: round;
  vertical-align: -3px;
}

.section {
  margin-top: 100px;
  scroll-margin-top: 24px;
}

h2 {
  margin-bottom: 14px;
  font-size: 22px;
  font-weight: 500;
  letter-spacing: -0.025em;
  line-height: 1.2;
}

.about-copy {
  max-width: 650px;
  color: var(--muted);
  font-size: 15px;
}

.about-copy p:last-child {
  margin-bottom: 0;
}

.important {
  color: var(--ink);
  font-weight: 500;
}

.about-copy a {
  text-decoration-color: var(--rule);
  text-underline-offset: 3px;
  transition: color 160ms ease, text-decoration-color 160ms ease;
}

.about-copy a:hover,
.about-copy a:focus-visible {
  color: var(--accent);
  text-decoration-color: var(--accent);
}

.project-list {
  border-top: 1px solid var(--ink);
}

.project {
  padding: 16px 0;
  border-bottom: 1px solid var(--rule);
}

.project-title {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 20px;
}

.project h3 {
  margin-bottom: 5px;
  font-size: 19px;
  font-weight: 500;
}

.project h3 a {
  color: inherit;
  text-decoration: none;
  transition: color 160ms ease;
}

.project h3 a:hover,
.project h3 a:focus-visible {
  color: var(--accent);
}

.project-title > span {
  color: var(--quiet);
  font-size: 0.72rem;
}

.project > p {
  max-width: 620px;
  margin-bottom: 9px;
  color: var(--muted);
  font-size: 14px;
}

.project-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.tags li {
  padding: 2px 8px;
  border: 1px solid var(--rule);
  border-radius: 999px;
  background: var(--tag);
  color: var(--muted);
  font-size: 0.66rem;
  letter-spacing: 0.02em;
}

.project-footer > a {
  flex: 0 0 auto;
}

footer {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 42px;
  padding-top: 14px;
  border-top: 1px solid var(--ink);
  color: var(--quiet);
  font-size: 0.75rem;
}

footer a {
  text-decoration: none;
}

footer a:hover,
footer a:focus-visible {
  color: var(--accent);
}

footer p {
  margin-bottom: 0;
}

@media (max-width: 640px) {
  .page {
    width: min(100% - 36px, 760px);
    padding: 28px 0 48px;
  }

  nav {
    gap: 17px;
  }

  .hero {
    padding: 30px 0 0;
  }

  h1 {
    font-size: 32px;
  }

  .section {
    margin-top: 100px;
  }

  .project-footer {
    align-items: flex-end;
  }
}

@media (max-width: 430px) {
  .project-footer {
    display: block;
  }

  .project-footer > a {
    display: inline-block;
    margin-top: 14px;
  }

  footer {
    display: block;
  }

  footer p {
    margin-top: 5px;
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
</style>
