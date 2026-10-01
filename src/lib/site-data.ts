export const businessContact = {
  address: "348 Kingsway, Manchester M19 1PW, UK",
  phoneNumbers: ["+966 53 802 6963", "+44 7759 546753", "+44 7828 669995"],
  email: "asadtaj1293@gmail.com",
} as const;

export const brandName = "Perfect Surveyors";

export const serviceGroups = [
  {
    slug: "property-surveying",
    number: "01",
    eyebrow: "Property surveying",
    title: "Know what you’re buying.",
    description:
      "Clear, independent insight into a property’s condition, so you can make your next move with confidence.",
    detail:
      "From a focused snagging inspection to a detailed building survey, understand the property in front of you before you commit.",
    services: [
      "snagging-survey",
      "homebuyers-report",
      "building-survey",
    ],
    icon: "property",
    image: "/images/services/property-surveying.jpg",
    imageAlt: "A model house and keys representing a property purchase",
  },
  {
    slug: "quantity-surveying",
    number: "02",
    eyebrow: "Quantity surveying",
    title: "Keep projects on solid ground.",
    description:
      "Practical commercial and project support that brings cost, risk and delivery into focus.",
    detail:
      "Thoughtful cost management, contract advice and project coordination at every stage of the built environment.",
    services: [
      "design-management",
      "contract-management",
      "carbon-accounting",
      "health-safety",
    ],
    icon: "quantity",
    image: "/images/services/quantity-surveying.jpg",
    imageAlt: "Construction team working on a building project",
  },
  {
    slug: "retrofit",
    number: "03",
    eyebrow: "Retrofit",
    title: "Better buildings, built for the future.",
    description:
      "Make energy improvements with the right assessment, expertise and support behind every decision.",
    detail:
      "Support for energy-efficiency upgrades, from understanding a building to coordinating a considered retrofit.",
    services: ["retrofit-assessment", "retrofit-coordinator"],
    icon: "retrofit",
    image: "/images/services/retrofit.jpg",
    imageAlt: "A corridor in a modern office interior",
  },
] as const;

