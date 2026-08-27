/**
 * Central Project Registry & Rich Presentation Database
 * Portfolio of Rishabh Mudgal — Applied AI, Automation & Python Systems Engineer
 *
 * Ordered by Strategic Hierarchy:
 * 1. AI / ML & Generative AI Systems
 * 2. Data Analytics, BI & Audit Engines
 * 3. Python Backend Architecture, Automation & SaaS
 * 4. Security, DevOps & Cloud Infrastructure
 * 5. Full-Stack Web Development & Real-Time Applications
 */

window.PORTFOLIO_PROJECTS = {
  // =========================================================================
  // 1. AI / ML & GENERATIVE AI SYSTEMS (HIGH PRIORITY)
  // =========================================================================

  // 1.1 Audio Storytelling Studio (Featured / Wide Rectangular)
  audio_story: {
    id: "audio_story",
    title: "Cinematic AI Podcast & Cultural Narrative Studio",
    meta: "2025 · Dual-GPU / Kaggle T4 · Qwen2.5-7B · Kokoro ONNX · Voice Blending · Pydub",
    category: "ai",
    featured: true,
    wide: true,
    tags: ["PyTorch", "Qwen-2.5 (7B-Instruct)", "Kokoro ONNX TTS", "Voice Blending (70/30)", "AudioSegment Ducking", "Transformers", "Pydub Mastering", "Python 3.11"],
    github: "https://github.com/mr-mudgal",
    liveUrl: "",
    descriptionFile: "content/descriptions/projects/audio_story.txt",
    description: "An automated storytelling and cinematic podcast production engine that converts raw markdown narratives into high-retention audio scripts using Qwen2.5-7B, synthesizes expressive neural speech via a custom blended Kokoro ONNX model (70% Indian Female + 30% Warm Emotional Female), and masters the final multi-track mix with automated BGM ducking (-19dB), 700ms dramatic pauses, and smooth outro fades.",
    highlights: [
      "Psychological Retention Scripting: Leverages Qwen2.5-7B-Instruct with strict psychological retention directives (immediate hooks, vivid sensory descriptions, open loops, and cliffhangers at paragraph transitions).",
      "Custom Neural Voice Blending (70/30): Blends Kokoro ONNX latent voice vectors (70% Indian Female hf_alpha + 30% Warm Emotional Female af_heart) for an authentic, captivating cultural narration style.",
      "Dramatic Cadence & Pacing: Synthesizes speech at 0.82x cinematic speed and programmatically injects 700ms silent intervals (AudioSegment.silent) between synthesized paragraphs.",
      "Automated Studio Mastering & Ducking: Dynamically selects ambient Indian soundscapes, loops to narration duration, ducks BGM by -19.0dB under voiceover, and exports broadcast-ready 48kHz WAV audio with a 4-second fade-out tail.",
      "VRAM Garbage Collection: Eliminates GPU memory leakage via explicit model deletion, Python gc.collect(), and torch.cuda.empty_cache() between the LLM scripting phase and the Kokoro ONNX synthesis engine."
    ],
    roadmap: [
      { phase: "Phase 1: Multi-Speaker Dialogue Dispatch", desc: "Extend script rewrite engine to tag and synthesize multi-character voices with distinct neural speaker profiles." },
      { phase: "Phase 2: Real-Time Audio Streaming API", desc: "Wrap Kokoro ONNX pipeline with FastAPI and WebSocket streaming for sub-second low-latency chunk delivery." },
      { phase: "Phase 3: Automated Video Storyboard Generator", desc: "Integrate SDXL / Wan2.1 video generation synchronized to synthesized audio timestamps for one-click YouTube Shorts." }
    ],
    media: [
      {
        type: "image",
        file: "media/projects/audio_story/podcast_studio_telemetry.png",
        title: "Digital Audio Workstation (DAW) & Voice Studio Telemetry",
        caption: "Mastering interface displaying the dual-track timeline (Voiceover with 700ms pause markers + BGM ducked by -19dB), Kokoro 70/30 voice style slider, and VRAM memory flush telemetry."
      },
      {
        type: "image",
        file: "media/projects/audio_story/audio_story_pipeline_architecture.svg",
        title: "End-to-End AI Podcast Architecture Flow",
        caption: "Complete 4-phase system architecture: Markdown Sanitization ➔ Qwen2.5-7B Script Adaptation ➔ Kokoro ONNX Neural Voice Synthesis ➔ Pydub Soundscape Ducking & Master WAV Export."
      },
      {
        type: "image",
        file: "media/projects/audio_story/script_and_synthesis_showcase.png",
        title: "3-Stage Script & Synthesis Transformation Showcase",
        caption: "Side-by-side comparison of raw markdown source text, Qwen-2.5 high-retention audio script rewrite, and Kokoro ONNX audio synthesis parameters."
      }
    ]
  },

  // 1.2 ComfyUI Photorealistic Portrait Engine (Featured / Wide Rectangular)
  comfyui_portrait: {
    id: "comfyui_portrait",
    title: "ComfyUI Photorealistic Portrait & IP-Adapter FaceID Inpainting Engine",
    meta: "2024 · ComfyUI · SDXL Juggernaut v9 · YOLOv8 · IP-Adapter FaceID · 4x-UltraSharp",
    category: "ai",
    featured: true,
    wide: true,
    tags: ["ComfyUI", "SDXL (Juggernaut v9)", "IP-Adapter FaceID", "InsightFace", "YOLOv8 (Ultralytics)", "FaceDetailer", "Ultimate SD Upscale", "LoRA"],
    github: "https://github.com/mr-mudgal",
    liveUrl: "",
    descriptionFile: "content/descriptions/projects/comfyui_portrait.txt",
    description: "A production-grade Generative AI node graph architecture built in ComfyUI, coordinating SDXL latent diffusion (JuggernautXL v9), YOLOv8m automated facial detection, FaceDetailer high-density inpainting, zero-shot IP-Adapter FaceID identity transfer, and Ultimate SD neural tiled super-resolution upscaling.",
    highlights: [
      "YOLOv8 Automated Facial Inpainting: Employs Ultralytics face_yolov8m.pt and FaceDetailer (0.24 denoise, 512px guide size) to autonomously detect and restore realistic skin pores, iris depth, and facial anatomy.",
      "Zero-Shot IP-Adapter FaceID Transfer: Extracts 512D facial landmark embeddings via InsightFace CUDA, conditioning SDXL cross-attention layers (weight 1.05) with 99.2% likeness retention without model fine-tuning.",
      "Photorealistic Optical Simulation: Calibrated DPM++ 2M SDE Karras sampling (35 steps, CFG 4.5) on JuggernautXL v9, emulating 85mm f/1.8 lens bokeh, natural skin subsurface scattering, and film grain.",
      "4K/8K Tiled Neural Super-Resolution: Integrates 4x-UltraSharp.pth with UltimateSDUpscale (2x scale, 512x512 tile passes, Touch of Realism LoRA) for artifact-free 16-bit sRGB master outputs."
    ],
    roadmap: [
      { phase: "Phase 1: AnimateDiff Video Integration", desc: "Connect AnimateDiff SDXL motion modules to generate temporally consistent portrait video clips." },
      { phase: "Phase 2: TensorRT Accelerated Nodes", desc: "Compile UNet and ControlNet models to NVIDIA TensorRT engines for 3x lower inference latency." },
      { phase: "Phase 3: FastAPI Webhook Headless Runner", desc: "Deploy headless ComfyUI backend over Docker with asynchronous REST API queue workers." }
    ],
    media: [
      {
        type: "image",
        file: "media/projects/comfyui_portrait/photorealistic_portrait_before_after.png",
        title: "3-Stage Portrait Refinement Pipeline",
        caption: "Base SDXL Latent (832x1216) ➔ YOLOv8m FaceDetailer Inpainting (0.24 Denoise) ➔ UltimateSDUpscale 2x Super-Resolution."
      },
      {
        type: "image",
        file: "media/projects/comfyui_portrait/ip_adapter_faceid_transfer.png",
        title: "Zero-Shot IP-Adapter FaceID Identity Transfer",
        caption: "Source Reference Face ➔ InsightFace 512D Landmark Extraction ➔ Target Identity Synthesis with 99.2% Facial Geometry Retention."
      },
      {
        type: "image",
        file: "media/projects/comfyui_portrait/comfyui_node_graph_architecture.svg",
        title: "ComfyUI Multi-Stage Node Graph Architecture",
        caption: "End-to-end node graph topology: JuggernautXL v9 ➔ YOLOv8 FaceDetailer ➔ IP-Adapter FaceID ➔ UltimateSDUpscale (4x-UltraSharp)."
      }
    ]
  },

  // 1.3 Dual-GPU SDXL Multimodal Publishing Pipeline (Portrait)
  multimodal: {
    id: "multimodal",
    title: "Dual-GPU Multimodal Generative AI Publishing Pipeline",
    meta: "2024 · Dual-GPU SDXL · ControlNet · Qwen-2.5 1.5B · Potrace · ReportLab",
    category: "ai",
    featured: false,
    wide: false,
    tags: ["PyTorch", "SDXL Base 1.0", "ControlNet (Canny)", "Qwen-2.5 (1.5B)", "Dual-GPU (cuda:0/1)", "Potrace Vectorizer", "ReportLab PDF", "Diffusers"],
    github: "https://github.com/mr-mudgal",
    liveUrl: "",
    descriptionFile: "content/descriptions/projects/multimodal.txt",
    description: "An automated end-to-end publishing pipeline combining Qwen-2.5 local LLM prompt engineering, dual-GPU parallel SDXL ControlNet diffusion models, Potrace resolution-independent vectorization, and ReportLab canvas compilation to generate commercial-grade print publications (Corporate Survival & Office Humor Coloring Book).",
    highlights: [
      "Dual-GPU Parallel Execution (2x Speedup): Concurrently provisions SDXL Base 1.0 pipelines across cuda:0 and cuda:1 via ThreadPoolExecutor(max_workers=2) for simultaneous page synthesis.",
      "Local LLM Prompt Director: Leverages Qwen-2.5-1.5B-Instruct to autonomously generate structured JSON themes, contrasting color palettes, and strict flat cel-shaded anime constraints.",
      "VRAM Lifecycle & Garbage Flush: Programmatic GPU memory management (del text_pipe, gc.collect, torch.cuda.empty_cache) eliminating CUDA Out-Of-Memory errors.",
      "Potrace Vector Conversion: Converts 1024x1024 raster line art into resolution-independent SVG vector paths rendered cleanly at print-ready A4 dimensions.",
      "Automated ReportLab PDF Binding: Compiles full publications with outer margins, page titles, center line art, and bottom dual-palette color suggestions."
    ],
    roadmap: [
      { phase: "Phase 1: LoRA Domain Fine-Tuning", desc: "Train lightweight LoRA weights on specialized manga line art and cel-shaded commercial publishing styles." },
      { phase: "Phase 2: Quantized 4-Bit Execution (NF4)", desc: "Quantize SDXL and Qwen weights with bitsandbytes for 50% lower VRAM footprint and faster cold starts." },
      { phase: "Phase 3: Interactive Web Campaign Studio", desc: "Build a drag-and-drop web dashboard for visual layout tweaking, font customization, and one-click PDF exports." }
    ],
    media: [
      {
        type: "image",
        file: "media/projects/multimodal/coloring_page_pdf_sample.png",
        title: "Compiled A4 Coloring Page PDF Sample",
        caption: "Publication-ready print layout featuring page title, vectorized center line art (Potrace SVG), and dual color suggestion thumbnails with #Hex codes."
      },
      {
        type: "image",
        file: "media/projects/multimodal/dual_gpu_pipeline_architecture.svg",
        title: "Dual-GPU Multimodal Pipeline Architecture",
        caption: "End-to-end 4-phase architecture: Qwen LLM Director ➔ VRAM Flush ➔ Dual-GPU SDXL Parallelism (cuda:0/1) ➔ ReportLab PDF Compilation."
      },
      {
        type: "image",
        file: "media/projects/multimodal/controlnet_generation_grid.png",
        title: "Dual-GPU Vision & ControlNet Generation Grid",
        caption: "Technical overview of Qwen prompt JSON, EulerAncestral SDXL scheduler, Canny edge detection, and Dual-GPU parallelism."
      }
    ]
  },

  // 1.4 Medium Summarizer Local AI Pipeline (Portrait)
  summarizer: {
    id: "summarizer",
    title: "Medium Summarizer — Privacy-First AI Pipeline",
    meta: "2025 · Local LLM Pipeline · DeepSeek-R1:8b · Ollama · Freedium · Python",
    category: "ai",
    featured: false,
    wide: false,
    tags: ["Python 3.13", "Ollama", "DeepSeek-R1:8b", "Freedium Bypass", "Local AI", "ETL Pipeline", "Privacy-First"],
    github: "https://github.com/mr-mudgal",
    liveUrl: "",
    descriptionFile: "content/descriptions/projects/summarizer.txt",
    description: "An automated end-to-end local AI summarization pipeline that digests daily Medium blog newsletters, bypasses paywalls via Freedium, and generates structured executive briefs offline using DeepSeek-R1:8b via Ollama with 100% data privacy.",
    highlights: [
      "100% Offline & Private AI: Local DeepSeek-R1:8b inference via Ollama ensures zero personal data or reading logs leave your local machine.",
      "Automated Paywall Ingestion: Automatically parses Gmail digest exports, rewrites restricted links to Freedium mirror endpoints, and extracts pristine article markdown.",
      "Structured Markdown Briefs: Produces categorized executive digests featuring Key Insights, Implementation Takeaways, and Critical Quotes.",
      "Zero-Config One-Click CLI: Engineered with a single JUST-RUN-ME.py entrypoint that handles dependency checks, Ollama socket validation, and directory initialization."
    ],
    roadmap: [
      { phase: "Phase 1: Multi-Model Switching", desc: "Add dynamic runtime model selection between DeepSeek-R1 (deep reasoning), Llama 3.3 (high throughput), and Mistral Small." },
      { phase: "Phase 2: Vector Search & Local RAG", desc: "Embed generated summaries into a local ChromaDB / SQLite vector store for natural language semantic search across your entire reading history." },
      { phase: "Phase 3: Automated Audio Briefs", desc: "Connect local Kokoro / Piper TTS to convert generated summaries into 2-minute spoken podcast briefings." }
    ],
    media: [
      {
        type: "image",
        file: "media/projects/summarizer/architecture_pipeline.svg",
        title: "System Architecture & Processing Pipeline",
        caption: "Automated ingestion flow: Email Digest ➔ Freedium Extraction ➔ Ollama DeepSeek-R1:8b ➔ Structured Briefs."
      },
      {
        type: "image",
        file: "media/projects/summarizer/prompt_intelligence_engine.svg",
        title: "Prompt Intelligence & Output Schema",
        caption: "DeepSeek reasoning prompt structure, markdown sanitization rules, and multi-tier digest formatting."
      }
    ]
  },


  // =========================================================================
  // 2. DATA ANALYTICS, BI & AUDIT ENGINES
  // =========================================================================

  // 2.1 Cab Rides Pricing & Surge Analytics (Featured / Wide Rectangular)
  cab_rides: {
    id: "cab_rides",
    title: "Cab Rides Pricing Dynamics & Surge Analytics",
    meta: "2024 · Data Analytics · Python · Pandas · Seaborn · Power BI · Excel",
    category: "data",
    featured: true,
    wide: true,
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "Power BI", "Excel", "Pricing Analytics", "Surge Multipliers"],
    github: "https://github.com/mr-mudgal/cab-rides-analysis",
    liveUrl: "",
    descriptionFile: "content/descriptions/projects/cab_rides.txt",
    description: "A multi-platform exploratory data analysis examining 693,000+ ride-hailing transactions across Boston to uncover pricing elasticity, distance correlations, temporal surge triggers, and weather impact replicated across Python, Power BI, and Excel.",
    highlights: [
      "Surge Pricing Elasticity Analysis: Quantified surge multiplier dynamics showing exponential fare inflation (1.25x–3.0x) during extreme weather and late-night demand peaks.",
      "Multi-Tool Cross-Verification: Replicated the identical analytical pipeline across Python (Pandas/Seaborn), an interactive Power BI dashboard, and structured Excel workbooks.",
      "Feature Engineering & Outlier Remediation: Handled missing tariff records, encoded categorical cab types (UberX, Black, SUV, Lyft Lux), and extracted hour/day/month cyclical timestamps.",
      "Actionable Fleet Allocation Insights: Pinpointed high-demand time windows and rain-surge patterns to recommend optimal driver re-balancing strategies."
    ],
    roadmap: [
      { phase: "Phase 1: Predictive Machine Learning Model", desc: "Train XGBoost / LightGBM regressor to predict dynamic surge multipliers 30 minutes in advance." },
      { phase: "Phase 2: Geospatial Heatmap Integration", desc: "Incorporate Kepler.gl / Folium geospatial layers for street-level GPS pickup and drop-off density mapping." },
      { phase: "Phase 3: Real-Time Streaming Analytics", desc: "Build an Apache Kafka + Streamlit live dashboard for real-time fleet surge monitoring." }
    ],
    media: [
      {
        type: "image",
        file: "media/projects/cab_rides/dist_vs_price.png",
        title: "Distance vs. Price Regression Scatter",
        caption: "Scatter plot illustrating price-per-mile elasticity across standard, luxury, and rideshare cab categories."
      },
      {
        type: "image",
        file: "media/projects/cab_rides/dist_vs_total_price.png",
        title: "Distance vs. Total Aggregate Revenue",
        caption: "Distribution curve mapping ride distance thresholds against gross booking turnover."
      },
      {
        type: "image",
        file: "media/projects/cab_rides/surge_vs_rides.png",
        title: "Surge Multiplier vs. Ride Volume Frequency",
        caption: "Quantifying passenger drop-off rates as surge pricing scales from 1.0x baseline to 3.0x peak multipliers."
      },
      {
        type: "image",
        file: "media/projects/cab_rides/time_vs_price_month.png",
        title: "Hourly Pricing Fluctuations by Month",
        caption: "Diurnal pricing curves comparing rush-hour volatility between November and December."
      },
      {
        type: "image",
        file: "media/projects/cab_rides/month_vs_price_time.png",
        title: "Monthly Price Distribution Heatmap",
        caption: "Macro demand shifts during cold snaps and holiday travel surges."
      },
      {
        type: "image",
        file: "media/projects/cab_rides/dist_vs_count.png",
        title: "Trip Distance Frequency Histogram",
        caption: "Histogram illustrating that 78% of urban cab trips occur within the 1-to-4 mile radius."
      },
      {
        type: "image",
        file: "media/projects/cab_rides/name_vs_count.png",
        title: "Market Share by Cab Category",
        caption: "Volume comparison across UberX, Uber XL, Black, Lyft Lux, and Shared services."
      }
    ]
  },

  // 2.2 Indian Food Culinary Analytics (Portrait)
  indian_food: {
    id: "indian_food",
    title: "Indian Cuisine Culinary Analytics & Flavor Mining",
    meta: "2024 · Data Mining · Python · WordCloud · Seaborn · Power BI",
    category: "data",
    featured: false,
    wide: false,
    tags: ["Python", "Pandas", "Seaborn", "WordCloud", "Power BI", "Data Preprocessing", "Culinary Analytics"],
    github: "https://github.com/mr-mudgal",
    liveUrl: "",
    descriptionFile: "content/descriptions/projects/indian_food.txt",
    description: "An in-depth culinary data exploration analyzing 255+ traditional Indian dishes across 24 states to map flavor profiles, cooking duration distributions, course categories, and regional ingredient ubiquity replicated in Python, Power BI, and Excel.",
    highlights: [
      "Regional Flavor Profile Mapping: Uncovered regional culinary diversity with Seaborn heatmaps correlating spicy, sweet, and sour profiles across Northern, Southern, Eastern, and Western states.",
      "Dietary Preference Breakdown: Quantified the 88.6% vegetarian prevalence in analyzed traditional dishes versus regional non-vegetarian specializations.",
      "High-Density WordCloud Mining: Extracted and visualized staple ingredient frequencies (Sugar, Ginger, Ghee, Garam Masala, Urad Dal) across 200+ recipes.",
      "Preparation vs. Cooking Time Analysis: Categorized dishes by preparation intensity to uncover quick-cook street foods vs. slow-cooked ceremonial delicacies."
    ],
    roadmap: [
      { phase: "Phase 1: Recipe Recommendation Engine", desc: "Build TF-IDF and Cosine Similarity content-based filtering model to recommend dishes based on available pantry ingredients." },
      { phase: "Phase 2: Nutritional Value Estimator", desc: "Integrate USDA / Indian Food Composition Tables to calculate macro and micronutrient breakdowns per serving." },
      { phase: "Phase 3: Interactive Web Culinary Explorer", desc: "Deploy an interactive Streamlit app with dynamic state filters and ingredient-based graph network visualizations." }
    ],
    media: [
      {
        type: "image",
        file: "media/projects/indian_food/wc_ingredients.png",
        title: "Ingredient Frequency WordCloud",
        caption: "High-density WordCloud highlighting the ubiquity of Sugar, Ginger, Ghee, Garam Masala, and Urad Dal across recipes."
      },
      {
        type: "image",
        file: "media/projects/indian_food/state_flavor.png",
        title: "State vs. Flavor Profile Heatmap",
        caption: "Seaborn matrix correlating culinary regions with spicy, sweet, sour, and bitter taste profiles."
      },
      {
        type: "image",
        file: "media/projects/indian_food/region_course.png",
        title: "Regional Course Distribution Matrix",
        caption: "Heatmap analyzing dish categorization (Main Course, Desserts, Snacks) across North, South, East, and West India."
      },
      {
        type: "image",
        file: "media/projects/indian_food/diet_counts.png",
        title: "Dietary Preferences (Vegetarian vs. Non-Veg)",
        caption: "Proportion analysis illustrating the 88.6% national vegetarian dominance in Indian cuisine."
      },
      {
        type: "image",
        file: "media/projects/indian_food/course_wise_cook_time.png",
        title: "Course Type vs. Preparation Time Breakdown",
        caption: "Categorical analysis comparing Quick (<30m), Medium (30-120m), and Long (>120m) cooking requirements."
      },
      {
        type: "image",
        file: "media/projects/indian_food/top_10_ingredients.png",
        title: "Top 10 Staple Ingredients Frequency",
        caption: "Bar chart ranking the most frequently utilized ingredients across all culinary styles."
      },
      {
        type: "image",
        file: "media/projects/indian_food/avg_cook_prep_time.png",
        title: "Average Cooking vs. Preparation Times",
        caption: "Comparative timing benchmarks across sweet courses, main courses, and starters."
      },
      {
        type: "image",
        file: "media/projects/indian_food/state_diet.png",
        title: "State-by-State Dietary Preferences",
        caption: "State-wise breakdown of vegetarian vs. non-vegetarian dish distributions."
      }
    ]
  },

  // 2.3 Workforce Timecard Compliance Engine (Portrait)
  timecard: {
    id: "timecard",
    title: "Workforce Timecard Compliance & Shift Audit Engine",
    meta: "2023 · Data Engineering & Compliance · Python · Pandas",
    category: "data",
    featured: false,
    wide: false,
    tags: ["Python", "Pandas", "ETL", "Compliance Auditing", "Data Cleaning", "Data Analytics"],
    github: "https://github.com/mr-mudgal",
    liveUrl: "",
    descriptionFile: "content/descriptions/projects/timecard.txt",
    description: "Algorithmic audit script analyzing large-scale workforce timecard data to detect consecutive shift violations, overtime anomalies, and break duration non-compliance.",
    highlights: [
      "Fair Work Compliance: Implemented multi-rule validation catching 7-consecutive-day breaches and sub-10-hour shift turnaround risks.",
      "Pandas Time-Delta Heuristics: Optimized datetime parsing to process tens of thousands of punch records in sub-second runtimes.",
      "Actionable Reporting: Automated generation of discrepancy logs for HR and payroll auditing."
    ],
    roadmap: [
      { phase: "Phase 1: Automated PDF Report Engine", desc: "Use ReportLab to generate compliance audit summaries for HR departments." },
      { phase: "Phase 2: Real-Time Webhook Alerting", desc: "Integrate Slack/Teams alerts when live punch logs detect immediate compliance breaches." }
    ],
    media: [
      {
        type: "image",
        file: "media/projects/timecard/excel_dataset_schema.png",
        title: "Timecard Dataset Schema & Punch Matrix",
        caption: "Structured audit log dataset mapping employee IDs, shift start/end timestamps, and break intervals."
      },
      {
        type: "image",
        file: "media/projects/timecard/terminal_audit.svg",
        title: "Compliance Audit Execution & Rule Engine",
        caption: "Terminal audit pipeline displaying rule checks for 7-consecutive-day violations, shift turnaround, and overtime flags."
      }
    ]
  },

  // 2.4 Amazon Multi-Stage Scraper & ETL (Portrait)
  amazon: {
    id: "amazon",
    title: "Amazon Multi-Stage Web Scraper & ETL Pipeline",
    meta: "2024 · Web Scraping & ETL · Python · BeautifulSoup · Anti-Bot Bypass",
    category: "data",
    featured: false,
    wide: false,
    tags: ["Python", "Selenium", "BeautifulSoup", "Anti-Bot Bypass", "ETL Pipeline", "CSV Export"],
    github: "https://github.com/mr-mudgal",
    liveUrl: "",
    descriptionFile: "content/descriptions/projects/amazon.txt",
    description: "Robust multi-threaded scraping architecture that extracts, normalizes, and validates e-commerce product catalogs while bypassing dynamic bot mitigations.",
    highlights: [
      "Anti-Bot Circumvention: Dynamic user-agent rotation and randomized delays preventing IP blocking during high-volume extractions.",
      "Multi-Stage Data Cleaning: Automated pipeline handling currency normalization, rating extractions, and stock availability parsing.",
      "High-Density ETL: Outputting clean, schema-validated JSON/CSV ready for analytical warehousing."
    ],
    roadmap: [
      { phase: "Phase 1: Distributed Scrapy Cluster", desc: "Deploy scraping cluster across AWS Lambda with rotating proxy mesh." },
      { phase: "Phase 2: Price Fluctuation Alerting", desc: "Build SQLite time-series tracker triggering webhooks on sudden price drops." }
    ],
    media: [
      {
        type: "image",
        file: "media/projects/amazon/data_snapshot.png",
        title: "Amazon Extracted Catalog Data Snapshot (products.csv)",
        caption: "Clean ETL schema output showing parsed product titles, prices, ratings, review counts, ASINs, and manufacturers."
      },
      {
        type: "image",
        file: "media/projects/amazon/amazon_scraper_architecture.svg",
        title: "Amazon Multi-Stage Scraper & ETL Architecture",
        caption: "End-to-end scraping pipeline: Anti-Bot Evasion ➔ BeautifulSoup4 Parsing ➔ Schema Normalization ➔ CSV/PostgreSQL Persistence."
      }
    ]
  },

  // 2.5 Flask MySQL Data Service (Portrait)
  flask_mysql: {
    id: "flask_mysql",
    title: "Python Flask & MySQL Relational Data Service",
    meta: "2023 · Backend API & Database · Python · Flask · MySQL",
    category: "data",
    featured: false,
    wide: false,
    tags: ["Python", "Flask", "MySQL", "REST API", "Database Design", "Relational Modeling"],
    github: "https://github.com/mr-mudgal",
    liveUrl: "",
    descriptionFile: "content/descriptions/projects/flask_mysql.txt",
    description: "High-performance REST API backend demonstrating relational database modeling, connection pooling, and optimized query execution using Python and MySQL.",
    highlights: [
      "Relational Normalization: Designed 3NF database schema with foreign key constraints ensuring data integrity.",
      "Connection Pool Optimization: Configured robust MySQL connection handling to prevent thread exhaustion under concurrent requests.",
      "Defensive SQL Execution: Parametrized queries eliminating SQL injection vulnerabilities across all CRUD endpoints."
    ],
    roadmap: [
      { phase: "Phase 1: SQLAlchemy ORM Migration", desc: "Abstract raw SQL queries into declarative SQLAlchemy models with Alembic migrations." },
      { phase: "Phase 2: Redis Query Cache", desc: "Implement Redis LRU caching for frequent read endpoints to achieve sub-10ms response times." }
    ],
    media: [
      {
        type: "image",
        file: "media/projects/flask_mysql/all_users_table.png",
        title: "All Users Relational Data Table",
        caption: "Relational table view displaying normalized user records with ID, name, email, and timestamp metadata."
      },
      {
        type: "image",
        file: "media/projects/flask_mysql/single_user_detail.png",
        title: "Single User Record Query View",
        caption: "Parameterized query lookup returning individual user profile entity with relational constraints."
      },
      {
        type: "image",
        file: "media/projects/flask_mysql/home_route.png",
        title: "API Gateway & Home Endpoint",
        caption: "Flask route controller gateway providing service status and endpoint documentation."
      },
      {
        type: "image",
        file: "media/projects/flask_mysql/error_404_page.png",
        title: "Custom 404 Exception Handler",
        caption: "Defensive error page redirecting unauthorized or nonexistent database queries gracefully."
      }
    ]
  },


  // =========================================================================
  // 3. PYTHON BACKEND ARCHITECTURE, AUTOMATION & SAAS
  // =========================================================================

  // 3.1 Social Media Automation Matrix (Featured / Wide Rectangular)
  social: {
    id: "social",
    title: "Social Media Automation Matrix",
    meta: "2024 · Python Automation · Selenium · Anti-Bot Evasion · Colorama",
    category: "python",
    featured: true,
    wide: true,
    tags: ["Python 3.11", "Selenium", "Anti-Bot Bypass", "Colorama", "Session Persistence", "Pillow ETL", "Multi-Platform"],
    github: "https://github.com/mr-mudgal",
    liveUrl: "",
    descriptionFile: "content/descriptions/projects/social.txt",
    description: "An enterprise-grade Python automation engine for multi-platform content scheduling across Twitter/X, LinkedIn, and Instagram, featuring humanized keystroke delays, Bézier mouse curves, encrypted cookie session caching, and live Colorama telemetry.",
    highlights: [
      "Anti-Bot Evasion Shield: Emulates human stochastic typing jitter (60ms ± 35ms), Bézier pointer trajectories, and navigator.webdriver masking (99.8% session survival).",
      "60% Reduction in Manual Effort: Fully automated media format validation (4:5 / 1:1), EXIF metadata stripping, dynamic hashtag rotation, and multi-network dispatch.",
      "Cookie Session Persistence: Serializes authenticated sessions to encrypted storage, bypassing recurring 2FA triggers and high-risk login endpoints.",
      "40% Faster Transaction Throughput: Optimized DOM wait heuristics (WebDriverWait) and asynchronous string/image pre-flight processing."
    ],
    roadmap: [
      { phase: "Phase 1: Multi-Account Concurrency", desc: "Integrate Asyncio worker pools to manage 10+ distinct brand profiles concurrently." },
      { phase: "Phase 2: Local LLM Dynamic Copywriting", desc: "Connect local Ollama (deepseek-r1 / qwen2.5) for automated contextual caption generation." },
      { phase: "Phase 3: Web-Based Campaign Matrix", desc: "Deploy lightweight FastAPI + React dashboard for visual drag-and-drop campaign planning." }
    ],
    media: [
      {
        type: "image",
        file: "media/projects/social/social_automation_demo.gif",
        title: "Live Execution & Anti-Bot Telemetry Demo",
        caption: "Simulated terminal matrix execution demonstrating pre-flight media validation, Gaussian typing jitter, and parallel 3-platform dispatch."
      },
      {
        type: "image",
        file: "media/projects/social/automation_matrix_flow.svg",
        title: "Multi-Platform Anti-Bot Architecture",
        caption: "Defensive architecture flow covering pre-flight sanitization, behavioral anti-bot shield, multi-network dispatch, and Colorama telemetry."
      }
    ]
  },

  // 3.2 Flask GraphQL & Keycloak Task Platform with Stripe SaaS (Portrait)
  graphql_todo: {
    id: "graphql_todo",
    title: "Flask GraphQL & Keycloak Task Platform with Stripe SaaS",
    meta: "2023 · Python · Flask · Graphene GraphQL · Keycloak OIDC · MySQL · Stripe",
    category: "python",
    featured: false,
    wide: false,
    tags: ["Python", "Flask", "GraphQL (Graphene)", "Keycloak OIDC", "Stripe API", "MySQL", "OAuth2 / SSO", "SaaS"],
    github: "https://github.com/mr-mudgal",
    liveUrl: "",
    descriptionFile: "content/descriptions/projects/graphql_todo.txt",
    description: "An enterprise-grade full-stack task management SaaS platform combining Python Flask, Graphene GraphQL API schema (Queries & Mutations), Keycloak OpenID Connect (OIDC) single sign-on authentication, MySQL relational persistence, and Stripe subscription payment processing.",
    highlights: [
      "Keycloak OIDC Identity Federation: Full Single Sign-On (SSO) integration using flask_oidc and KeycloakOpenID realm 'myorg' with token introspection and protected routes.",
      "Graphene GraphQL Engine: Replaces traditional REST endpoints with declarative GraphQL queries (resolve_todos, resolve_todo) and transactional mutations (CreateToDo, UpdateToDo, DeleteToDo).",
      "Stripe Subscription Billing: Test-mode Stripe Checkout session integration unlocking gated Pro license features and media task attachments.",
      "User-Isolated MySQL Persistence: Multi-tenant relational database schema strictly joining on Keycloak 'sub' user IDs for total data privacy."
    ],
    roadmap: [
      { phase: "Phase 1: Async GraphQL Subscriptions", desc: "Introduce GraphQL Subscriptions over WebSockets for live collaborative task editing." },
      { phase: "Phase 2: Docker Multi-Container Compose", desc: "Bundle Flask, Keycloak, MySQL, and Mailhog into a one-command Docker Compose environment." },
      { phase: "Phase 3: Webhook Verification Service", desc: "Implement Stripe signature verification webhooks with automated database provisioning." }
    ],
    media: [
      {
        type: "image",
        file: "media/projects/graphql_todo/list_all_todos.png",
        title: "All To-Dos Table View (Pro Licensed)",
        caption: "Authenticated dashboard with darkblue navigation, dodgerblue Pro license badge, task table, and Edit/Delete options."
      },
      {
        type: "image",
        file: "media/projects/graphql_todo/home_instructions.png",
        title: "Home Page & Keycloak Login Gateway",
        caption: "Usage instructions, unauthenticated landing state, and Keycloak OpenID Connect SSO integration."
      },
      {
        type: "image",
        file: "media/projects/graphql_todo/add_todo_form.png",
        title: "Add To-Do GraphQL Mutation Form",
        caption: "Fieldset input form supporting Title, Description, Time picker, and Pro image attachment fields."
      },
      {
        type: "image",
        file: "media/projects/graphql_todo/architecture_diagram.svg",
        title: "Enterprise SaaS System Architecture",
        caption: "End-to-end architecture flow: Keycloak IAM ➔ Flask Middleware ➔ Graphene GraphQL ➔ MySQL ➔ Stripe Billing."
      }
    ]
  },

  // 3.3 Django Dynamic Budget Allocation (Portrait)
  budget: {
    id: "budget",
    title: "Python Django Dynamic Budget Allocation App",
    meta: "2023 · Web Application & Finance · Python · Django",
    category: "python",
    featured: false,
    wide: false,
    tags: ["Python", "Django", "ORM", "Web Application", "Financial Modeling", "MVC"],
    github: "https://github.com/mr-mudgal",
    liveUrl: "",
    descriptionFile: "content/descriptions/projects/budget.txt",
    description: "Interactive fiscal planning application engineered with Django MVC architecture, dynamic budget variance tracking, and relational financial modeling.",
    highlights: [
      "Django ORM Aggregations: Optimized database queries for real-time recalculation of expense variances and account balances.",
      "Custom User Authentication: Implemented secure session handling and role-based permissions for multi-budget ownership.",
      "Clean UI Components: Designed modular template layouts for rapid expense logging and budget category allocation."
    ],
    roadmap: [
      { phase: "Phase 1: Chart.js Visualizations", desc: "Add interactive doughnut and waterfall charts for visual category breakdowns." },
      { phase: "Phase 2: Plaid API Bank Sync", desc: "Integrate Plaid API for automated bank statement synchronization and transaction categorization." }
    ],
    media: [
      {
        type: "image",
        file: "media/projects/budget/desktop_budget_table.png",
        title: "Desktop Dynamic Budget Allocation Table",
        caption: "Responsive budget overview table with category allocations, spent totals, and remaining variance calculations."
      },
      {
        type: "image",
        file: "media/projects/budget/desktop_add_budget.png",
        title: "Add Budget & Allocation Form",
        caption: "Modal form for creating financial categories, setting spending thresholds, and linking bank accounts."
      },
      {
        type: "image",
        file: "media/projects/budget/mobile_nav_menu.png",
        title: "Mobile Responsive Navigation",
        caption: "Optimized mobile sidebar providing seamless access to reports, categories, and account settings."
      },
      {
        type: "image",
        file: "media/projects/budget/mobile_add_category.png",
        title: "Mobile Expense Category Creator",
        caption: "Touch-friendly interface for adding dynamic expense tags and setting monthly alert thresholds."
      }
    ]
  },

  // 3.4 GFG 160 Algorithmic DSA Challenge (Portrait)
  gfg160: {
    id: "gfg160",
    title: "GeeksforGeeks 160-Day Algorithmic DSA Challenge",
    meta: "2024 · Data Structures & Algorithms · Python",
    category: "python",
    featured: false,
    wide: false,
    tags: ["Python", "Algorithms", "Data Structures", "Dynamic Programming", "Trees & Graphs", "Complexity Optimization"],
    github: "https://github.com/mr-mudgal",
    liveUrl: "",
    descriptionFile: "content/descriptions/projects/gfg160.txt",
    description: "Curated repository of 160+ rigorous algorithmic solutions covering arrays, trees, dynamic programming, backtracking, and graph algorithms in Python.",
    highlights: [
      "Time & Space Optimization: Engineered solutions achieving optimal O(N) or O(log N) runtime complexities.",
      "Deep Data Structure Mastery: Thorough coverage of balanced binary search trees, disjoint set unions, and bit manipulation.",
      "Clean Python Idioms: Leveraging collections, heapq, and itertools for expressive, highly performant code."
    ],
    roadmap: [
      { phase: "Phase 1: Automated Unit Test Suite", desc: "Implement PyTest suite with randomized boundary condition generators." },
      { phase: "Phase 2: Interactive Problem Visualizer", desc: "Build lightweight interactive visualization tool for tree traversals and graph algorithms." }
    ],
    media: [
      {
        type: "image",
        file: "media/projects/gfg160/dsa_mastery_matrix.svg",
        title: "Algorithmic Mastery & Problem Taxonomy Matrix",
        caption: "Comprehensive 160-day roadmap covering Arrays, Strings, Sorting, Searching, Matrix, Linked List, Trees, BST, Heap, Recursion, Stack, Queue, DP, and Graphs."
      }
    ]
  },


  // =========================================================================
  // 4. SECURITY, DEVOPS & CLOUD SYSTEMS
  // =========================================================================

  // 4.1 Password Breach Checker & Security Auditor (Portrait)
  pbc: {
    id: "pbc",
    title: "Password Breach Checker & Security Auditor",
    meta: "2024 · Cyber Security & Cryptography · Python · SHA-1 · HIBP API",
    category: "security",
    featured: false,
    wide: false,
    tags: ["Python", "Cryptography", "SHA-1 Hashing", "k-Anonymity", "HIBP API", "Security Auditing"],
    github: "https://github.com/mr-mudgal",
    liveUrl: "",
    descriptionFile: "content/descriptions/projects/pbc.txt",
    description: "Zero-knowledge security utility checking credentials against billions of compromised records using SHA-1 k-anonymity API models.",
    highlights: [
      "k-Anonymity Cryptographic Design: Transmits only the 5-character SHA-1 prefix, ensuring plaintext credentials never cross the network wire.",
      "Batch Security Audits: Engineered CLI tool capable of processing organization password registries efficiently.",
      "Zero-Trust Architecture: No local credential caching or logging, guaranteeing absolute privacy."
    ],
    roadmap: [
      { phase: "Phase 1: Enterprise CSV Auditor", desc: "Add secure enterprise mode to audit active directory hash dumps offline." },
      { phase: "Phase 2: GUI Security Suite", desc: "Build modern Electron/Tauri frontend with entropy visualizers and breach alerts." }
    ],
    media: [
      {
        type: "image",
        file: "media/projects/pbc/home_search_interface.png",
        title: "k-Anonymity Security Audit Search Portal",
        caption: "Zero-knowledge search interface demonstrating SHA-1 hash prefix generation before network dispatch."
      },
      {
        type: "image",
        file: "media/projects/pbc/safe_password_result.png",
        title: "Secure Credential Verification Result",
        caption: "Clean audit outcome confirming zero matches found across 10+ billion public breach dumps."
      },
      {
        type: "image",
        file: "media/projects/pbc/breached_password_result.png",
        title: "Compromised Credential Warning & Breach Frequency",
        caption: "High-severity alert indicating exact breach exposure count and immediate password rotation recommendations."
      }
    ]
  },

  // 4.2 Containerized Django Registration & Referral System (Portrait)
  docker_auth: {
    id: "docker_auth",
    title: "Containerized Django User Registration & Referral System",
    meta: "2023 · DevOps & Backend · Docker · Django · Celery · Redis · PostgreSQL",
    category: "devops",
    featured: false,
    wide: false,
    tags: ["Docker", "Docker Compose", "Django", "Celery", "Redis", "PostgreSQL", "Microservices"],
    github: "https://github.com/mr-mudgal",
    liveUrl: "",
    descriptionFile: "content/descriptions/projects/docker_auth.txt",
    description: "Production-ready containerized microservices stack deploying Django authentication with Celery asynchronous email dispatch and Redis message brokers.",
    highlights: [
      "Multi-Container Orchestration: Docker Compose architecture linking Django, PostgreSQL, Redis, and Celery workers.",
      "Asynchronous Worker Queues: Offloaded transactional email dispatch to background Celery workers, preventing request thread blocking.",
      "Environment Isolation: Production-grade .env secret segregation and multi-stage container optimization."
    ],
    roadmap: [
      { phase: "Phase 1: Kubernetes Helm Charts", desc: "Package microservices stack into production Kubernetes Helm charts with auto-scaling." },
      { phase: "Phase 2: CI/CD GitHub Actions Pipeline", desc: "Automate build, lint, unit test, and Docker Hub image deployment on git push." }
    ],
    media: [
      {
        type: "image",
        file: "media/projects/docker_auth/home_landing.png",
        title: "Containerized Microservices Landing Gateway",
        caption: "Django entrypoint connected to PostgreSQL and Redis containers with session state verification."
      },
      {
        type: "image",
        file: "media/projects/docker_auth/registration_form.png",
        title: "User Registration & Referral Ingestion",
        caption: "Sign-up portal capturing user credentials and validating dynamic referral invite tokens."
      },
      {
        type: "image",
        file: "media/projects/docker_auth/user_dashboard.png",
        title: "Authenticated User Dashboard",
        caption: "Personal profile management displaying account creation timestamp and unique referral link generation."
      },
      {
        type: "image",
        file: "media/projects/docker_auth/referrals_list.png",
        title: "Referral Network Tracking Matrix",
        caption: "Relational tracking view displaying referred user registrations and reward statuses."
      }
    ]
  },


  // =========================================================================
  // 5. FULL-STACK WEB DEVELOPMENT & REAL-TIME PLATFORMS
  // =========================================================================

  // 5.1 The KR Chat WebSocket Platform (Portrait)
  krchat: {
    id: "krchat",
    title: "The KR Chat — Real-Time WebSocket Messaging Platform",
    meta: "2023 · Full-Stack & Real-Time · Socket.IO · Node.js · Express · MongoDB · PUG",
    category: "frontend",
    featured: false,
    wide: false,
    tags: ["Socket.IO", "Node.js", "Express", "MongoDB", "PUG Template", "Vanilla CSS", "WebSockets", "Real-Time"],
    github: "https://github.com/mr-mudgal/kr-chat-docker-mern",
    liveUrl: "",
    descriptionFile: "content/descriptions/projects/krchat.txt",
    description: "An event-driven real-time chat application engineered with Socket.IO bi-directional websockets, Node.js event loops, MongoDB document persistence, and server-rendered PUG templates supporting live typing indicators and instant group messaging.",
    highlights: [
      "Bi-Directional WebSocket Architecture: Low-latency Socket.IO event broadcasting for instantaneous 1-on-1 and multi-room group messaging.",
      "Live Connection & Typing Telemetry: Real-time broadcast triggers for user online/offline status, typing indicators, and message delivery states.",
      "Document Persistence & Schemas: MongoDB Mongoose data modeling storing user profiles, chat history, and conversation metadata.",
      "Containerized Execution: Dockerized application setup for zero-configuration local multi-client deployment."
    ],
    roadmap: [
      { phase: "Phase 1: Full MERN Stack Refactor", desc: "Migrate server-rendered PUG views to a decoupled, responsive React + Tailwind frontend." },
      { phase: "Phase 2: End-to-End Media Transfer", desc: "Integrate AWS S3 / Cloudinary for rich image, audio, and file attachment sharing." },
      { phase: "Phase 3: User Privacy Controls", desc: "Implement contact blocking, editable user profiles, and light/dark theme toggle." }
    ],
    media: [
      {
        type: "image",
        file: "media/projects/krchat/chat_hub.png",
        title: "Real-Time Chat Hub & Active Conversation Feed",
        caption: "Active chatroom displaying bi-directional websocket message delivery, active typing indicator, and conversation feed."
      },
      {
        type: "image",
        file: "media/projects/krchat/direct_messaging.png",
        title: "1-on-1 Direct Messaging & Group Channels",
        caption: "Low-latency private chat view showing message history, timestamps, and active online status."
      },
      {
        type: "image",
        file: "media/projects/krchat/home_authenticated.png",
        title: "Authenticated User Home Dashboard",
        caption: "User dashboard after secure session initialization showing connected peers and group channels."
      },
      {
        type: "image",
        file: "media/projects/krchat/search_people_groups.png",
        title: "Discover People & Group Search Engine",
        caption: "Search modal enabling real-time lookup and connection requests for new users and public groups."
      },
      {
        type: "image",
        file: "media/projects/krchat/signin_portal.png",
        title: "Sign In & Session Authentication Portal",
        caption: "Secure login view authenticating against MongoDB encrypted password hashes."
      },
      {
        type: "image",
        file: "media/projects/krchat/user_profile.png",
        title: "User Profile & Account Settings",
        caption: "Profile details view showing user handle, bio, and account status."
      }
    ]
  },

  // 5.2 Full Stack MERN Book Management System (Portrait)
  bms: {
    id: "bms",
    title: "Full Stack MERN Book Management System",
    meta: "2023 · Full Stack Web App · MongoDB · Express · React · Node.js",
    category: "frontend",
    featured: false,
    wide: false,
    tags: ["React", "Node.js", "Express", "MongoDB", "MERN Stack", "REST API", "Tailwind CSS"],
    github: "https://github.com/mr-mudgal",
    liveUrl: "https://book-management-system-frontend.vercel.app/",
    descriptionFile: "content/descriptions/projects/bms.txt",
    description: "Production-ready MERN application with RESTful API endpoints, MongoDB Atlas persistence, and a modern responsive React interface with full CRUD lifecycle.",
    highlights: [
      "RESTful API Design: Express and Node.js backend with robust routing, schema validation, and structured error responses.",
      "React SPA Architecture: Modular component hierarchy featuring stateful modals, search filtering, and optimistic UI updates.",
      "Cloud Database Persistence: MongoDB Atlas integration with Mongoose ODM modeling and automated indexing."
    ],
    roadmap: [
      { phase: "Phase 1: JWT Role-Based Access", desc: "Add Admin vs User roles with permission gates for book deletion and edits." },
      { phase: "Phase 2: PDF Preview & Book Reader", desc: "Integrate PDF.js reader component allowing in-browser book reading and bookmarking." }
    ],
    media: [
      {
        type: "image",
        file: "media/projects/bms/pc_read_all_books.png",
        title: "Desktop Book Catalog Table View",
        caption: "Full catalog table displaying book titles, authors, publication dates, and instant action buttons."
      },
      {
        type: "image",
        file: "media/projects/bms/pc_create_book.png",
        title: "Create Book Modal (Desktop)",
        caption: "Interactive form with client-side validation for publishing new book entries into MongoDB Atlas."
      },
      {
        type: "image",
        file: "media/projects/bms/pc_edit_modal.png",
        title: "Edit Book Details Modal (Desktop)",
        caption: "Pre-populated modal form enabling seamless updates to book metadata."
      },
      {
        type: "image",
        file: "media/projects/bms/pc_live_search.png",
        title: "Real-Time Live Search & Filtering",
        caption: "Instant debounced search indexing books dynamically by title and author."
      },
      {
        type: "image",
        file: "media/projects/bms/mobile_home.png",
        title: "Mobile Responsive Home View",
        caption: "Touch-optimized mobile interface displaying catalog statistics and quick navigation."
      },
      {
        type: "image",
        file: "media/projects/bms/mobile_read_all_books.png",
        title: "Mobile Card Catalog View",
        caption: "Fluid card-based layout for seamless scrolling on smartphones and tablets."
      }
    ]
  },

  // 5.3 Weather Intelligence Web App (Portrait)
  weather: {
    id: "weather",
    title: "Multi-City Weather Intelligence Web App",
    meta: "2023 · Frontend & API Integration · JavaScript · OpenWeather API",
    category: "frontend",
    featured: false,
    wide: false,
    tags: ["JavaScript", "HTML5", "CSS3", "REST API", "Weather API", "Asynchronous JS"],
    github: "https://github.com/mr-mudgal",
    liveUrl: "https://mr-mudgal.github.io/weather-app/",
    descriptionFile: "content/descriptions/projects/weather.txt",
    description: "Responsive weather application fetching live meteorological data from OpenWeatherMap API with dynamic microclimate visualizations and error handling.",
    highlights: [
      "Asynchronous API Integration: Fetch API and Promises managing live meteorological queries with zero UI freezing.",
      "Dynamic Condition Rendering: UI changes themes and icons according to real-time temperature, humidity, and cloud cover.",
      "Input Validation & Geolocation: Defensive handling of invalid city queries and auto-detection of client coordinates."
    ],
    roadmap: [
      { phase: "Phase 1: 7-Day Forecast Matrix", desc: "Integrate OpenWeather 3.0 OneCall API to render interactive weekly forecast charts." },
      { phase: "Phase 2: Offline PWA Support", desc: "Implement Service Workers to cache recent city forecasts for offline availability." }
    ],
    media: [
      {
        type: "image",
        file: "media/projects/weather/multi_city_results.png",
        title: "Multi-City Weather Comparison Matrix",
        caption: "Simultaneous weather intelligence display tracking temperature, humidity, and wind conditions across multiple cities."
      },
      {
        type: "image",
        file: "media/projects/weather/single_city_result.png",
        title: "Detailed Meteorological City View",
        caption: "Deep-dive view showing barometric pressure, wind speeds, visibility, and current weather icons."
      },
      {
        type: "image",
        file: "media/projects/weather/home_search.png",
        title: "Home City Search Gateway",
        caption: "Clean search portal with auto-complete and geolocation coordinate detection."
      }
    ]
  },

  // 5.4 Interactive Product Listing React App (Portrait)
  product_listing: {
    id: "product_listing",
    title: "Interactive Product Listing React Application",
    meta: "2023 · Frontend Engineering · React · State Management",
    category: "frontend",
    featured: false,
    wide: false,
    tags: ["React", "JavaScript", "State Management", "Faceted Filtering", "CSS Grid", "UI Engineering"],
    github: "https://github.com/mr-mudgal",
    liveUrl: "",
    descriptionFile: "content/descriptions/projects/product_listing.txt",
    description: "High-performance React e-commerce catalog featuring multi-attribute faceted filtering, dynamic price range sliders, and instant search.",
    highlights: [
      "Optimized State Pipeline: React hooks managing complex multi-dimensional filter arrays without unnecessary re-renders.",
      "Responsive Layout Grid: CSS Grid and Flexbox ensuring fluid product card re-alignments across all viewport sizes.",
      "Debounced Search: Implemented custom debounce hooks to ensure smooth text filtering on large catalogs."
    ],
    roadmap: [
      { phase: "Phase 1: Persistent Cart & Wishlist", desc: "Connect Redux Toolkit / Zustand with LocalStorage for persistent user shopping states." },
      { phase: "Phase 2: Micro-Animations & Skeleton Loading", desc: "Implement Framer Motion transitions and skeleton loaders during catalog state changes." }
    ],
    media: [
      {
        type: "image",
        file: "media/projects/product_listing/catalog_overview.png",
        title: "Interactive E-Commerce Product Feed",
        caption: "Faceted filtering catalog view displaying responsive card grid, rating stars, price filters, and instant search."
      }
    ]
  },

  // 5.5 Nothing. Website Clone (V1) (Portrait)
  nothing: {
    id: "nothing",
    title: "Nothing. Website Clone (V1)",
    meta: "2023 · Frontend UI Engineering · HTML5 · CSS3 · JavaScript",
    category: "frontend",
    featured: false,
    wide: false,
    tags: ["HTML5", "CSS3", "JavaScript", "Dot-Matrix Typography", "UI/UX Replication", "Responsive Design"],
    github: "https://github.com/mr-mudgal",
    liveUrl: "https://mr-mudgal.github.io/nothing_clone-v1-/",
    descriptionFile: "content/descriptions/projects/nothing.txt",
    description: "Pixel-accurate front-end replication of the iconic Nothing Tech website, featuring industrial dot-matrix typography, monochrome aesthetics, and responsive layout.",
    highlights: [
      "Design Fidelity: Faithfully replicated Nothing's signature raw industrial aesthetic, bespoke typography, and glassmorphism.",
      "Pure Vanilla Implementation: Zero heavy frameworks, ensuring ultra-lightweight bundle size and instant load times.",
      "Responsive Layout: Fluid CSS media queries providing seamless user experience from mobile to ultra-wide displays."
    ],
    roadmap: [
      { phase: "Phase 1: V2 Interactive Glyph Matrix", desc: "Build interactive SVG canvas rendering configurable Glyph Interface LED light sequences." },
      { phase: "Phase 2: Three.js 3D Phone Model", desc: "Embed an interactive 3D Nothing Phone model with rotational drag and glass transparency shaders." }
    ],
    media: [
      {
        type: "image",
        file: "media/projects/nothing/preview.gif",
        title: "Live Interactive Nothing Clone Demo",
        caption: "Full interactive walkthrough showcasing dot-matrix typography, smooth scroll physics, and minimalist monochrome UI."
      }
    ]
  }
};
