import {MdOutlineLightbulb} from "react-icons/md";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#testimonials" },
  { name: "Skills", link: "#contact" },
  { name: "Certifications", link: "#contact" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];



/**
 * Catégories possibles (le composant Portfolio gère l'icône et la couleur de chacune) :
 *  - "Web Development"
 *  - "Mobile Development"
 *  - "DevOps & Cloud"
 *  - "Computer Science"
 *
 * Nouveaux champs par projet :
 *  - category : le badge affiché sur la carte
 *  - tagline  : phrase d'accroche courte affichée sous le titre
 * `type` est conservé pour la page de détail (/allprojects/[id]).
 */
export const projects = [
  {
    id: 1,
    title: "Smart Clinic Platform (Microservices)",
    category: "Web Development",
    tagline: "From appointment to invoice, one secure platform.",
    type: "Full Stack & Microservices",

    overview:
        "A comprehensive medical office management platform built with microservices architecture. This enterprise-grade system manages patients, doctors, appointments, medical records, consultations, and billing with multi-role access control .",

    github: "https://github.com/salmaimassenda2023/gestion-cabinet-medical",
    des: "An event-driven microservices architecture with complete testing stack, CI/CD automation, and real-time features for healthcare management.",

    img: "/clinicM_dashboard_upscaled.png",
    heroImg: "/dashboard_laptop_mockup.png",
    imgPosition: 34,
    technologies: [
      { name: "Spring Boot", icon: "/spring-boot.svg" },
      { name: "Spring Cloud", icon: "/cloud.png" },
      { name: "Angular", icon: "/icons8-angular-24.png" },
      { name: "Keycloak", icon: "/keyclock.png" },
      { name: "PostgreSQL", icon: "/postgresql.png" },
      { name: "Docker", icon: "/docker.svg" },
    ],

    features: [
      { icon: <MdOutlineLightbulb />, name: " Microservices Architecture", desc: "Multiple independent services, communicating via REST APIs." },
      { icon: <MdOutlineLightbulb />, name: " Multi-Role Management", desc: "Secure role-based access control for Doctors, Secretaries, and Administrators with Keycloak." },
      // { icon: <MdOutlineLightbulb />, name: " Intelligent Chatbot", desc: "AI-powered chatbot for patients to book appointments and check availability in real-time." },
      { icon: <MdOutlineLightbulb />, name: " Dashboard Analytics", desc: "Real-time statistics and KPIs for medical office performance monitoring." },
      { icon: <MdOutlineLightbulb />, name: " Medical Records Management", desc: "Complete digital medical history, consultations tracking, and document storage." },
      // { icon: <MdOutlineLightbulb />, name: " Real-time Notifications", desc: "Kafka-based event system for instant notifications." },
    ],

    // Testing & Quality Assurance
      /* testingStrategies: [
      { icon: <MdOutlineLightbulb />, name: " Backend Unit Testing", desc: "JUnit 5 and Mockito for comprehensive service testing with mocking." },
      { icon: <MdOutlineLightbulb />, name: " Frontend Testing", desc: "Jest for Angular component testing and user interaction validation." },
      { icon: <MdOutlineLightbulb />, name: " Integration Testing", desc: "Testcontainers for database and Kafka integration tests in isolated environments." },
      { icon: <MdOutlineLightbulb />, name: " Performance Testing", desc: "JMeter for load testing and performance benchmarking under high traffic." },
      { icon: <MdOutlineLightbulb />, name: " End-to-End Testing", desc: "Selenium for automated user journey testing across the entire platform." },
      { icon: <MdOutlineLightbulb />, name: " Code Quality", desc: "SonarQube integration for continuous code quality analysis and technical debt management." },
      { icon: <MdOutlineLightbulb />, name: " CI/CD Pipeline", desc: "Jenkins automation for build, test, and deployment with Docker containerization." },
    ], */

    // Architecture Patterns
    architecturePatterns: [
      { icon: <MdOutlineLightbulb />, name: " Domain-Driven Design", desc: "Clear bounded contexts for each medical domain (Patient Care, Appointments, Billing)." },
      //{ icon: <MdOutlineLightbulb />, name: " Event-Driven Architecture", desc: "Asynchronous communication using Kafka for decoupled services." },
      { icon: <MdOutlineLightbulb />, name: " API Gateway Pattern", desc: "Centralized entry point with Spring Cloud Gateway for routing and load balancing." },
      //{ icon: <MdOutlineLightbulb />, name: " CQRS Pattern", desc: "Command Query Responsibility Segregation for optimized read/write operations." },
      { icon: <MdOutlineLightbulb />, name: " Database per Service", desc: "Each microservice manages its own PostgreSQL database for data isolation." },
    ],

    // DevOps & Deployment
    // devOpsFeatures: [
     // { icon: <MdOutlineLightbulb />, name: " Containerization", desc: "Full Docker containerization of all microservices and infrastructure components." },
      //{ icon: <MdOutlineLightbulb />, name: " CI/CD Automation", desc: "Jenkins pipeline with automated testing, quality gates, and multi-environment deployment." },
     // { icon: <MdOutlineLightbulb />, name: " Infrastructure as Code", desc: "Docker Compose for local development and production-ready configurations." },
      //{ icon: <MdOutlineLightbulb />, name: " Monitoring & Logging", desc: "Distributed tracing and centralized logging for troubleshooting and performance monitoring." },
      //{ icon: <MdOutlineLightbulb />, name: " Security Hardening", desc: "OAuth2 authentication, role-based authorization, and encrypted data transmission." },
   // ],

    demo: false,
    status: "In Development - Delivery January 2026",
  },

  {
    id: 2,
    title: "E-Commerce Backend (Microservices)",
    category: "Web Development",
    tagline: "Independent services, real-time events, full observability.(Microservices)",
    type: "Backend & DevOps",

    overview:
        "This personal project demonstrates an advanced event-driven microservices architecture built with Spring Boot and Apache Kafka. The system includes multiple independent services communicating asynchronously, with strong testing and observability practices integrated throughout.",

    github: "https://github.com/salmaimassenda2023/my-microservices-app",
    des: "An event-driven microservices architecture with CI/CD automation, distributed tracing, and advanced testing using Testcontainers, WireMock, and JaCoCo.",

    img: "/gif99.gif",
    imgPosition: 34,
    technologies: [
      { name: "Spring Boot", icon: "/spring-boot.svg" },
      { name: "Apache Kafka", icon: "/kafkaB.png" },
      { name: "Spring Cloud", icon: "/cloud.png" },
      { name: "Keycloak", icon: "/keyclock.png" },
      { name: "PostgreSQL", icon: "/postgresql.png" },
      { name: "Zipkin", icon: "/zipkin.png" },
      { name: "Docker", icon: "/docker.svg" },
    ],

    features: [
      { icon: <MdOutlineLightbulb />, name: " Microservices Design", desc: "5 backend services (Customer, Product, Order, Payment, and Notification)." },
      { icon: <MdOutlineLightbulb />, name: " Asynchronous Communication", desc: "Apache Kafka for inter-service event-driven messaging." },
      { icon: <MdOutlineLightbulb />, name: " API Gateway", desc: "Built with Spring Cloud Gateway to handle routing and load balancing." },
      { icon: <MdOutlineLightbulb />, name: " Service Discovery", desc: "Netflix Eureka for automatic microservice registration and discovery." },
      { icon: <MdOutlineLightbulb />, name: " Security", desc: "OAuth2 / JWT authentication managed with Keycloak." },
      { icon: <MdOutlineLightbulb />, name: " Distributed Tracing", desc: "Zipkin integration for end-to-end request monitoring." },
      { icon: <MdOutlineLightbulb />, name: " CI/CD Automation", desc: "GitHub Actions pipeline with JaCoCo coverage (50.3%) and a live dashboard on GitHub Pages." },
      //{ icon: <MdOutlineLightbulb />, name: " DevOps Practices", desc: "Containerization with Docker, environment orchestration, and test automation." },
      { icon: <MdOutlineLightbulb />, name: " Architecture Patterns", desc: "Domain-Driven Design (DDD) and Event-Driven Architecture implementation." },
    ],

    // Testing Strategies
    testingStrategies: [
      { icon: <MdOutlineLightbulb />, name: " Unit Testing", desc: "JUnit 5 and Mockito." },
      { icon: <MdOutlineLightbulb />, name: " Integration Testing", desc: "Testcontainers." },
      { icon: <MdOutlineLightbulb />, name: " API Testing", desc: "Postman & Newman." },
     // { icon: <MdOutlineLightbulb />, name: " Performance Testing", desc: "JMeter for load testing and performance benchmarking." },
      { icon: <MdOutlineLightbulb />, name: " Service Mocking", desc: "WireMock for simulating external service dependencies." },
      { icon: <MdOutlineLightbulb />, name: " Code Coverage", desc: "JaCoCo integration with 50.3% coverage tracked via GitHub Actions." },
    ],

    demo: false,
  },

  {
    id: 3,
    title: "EASRENT — Car Rental Platform",
    category: "Web Development",
    tagline: "Find your ride and book it in a few clicks.",
    type: "Full Stack Development",

    overview:
        "EASRENT is a full-stack car rental platform that enables users to browse and reserve vehicles online. The project aims to streamline the car rental process by offering a secure and user-friendly digital solution for both customers and administrators.",
    github: "https://github.com/farah256/Rental-Car-System.git",
    des: "The backend of the car rental system is developed using Spring Boot, Spring Security, and Spring Data.",
    img: "/Enhanced UI Dashboard.png",
    heroImg:"/Dashboard Laptop Mockup.png",
    imgPosition: 36,

    technologies: [
      { name: "Html", icon: "/html1.svg" },
      { name: "Css", icon: "/css1.svg" },
      { name: "TypeScript", icon: "/ts.svg" },
      { name: "Tailwind CSS", icon: "/tail.svg" },
      { name: "React JS", icon: "/reactjs.svg" },
      { name: "Spring Boot", icon: "/spring-boot.svg" },
      { name: "Mysql", icon: "/mysql.svg" },
    ],

    features: [
      { icon: <MdOutlineLightbulb />, name: " UML Modeling", desc: "Before coding, we carefully modeled our system to ensure a robust architecture." },
      //{ icon: <MdOutlineLightbulb />, name: " UI/UX Design with Figma", desc: "Crafting a modern and intuitive user experience." },
      { icon: <MdOutlineLightbulb />, name: " Backend with Spring Boot", desc: "Developing secure RESTful APIs with JWT authentication tested via Postman." },
      { icon: <MdOutlineLightbulb />, name: " Frontend with ReactJS", desc: "A dynamic and efficient application for a seamless user experience." },
      { icon: <MdOutlineLightbulb />, name: " Database with MySQL", desc: "Designing and managing a relational database for optimal data storage." },
      { icon: <MdOutlineLightbulb />, name: " API Communication", desc: "Smooth integration between the backend and frontend." },
      { icon: <MdOutlineLightbulb />, name: " Version Control with Git/GitHub", desc: "Efficient teamwork and structured project tracking." },
    ],

    demo: false,
  },

  {
    id: 4,
    title: "IMA Headphones — E-Commerce Store",
    category: "Web Development",
    tagline: "Premium sound, seamless checkout.",
    type: "Full Stack Development",

    overview:"IMA Headphones is a modern e-commerce platform built with Next.js, Sanity, and Stripe. The project focuses on delivering a smooth shopping experience for customers, with product and content structured through custom Sanity schemas — giving administrators an easy way to manage the catalog without touching code — and secure checkout handled via Stripe.",
    github: "https://github.com/salmaimassenda2023/Ecommerce_App/tree/main",
    des: "A fast storefront built with Next.js, with products managed in Sanity and payments handled securely by Stripe.",
    img: "/eco-website.png",
    heroImg:"/ecommerce-herof.webp",
    imgPosition: 36,

    technologies: [
      { name: "Html", icon: "/html1.svg" },
      { name: "Css", icon: "/css1.svg" },
      { name: "TypeScript", icon: "/ts.svg" },
      { name: "Tailwind CSS", icon: "/tail.svg" },
      { name: "Next JS", icon: "/next-white.png" },
      { name: "Sanity", icon: "/sanity-l.png" },
    ],

    features: [
      { icon: <MdOutlineLightbulb />, name: " Next.js", desc: "For optimal performance and seamless navigation." },
      { icon: <MdOutlineLightbulb />, name: " Sanity", desc: "For centralized and dynamic content management." },
      { icon: <MdOutlineLightbulb />, name: " Stripe", desc: "For secure payments and simplified transaction handling." },
    ],

    demo: true,
    videoPath: "/vedio-sanity.mp4",
  },

  {
    id: 5,
    title: "ENSAHome — Student Housing Hub",
    category: "Web Development",
    tagline: "Find a place to live and gear to study with.",
    type: "Frontend Development",

    overview:
        "ENSAHome is a student-focused marketplace platform designed for ENSA students to find housing near campus and buy/sell used equipment. Built with Next.js, the platform features a modern, responsive design that showcases frontend development capabilities with an intuitive user interface.",

    github: "https://github.com/salmaimassenda2023/ENSAHome-Student-Housing-Equipment-Platform.git",

    des: "A modern frontend application built with Next.js and Tailwind CSS, focusing on user experience and responsive design for student accommodation and equipment marketplace.",

    img: "/UI Dashboard ensahome.png",
    heroImg:"/Laptop Mockup ensahome.png",
    imgPosition: 48,

    technologies: [
      { name: "HTML", icon: "/html1.svg" },
      { name: "CSS", icon: "/css1.svg" },
      { name: "TypeScript", icon: "/ts.svg" },
      { name: "Tailwind CSS", icon: "/tail.svg" },
      { name: "Next.js", icon: "/next-white.png" },
    ],

    features: [
      { icon: <MdOutlineLightbulb />, name: "Modern UI Design", desc: "Clean and intuitive interface with smooth animations and responsive layouts" },
      { icon: <MdOutlineLightbulb />, name: "Property Listings", desc: "Browse available apartments near ENSA campus with detailed information and pricing" },
      { icon: <MdOutlineLightbulb />, name: "Equipment Marketplace", desc: "Platform for students to buy and sell used educational equipment" },
      { icon: <MdOutlineLightbulb />, name: "Responsive Design", desc: "Fully optimized for desktop, tablet, and mobile devices" },
    ],

    demo: false,
  },

  {
    id: 6,
    title: "HealthFirst — Smart Health App",
    category: "Mobile Development",
    tagline: "Your appointments and medication, always on time.",
    type: "Mobile Development",

    overview:
        "HealthFirst is a mobile application designed to improve healthcare management. It helps users manage medical appointments, track medication intake with smart reminders, organize and store medical documents, and get accurate information on medications via the OpenFDA API.",

    github: "https://github.com/ZakariaCode/HealthFirst",
    des: "This project combines mobile development with healthcare-focused features, offering a practical and user-friendly solution for patients.",

    img: "/healthfirst-mockup-full.png",
    imgPosition: 48,
    technologies: [
      { name: "Flutter", icon: "/flutter.svg" },
      { name: "Firebase", icon: "/firebase.png" },
      { name: "PostgreSQL", icon: "/postgresql.png" },
      { name: "Cloudinary", icon: "/cloudinary.webp" },
    ],

    features: [
      { icon: <MdOutlineLightbulb />, name: " UI/UX with Figma", desc: "Modern and intuitive design created with Figma and UML modeling." },
      { icon: <MdOutlineLightbulb />, name: " Appointment Management", desc: "Schedule and track medical appointments with ease." },
      { icon: <MdOutlineLightbulb />, name: " Medication Reminders", desc: "Receive smart notifications to ensure medication adherence." },
      { icon: <MdOutlineLightbulb />, name: " Medical Documents Storage", desc: "Upload and organize medical documents securely with Cloudinary." },
      { icon: <MdOutlineLightbulb />, name: " OpenFDA Integration", desc: "Access reliable medication data directly from the OpenFDA API." },
      { icon: <MdOutlineLightbulb />, name: " Authentication", desc: "Secure user accounts powered by Firebase Auth." },
      //{ icon: <MdOutlineLightbulb />, name: " Agile Project Management", desc: "Team collaboration and sprint management using Notion." },
    ],

    demo: true,
    videoPath: "/demo_4.mp4",
  },

  {
    id: 7,
    title: "Jenkins CI/CD Pipeline on AWS",
    category: "DevOps & Cloud",
    tagline: "From git push to production, fully automated.",
    type: "DevOps",

    overview:
        "A full CI/CD pipeline built with Jenkins, Docker, GitHub, and AWS EC2. 🛠️\n" +
        "Even though the deployed application is very simple (a static welcome page), the process taught me a lot about real-world DevOps workflows.",
    github: "https://github.com/salmaimassenda2023/docker-jenkins-aws-project",
    des: "A complete pipeline: Jenkins builds and tests, Docker packages the app, and AWS EC2 hosts the review, staging, and production environments.",
    img: "/aws3.png",
    imgPosition: 50,
    technologies: [
      { name: "Git", icon: "/icons8-git-logo.svg" },
      { name: "GitHub", icon: "/github.svg" },
      { name: "Jenkins", icon: "/jenkins.svg" },
      { name: "Docker", icon: "/docker.svg" },
      { name: "AWS", icon: "/icons8-aws-logo.svg" },
    ],

    features: [
      { icon: <MdOutlineLightbulb />, name: " CI Pipeline", desc: "Build, test, and push Docker image to Docker Hub" },
      { icon: <MdOutlineLightbulb />, name: " CD Pipeline", desc: "Auto-deploy to 3 different AWS EC2 environments (review, staging, and production)" },
      { icon: <MdOutlineLightbulb />, name: " Dockerization", desc: "Dockerization of a static app" },
      { icon: <MdOutlineLightbulb />, name: " Secure SSH access", desc: "to remote servers" },
      { icon: <MdOutlineLightbulb />, name: " Jenkins pipeline configuration", desc: "with credentials & Docker plugins" },
      { icon: <MdOutlineLightbulb />, name: " Multi-stage deployments on the cloud", desc: "Real experience" },
    ],

    demo: false,
  },

  {
    id: 8,
    title: "MyFlow — Custom Language Compiler",
    category: "Computer Science",
    tagline: "A programming language, built from scratch.",
    type: "Theoretical Computer Science",

    overview:
        "As part of our Compilation Theory module, we designed and developed a complete compiler for MyFlow, a programming language created from scratch. The project covers lexical analysis, syntax parsing, semantic checking, and code generation.",

    github: "https://github.com/Salma-Chennoufi/MyFlow",
    des: "This compiler project helped us understand the full compilation pipeline from source code to machine code, using tools like Flex, Bison, and MRASM.",

    img: "/myFlow.jpeg",
    heroImg:"/myflow-hero-fixed.png",
    imgPosition: 48,

    technologies: [
      { name: "Flex", icon: "/jflex1.png" },
      { name: "Bison", icon: "/bisonPro.png" },
    ],

    features: [
      { icon: <MdOutlineLightbulb />, name: " Lexical Analysis", desc: "Tokenization of the source code using Flex." },
      { icon: <MdOutlineLightbulb />, name: " Syntax Analysis", desc: "Building the syntax tree with Bison." },
      { icon: <MdOutlineLightbulb />, name: " Semantic Analysis", desc: "Verification of language rules (declarations, types, etc.) via AST." },
      { icon: <MdOutlineLightbulb />, name: " Code Generation", desc: "Generating machine code in MRASM." },
      { icon: <MdOutlineLightbulb />, name: " Testing & Validation", desc: "Ensuring the compiler complies with specifications." },
      { icon: <MdOutlineLightbulb />, name: " Deep Learning Experience", desc: "Understanding the entire compilation pipeline from scratch." },
    ],

    demo: false,
  },
]

