// components/Services.tsx

"use client";
import React from 'react';
import { motion } from 'framer-motion';

// Define the structure of a service
interface Service {
    id: number;
    title: string;
    description: string[];
    icon: JSX.Element; // You can replace this with a string if using image URLs
}

// ServiceCard Component
const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
    return (
        <motion.div
            className="flex flex-col justify-between py-8 px-6 mb-12 bg-transparent shadow-md rounded-lg transform transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: service.id * 0.1 }}
        >
            <div className="inline-block text-purple-500 mb-4">
                {/* Replace the SVG below with your preferred icon or image */}
                {service.icon}
            </div>
            <h3 className="text-xl leading-normal mb-2 font-semibold text-white">{service.title}</h3>
            <ul className="text-gray-400 list-disc list-inside space-y-2 flex-grow">
                {service.description.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </motion.div>
    );
};

// Main Services Component
const Services: React.FC = () => {
    const services: Service[] = [
        {
            id: 1,
            title: "AI and Generative AI Solutions",
            description: [
                "Custom AI/ML Model Development: Leverage expertise in deep neural networks (DNN), generative AI, and computer vision to offer tailored AI models for industries like healthcare, automotive, and manufacturing.",
                "Generative AI Solutions: Create AI products such as chatbots, content generation platforms, or tools that enhance productivity.",
                "AI for Autonomous Vehicles: Design AI-driven mobility solutions, including autonomous car systems, vehicle health monitoring, and intelligent traffic regulation.",
            ],
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className="bi bi-robot" viewBox="0 0 16 16">
                    {/* Example robot icon */}
                    <path d="M12 1a1 1 0 0 1 1 1v1h-14v-1a1 1 0 0 1 1-1h12zm1 3h-14v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                    <path d="M5 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm6 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
            ),
        },
        {
            id: 2,
            title: "Embedded Systems and IoT Solutions",
            description: [
                "Embedded AI Development: Develop real-time embedded AI systems using RISC processors and RTOS for industries like automotive, defense, and consumer electronics.",
                "IoT Solutions: Build smart city, intelligent traffic systems, and IoT-enabled devices, integrating sensors and data collection for automation and intelligent decision-making.",
                "Connected Mobility Solutions: Develop intelligent connected mobility platforms that integrate public and private transportation with real-time analytics.",
            ],
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className="bi bi-signal" viewBox="0 0 16 16">
                    {/* Example signal icon */}
                    <path d="M0 0v16h16V0H0zM2 14V2h12v12H2z" />
                </svg>
            ),
        },
        {
            id: 3,
            title: "Cloud and SaaS Product Development",
            description: [
                "SaaS Platforms: Create scalable SaaS products for industries that need cloud-based platforms, combining AI and SaaS for automation, communication, and operational efficiency.",
                "Cloud Infrastructure Consulting: Assist organizations in building and scaling cloud infrastructure and integrating AI-enabled products for global operations.",
            ],
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className="bi bi-cloud" viewBox="0 0 16 16">
                    {/* Example cloud icon */}
                    <path d="M4.406 11.342a5.53 5.53 0 0 1 .394-1.66A4.5 4.5 0 1 1 10.5 8a4.52 4.52 0 0 1 3.621 2.17A4.502 4.502 0 0 1 10.5 14a4.5 4.5 0 0 1-4.094-2.658z" />
                </svg>
            ),
        },
        {
            id: 4,
            title: "AI-Driven Conversational Systems",
            description: [
                "Conversational AI Solutions: Develop and implement solutions such as voice biometrics, speech recognition, and virtual assistants for industries like customer service, automotive, and education.",
                "Voice Biometrics for Security: Provide AI-enabled biometric authentication solutions for industries requiring high security (e.g., finance, healthcare).",
            ],
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className="bi bi-chat-left-text" viewBox="0 0 16 16">
                    {/* Example chat icon */}
                    <path d="M14 1H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4v3l3-3h5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
                    <path d="M3 3h10v2H3V3zm0 4h10v2H3V7zm0 4h6v2H3v-2z" />
                </svg>
            ),
        },
        {
            id: 5,
            title: "Intelligent Mobility and Location-Based Services",
            description: [
                "Smart City Solutions: Offer intelligent mobility solutions for urban areas, including AI for traffic monitoring, vehicle health prediction, and integrating transportation systems.",
                "Location Intelligence and Fleet Management: Build AI-driven fleet management platforms and systems for optimizing logistics, transportation, and vehicle safety.",
            ],
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                    {/* Example geo icon */}
                    <path d="M12.166 8.94a5.507 5.507 0 1 1-5.507-5.507 5.507 5.507 0 0 1 5.507 5.507zm-5.507-4.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
                    <path d="M12.166 8.94a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9z" />
                </svg>
            ),
        },
        {
            id: 6,
            title: "AI-Powered Enterprise Solutions",
            description: [
                "AI for Business Automation: Implement AI solutions for improving internal operations, such as meeting room automation, virtual collaboration tools, and employee productivity enhancements.",
                "Digital Transformation Consulting: Guide businesses through digital transformations, integrating AI across various sectors like retail, manufacturing, and logistics.",
            ],
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className="bi bi-gear" viewBox="0 0 16 16">
                    {/* Example gear icon */}
                    <path d="M9.405 1.05a1 1 0 0 0-1.81 0l-.14.437a.5.5 0 0 1-.492.39H5.5a1 1 0 0 0-.866.5L3.607 3.5a1 1 0 0 0 .192 1.41l1.103 1.103a.5.5 0 0 1 .146.528l-.43.93a1 1 0 0 0 .236 1.06l.79.79a1 1 0 0 0 1.414 0l.79-.79a1 1 0 0 0 .236-1.06l-.43-.93a.5.5 0 0 1 .146-.528l1.103-1.103a1 1 0 0 0 .192-1.41l-1.04-1.04a.5.5 0 0 1-.492-.39l-.14-.437zM8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
            ),
        },
        {
            id: 7,
            title: "Product Management and Innovation Consulting",
            description: [
                "Innovation Strategy Consulting: Help companies align their business and technology strategies by identifying gaps and developing innovative AI-driven solutions.",
                "R&D Consulting: Offer services in leading R&D centers for product ideation and prototyping.",
            ],
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className="bi bi-lightbulb" viewBox="0 0 16 16">
                    {/* Example lightbulb icon */}
                    <path d="M2 6a6 6 0 1 1 12 0c0 2.21-.896 4.206-2.344 5.656A6.97 6.97 0 0 1 8 15a6.97 6.97 0 0 1-1.656-1.344C2.896 10.206 2 8.21 2 6z" />
                    <path d="M6.5 11.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5zm3 0a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5z" />
                </svg>
            ),
        },
        {
            id: 8,
            title: "Cross-Functional Leadership and Consulting",
            description: [
                "Global Leadership Consulting: Leverage your experience in global R&D to offer leadership consulting to help companies scale teams across different regions.",
                "Program Management for AI Initiatives: Assist companies in running AI-driven projects, including budgeting, vendor management, and strategy execution.",
            ],
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className="bi bi-person-lines-fill" viewBox="0 0 16 16">
                    {/* Example person icon */}
                    <path d="M12 1a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
                    <path d="M14 14s-1-1.5-6-1.5S2 14 2 14v1h12v-1z" />
                </svg>
            ),
        },
    ];

    return (
        <section id="services" className="relative py-20 bg-black">
            <div className="container mx-auto px-4">
                {/* Heading */}
                <header className="text-center mx-auto mb-12 lg:px-20">
                    <h2 className="text-3xl leading-normal mb-2 font-bold text-white">What We Do</h2>
                    <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 100 60"
                        className="mx-auto my-4"
                        style={{ height: '35px' }}
                        xmlSpace="preserve"
                    >
                        <circle
                            cx="50.1"
                            cy="30.4"
                            r="5"
                            className="stroke-purple-500"
                            style={{ fill: 'transparent', strokeWidth: 2, strokeMiterlimit: 10 }}
                        ></circle>
                        <line
                            x1="55.1"
                            y1="30.4"
                            x2="100"
                            y2="30.4"
                            className="stroke-purple-500"
                            style={{ strokeWidth: 2, strokeMiterlimit: 10 }}
                        ></line>
                        <line
                            x1="45.1"
                            y1="30.4"
                            x2="0"
                            y2="30.4"
                            className="stroke-purple-500"
                            style={{ strokeWidth: 2, strokeMiterlimit: 10 }}
                        ></line>
                    </svg>
                </header>
                {/* Services Grid */}
                <div className="flex flex-wrap -mx-4">
                    {services.map((service) => (
                        <div key={service.id} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 flex">
                            <ServiceCard service={service} />
                        </div>
                    ))}
                </div>
                
            </div>
        </section>
    );
};

export default Services;
