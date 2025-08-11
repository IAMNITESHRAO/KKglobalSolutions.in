// let serviceList = [
//   {
//     title: "Application Security Testing",
//     // des: "We identify security weaknesses in your systems through advanced testing methods and provide actionable insights to fix them before attackers exploit them.",
//     img: "assets/img/service-icon/1.png",
//     extraInfo: {
//       icon: "assets/img/icons/layer-icon.png",
//       text: "From reconnaissance to exploitation, we cover every layer of your tech."
//     }
//   },
  
//   {
//     title: "Network Penetration Testing",
//     // des: "Empowering businesses with tailored strategies to build resilient security frameworks. We help you meet compliance, mitigate risks, and design defense-in-depth architectures.",
//     img: "assets/img/service-icon/2.png",
//   },
//   {
//     title: "CIS Benchmarks & Hardening Assessments",
//     // des: "Our team performs thorough web app audits—OWASP Top 10, logic flaws, and more. We help secure your platforms, protecting users and brand reputation alike.",
//     img: "assets/img/service-icon/3.png",
//   },
//   {
//     title: "Source Code Analysis",
//     // des: "Lorem is Ipsum is simply is design iomyi is text Lorem Ipsum is simply is our busi Lorem is Ipsum is",
//     img: "assets/img/service-icon/2.png",
//   },
//   {
//     title: "Phishing Simulation & Awareness Drills",
//     // des: "Lorem is Ipsum is simply is design iomyi is text Lorem Ipsum is simply is our busi Lorem is Ipsum is",
//     img: "assets/img/service-icon/1.png",
//   },

//   {
//     title: "Web Development",
//     // des: "Lorem is Ipsum is simply is design iomyi is text Lorem Ipsum is simply is our busi Lorem is Ipsum is",
//     img: "assets/img/service-icon/3.png",
//   },
// ];

// export default serviceList;


// const serviceList = [
//   {
//     id: "application-security-testing",
//     title: "Application Security Testing",
//     // des: "We identify security weaknesses in your applications through manual and automated testing, helping you remediate before attackers exploit them.",
//     img: "assets/img/service-icon/1.png",
//     extraInfo: {
//       icon: "assets/img/icons/layer-icon.png",
//       text: "From reconnaissance to exploitation, we cover every layer of your tech."
//     }
//   },
//   {
//     id: "network-penetration-testing",
//     title: "Network Penetration Testing",
//     // des: "We simulate real-world attacks on your internal and external networks to detect vulnerabilities in firewalls, routers, and other infrastructure.",
//     img: "assets/img/service-icon/2.png"
//   },
//    {
//     id: "web-development",
//     title: "Web Development",
//     // des: "We build fast, secure, and scalable websites tailored to your brand, integrating performance and user experience by design.",
//     img: "assets/img/service-icon/3.png"
//   },
//   {
//     id: "cis-benchmarks-hardening",
//     title: "CIS Benchmarks & Hardening Assessments",
//     // des: "We audit your system configurations against industry CIS Benchmarks and provide hardening recommendations for security and compliance.",
//     img: "assets/img/service-icon/3.png"
//   },
//   {
//     id: "source-code-analysis",
//     title: "Source Code Analysis",
//     // des: "Our experts analyze your application’s source code to detect logic flaws, insecure coding patterns, and vulnerabilities missed by scanners.",
//     img: "assets/img/service-icon/2.png"
//   },
//   {
//     id: "phishing-awareness-drills",
//     title: "Phishing Simulation & Awareness Drills",
//     // des: "We test your team's resilience against phishing with simulated attacks and conduct awareness training to boost security posture.",
//     img: "assets/img/service-icon/1.png"
//   },
 
// ];

// export default serviceList;


