import img1 from "../assets/p1.png";
import img2 from "../assets/p2.png";
import img3 from "../assets/p3.png";

export const projects = [
  {
    id: "fintech-app",
    title: "Fintech Mobile App",
    subtitle: "Redesigning mobile banking for faster and simpler transactions",
    desc: "A modern mobile banking experience focused on simplicity, trust and fast transactions.",
    image: img1,
    tag: "UI/UX Case Study",
    tools: ["Figma", "UX Research", "Prototyping"],
    category: "Mobile App Design",
    duration: "4 Weeks",
    role: "UI/UX Designer",

    challenge:
      "Users struggled with complex transaction flows, unclear navigation and low trust in the existing banking interface.",

    solution:
      "Redesigned the complete flow with simplified navigation, trust-focused visuals and intuitive interaction patterns.",

    process: [
      "User Research",
      "Wireframing",
      "User Flow Mapping",
      "High-Fidelity Design",
      "Interactive Prototype",
      "Usability Testing",
    ],

    outcome:
      "Improved usability, reduced friction and created a more reliable digital banking experience.",

    metrics: {
      satisfaction: "+42%",
      taskCompletion: "+31%",
      bounceReduction: "-26%",
    },

    features: [
      "Quick Transfer Flow",
      "Biometric Authentication",
      "Smart Dashboard",
      "Real-time Notifications",
    ],

    liveLink: "#",
    dribbbleLink: "#",
  },

  {
    id: "dashboard-ui",
    title: "E-commerce Dashboard",
    subtitle: "Scalable analytics dashboard for store management",
    desc: "Clean and scalable admin dashboard for product and order management.",
    image: img2,
    tag: "Web App Design",
    tools: ["Figma", "UX Audit"],
    category: "Dashboard Design",
    duration: "3 Weeks",
    role: "Product Designer",

    challenge:
      "The old dashboard had poor information hierarchy, cluttered analytics and difficult navigation.",

    solution:
      "Created a modular dashboard with improved data visualization and cleaner user flow.",

    process: [
      "Audit Existing Dashboard",
      "Information Architecture",
      "Low-Fi Wireframes",
      "Visual Design",
      "Prototype Testing",
    ],

    outcome:
      "Enabled faster decision-making and improved workflow efficiency for store managers.",

    metrics: {
      efficiency: "+38%",
      engagement: "+24%",
      usability: "+46%",
    },

    features: [
      "Advanced Analytics",
      "Inventory Tracking",
      "Order Insights",
      "Revenue Reports",
    ],

    liveLink: "#",
    dribbbleLink: "#",
  },

  {
    id: "mobile-ux",
    title: "Mobile Banking UX",
    subtitle: "Building trust through secure mobile interactions",
    desc: "Smooth and secure mobile UX for financial operations.",
    image: img3,
    tag: "Mobile UX Design",
    tools: ["Figma", "Wireframing"],
    category: "UX Design",
    duration: "5 Weeks",
    role: "UX Designer",

    challenge:
      "Users lacked confidence using financial services because of poor security communication and confusing flow.",

    solution:
      "Designed secure, transparent and user-friendly interactions with clear feedback systems.",

    process: [
      "Competitor Analysis",
      "Flow Optimization",
      "UX Mapping",
      "UI Design",
      "Prototype Validation",
    ],

    outcome:
      "Created a frictionless mobile experience that improved trust and engagement.",

    metrics: {
      trustScore: "+52%",
      retention: "+29%",
      conversion: "+21%",
    },

    features: [
      "Secure Verification",
      "Transaction Tracking",
      "Smart Alerts",
      "Personal Finance Overview",
    ],

    liveLink: "#",
    dribbbleLink: "#",
  },
];
