# Dynamic Content & Media Guide

This guide explains how to add new **Certificates**, **Projects**, **PDFs**, **Videos**, **Images**, and **Text Descriptions** to your portfolio in seconds without editing complex HTML markup.

---

## Directory Architecture Overview

```
portfolio/
├── data/
│   ├── certificates-data.js        <-- Central registry for all certificates
│   └── projects-data.js            <-- Central registry for all projects
├── content/
│   └── descriptions/
│       ├── certificates/           <-- .txt files for certificate descriptions
│       │   ├── techsaksham_genai.txt
│       │   ├── sql_mastery.txt
│       │   └── template.txt
│       └── projects/               <-- .txt files for project descriptions
│           ├── summarizer.txt
│           ├── multimodal.txt
│           ├── social.txt
│           ├── amazon.txt
│           └── template.txt
└── media/
    ├── certificates/               <-- Upload certificate PDFs, Images (SVG/PNG/JPG), and Videos
    └── projects/                   <-- Upload project screenshots, demo videos, and PDF reports
```

---

## 1. How to Add a New Certificate (60 Seconds)

### Step 1: Upload Your File
Place your certificate file (`.pdf`, `.svg`, `.png`, `.jpg`, or `.mp4`) into `media/certificates/`.
*Example: `media/certificates/aws-solutions-architect.pdf`*

### Step 2: (Optional) Add a Text Description
Create a `.txt` file in `content/descriptions/certificates/<cert_id>.txt`.
*Example: `content/descriptions/certificates/aws_solutions_architect.txt`*

### Step 3: Add an Entry to `data/certificates-data.js`
Open `data/certificates-data.js` and add a new block under `window.PORTFOLIO_CERTIFICATES`:

```javascript
  aws_solutions_architect: {
    id: "aws_solutions_architect",
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services (AWS)",
    issuerClass: "issuer--aws",        // options: issuer--aws, issuer--google, issuer--techsaksham, issuer--greatlearning, issuer--hackerrank
    category: "devops",                // options: "ai" | "data" | "python" | "devops" | "security" | "frontend"
    badge: "Verified",                 // badge text on card (e.g., "Verified", "Gold ★", "PDF Cert", "2 Certs")
    descriptionFile: "content/descriptions/certificates/aws_solutions_architect.txt",
    desc: "Cloud architecture, high availability VPC design, multi-region failover, and IAM governance.",
    items: [
      {
        label: "AWS Certificate (PDF)",
        file: "media/certificates/aws-solutions-architect.pdf",
        type: "pdf"                    // "pdf" | "image" | "video"
      }
    ]
  },
```

✨ **Done!** The card will automatically appear in `education.html`, the category filter badge will update its count, and clicking the card will open the interactive modal with download, new tab preview, and viewer.

---

## 2. How to Add a New Project

### Step 1: Place Media Files
Add any demo video (`.mp4`), architecture diagram (`.svg`), screenshot (`.png`/`.jpg`), or PDF report (`.pdf`) into `media/projects/<project_id>/`.

### Step 2: (Optional) Add Text Description
Create a `.txt` file in `content/descriptions/projects/<project_id>.txt`.

### Step 3: Add an Entry to `data/projects-data.js`
Open `data/projects-data.js` and add:

```javascript
  agentic_rag: {
    id: "agentic_rag",
    title: "Autonomous Agentic RAG Pipeline",
    meta: "2026 · FastAPI · LangGraph · Qdrant · Local LLMs",
    category: "ai",
    tags: ["FastAPI", "LangGraph", "Qdrant", "DeepSeek-R1", "Docker"],
    github: "https://github.com/mr-mudgal/agentic-rag",
    liveUrl: "https://agentic-rag-demo.com",
    descriptionFile: "content/descriptions/projects/agentic_rag.txt",
    description: "Multi-agent autonomous research engine that coordinates planner, retriever, and critic agents with strict self-reflection loops.",
    highlights: [
      "Dynamic Routing: Autonomous query decomposition into parallel vector and graph queries.",
      "Self-Correction: Critic agent flags hallucinated citations before serving responses.",
      "Local Vector Indexing: Low-latency semantic search over 500,000 document chunks in Qdrant."
    ],
    roadmap: [
      { phase: "Phase 1: Hybrid BM25 & Dense Reranking", desc: "Integrate Cohere rerankers for top-1 accuracy." },
      { phase: "Phase 2: Voice Query Dispatch", desc: "Add Whisper real-time audio input transcription." }
    ],
    media: [
      {
        type: "video",
        file: "media/projects/agentic_rag/demo.mp4",
        title: "Agent Execution Live Demo",
        caption: "Real-time query planning and vector search in action"
      },
      {
        type: "pdf",
        file: "media/projects/agentic_rag/architecture_spec.pdf",
        title: "Technical Architecture Whitepaper",
        caption: "Complete systems specification and benchmark results"
      }
    ]
  },
```

---

## 3. Supported Media Types & How They Render

| Media Type | Supported Extensions / Formats | How It Renders |
| :--- | :--- | :--- |
| **PDF** | `.pdf` | Embedded responsive PDF reader with "Download Credential" and "Open in New Tab" buttons. |
| **Video** | `.mp4`, `.webm`, `.ogg`, YouTube embed URLs | Responsive HTML5 video player with sleek playback controls (auto-pauses when switching slides or closing modal). |
| **Image** | `.svg`, `.png`, `.jpg`, `.jpeg`, `.webp`, `.gif` | High-res responsive image container with smooth slide animations. |
| **SVG Architecture** | Inline `<svg>...</svg>` | Native vector diagram with cybernetic color palettes. |
| **Mixed Carousel** | Any combination of the above | Multi-slide carousel with auto-rotation, dot navigation, previous/next controls, and pause-on-hover. |

---

## 4. Categories Reference for Filtering

When creating a certificate or project, you can assign it to any of these category slugs:

- `"ai"` : AI & Machine Learning
- `"data"` : Data Science & Analytics
- `"python"` : Python & Backend
- `"devops"` : DevOps & Cloud
- `"security"` : Security & Testing
- `"frontend"` : Frontend & Core