export const workExperience = [
  {
    id: 1,
    role: "Software Engineer Intern",
    company: "Capgemini TS",
    type: "Internship",
    period: "Mar 2026 - Aug 2026 · 6 mos",
    location: "Casablanca · On-site",
    summary:
        "Designed and built a centralized platform to analyze training effectiveness and support continuous improvement decisions.",
    bullets: [
      "Built REST APIs with Spring Boot to serve as the platform's core backend",
      "Developed an interactive Angular dashboard giving stakeholders real-time visibility into training data",
      "Secured the platform with Keycloak (OAuth 2.0/OIDC) for authentication and role-based access",
      "Integrated a Retrieval-Augmented Generation (RAG) pipeline with Spring AI and Ollama, using PostgreSQL/PGVector for vector storage and embeddings",
      "Implemented email notifications (SMTP) and real-time updates via Server-Sent Events (SSE)",
    ],
    skills: ["Java", "Spring Boot", "Angular", "Keycloak", "Spring AI", "PostgreSQL"],
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    role: "Full-Stack Developer Intern",
    company: "OpenMajd Technologies",
    type: "Internship",
    period: "Jul 2025 - Aug 2025 · 2 mos",
    location: "Rabat · Remote",
    summary: "Built a full-stack multilingual translation platform using Next.js, from architecture to deployment.",
    bullets: [
      "Developed the platform end-to-end with Next.js, TypeScript, and Supabase",
      "Designed and integrated a 3-tier pricing model (Free, Public, Pro) with Stripe payments",
    ],
    skills: ["Next.js", "React.js", "TypeScript", "Supabase"],
    thumbnail: "/exp2.svg",
  },
]