const serviceList = [
  {
    id: "application-security-testing",
    title: "Application Security Testing",
    tagline: "Secure your apps from the inside out with code-level inspections and runtime testing.",
    icon: "assets/img/icons/app-shield.svg",
    img: "assets/img/service-icon/1.png",
    overview: `Our Application Security Testing (AST) process evaluates the security posture of web and mobile applications. We use both Static (SAST) and Dynamic (DAST) analysis to detect vulnerabilities that could be exploited by attackers.\n\nFrom authentication flaws to insecure API usage, our experts mimic real-world attack scenarios to identify loopholes across your entire application stack.`,
    highlights: [
      "Combines static and dynamic testing for thorough coverage",
    ],
    features: [
      {
        title: "Static Code Analysis (SAST)",
        icon: "assets/img/icons/code.svg",
        description: "Review of application source code to detect logic flaws, unsafe coding practices, and insecure configurations."
      },
      {
        title: "Dynamic Testing (DAST)",
        icon: "assets/img/icons/shield-flash.svg",
        description: "Black-box testing that simulates attacks on running apps to uncover vulnerabilities in real time."
      },
      {
        title: "Authentication & Session Testing",
        icon: "assets/img/icons/lock.svg",
        description: "Analysis of login mechanisms, token handling, and session expiration."
      }
    ]
  },
  {
    id: "network-penetration-testing",
    title: "Network Penetration Testing",
    tagline: "Simulate real-world attacks to uncover vulnerabilities in your infrastructure.",
    icon: "assets/img/icons/network.svg",
        img: "assets/img/service-icon/2.png",
    overview: `Our Network Penetration Testing service emulates an attacker’s approach to infiltrate your internal or external network. We identify exploitable services, misconfigured firewalls, unpatched systems, and access control issues.\n\nWe use both manual techniques and industry-grade tools to provide visibility into your network exposure.`,
    highlights: [
      "Detailed report with CVSS scoring and network-wide threat map"
    ],
    features: [
      {
        title: "Internal & External Testing",
        icon: "assets/img/icons/internet.svg",
        description: "Assess exposure from both inside and outside your organization."
      },
      {
        title: "Firewall & Router Checks",
        icon: "assets/img/icons/router.svg",
        description: "Detect weak ACLs, port leaks, and default credentials on infrastructure devices."
      },
      {
        title: "Privilege Escalation Simulation",
        icon: "assets/img/icons/escalate.svg",
        description: "Post-exploitation tests to simulate lateral movement and unauthorized access."
      }
    ]
  },
  {
    id: "web-development",
    title: "Secure Web Development",
    tagline: "Build fast, scalable, and secure digital experiences from the ground up.",
    icon: "assets/img/icons/web.svg",
     img: "assets/img/service-icon/3.png",
    overview: `We design and develop high-performance websites that prioritize security, accessibility, and SEO.\n\nOur developers follow OWASP secure coding guidelines and modern frameworks to ensure your site is safe from the start.`,
    highlights: [
      "Performance and security baked into every line of code"
    ],
    features: [
      {
        title: "Responsive & Accessible Design",
        icon: "assets/img/icons/responsive.svg",
        description: "Fluid layouts that work across all devices and meet WCAG standards."
      },
      {
        title: "Secure Backend Integration",
        icon: "assets/img/icons/database.svg",
        description: "API and database layers built with authentication, authorization, and sanitization in mind."
      },
      {
        title: "SEO Optimized Build",
        icon: "assets/img/icons/seo.svg",
        description: "Structured metadata, fast load times, and rich snippets for better ranking."
      }
    ]
  },
  {
    id: "cis-benchmarks-hardening",
    title: "CIS Benchmarks & Hardening",
    tagline: "Align your systems with industry standards to reduce risk and improve compliance.",
    icon: "assets/img/icons/shield-check.svg",
    img: "assets/img/service-icon/3.png",
    overview: `We audit and harden your operating systems, servers, and cloud environments using CIS Benchmarks and industry best practices.\n\nOur process includes detailed reporting, remediation guidance, and validation for compliance initiatives like ISO 27001, PCI DSS, and RBI-CSF.`,
    highlights: [
      "Automated and manual validation of CIS policies for secure baselining"
    ],
    features: [
      {
        title: "System Configuration Review",
        icon: "assets/img/icons/server.svg",
        description: "Assessment of OS settings, password policies, logging, and permissions."
      },
      {
        title: "Cloud Hardening",
        icon: "assets/img/icons/cloud-lock.svg",
        description: "Audit of AWS, Azure, or GCP settings against CIS cloud benchmarks."
      },
      {
        title: "Remediation Plan",
        icon: "assets/img/icons/file-check.svg",
        description: "Step-by-step fix recommendations and priority rankings."
      }
    ]
  },
  {
    id: "source-code-analysis",
    title: "Source Code Review",
    tagline: "Find deep-seated vulnerabilities missed by scanners.",
    icon: "assets/img/icons/code-review.svg",
     img: "assets/img/service-icon/2.png",
    overview: `We manually inspect your source code to detect logic bugs, unsafe coding patterns, insecure libraries, and data handling flaws.\n\nUnlike automated tools, our experts find complex vulnerabilities like insecure crypto use, race conditions, and hardcoded secrets.`,
    highlights: [
      "Line-by-line manual inspection by certified professionals"
    ],
    features: [
      {
        title: "Business Logic Flaws",
        icon: "assets/img/icons/bug.svg",
        description: "Identify flaws in authorization flows, validation routines, and edge-case handling."
      },
      {
        title: "Third-Party Dependency Check",
        icon: "assets/img/icons/package.svg",
        description: "Detect usage of outdated or vulnerable libraries via SCA."
      },
      {
        title: "Secure Coding Advice",
        icon: "assets/img/icons/book.svg",
        description: "Fix suggestions based on OWASP, CERT, and SEI secure coding standards."
      }
    ]
  },
  {
    id: "phishing-awareness-drills",
    title: "Phishing Simulation & Awareness",
    tagline: "Train your team to detect and report phishing before it's too late.",
    icon: "assets/img/icons/email.svg",
     img: "assets/img/service-icon/1.png",
    overview: `We conduct simulated phishing attacks and track employee responses. Those who click are enrolled in targeted awareness training.\n\nOur campaigns help build a human firewall, reducing the chances of real-world breaches caused by social engineering.`,
    highlights: [
      "Custom phishing templates and awareness content by role"
    ],
    features: [
      {
        title: "Simulated Email Campaigns",
        icon: "assets/img/icons/email-open.svg",
        description: "Run monthly or ad-hoc phishing simulations with detailed analytics."
      },
      {
        title: "Training Modules",
        icon: "assets/img/icons/training.svg",
        description: "Interactive sessions for users who fall for simulated bait."
      },
      {
        title: "Reporting & Benchmarking",
        icon: "assets/img/icons/chart.svg",
        description: "Measure performance and phishing resilience over time."
      }
    ]
  }
];

export default serviceList;
