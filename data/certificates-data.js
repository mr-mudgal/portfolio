/**
 * ============================================================================
 * CERTIFICATES REGISTRY & DYNAMIC MEDIA CONFIGURATION
 * ============================================================================
 * To add a new certificate:
 * 1. Place your PDF, Image, or Video in 'media/certificates/' (e.g. 'media/certificates/my-cert.pdf')
 * 2. Optionally add a description text file in 'content/descriptions/certificates/<cert-id>.txt'
 * 3. Add an entry below to the window.PORTFOLIO_CERTIFICATES object.
 *
 * Supported media types for items:
 * - "pdf"   : renders responsive PDF iframe + download button + open-tab button
 * - "image" : renders responsive SVG / PNG / JPG / WEBP certificate image
 * - "video" : renders responsive HTML5 video player with controls
 *
 * Categories available:
 * - "ai"       : AI & Machine Learning
 * - "data"     : Data Science & Analytics
 * - "python"   : Python & Backend
 * - "devops"   : DevOps & Cloud
 * - "security" : Security & Testing
 * - "frontend" : Frontend & Core
 * ============================================================================
 */

window.PORTFOLIO_CERTIFICATES = {
  // ==========================================
  // GROUP 1: AI, GENERATIVE AI & ML
  // ==========================================
  techsaksham_genai: {
    id: "techsaksham_genai",
    title: "Foundation Course on Generative AI",
    issuer: "Microsoft & SAP",
    issuerClass: "issuer--techsaksham",
    category: "ai",
    badge: "Verified",
    descriptionFile: "content/descriptions/certificates/techsaksham_genai.txt",
    desc: "Comprehensive joint industry certification by Microsoft & SAP validating deep technical mastery of Large Language Model (LLM) architectures, multi-head attention mechanisms, parameter-efficient fine-tuning (PEFT/LoRA), multimodal diffusion pipelines, and production prompt orchestration.",
    items: [
      { label: "TechSaksham Certificate", file: "media/certificates/Microsoft.pdf", type: "pdf", isPdf: true }
    ]
  },
  ai_launchpad: {
    id: "ai_launchpad",
    title: "Artificial Intelligence",
    issuer: "Google Developers Launchpad",
    issuerClass: "issuer--google",
    category: "ai",
    badge: "Verified",
    desc: "Rigorous credential demonstrating competency in designing intelligent autonomous agents, heuristic state-space search algorithms (A*, minimax with alpha-beta pruning), probabilistic reasoning, semantic knowledge graphs, and decision-theoretic AI systems.",
    items: [
      { label: "Google Launchpad", file: "media/certificates/Rishabh Mudgal (Mr. Mudgal)_Artificial Intelligence.pdf", type: "pdf", isPdf: true }
    ]
  },
  ml_launchpad: {
    id: "ml_launchpad",
    title: "Machine Learning",
    issuer: "Google Developers Launchpad",
    issuerClass: "issuer--google",
    category: "ai",
    badge: "2 Certs",
    desc: "Dual-credential certification verifying end-to-end machine learning engineering in Python—spanning supervised & unsupervised algorithms, ensemble modeling (Random Forests, Gradient Boosting), SVMs, hyperparameter optimization, and statistical validation metrics (ROC-AUC, Precision-Recall).",
    items: [
      { label: "Google Launchpad", file: "media/certificates/Rishabh Mudgal (Mr. Mudgal)_Machine Learning.pdf", type: "pdf", isPdf: true },
      { label: "Google Launchpad", file: "media/certificates/Rishabh Mudgal (Mr. Mudgal)_Machine learning using Python.pdf", type: "pdf", isPdf: true }
    ]
  },
  nlp_launchpad: {
    id: "nlp_launchpad",
    title: "Natural Language Processing",
    issuer: "Google Developers Launchpad",
    issuerClass: "issuer--google",
    category: "ai",
    badge: "Verified",
    desc: "Comprehensive validation in computational linguistics and NLP engineering—covering transformer-based attention architectures, subword tokenization, Word2Vec/GloVe dense embeddings, named entity recognition (NER), sequence-to-sequence modeling, and contextual sentiment analysis engines.",
    items: [
      { label: "Google Launchpad", file: "media/certificates/Rishabh_Mudgal_Mr_Mudgal_Natural_Language_Processing_NLP.pdf", type: "pdf", isPdf: true }
    ]
  },
  cv_launchpad: {
    id: "cv_launchpad",
    title: "Computer Vision",
    issuer: "Google Developers Launchpad",
    issuerClass: "issuer--google",
    category: "ai",
    badge: "Verified",
    desc: "Industry-grade credential in computer vision engineering using Python & OpenCV—encompassing deep Convolutional Neural Networks (CNNs), transfer learning, edge detection kernels, spatial feature extraction, dynamic bounding box regression, and real-time object detection pipelines.",
    items: [
      { label: "Google Launchpad", file: "media/certificates/Rishabh Mudgal (Mr. Mudgal)_Computer Vision using Python.pdf", type: "pdf", isPdf: true }
    ]
  },
  chatgpt_launchpad: {
    id: "chatgpt_launchpad",
    title: "ChatGPT & Prompt Engineering",
    issuer: "Google Developers Launchpad",
    issuerClass: "issuer--google",
    category: "ai",
    badge: "Verified",
    desc: "Demonstrated expertise in advanced prompt engineering methodologies, structured JSON schema output steering, Chain-of-Thought (CoT) multi-step reasoning, dynamic context window management, few-shot prompting strategies, and enterprise OpenAI API microservice integration.",
    items: [
      { label: "Google Launchpad", file: "media/certificates/Rishabh Mudgal (Mr. Mudgal)_ChatGPT.pdf", type: "pdf", isPdf: true }
    ]
  },


  // ==========================================
  // GROUP 2: DATA SCIENCE & ANALYTICS
  // ==========================================
  ds_gl: {
    id: "ds_gl",
    title: "Data Science",
    issuer: "Great Learning & Google Launchpad",
    issuerClass: "issuer--greatlearning",
    category: "data",
    badge: "2 Certs",
    desc: "Dual-institution specialization validating complete data science lifecycle proficiency—including robust exploratory data analysis (EDA), hypothesis testing, multivariate statistical inference, automated Pandas/NumPy data wrangling, and predictive regression modeling.",
    items: [
      { label: "Great Learning", file: "media/certificates/Data Science (basic, GL).pdf", type: "pdf", isPdf: true },
      { label: "Google Launchpad", file: "media/certificates/Rishabh Mudgal (Mr. Mudgal)_Data Science.pdf", type: "pdf", isPdf: true }
    ]
  },
  data_preprocessing_gl: {
    id: "data_preprocessing_gl",
    title: "Data Preprocessing",
    issuer: "Great Learning",
    issuerClass: "issuer--greatlearning",
    category: "data",
    badge: "Verified",
    desc: "Specialized certification in production-grade data preparation and ETL feature engineering—mastering imputation strategies, statistical outlier detection, MinMax/Standard scaling, categorical encoding (One-Hot, Target), dimensionality reduction, and automated data cleaning pipelines.",
    items: [
      { label: "Great Learning", file: "media/certificates/Data Preprocessing (inter, GL).pdf", type: "pdf", isPdf: true }
    ]
  },
  powerbi_gl: {
    id: "powerbi_gl",
    title: "Power BI for Business Intelligence",
    issuer: "Great Learning",
    issuerClass: "issuer--greatlearning",
    category: "data",
    badge: "Verified",
    desc: "Professional business intelligence credential focused on enterprise data storytelling, advanced DAX calculated measures, Star schema data modeling, interactive KPI executive dashboards, and automated multi-source reporting pipelines.",
    items: [
      { label: "Great Learning", file: "media/certificates/Power BI (inter, GL).pdf", type: "pdf", isPdf: true }
    ]
  },
  dsa_launchpad: {
    id: "dsa_launchpad",
    title: "Data Structures & Algorithms",
    issuer: "Google Developers Launchpad",
    issuerClass: "issuer--google",
    category: "data",
    badge: "Verified",
    desc: "Core computer science credential validating rigorous algorithmic problem-solving—mastering dynamic programming paradigms, balanced binary search trees, graph traversal (BFS/DFS, Dijkstra), asymptotic Big-O runtime optimization, and memory-efficient data structure design.",
    items: [
      { label: "Google Launchpad", file: "media/certificates/Rishabh Mudgal (Mr. Mudgal)_Data Structure and Algorithms.pdf", type: "pdf", isPdf: true }
    ]
  },


  // ==========================================
  // GROUP 3: PYTHON & BACKEND ARCHITECTURE
  // ==========================================
  python_mastery: {
    id: "python_mastery",
    title: "Python Programming & Advanced Architecture",
    issuer: "Google Developers Launchpad",
    issuerClass: "issuer--google",
    category: "python",
    badge: "4 Certs",
    desc: "Elite 4-tier certification track validating advanced Python software engineering—encompassing asynchronous concurrency (asyncio), generator-based memory streaming, decorator metaprogramming, OOP design patterns, unit testing frameworks, and high-performance backend architecture.",
    items: [
      { label: "Google Launchpad", file: "media/certificates/Rishabh Mudgal (Mr. Mudgal)_Python 3.pdf", type: "pdf", isPdf: true },
      { label: "Google Launchpad", file: "media/certificates/Rishabh Mudgal (Mr. Mudgal)_Python Advanced.pdf", type: "pdf", isPdf: true },
      { label: "Google Launchpad", file: "media/certificates/Rishabh Mudgal (Mr. Mudgal)_Python for A.I.pdf", type: "pdf", isPdf: true },
      { label: "Google Launchpad", file: "media/certificates/Rishabh Mudgal (Mr. Mudgal)_Python.pdf", type: "pdf", isPdf: true }
    ]
  },
  sql_mastery: {
    id: "sql_mastery",
    title: "SQL & Relational Database Architecture",
    issuer: "HackerRank & Google Launchpad",
    issuerClass: "issuer--hackerrank",
    category: "python",
    badge: "2 Certs",
    descriptionFile: "content/descriptions/certificates/sql_mastery.txt",
    desc: "Dual-verified certification demonstrating advanced relational SQL database engineering—specializing in complex multi-table joins, analytical window functions, Common Table Expressions (CTEs), B-tree indexing strategies, execution plan query optimization, and schema normalization.",
    items: [
      { label: "HackerRank", file: "media/certificates/sql-hackerrank.pdf", type: "pdf", isPdf: true },
      { label: "Google Launchpad", file: "media/certificates/Rishabh Mudgal (Mr. Mudgal)_SQL.pdf", type: "pdf", isPdf: true }
    ]
  },
  rdbms_launchpad: {
    id: "rdbms_launchpad",
    title: "Relational Database Management Systems (RDBMS)",
    issuer: "Google Developers Launchpad",
    issuerClass: "issuer--google",
    category: "python",
    badge: "Verified",
    desc: "Foundational database architecture credential validating relational schema design principles, strict normalization standards (1NF through BCNF), relational algebra operations, Entity-Relationship (ER) modeling, foreign key constraints, and transactional ACID integrity guarantees.",
    items: [
      { label: "Google Launchpad", file: "media/certificates/Rishabh Mudgal (Mr. Mudgal)_RDBMS.pdf", type: "pdf", isPdf: true }
    ]
  },
  restapi_hackerrank: {
    id: "restapi_hackerrank",
    title: "REST API",
    issuer: "HackerRank",
    issuerClass: "issuer--hackerrank",
    category: "python",
    badge: "Verified",
    desc: "Industry-standard benchmark certification in RESTful API engineering—validating stateless client-server architectures, HTTP method semantics, JWT bearer authentication, payload pagination, robust error handling, and scalable CRUD microservice design.",
    items: [
      { label: "HackerRank", file: "media/certificates/REST API (inter, HR).pdf", type: "pdf", isPdf: true }
    ]
  },
  django_launchpad: {
    id: "django_launchpad",
    title: "Django Framework",
    issuer: "Google Developers Launchpad",
    issuerClass: "issuer--google",
    category: "python",
    badge: "Verified",
    desc: "Comprehensive full-stack backend certification in the Django framework—covering Django ORM relational mapping, custom middleware pipelines, class-based generic views (CBVs), session-based user authentication, automated migrations, and secure production deployment.",
    items: [
      { label: "Google Launchpad", file: "media/certificates/Rishabh Mudgal (Mr. Mudgal)_Django.pdf", type: "pdf", isPdf: true }
    ]
  },
  flask_launchpad: {
    id: "flask_launchpad",
    title: "Flask Microservices",
    issuer: "Google Developers Launchpad",
    issuerClass: "issuer--google",
    category: "python",
    badge: "Verified",
    desc: "Lightweight web architecture credential validating modular Flask microservices—mastering modular Blueprint routing, SQLAlchemy ORM session lifecycle management, CORS configuration, dependency injection, and WSGI/Gunicorn production container deployments.",
    items: [
      { label: "Google Launchpad", file: "media/certificates/Rishabh Mudgal (Mr. Mudgal)_Flask using Python.pdf", type: "pdf", isPdf: true }
    ]
  },
  postgresql_launchpad: {
    id: "postgresql_launchpad",
    title: "PostgreSQL Database",
    issuer: "Google Developers Launchpad",
    issuerClass: "issuer--google",
    category: "python",
    badge: "Verified",
    desc: "Enterprise database certification in PostgreSQL administration and querying—covering ACID transaction isolation levels, high-performance JSONB semi-structured indexing, EXPLAIN ANALYZE query plan optimization, stored procedures, and scalable connection pooling.",
    items: [
      { label: "Google Launchpad", file: "media/certificates/Rishabh Mudgal (Mr. Mudgal)_PostgreSQL.pdf", type: "pdf", isPdf: true }
    ]
  },
  mongodb_launchpad: {
    id: "mongodb_launchpad",
    title: "MongoDB NoSQL Architecture",
    issuer: "Google Developers Launchpad",
    issuerClass: "issuer--google",
    category: "python",
    badge: "Verified",
    desc: "NoSQL database engineering credential validating flexible document data modeling, multi-stage aggregation framework pipelines, compound & geospatial indexing, replica set high availability, and horizontal sharding strategies for high-throughput workloads.",
    items: [
      { label: "Google Launchpad", file: "media/certificates/Rishabh Mudgal (Mr. Mudgal)_Mongo DB.pdf", type: "pdf", isPdf: true }
    ]
  },
  graphql_launchpad: {
    id: "graphql_launchpad",
    title: "GraphQL API Design",
    issuer: "Google Developers Launchpad",
    issuerClass: "issuer--google",
    category: "python",
    badge: "Verified",
    desc: "Modern API architecture credential focusing on GraphQL schema definition language (SDL), strongly typed queries and mutations, custom resolver optimization, N+1 query problem mitigation with dataloaders, and zero-overfetching API communication.",
    items: [
      { label: "Google Launchpad", file: "media/certificates/Rishabh Mudgal (Mr. Mudgal)_GraphQL.pdf", type: "pdf", isPdf: true }
    ]
  },

  // ==========================================
  // GROUP 4: DEVOPS & CLOUD SYSTEMS
  // ==========================================
  docker_launchpad: {
    id: "docker_launchpad",
    title: "Docker Containerization",
    issuer: "Google Developers Launchpad",
    issuerClass: "issuer--google",
    category: "devops",
    badge: "Verified",
    desc: "DevOps infrastructure credential validating production containerization—mastering multi-stage Dockerfile optimization, image footprint reduction, bridge network topologies, persistent volume management, and multi-service orchestration with Docker Compose.",
    items: [
      { label: "Google Launchpad", file: "media/certificates/Rishabh Mudgal (Mr. Mudgal)_Docker.pdf", type: "pdf", isPdf: true }
    ]
  },
  aws_builders: {
    id: "aws_builders",
    title: "AWS Builders Online Series",
    issuer: "Amazon Web Services (AWS)",
    issuerClass: "issuer--aws",
    category: "devops",
    badge: "Verified",
    desc: "Verified cloud engineering certification by AWS—covering scalable cloud architecture patterns, serverless computing (AWS Lambda & API Gateway), resilient VPC networking, managed RDS/DynamoDB databases, S3 object storage lifecycle, and IAM security best practices.",
    items: [
      { label: "Google Launchpad", file: "media/certificates/aws.pdf", type: "pdf", isPdf: true }
    ]
  },
  linux_launchpad: {
    id: "linux_launchpad",
    title: "Linux System Administration",
    issuer: "Google Developers Launchpad",
    issuerClass: "issuer--google",
    category: "devops",
    badge: "Verified",
    desc: "Operating system administration credential validating core Linux engineering—including process lifecycle management (systemd/journald), POSIX user/group permission models, SSH key hardening, network socket diagnostics (netstat, iptables), and shell-based server maintenance.",
    items: [
      { label: "Google Launchpad", file: "media/certificates/Rishabh Mudgal (Mr. Mudgal)_Linux.pdf", type: "pdf", isPdf: true }
    ]
  },
  shell_launchpad: {
    id: "shell_launchpad",
    title: "Shell Scripting Automation",
    issuer: "Google Developers Launchpad",
    issuerClass: "issuer--google",
    category: "devops",
    badge: "Verified",
    desc: "Infrastructure automation credential in Bash shell scripting—mastering automated CLI tooling, streaming text processing (sed, awk, grep), Unix I/O pipe redirection, CRON daemon job scheduling, environment variable management, and automated server provisioning scripts.",
    items: [
      { label: "Google Launchpad", file: "media/certificates/Rishabh Mudgal (Mr. Mudgal)_Shell Script.pdf", type: "pdf", isPdf: true }
    ]
  },
  git_launchpad: {
    id: "git_launchpad",
    title: "Git Version Control",
    issuer: "Google Developers Launchpad",
    issuerClass: "issuer--google",
    category: "devops",
    badge: "Verified",
    desc: "Distributed version control certification validating modern DevOps collaboration—mastering Git branching models (GitFlow/trunk-based), interactive rebase workflows, cherry-picking, 3-way merge conflict resolution, semantic tag release versioning, and CI/CD pipeline triggers.",
    items: [
      { label: "Google Launchpad", file: "media/certificates/Rishabh Mudgal (Mr. Mudgal)_Git.pdf", type: "pdf", isPdf: true }
    ]
  },

  // ==========================================
  // GROUP 5: CYBERSECURITY & TESTING
  // ==========================================
  selenium_mastery: {
    id: "selenium_mastery",
    title: "Selenium Automation Testing & Scraping",
    issuer: "Google Developers Launchpad",
    issuerClass: "issuer--google",
    category: "security",
    badge: "Verified",
    desc: "Advanced web automation and testing credential—demonstrating expertise in headless Selenium WebDriver orchestration, dynamic XPath/CSS locator strategies, anti-bot evasion bypasses, explicit wait synchronization, and high-resilience web extraction pipelines.",
    items: [
      { label: "Google Launchpad", file: "media/certificates/Rishabh Mudgal (Mr. Mudgal)_Selenium automated testing.pdf", type: "pdf", isPdf: true }
    ]
  },
  testing_launchpad: {
    id: "testing_launchpad",
    title: "Software Testing & QA",
    issuer: "Google Developers Launchpad",
    issuerClass: "issuer--google",
    category: "security",
    badge: "Verified",
    desc: "Quality assurance & test engineering certification—covering comprehensive test pyramid methodologies, unit & integration test suites (PyTest), boundary value analysis, test-driven development (TDD) principles, regression testing, and automated coverage reporting.",
    items: [
      { label: "Google Launchpad", file: "media/certificates/Rishabh Mudgal (Mr. Mudgal)_Software Testing.pdf", type: "pdf", isPdf: true }
    ]
  },
  cyber_launchpad: {
    id: "cyber_launchpad",
    title: "Cyber Security Foundations",
    issuer: "Google Developers Launchpad",
    issuerClass: "issuer--google",
    category: "security",
    badge: "Verified",
    desc: "Information security credential validating defense-in-depth security principles—including TCP/IP network protocol analysis, threat vector identification, automated vulnerability scanning, secure firewall configuration, principle of least privilege, and enterprise compliance fundamentals.",
    items: [
      { label: "Google Launchpad", file: "media/certificates/Rishabh Mudgal (Mr. Mudgal)_Cyber Security.pdf", type: "pdf", isPdf: true }
    ]
  },
  hacking_mastery: {
    id: "hacking_mastery",
    title: "Ethical Hacking & Advanced Penetration",
    issuer: "Google Developers Launchpad",
    issuerClass: "issuer--google",
    category: "security",
    badge: "2 Certs",
    desc: "Dual-track certification in offensive security and penetration testing—mastering network reconnaissance, packet sniffing (Wireshark), OWASP Top 10 vulnerability identification (SQLi, XSS, CSRF), exploit mitigation, and practical defensive system hardening.",
    items: [
      { label: "Google Launchpad", file: "media/certificates/Rishabh Mudgal (Mr. Mudgal)_Ethical Hacking.pdf", type: "pdf", isPdf: true },
      { label: "Google Launchpad", file: "media/certificates/Rishabh Mudgal (Mr. Mudgal)_Hacking Advanced.pdf", type: "pdf", isPdf: true }
    ]
  },
  crypto_launchpad: {
    id: "crypto_launchpad",
    title: "Cryptography & Data Security",
    issuer: "Google Developers Launchpad",
    issuerClass: "issuer--google",
    category: "security",
    badge: "Verified",
    desc: "Applied data security and cryptography credential—covering symmetric (AES-256) and asymmetric (RSA, ECC) encryption standards, cryptographic hashing (SHA-3, bcrypt), Public Key Infrastructure (PKI), digital certificates, and secure SSL/TLS handshake protocols.",
    items: [
      { label: "Google Launchpad", file: "media/certificates/Rishabh Mudgal (Mr. Mudgal)_Cryptography.pdf", type: "pdf", isPdf: true }
    ]
  },

  // ==========================================
  // GROUP 6: FRONTEND & FOUNDATIONAL LANGUAGES
  // ==========================================
  nextjs_launchpad: {
    id: "nextjs_launchpad",
    title: "Next.js Full-Stack Framework",
    issuer: "Google Developers Launchpad",
    issuerClass: "issuer--google",
    category: "frontend",
    badge: "Verified",
    desc: "Modern full-stack web architecture certification in Next.js—validating Server-Side Rendering (SSR), Static Site Generation (SSG), Incremental Static Regeneration (ISR), React Server Components, serverless API routes, and Core Web Vitals performance optimization.",
    items: [
      { label: "Google Launchpad", file: "media/certificates/Rishabh Mudgal (Mr. Mudgal)_Next JS.pdf", type: "pdf", isPdf: true }
    ]
  },
  react_launchpad: {
    id: "react_launchpad",
    title: "React.js Frontend Architecture",
    issuer: "Google Developers Launchpad",
    issuerClass: "issuer--google",
    category: "frontend",
    badge: "Verified",
    desc: "Frontend software engineering credential in React.js—mastering custom Hooks, Virtual DOM reconciliation mechanics, component lifecycle state management (Context API, Redux), reusable component architecture, and responsive declarative UI development.",
    items: [
      { label: "Google Launchpad", file: "media/certificates/Rishabh Mudgal (Mr. Mudgal)_React Development.pdf", type: "pdf", isPdf: true }
    ]
  },
  nodejs_launchpad: {
    id: "nodejs_launchpad",
    title: "Node.js & Express.js Runtime",
    issuer: "Google Developers Launchpad",
    issuerClass: "issuer--google",
    category: "frontend",
    badge: "2 Certs",
    desc: "Dual-credential backend certification in Node.js & Express.js runtime engineering—mastering non-blocking event-driven I/O, Node.js Event Loop phases, stream buffer processing, modular Express middleware pipelines, JWT auth, and scalable REST API services.",
    items: [
      { label: "Google Launchpad", file: "media/certificates/Rishabh Mudgal (Mr. Mudgal)_Node JS.pdf", type: "pdf", isPdf: true },
      { label: "Google Launchpad", file: "media/certificates/Rishabh Mudgal (Mr. Mudgal)_Express JS.pdf", type: "pdf", isPdf: true }
    ]
  },
  js_mastery: {
    id: "js_mastery",
    title: "JavaScript",
    issuer: "HackerRank & Google Launchpad",
    issuerClass: "issuer--hackerrank",
    category: "frontend",
    badge: "2 Certs",
    desc: "Dual-verified credential validating core JavaScript language mastery—encompassing lexical scoping, closures, prototypal inheritance, asynchronous Promise orchestration (async/await), the microtask/macrotask Event Loop, and modern ES6+ language specifications.",
    items: [
      { label: "HackerRank", file: "media/certificates/JavaScript (inter, HR).pdf", type: "pdf", isPdf: true },
      { label: "Google Launchpad", file: "media/certificates/Rishabh Mudgal (Mr. Mudgal)_JavaScript Advanced.pdf", type: "pdf", isPdf: true }
    ]
  },
  swift_launchpad: {
    id: "swift_launchpad",
    title: "Swift iOS Programming",
    issuer: "Google Developers Launchpad",
    issuerClass: "issuer--google",
    category: "frontend",
    badge: "Verified",
    desc: "Native mobile development credential in Swift—mastering UIKit/SwiftUI UI paradigms, Automatic Reference Counting (ARC) memory management, protocol-oriented programming, optionals safety, Grand Central Dispatch (GCD), and asynchronous Swift concurrency.",
    items: [
      { label: "Google Launchpad", file: "media/certificates/Rishabh Mudgal (Mr. Mudgal)_Swift.pdf", type: "pdf", isPdf: true }
    ]
  },
  css_html_mastery: {
    id: "css_html_mastery",
    title: "HTML5 & CSS3 Advanced",
    issuer: "Google Developers Launchpad",
    issuerClass: "issuer--google",
    category: "frontend",
    badge: "2 Certs",
    desc: "Dual-track certification in modern web layout engineering—mastering semantic HTML5 accessibility (a11y), responsive multi-device design, advanced CSS Grid & Flexbox systems, custom CSS variables, glassmorphism visual styling, and GPU-accelerated micro-animations.",
    items: [
      { label: "Google Launchpad", file: "media/certificates/Rishabh Mudgal (Mr. Mudgal)_CSS.pdf", type: "pdf", isPdf: true },
      { label: "Google Launchpad", file: "media/certificates/Rishabh Mudgal (Mr. Mudgal)_HTML Advanced.pdf", type: "pdf", isPdf: true }
    ]
  },
  c_launchpad: {
    id: "c_launchpad",
    title: "C Advanced Programming",
    issuer: "Google Developers Launchpad",
    issuerClass: "issuer--google",
    category: "frontend",
    badge: "Verified",
    desc: "Foundational systems programming credential in C—demonstrating mastery in pointer arithmetic, dynamic memory allocation (malloc/free), cache awareness, bitwise manipulation, POSIX system calls, struct memory alignment, and multi-file GCC build compilation.",
    items: [
      { label: "Google Launchpad", file: "media/certificates/Rishabh Mudgal (Mr. Mudgal)_C Advanced.pdf", type: "pdf", isPdf: true }
    ]
  }
};
