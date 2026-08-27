<div align="center">
  <br />
  <h1>Rishabh Mudgal — Portfolio</h1>
  <p><strong>Python Systems × Practical AI × Thoughtful Automation</strong></p>
  <p>
    <a href="#why-this-portfolio">Why it exists</a> ·
    <a href="#run-it-locally">Run locally</a> ·
    <a href="#deploy-to-github-pages">Deploy</a>
  </p>
  <br />
</div>

<p align="center">
  <img alt="Static site" src="https://img.shields.io/badge/Static%20site-HTML%20%2B%20CSS%20%2B%20JS-8c91ff?style=for-the-badge&labelColor=080810" />
  <img alt="GitHub Pages ready" src="https://img.shields.io/badge/GitHub%20Pages-ready-6be7ff?style=for-the-badge&labelColor=080810" />
  <img alt="No build step" src="https://img.shields.io/badge/No%20build%20step-required-c7ff7b?style=for-the-badge&labelColor=080810" />
</p>

<br />

## Why this portfolio?

This repository houses a recruiter-focused, static portfolio for a Backend Engineer moving intentionally into applied AI. The narrative is deliberately honest and grounded:

- **Python and backend engineering are the rock-solid foundation.**
- **AI is the forward direction**, demonstrated through practical LLM orchestration, local-models, OCR, and multimodal pipelines.
- **Learning is visible**—I build real systems that make AI useful, rather than pretending to be an AI researcher.

Featuring an ultra-modern, iOS-inspired **liquid-glass aesthetic** with dynamic light/dark modes, this portfolio is built to earn a second look and start meaningful conversations.

## The Architecture
- **No Frameworks, No Build Steps:** Pure, semantic HTML5, CSS3, and Vanilla JavaScript.
- **Multi-Page Layout:** Logically separated into `Approach`, `Projects`, `Experience`, and `Education` for cognitive ease.
- **Glassmorphism UI:** Heavy use of `backdrop-filter: blur()`, `saturate()`, and inset shadows to mimic macOS/iOS depth.

## Run it locally

Because this is a static site, simply open `index.html` in your browser. For the absolute best experience (to resolve local CORS for assets), serve the folder locally:

```bash
python3 -m http.server 8000