export const skillsData = [
  {
    title: "Backend",
    skills: [
      { name: "Java", image: "/jee.svg" },
      { name: "Spring", image: "/spring.svg" },
      { name: "Spring Boot", image: "/spring-boot.svg" },
      { name: "Spring Cloud", image: "/cloud.png" },
      { name: "Spring AI", image: "/springAI.png" },
      { name: "Apache Kafka", image: "/kafka3-removebg-preview.png" },
      { name: "Keycloak", image: "/keyclock.png" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "JavaScript", image: "/js.svg" },
      { name: "TypeScript", image: "/ts.svg" },
      { name: "React JS", image: "/reactjs.svg" },
      { name: "Next JS", image: "/next.svg" },
      { name: "Angular", image: "/icons8-angular-24.png" },
      { name: "Tailwind CSS", image: "/tail.svg" },
      { name: "Framer Motion", image: "/framer-motion.svg" },
      { name: "Academy UI", image: "/aceternity.png" }
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", image: "/mysql.svg" },
      { name: "PostgreSQL", image: "/postgresql.png" },
      { name: "Oracle", image: "/oracle.svg" },
      { name: "MongoDB", image: "/mongodb.svg" },
    ],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      { name: "Git", image: "/git.svg" },
      { name: "GitHub", image: "/github.svg" },
      { name: "GitLab", image: "/gitlab.svg" },
      { name: "Docker", image: "/docker.svg" },
      { name: "Jenkins", image: "/jenkins.svg" },
    ],
  },
  {
    title: "Testing",
    skills: [
      { name: "JUnit 5", image: "/JUnit-removebg-preview.png" },
      { name: "Mockito", image: "/mokito-removebg-preview.png" },
      { name: "Testcontainers", image: "/docker.svg" },
      { name: "Postman", image: "/postman.svg" },
    ],
  },
]
export const certifications = [
  {
    id: 1,
    title: "Oracle Certified Foundations Associate",
    subtitle: "Java Certified Foundations Associate",
    provider: "Oracle",
    date: "October 2025",
    logo: "/oracle.png",
    certificateImage: "/oracle-java-foundations.png",
    imageRatio: "1020 / 648",
    credentialUrl: "",
  },
  {
    id: 2,
    title: "Confluent Data Streaming Engineer Foundations",
    subtitle: "",
    provider: "Confluent",
    date: "2026",
    logo: "/conflient.jpg",
    certificateImage: "/confluent-data-streaming.png",
    imageRatio: "972 / 618",
    credentialUrl: "",
  },
]


export const testimonials = [
  {
    quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
