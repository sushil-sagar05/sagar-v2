export interface ProjectDetails {
  title: string;
  tagline: string;
  heroImage?: string; 
  liveUrl?: string;
  githubUrl?: string;
  meta?: {
    timeline: string;
    role: string;
    team: string;
    status: string;
  };
  techStack?: string[];
  overview?: string;
  features?: { title: string; desc: string }[];
  challenges?: string[];
  learnings?: string[];
  nextProject?: { name: string; slug: string };
}

export const projectsData: Record<string, ProjectDetails> = {
  "nyaynetra-ai": {
    title: "Nyaynetra",
    tagline:
      "Production-grade RAG-powered legal document intelligence system with modular AI microservices and hallucination-controlled LLM pipelines.",

    heroImage: "/projects/nyaynetra.png",
    liveUrl: "https://nyaynetra-ai.vercel.app/",
    githubUrl: "https://github.com/sushil-sagar05/nyaynetra.ai",

    meta: {
      timeline: "3+ Months",
      role: "Full Stack AI Engineer (Architecture, ML, Backend, Deployment)",
      team: "Solo",
      status: "Production Deployed",
    },

    techStack: [
      "Next.js 14 (App Router)",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js (TypeScript)",
      "MongoDB",
      "FastAPI / Flask Microservices",
      "SentenceTransformers",
      "InLegalBERT Embeddings",
      "Hugging Face Inference API",
      "Vector-based Retrieval (RAG)",
      "Cosine Similarity",
      "Vercel Deployment",
      "Hugging Face Spaces"
    ],

    overview:
      "Nyaynetra is a full-stack AI document intelligence platform designed to analyze legal and contractual documents using Retrieval-Augmented Generation (RAG). The system combines semantic embedding search, clause-aware chunking, structured LLM outputs, and microservice-based AI inference to deliver grounded, hallucination-minimized results. It was architected with production deployment, scalability, and model offloading in mind.",

    features: [
      {
        title: "Frontend Architecture (Next.js 14 + TypeScript)",
        desc:
          "Built using App Router with server/client component separation. Implements secure document uploads, streaming AI responses, structured result dashboards, and modular UI sections for summarization, clause tagging, and risk detection. Strong type safety using TypeScript across API boundaries."
      },
      {
        title: "Backend Layer (Express + TypeScript)",
        desc:
          "Handles authentication, document upload processing, request validation, API orchestration, and communication with AI microservices. Implements structured response aggregation, error handling, retry logic, and environment-based configuration for production deployment."
      },
      {
        title: "Microservice-Based AI Architecture",
        desc:
          "AI workloads are separated into independent Python microservices (FastAPI/Flask) for summarization, risk detection, clause tagging, and embedding generation. This separation ensures scalability, modularity, and clean isolation between business logic and ML inference."
      },
      {
        title: "RAG Pipeline Implementation",
        desc:
          "Implements Retrieval-Augmented Generation using embedding-based semantic search. Documents are chunked using clause-aware strategies, converted into embeddings via SentenceTransformers (InLegalBERT), stored as vectors, and queried using cosine similarity before injecting retrieved context into the LLM."
      },
      {
        title: "Hallucination Control & Structured Output",
        desc:
          "Uses multi-layer prompt structuring, controlled context injection, and strict JSON output schemas to prevent hallucinations. Ensures LLM responses remain grounded in retrieved document chunks."
      },
      {
        title: "Token & Context Optimization",
        desc:
          "Designed chunk sizing and retrieval limits to stay within LLM token constraints while maintaining contextual completeness. Aggregates partial results for long documents."
      },
      {
        title: "Hosted Inference via Hugging Face Spaces",
        desc:
          "Heavy ML models were offloaded to Hugging Face Spaces to eliminate large local model hosting requirements. This reduced memory overhead, simplified deployment, and improved scalability. Backend acts as lightweight orchestration layer calling hosted inference endpoints."
      },
      {
        title: "Production Deployment Strategy",
        desc:
          "Frontend deployed on Vercel. AI microservices hosted on Hugging Face Spaces. Backend acts as intermediary service. Environment variables and API keys managed securely. Architecture designed to be horizontally scalable."
      }
    ],

    challenges: [
      "Preventing LLM hallucinations when analyzing long legal documents.",
      "Designing an efficient clause-aware chunking strategy for better semantic retrieval.",
      "Managing token limits while preserving contextual completeness.",
      "Separating heavy ML inference from backend logic for production stability.",
      "Ensuring consistent structured JSON outputs from LLM responses.",
      "Deploying multi-service architecture across Vercel and Hugging Face."
    ],

    learnings: [
      "Deep understanding of Retrieval-Augmented Generation systems.",
      "Designing scalable AI microservice architectures.",
      "Embedding-based semantic search and vector similarity computation.",
      "LLM prompt engineering for structured outputs.",
      "Production deployment of AI systems without local heavy GPU hosting.",
      "Bridging full-stack development with applied machine learning pipelines."
    ],

    nextProject: { name: "Math Agent", slug: "math-agent" }
  },

  "moviemeter": {
    title: "MovieMeter",
    tagline:
      "Full-stack movie discovery platform featuring a custom-built content-based recommendation engine using vector modeling and similarity scoring.",

    heroImage: "/projects/moviemeter.png",
    liveUrl: "https://moviemeter.vercel.app/",
    githubUrl: "https://github.com/sushil-sagar05/moviemeter",

    meta: {
      timeline: "2+ Months",
      role: "Full Stack Developer & ML Engineer",
      team: "Solo",
      status: "Completed",
    },

    techStack: [
      "React / Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Content-Based Filtering",
      "TF-IDF Vectorization",
      "Cosine Similarity",
      "REST API Design",
      "JWT Authentication"
    ],

    overview:
      "MovieMeter is a full-stack movie exploration and recommendation platform that integrates a custom-built content-based filtering engine. Instead of relying on third-party APIs for recommendations, the system models movies and users as numerical vectors and computes personalized recommendations using similarity scoring. The application demonstrates applied machine learning concepts integrated into a scalable backend architecture.",

    features: [
      {
        title: "Frontend Architecture (React / Next.js + TypeScript)",
        desc:
          "Implements dynamic movie browsing, rating dashboards, review systems, and personalized recommendation views. Designed modular reusable components with strict type safety and API contract validation."
      },
      {
        title: "Backend API Layer (Express + TypeScript)",
        desc:
          "RESTful API architecture handling authentication, movie data retrieval, rating submissions, recommendation computation, and user profile management. Structured controllers and service layers for separation of concerns."
      },
      {
        title: "Content-Based Recommendation Engine",
        desc:
          "Implements a vector space model where each movie is converted into a numerical feature vector based on genres, keywords, metadata, and textual descriptions. Recommendations are generated using cosine similarity between user profile vectors and unseen movie vectors."
      },
      {
        title: "Movie Vector Modeling",
        desc:
          "Constructed feature vectors using TF-IDF-like weighting for textual metadata combined with categorical encoding for genres. Ensures meaningful similarity computation in high-dimensional space."
      },
      {
        title: "User Profile Vector Construction",
        desc:
          "Generates personalized user embeddings by aggregating vectors of highly rated movies using weighted averaging. This produces a dynamic taste representation that evolves as the user interacts with the system."
      },
      {
        title: "Similarity Ranking Pipeline",
        desc:
          "Computes cosine similarity between user profile vectors and all candidate movie vectors. Results are ranked and filtered to exclude already rated or watched movies."
      },
      {
        title: "Cold Start Handling",
        desc:
          "Implements fallback logic for new users by recommending globally popular or high-rated movies until sufficient interaction data is available."
      },
      {
        title: "Database Design (MongoDB)",
        desc:
          "Schema design for users, movies, and ratings with indexed queries for performance optimization. Stores rating history for real-time profile recomputation."
      },
      {
        title: "Scalable Recommendation Logic",
        desc:
          "Structured recommendation computation inside service layer, allowing future migration to batch processing or caching mechanisms for larger datasets."
      }
    ],

    challenges: [
      "Designing meaningful feature vectors from heterogeneous movie metadata.",
      "Handling sparse user rating data while generating stable profile embeddings.",
      "Optimizing cosine similarity computation for real-time recommendations.",
      "Managing cold-start problem for new users.",
      "Integrating ML logic seamlessly into backend API architecture."
    ],

    learnings: [
      "Practical implementation of vector space models in real applications.",
      "Applying cosine similarity and feature engineering for personalization.",
      "Designing ML-backed systems within production web architectures.",
      "Handling real-world recommender system constraints like sparsity and cold-start.",
      "Bridging machine learning logic with scalable backend services."
    ],

    nextProject: { name: "Complaint Hub", slug: "complaint-hub" }
  },


  "math-agent": {
    title: "AI Math Tutor Agent",
    tagline:
      "Advanced conversational AI math tutor with LangGraph orchestration, DSPy symbolic reasoning, Qdrant semantic search, and MCP web search fallback.",

    heroImage: "/projects/math-agent.png",
    liveUrl: "", 
    githubUrl: "https://github.com/sushil-sagar05/Ai-Math-Tutor-Agent",

    meta: {
      timeline: "2+ Months",
      role: "Full Stack AI Engineer (AI Agent, Backend, Frontend, Architecture)",
      team: "Solo",
      status: "Development Complete",
    },

    techStack: [
      "React / Next.js",
      "TypeScript",
      "FastAPI",
      "LangGraph",
      "DSPy",
      "Qdrant Vector Database",
      "Google Gemini 2.0 Flash",
      "MCP (Model Context Protocol)",
      "AsyncIO Streaming",
      "Human-in-the-Loop Learning"
    ],

    overview:
      "AI Math Tutor Agent is a sophisticated educational platform that transforms mathematics learning through intelligent conversation. The system combines advanced AI orchestration with semantic search and real-time streaming to deliver step-by-step solutions and teaching-oriented explanations. Built with production-grade architecture focusing on privacy, context awareness, and continuous learning through human feedback.",

    features: [
      {
        title: "LangGraph Workflow Orchestration",
        desc:
          "Manages complex AI decision workflows with intelligent routing between knowledge base retrieval, web search fallback, and human-in-the-loop consultation."
      },
      {
        title: "DSPy Symbolic Math Reasoning",
        desc:
          "Advanced prompt engineering for mathematical problem-solving with automatic optimization based on educational effectiveness and user feedback."
      },
      {
        title: "Qdrant Semantic Knowledge Base",
        desc:
          "Stores 12,500+ math problems from Hendrycks MATH dataset as embeddings for high-accuracy semantic similarity search with confidence-based routing."
      },
      {
        title: "MCP Web Search Integration",
        desc:
          "Model Context Protocol seamlessly handles knowledge gaps by triggering external web search while maintaining educational response formatting."
      },
      {
        title: "Real-Time Streaming Architecture",
        desc:
          "FastAPI backend with Server-Sent Events delivers step-by-step solutions in real-time, creating engaging learning experiences."
      },
      {
        title: "Human-in-the-Loop Learning",
        desc:
          "Comprehensive feedback system collects user ratings and comments to continuously improve AI responses through DSPy prompt optimization."
      },
      {
        title: "Privacy-First Design",
        desc:
          "Multi-layer guardrails including input sanitization, session isolation, HTTPS encryption, and conversation anonymization ensure data protection."
      },
      {
        title: "Responsive Frontend Experience",
        desc:
          "React/Next.js interface with interactive chat, live solution rendering, adaptive teaching mode detection, and intuitive feedback mechanisms."
      }
    ],

    challenges: [
      "Orchestrating complex AI workflows across LangGraph, DSPy, and MCP components.",
      "Maintaining rich conversational context across multiple interaction turns.",
      "Implementing low-latency real-time streaming for multi-step mathematical solutions.",
      "Balancing mathematical accuracy with educational effectiveness.",
      "Designing privacy-compliant architecture for educational AI systems.",
      "Integrating human-in-the-loop feedback for continuous learning."
    ],

    learnings: [
      "Advanced AI workflow orchestration using LangGraph.",
      "Symbolic reasoning and prompt optimization with DSPy.",
      "Semantic search implementation using vector databases.",
      "Real-time streaming architecture for interactive applications.",
      "Human-in-the-loop learning system design.",
      "Production-grade privacy engineering for AI systems.",
      "Full-stack integration of complex AI pipelines."
    ],

    nextProject: { name: "MovieMeter", slug: "moviemeter" }
  },


  "complaint-hub": {
    title: "ComplaintHub",
    tagline: "Production-grade complaint management system with real-time email automation, role-based access control, and responsive dashboards.",

    heroImage: "/projects/complaint-hub.png",
    liveUrl: "https://complaint-hub.vercel.app/",
    githubUrl: "https://github.com/sushil-sagar05/complaint-hub",

    meta: {
      timeline: "48-Hour Hackathon",
      role: "Full Stack Developer ",
      team: "Solo",
      status: "Production Deployed",
    },

    techStack: [
      "Next.js 14 (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn/ui",
      "MongoDB",
      "Mongoose ODM",
      "JWT Authentication",
      "Nodemailer",
      "React Hook Form + Zod",
      "Lucide React Icons",
      "Vercel Deployment"
    ],

    overview:
      "ComplaintHub is a full-stack grievance management platform . The system provides end-to-end complaint lifecycle management with automated email notifications, role-based access control, and responsive dashboards. Designed for civic authorities and service providers, it streamlines complaint tracking from submission to resolution with production-grade TypeScript architecture.",

    features: [
      {
        title: "Next.js 14 App Router Architecture",
        desc:
          "Modern App Router implementation with Server Components, streaming, and optimized data fetching. Type-safe API routes with comprehensive error boundaries and loading states."
      },
      {
        title: "TypeScript End-to-End Type Safety",
        desc:
          "Complete TypeScript coverage across frontend, backend, and database layers. Custom interfaces for Mongoose documents, API responses, and form validation schemas using Zod."
      },
      {
        title: "Role-Based Authentication System",
        desc:
          "JWT-based authentication with user/admin role separation. Cookie-based session management with secure httpOnly tokens and granular permission checks on all endpoints."
      },
      {
        title: "Automated Email Notification System",
        desc:
          "Production-ready email service with beautiful responsive HTML templates. Sends welcome emails, complaint submission confirmations, and real-time status update notifications using Nodemailer."
      },
      {
        title: "Advanced Complaint Management",
        desc:
          "Rich complaint schema with priority levels (Low/Medium/High), categories (Product/Service/Support), and status tracking (Pending/In Progress/Resolved). Real-time updates trigger automated user notifications."
      },
      {
        title: "Admin Dashboard & CRUD Operations",
        desc:
          "Comprehensive admin panel with full CRUD operations. Status updates automatically trigger email notifications to complainants. User complaint ownership tracking and cleanup on deletion."
      },
      {
        title: "Responsive UI with Shadcn/ui",
        desc:
          "Modern, accessible UI components with Tailwind CSS and Shadcn/ui. Mobile-first design with color-coded status badges, priority indicators, and intuitive navigation."
      },
      {
        title: "Production Deployment Ready",
        desc:
          "Vercel-optimized deployment with environment variable management, secure cookie settings, and production-grade error handling. Handles concurrent operations and database transactions safely."
      }
    ],

    challenges: [
      "Implementing production-grade TypeScript across complex Mongoose document conversions.",
      "Handling async params in Next.js 14 dynamic routes with proper type safety.",
      "Designing beautiful, responsive email templates that render consistently across clients.",
      "Building role-based access control with granular permission checks in 48 hours.",
      "Maintaining type safety between Mongoose ObjectId arrays and string representations.",
      "Creating intuitive admin workflows while ensuring user data privacy."
    ],

    learnings: [
      "Mastering Next.js 14 App Router with async dynamic route parameters.",
      "Production TypeScript patterns for full-stack Mongoose applications.",
      "Building scalable authentication systems with secure cookie management.",
      "Designing automated workflow systems with reliable email notifications.",
      "Rapid prototyping under hackathon constraints while maintaining code quality.",
      "Shadcn/ui component integration with custom Tailwind designs."
    ],

    nextProject: { name: "Nyaynetra", slug: "nyaynetra-ai" }
  }
};