export const serviceDetails = {
  "snagging-survey": {
    title: "Snagging Survey — Limited Area",
    category: "Property surveying",
    parent: "property-surveying",
    image: "/images/services/snagging-survey.jpg",
    imageAlt: "Bright newly finished home interior",
    intro:
      "A focused inspection of visible and accessible areas to help identify defects and incomplete work before they become bigger concerns.",
    sections: [
      {
        heading: "A closer look at the details",
        body: "New homes can look finished at first glance. A professional snagging inspection takes a more considered look at accessible areas and the quality of the visible work, helping you understand what needs attention.",
      },
      {
        heading: "What the inspection covers",
        body: "The survey focuses on the agreed, limited area and visible condition at the time of inspection. We look for issues such as poor finishes, damage, incomplete work and other observable defects. Hidden or inaccessible areas are outside the scope.",
      },
      {
        heading: "A clear report to act on",
        body: "You receive a structured report that records the findings and gives you a useful basis for discussing remedial work with the relevant parties. The inspection is a visual assessment, not a guarantee against concealed defects.",
      },
    ],
    points: ["Visible finishes and workmanship", "Accessible areas in the agreed scope", "Photographic notes of identified issues"],
  },
  "homebuyers-report": {
    title: "Homebuyers Report",
    category: "Property surveying",
    parent: "property-surveying",
    image: "/images/services/homebuyers-report.jpg",
    imageAlt: "Warm, contemporary living room in a residential property",
    intro:
      "A practical condition report to help you understand a home’s visible condition and make a more informed purchase decision.",
    sections: [
      {
        heading: "Understand the home before you buy",
        body: "A homebuyers report provides an independent view of the property’s condition at the time of inspection. It helps bring notable defects and maintenance considerations into focus while you are weighing up a purchase.",
      },
      {
        heading: "A visual inspection, clearly explained",
        body: "The survey considers accessible parts of the property and highlights visible issues that may warrant attention or further investigation. It is not an opening-up inspection, and concealed areas cannot be assessed.",
      },
      {
        heading: "Findings you can use",
        body: "The report sets out observations in a clear, structured format, helping you consider next steps and raise informed questions before proceeding.",
      },
    ],
    points: ["Visible condition of accessible areas", "Notable defects and maintenance considerations", "Clear findings to support your next steps"],
  },
  "building-survey": {
    title: "Building Survey",
    category: "Property surveying",
    parent: "property-surveying",
    image: "/images/services/building-survey.jpg",
    imageAlt: "An architect reviewing a building plan",
    intro:
      "A thorough visual assessment that helps you build a fuller picture of a property’s condition, construction and maintenance needs.",
    sections: [
      {
        heading: "A detailed view of the building",
        body: "A building survey is designed to provide a considered understanding of the property’s visible condition. It can help you make sense of a building’s character, defects and ongoing care requirements.",
      },
      {
        heading: "What is inspected",
        body: "The inspection covers accessible parts of the building and records visible defects, their apparent significance and areas where further investigation may be appropriate. The exact scope depends on access and the property.",
      },
      {
        heading: "A useful record for planning",
        body: "A structured report explains the findings and highlights maintenance considerations, giving you a clearer foundation for property decisions and future planning.",
      },
    ],
    points: ["Visible fabric and accessible areas", "Defects and maintenance considerations", "Recommendations for further investigation where appropriate"],
  },
  "design-management": {
    title: "Design & Management",
    category: "Quantity surveying",
    parent: "quantity-surveying",
    image: "/images/services/design-management.jpg",
    imageAlt: "Contemporary commercial building under a clear sky",
    intro:
      "Bring design coordination and project management together with a practical focus on cost, quality and delivery.",
    sections: [
      {
        heading: "A joined-up approach",
        body: "Early coordination helps teams understand how design decisions affect cost, programme and delivery. We support a clear process from brief through to project execution.",
      },
      {
        heading: "Keep decisions connected",
        body: "Thoughtful management of information, interfaces and project priorities helps identify risks early and keep stakeholders moving in the same direction.",
      },
    ],
    points: ["Design coordination and project planning", "Cost- and risk-aware decision support", "Clear communication across project teams"],
  },
  "contract-management": {
    title: "Contract Management",
    category: "Quantity surveying",
    parent: "quantity-surveying",
    image: "/images/services/contract-management.jpg",
    imageAlt: "Construction site with structural work in progress",
    intro:
      "Clear contract administration and commercial oversight to help projects stay accountable, understood and well managed.",
    sections: [
      {
        heading: "Clarity through the project",
        body: "Good contract management makes responsibilities, change and project information easier to follow. We help clients maintain a clear view of contractual processes and commercial commitments.",
      },
      {
        heading: "Support informed decisions",
        body: "Structured oversight helps teams address issues promptly, understand emerging risks and keep decisions grounded in the agreed project requirements.",
      },
    ],
    points: ["Contract and change process support", "Commercial risk and obligation visibility", "Consistent project records and communication"],
  },
  "carbon-accounting": {
    title: "Carbon Accounting",
    category: "Quantity surveying",
    parent: "quantity-surveying",
    image: "/images/services/carbon-accounting.jpg",
    imageAlt: "Electricity transmission towers at sunset",
    intro:
      "Bring embodied and operational carbon into the conversation alongside cost, quality and project performance.",
    sections: [
      {
        heading: "Measure what matters",
        body: "A considered approach to carbon accounting helps project teams understand environmental impacts and compare options as a design develops.",
      },
      {
        heading: "Connect sustainability with delivery",
        body: "We support practical conversations about carbon and material choices, helping teams make more informed decisions in line with project goals.",
      },
    ],
    points: ["Carbon considerations in project planning", "Support for comparing design and material options", "Sustainability-minded decision support"],
  },
  "health-safety": {
    title: "Health & Safety",
    category: "Quantity surveying",
    parent: "quantity-surveying",
    image: "/images/services/health-safety.jpg",
    imageAlt: "An industrial refinery with processing structures and smokestacks",
    intro:
      "Keep health and safety visible in project planning, coordination and delivery.",
    sections: [
      {
        heading: "Safety starts with clear coordination",
        body: "Effective health and safety management depends on responsibilities being understood and risks being considered throughout a project, not just at a single stage.",
      },
      {
        heading: "Practical, project-aware support",
        body: "We help teams keep safety considerations connected to project decisions and delivery. The appropriate scope and statutory roles should be confirmed for each commission.",
      },
    ],
    points: ["Health and safety awareness in project planning", "Risk and responsibility coordination", "Clear project-specific scope"],
  },
  "retrofit-assessment": {
    title: "Retrofit Assessment",
    category: "Retrofit",
    parent: "retrofit",
    image: "/images/services/retrofit-assessment.jpg",
    imageAlt: "Light-filled interior of an energy-efficient building",
    intro:
      "Understand a building’s current performance and improvement potential before planning energy-efficiency measures.",
    sections: [
      {
        heading: "Start with the building",
        body: "A retrofit assessment helps build an understanding of a property’s condition, energy use and context before upgrade options are developed.",
      },
      {
        heading: "Plan improvements carefully",
        body: "Considering the building as a whole helps teams evaluate potential measures, their sequencing and how changes may affect comfort and performance.",
      },
    ],
    points: ["Assessment of building context and condition", "Energy-efficiency opportunities", "A considered basis for retrofit planning"],
  },
  "retrofit-coordinator": {
    title: "Retrofit Coordinator",
    category: "Retrofit",
    parent: "retrofit",
    image: "/images/services/retrofit-coordinator.jpg",
    imageAlt: "Modern workplace interior with natural light",
    intro:
      "Coordinate retrofit planning and delivery with a whole-building perspective and a focus on quality.",
    sections: [
      {
        heading: "Connect the moving parts",
        body: "Retrofit coordination brings assessment, design, installation and quality considerations together so that decisions are made with the building and its occupants in mind.",
      },
      {
        heading: "Support a coherent outcome",
        body: "A coordinated process helps teams manage interfaces, maintain project information and keep improvement goals connected through delivery.",
      },
    ],
    points: ["Coordination across retrofit stages", "Whole-building and occupant-aware planning", "Quality and delivery oversight"],
  },
} as const;

export type ServiceSlug = keyof typeof serviceDetails;

export function getServiceGroup(slug: string) {
  return serviceGroups.find((group) => group.slug === slug);
}

export function getServiceDetail(slug: string) {
  return Object.prototype.hasOwnProperty.call(serviceDetails, slug)
    ? serviceDetails[slug as ServiceSlug]
    : undefined;
}

export function getGroupDetails(slug: string) {
  const group = getServiceGroup(slug);
  if (!group) return [];
  return group.services.map((serviceSlug) => ({
    slug: serviceSlug,
    ...serviceDetails[serviceSlug],
  }));
}
