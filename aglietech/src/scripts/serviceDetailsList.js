const serviceDetailsList = [
  {
    id: "application-security-testing",
    title: "Application Security Testing",
    icon: "/assets/img/icons/1.png",
    image: "/assets/img/service/1.png",
    heading: "Securing Applications from Code to Deployment",
    description1: `We analyze your apps using SAST and DAST techniques. Our process uncovers authentication issues, insecure data handling, and vulnerabilities that attackers could exploit.`,
    description2: `Our security engineers mimic real-world threats to identify flaws across the application stack. We also ensure compliance with OWASP and other security standards.`,
    questionTitle: "Need help securing your application?",
    questionDesc: `It’s important to perform regular security reviews to catch vulnerabilities before attackers do. Our team helps you secure your application at every stage.`,
    accordion: [
      {
        question: "What is included in an AppSec test?",
        answer:
          "We include code analysis, input validation checks, session security, authentication controls, and more as part of AppSec testing.",
      },
      {
        question: "How long does an app security test take?",
        answer:
          "A standard application takes 4–7 business days to complete a full security test and deliver the report.",
      },
      {
        question: "Do you support both web and mobile apps?",
        answer:
          "Yes, we support security testing for Android, iOS, and all types of web applications.",
      },
    ],
    closingTitle: "Why Choose Us for AppSec?",
    closingDesc: `We follow secure coding standards and simulate real-world attack vectors to protect your apps.`,
    points: [
      "Comprehensive code and runtime inspection",
      "Real-world threat simulation",
      "OWASP Top 10 coverage",
    ],
  },
  {
    id: "network-penetration-testing",
    title: "Network Penetration Testing",
    image: "/assets/img/service/2.png",
    heading: "Testing the Resilience of Your Network Perimeter",
    description1: `Our network penetration tests reveal weaknesses in your firewalls, routers, switches, and internal assets. We simulate attacks to expose configuration errors.`,
    description2: `We ensure your network is secure against modern threats by evaluating patching, segmentation, exposure, and default credentials.`,
    questionTitle: "Want to test your network?",
    questionDesc: `Network testing is essential for identifying gaps in perimeter defenses before attackers do. Our tests simulate real-world network threats.`,
    accordion: [
      {
        question: "Do you offer internal and external testing?",
        answer:
          "Yes. We perform both external perimeter and internal lateral movement testing.",
      },
      {
        question: "Will it impact my network?",
        answer:
          "No. We run safe, controlled scans without disrupting business operations.",
      },
      {
        question: "What tools do you use?",
        answer:
          "We use industry tools like Nmap, Nessus, Metasploit, and custom scripts.",
      },
    ],
    closingTitle: "Why Choose Us for Network Pentesting?",
    closingDesc: `We follow a structured methodology based on PTES and industry best practices.`,
    points: [
      "Internal & external testing",
      "Safe and non-intrusive approach",
      "PTES-aligned methodology",
    ],
  },
  {
    id: "secure-web-development",
    title: "Secure Web Development",
    image: "assets/img/service/3.png",
    heading: "Building Websites with Security at the Core",
    description1: `We build modern web applications that are secure, scalable, and performant. Security is integrated into every stage of development.`,
    description2: `Our team follows secure design principles, validates all inputs, and applies best practices to prevent common web vulnerabilities.`,
    questionTitle: "Need a secure website?",
    questionDesc: `Don’t let your website be the weak link. Let us develop your next project with security baked in from day one.`,
    accordion: [
      {
        question: "Which technologies do you use?",
        answer:
          "We use React, Next.js, Node, Django, and more – depending on your project needs.",
      },
      {
        question: "Is SEO and performance also considered?",
        answer:
          "Yes, our secure sites are also optimized for speed, SEO, and mobile responsiveness.",
      },
      {
        question: "Can I host it anywhere?",
        answer:
          "Absolutely. We provide deployable builds compatible with any hosting environment.",
      },
    ],
    closingTitle: "Why Choose Us for Secure Dev?",
    closingDesc: `We combine security, speed, and UX to build future-proof web applications.`,
    points: [
      "Secure-by-design development",
      "Modern frontend/backend tech stack",
      "SEO, speed, and mobile friendly",
    ],
  },
  {
    id: "cis-benchmarks-hardening",
    title: "CIS Benchmarks & Hardening",
    image: "assets/img/service/1.png",
    heading: "Harden Your Systems with Industry-Standard Benchmarks",
    description1: `We apply CIS (Center for Internet Security) benchmarks to your servers, cloud instances, and devices to reduce security risks.`,
    description2: `We evaluate 200+ controls per platform including OS-level settings, firewall rules, logging, and access control for optimal hardening.`,
    questionTitle: "Concerned about misconfigurations?",
    questionDesc: `Misconfigured systems are easy entry points. We align your configurations with CIS, NIST, and industry guidelines.`,
    accordion: [
      {
        question: "Which systems can be hardened?",
        answer:
          "We support Windows, Linux, AWS, Azure, GCP, Docker, Kubernetes, and more.",
      },
      {
        question: "Is automation possible?",
        answer:
          "Yes, we use tools like Ansible, Chef, and PowerShell to automate hardening tasks.",
      },
      {
        question: "Will it affect current applications?",
        answer:
          "Our process includes testing to ensure apps run smoothly after hardening.",
      },
    ],
    closingTitle: "Why Choose Us for Hardening?",
    closingDesc: `We combine automation and security expertise to make your systems CIS-compliant.`,
    points: [
      "Platform-specific benchmarks",
      "Automated implementation",
      "Compliance-ready configuration",
    ],
  },
  {
    id: "source-code-review",
    title: "Source Code Review",
    image: "assets/img/service/2.png",
    heading: "Manual & Automated Review of Your Source Code",
    description1: `We analyze your source code to find logic flaws, backdoors, insecure functions, and data leaks that automated tools often miss.`,
    description2: `Our approach combines static analysis tools with manual review for accurate and deep security insights.`,
    questionTitle: "Is your code truly secure?",
    questionDesc: `Code review is a critical step in the SDLC. We help you ensure that your source is safe from logic flaws and security bugs.`,
    accordion: [
      {
        question: "Which languages do you support?",
        answer: "We support JavaScript, Java, Python, PHP, C#, Go, and more.",
      },
      {
        question: "Do you provide remediation help?",
        answer:
          "Yes. Our reports include step-by-step recommendations and fixes.",
      },
      {
        question: "Can I get a sample report?",
        answer:
          "Yes, we’re happy to share a redacted example to showcase our process.",
      },
    ],
    closingTitle: "Why Choose Us for Code Review?",
    closingDesc: `We catch what scanners miss — with real developer insight.`,
    points: [
      "Hybrid manual + tool-based review",
      "Secure coding practice checks",
      "Detailed remediation plan",
    ],
  },
  {
    id: "phishing-simulation-awareness",
    title: "Phishing Simulation & Awareness",
    image: "assets/img/service/3.png",
    heading: "Training Your Employees Against Phishing Attacks",
    description1: `We simulate real-world phishing attacks and assess how your employees respond. Those who fall for the bait get auto-enrolled in awareness training.`,
    description2: `From spear phishing to credential theft attempts, we cover a range of phishing scenarios to build organization-wide resilience.`,
    questionTitle: "Worried about phishing threats?",
    questionDesc: `Phishing is the #1 cause of data breaches. Let us train your people and build phishing awareness across your team.`,
    accordion: [
      {
        question: "How frequent are these simulations?",
        answer: "You can schedule monthly, quarterly, or random simulations.",
      },
      {
        question: "Will my team be notified?",
        answer:
          "No, simulations are stealthy and designed to mimic real attacks.",
      },
      {
        question: "Do you offer multilingual training?",
        answer:
          "Yes, our training modules support multiple languages and locations.",
      },
    ],
    closingTitle: "Why Choose Us for Phishing Defense?",
    closingDesc: `We help your team spot threats before they click — reducing your breach risk.`,
    points: [
      "Realistic phishing scenarios",
      "Auto-enrolled awareness training",
      "Progress tracking and reports",
    ],
  },
];

export default serviceDetailsList;
