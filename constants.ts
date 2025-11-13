import { ReportData, ReportSection } from './types';

// --- Report Metadata ---
export const REPORT_DATA: ReportData = {
  title: 'Remote-Controlled Lawn Mower for Homes and Outdoor Spaces',
  authors: [
    'CARTER KULLEH TONY',
    'ERIC SEBASTIAN ANAK GELANGGANG',
    'COLOSSAE CLAIXIVAN ANAK CASSANDRA',
  ],
  supervisor: 'WILSON ANAK INTAI',
  department: 'Department of Mechanical Engineering',
  institution: 'Politeknik Kuching Sarawak',
  session: '1 2025/2026',
};

// --- Report Sections Content ---
export const SECTIONS: ReportSection[] = [
  {
    id: 'title_page',
    title: 'Title Page',
    content: { type: 'title_page' },
  },
  {
    id: 'abstract',
    title: 'Abstract',
    description: "A concise summary of the project's purpose, methods, and findings.",
    content: {
      type: 'paragraphs',
      text: [
        `Manual lawn maintenance presents significant challenges, including physical exhaustion, time inefficiency, and safety risks, particularly across large or challenging terrains. This project addresses these issues through the design, fabrication, and evaluation of a remote-controlled lawn mower. The primary objective is to develop a cost-effective, user-friendly alternative to traditional mowers, minimizing manual labor by enabling operation from a safe distance. The system architecture is centered on a high-performance microcontroller (MCU) that interprets remote commands to govern the propulsion system, cutting mechanism, and safety protocols. By leveraging a battery-powered design, the mower offers a sustainable, low-emission, and quiet solution, starkly contrasting with conventional gasoline-powered models. This report details the complete engineering lifecycle, from conceptual design and component selection to fabrication, testing, and performance analysis, culminating in a functional prototype that validates the viability of remote-controlled technology for modern domestic landscaping.`,
      ],
    },
  },
  {
    id: 'chapter1',
    title: 'Chapter 1: Introduction',
    description: 'Background, problem statement, objectives, and scope of the project.',
    content: {
        type: 'subsections',
        items: [
            {
                title: '1.1 Introduction',
                text: [
                    `The evolution of lawn care technology, from manual scythes to modern robotic mowers, reflects a continuous drive for greater efficiency, safety, and convenience. The first mechanical mower, invented in 1830 by Edwin Beard Budding, marked a paradigm shift in groundskeeping. However, subsequent innovations have largely focused on incremental improvements to gasoline-powered, push-style mowers. This project enters the next phase of this evolution by focusing on remote-control systems. Unlike fully autonomous robots, which can be complex and costly, a remote-controlled mower strikes a balance between operator control and automation. It directly mitigates key operational hazards by removing the user from the immediate vicinity of the rotating blades and eliminates the physical strain associated with pushing heavy machinery. Furthermore, the adoption of an electric powertrain addresses growing environmental concerns over noise and air pollution from small gasoline engines, positioning this technology as a responsible choice for residential lawn maintenance.`,
                ]
            },
            {
                title: '1.2 Problem Statement',
                text: [
                    `Conventional lawn maintenance methodologies are beset by several persistent problems that this project aims to solve. Firstly, the manual operation of push mowers is labor-intensive, leading to significant physical fatigue and excluding individuals with mobility limitations. Secondly, direct proximity to high-speed cutting blades and gasoline-powered engines introduces substantial safety risks, including lacerations and noise-induced hearing damage. Thirdly, the environmental footprint of gasoline mowers is considerable, contributing to localized air pollution through hydrocarbon emissions and noise pollution that disrupts residential tranquility. This project systematically addresses these deficiencies by engineering an electric, remote-controlled platform that enhances operational efficiency, improves user safety and accessibility, and minimizes ecological impact.`,
                ]
            },
            {
                title: '1.3 Objectives',
                text: [`To provide a structured framework for development, this project is guided by the following primary objectives:`],
                list: [
                    "To design and fabricate a robust and maneuverable remote-controlled chassis capable of navigating typical residential lawn terrains.",
                    "To implement a reliable remote-control system for precise command over the mower’s movement and cutting functions.",
                    "To integrate an effective and safe electric cutting mechanism that delivers a consistent grass-cutting quality.",
                    "To develop an energy-efficient power system that maximizes operational runtime while minimizing environmental impact.",
                    "To achieve a final prototype cost under RM1000, ensuring the solution is both technologically viable and economically accessible."
                ]
            },
        ]
    }
  },
   {
    id: 'chapter3',
    title: 'Chapter 3: Methodology',
    description: 'The approach, design, and fabrication techniques used to develop the prototype.',
    content: {
        type: 'subsections',
        items: [
            {
                title: '3.5 Material Selection and Components',
                text: [
                    `The success of the prototype hinged on a judicious selection of components that balanced performance, cost, and ease of integration. The Cytron MOTION 2350 Pro was selected as the central control unit due to its powerful RP2350 processor and, critically, its integrated 4-channel DC motor driver and USB Host capability. This all-in-one solution significantly simplified the electronic architecture by allowing direct connection of both the drive motors and a standard USB joystick, eliminating the need for a separate motor shield and complex receiver/transmitter pairing. For power regulation, an Adjustable 5A DC-DC Buck Converter was employed to step down the battery voltage to a stable 5V, protecting sensitive electronics. A 1-Channel 5V Opto-Coupler Relay Module provides a crucial layer of safety, isolating the low-current control signals from the high-current demands of the cutting motor. Propulsion is achieved using high-torque 12V power window motors coupled with a Motor Mount & 5-inch Wheel Kit, a combination chosen for its proven reliability and torque output sufficient for varied terrain. The cutting assembly repurposes a Black & Decker 18V cordless string trimmer motor, and the entire system is powered by a high-capacity Hangbin 1888VF 21V Li-ion battery, selected for its favorable energy density and power delivery.`,
                ]
            },
            {
                title: '3.8 Fabrication and Assembly Technique',
                text: [
                    `The construction of the prototype employed a hybrid manufacturing approach, combining traditional metalworking with modern digital fabrication techniques to achieve a balance of structural integrity and precision:`,
                ],
                list: [
                    "Cutting: Plywood body panels were laser-cut for high precision and repeatability, while an abrasive grinder was used for sizing the raw metal stock for the frame.",
                    "Welding: The structural backbone of the chassis was created by arc welding the metal components, ensuring a rigid and durable frame capable of withstanding operational stresses.",
                    "Drilling: Mounting points for all components, including motors, batteries, and electronics, were precisely drilled in both the metal frame and plywood panels.",
                    "3D Printing: Additive manufacturing (FDM) was leveraged to produce custom-designed parts such as motor brackets, electronics enclosures, and mounting adapters. This allowed for rapid design iteration and created perfectly fitted components that would be complex or expensive to produce otherwise.",
                    "Screwing: High-tensile screws and nuts were used for the final assembly of all components, providing strong mechanical joints that also allow for disassembly for maintenance and future upgrades.",
                    "Finishing: The final assembly was treated with protective coatings. Metal parts were painted to prevent corrosion, and plywood panels were sealed, enhancing both the prototype's durability and its aesthetic appearance.",
                ]
            }
        ]
    }
  },
  {
    id: 'chapter4',
    title: 'Chapter 4: Results & Discussion',
    description: 'Presentation of the final product, cost analysis, and performance data.',
    content: {
        type: 'subsections',
        items: [
            {
                title: '4.4 Final Product',
                text: [
                    `The culmination of the design and fabrication phases is a functional, low-profile mobile platform. The chassis is constructed from a welded rectangular steel frame, providing exceptional rigidity, and is driven by a two-wheel-drive system with rear caster wheels for agile maneuverability. A custom-fabricated plywood top cover houses and protects the cutting mechanism and control electronics. The development process was significantly streamlined by applying key design principles and lessons learned from a preliminary proof-of-concept, "Project 1." This iterative approach allowed the team to validate the core mechanical design and control strategy early on, facilitating the efficient and successful construction of the final, fully integrated prototype.`,
                ]
            },
            {
                title: '4.7 Actual Cost and Analysis',
                text: [
                    `A core objective of this project was to develop a cost-effective solution. The final build cost was meticulously tracked and is detailed in the accompanying table. The total expenditure of RM817.36 remained significantly below the initial budget ceiling of RM1000, demonstrating successful resource management and affirming the project's feasibility as an affordable alternative in the lawn care market.`,
                ]
            },
        ]
    }
  },
  {
    id: 'cost_table',
    title: 'Actual Cost Breakdown',
    description: 'A detailed breakdown of the material costs for the project.',
    content: {
        type: 'table',
        headers: ['Part', 'Quantity', 'Unit Price (RM)', 'Total Price (RM)'],
        rows: [
            ['MOTION 2350 Pro Controller', 1, 124.90, 124.90],
            ['Motor Mount & 5 Inches Wheel Kit', 1, 250.00, 250.00],
            ['Fantech WGP12 REVOLVER Controller', 1, 129.00, 129.00],
            ['Black&Decker 18V Trimmer Motor', 1, 46.00, 46.00],
            ['Hangbin 21V Battery', 1, 44.90, 44.90],
            ['Mild Steel Plate (3mm)', 6, 6.50, 39.00],
            ['3D Print Filament', 1, 55.00, 55.00],
            ['Adjustable 5A DC-DC Module', 1, 30.00, 30.00],
            ['Makita Battery Adapter', 1, 17.26, 17.26],
            ['Misc. (Wires, Connectors, etc.)', 1, 44.80, 44.80],
            ['Total', '', '', 817.36]
        ]
    }
  },
  {
    id: 'chapter5',
    title: 'Chapter 5: Conclusion',
    description: 'Summary of achievements and recommendations for future work.',
    content: {
      type: 'subsections',
      items: [
        {
          title: '5.2 Conclusion',
          text: [
            `This project successfully achieved its core objective: to design and build a functional, remote-controlled lawn mower. The final prototype demonstrates the viability of the concept, fulfilling the goals of reducing manual labor and enhancing operator safety by distancing the user from the machine. The adoption of an electric, battery-powered system successfully addresses the environmental objectives, resulting in a quiet and emission-free operation. Furthermore, the project was executed within its budgetary constraints, with the final cost falling comfortably under the RM1000 target, confirming its potential as an economically accessible solution. However, the objective related to cutting performance was only partially met. While the cutting mechanism is operational, its integration within the current chassis design leads to an inconsistent cut height and some mechanical interference. Consequently, while the platform's mobility and control are successful, its primary function as a lawn mower requires further refinement to meet a consumer-grade standard.`,
          ]
        },
        {
          title: '5.3 Recommendations',
          text: [
            `Building upon the outcomes of this project, the following recommendations are proposed for future iterations to advance the prototype towards a market-ready product:`,
          ],
          list: [
            "Optimized Cutting System: A comprehensive redesign of the cutting mechanism is the highest priority. This should involve evaluating alternative, more compact cutting motors or redesigning the chassis to provide adequate clearance and a stable mounting system for the current motor, ensuring a uniform and efficient cut.",
            "Integration of Autonomous Navigation: To enhance functionality, integrate a LiDAR sensor and additional processing power. This would enable the development of semi-autonomous features like object avoidance and, eventually, fully autonomous lawn mapping and mowing capabilities.",
            "Design for Manufacturability and Serviceability (DFMS): Refine the mechanical design to simplify assembly and reduce component count. Improve the layout of internal components to allow for easier access for maintenance, battery replacement, and repairs.",
            "Environmental Hardening: Implement robust waterproofing for all electronic enclosures and connectors. This is critical for ensuring long-term reliability and safety during operation in damp outdoor conditions.",
            "Development of Comprehensive User Documentation: Create a detailed user manual that includes clear instructions for safe operation, battery charging protocols, routine maintenance schedules, and a troubleshooting guide to assist end-users."
          ]
        },
      ]
    },
  },
  {
    id: 'gallery',
    title: 'Technical Gallery',
    description: 'A collection of technical drawings and diagrams from the project appendices.',
    content: {
      type: 'gallery',
      images: [
        { src: 'https://picsum.photos/seed/mower1/800/600', caption: 'Technical Drawing: Isometric & Orthographic View of the Mower Assembly' },
        { src: 'https://picsum.photos/seed/mower2/800/600', caption: 'Photograph of the final, assembled remote-controlled mower prototype.' },
        { src: 'https://picsum.photos/seed/caster/800/600', caption: 'Technical Drawing: Isometric & Orthographic View of the Caster Wheel' },
        { src: 'https://picsum.photos/seed/relay/800/600', caption: 'Technical Drawing: Isometric & Orthographic View of the Relay Module' },
        { src: 'https://picsum.photos/seed/motor/800/600', caption: 'Technical Drawing: Isometric & Orthographic View of the 18V Trimmer Motor' },
        { src: 'https://picsum.photos/seed/controller/800/600', caption: 'Technical Drawing: Isometric & Orthographic View of the Motion 2350 Pro Controller' },
      ]
    }
  },
  {
    id: 'ai_assistant',
    title: 'AI Project Assistant',
    content: { type: 'ai_assistant' },
  }
];
