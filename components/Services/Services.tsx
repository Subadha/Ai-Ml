// components/Services.tsx

"use client";
import img1 from "@/images/project1.png";
import img2 from "@/images/project2.png";
import img3 from "@/images/project3.png";
import img4 from "@/images/project4.png";
import img5 from "@/images/project5.png";
import React from 'react';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';

interface Service {
    id: number;
    title: string;
    description: string[];
    image: StaticImageData;
}

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
    const isEven = service.id % 2 === 0;

    return (
        <motion.div
            className={`flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} py-8 px-6 sm:gap-10 gap-4 mb-12 bg-transparent shadow-lg rounded-lg transform transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:scale-105 hover:bg-opacity-90`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: service.id * 0.1 }}
        >
            {/* Image section */}
            <div className="relative w-full md:w-1/2 mb-4 md:mb-0">
                <div className="overflow-hidden rounded-lg">
                    <Image
                        src={service.image}
                        alt={service.title}
                        width={500}
                        height={300}
                        className="object-cover h-72 w-full transform transition duration-500 ease-in-out hover:scale-110"
                    />
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 rounded-lg"></div>
                </div>
            </div>

            {/* Text section */}
            <div className="w-full md:w-1/2 flex flex-col justify-center ">
                <h3 className="text-2xl leading-normal mb-4 font-semibold text-white text-center md:text-left tracking-wide transform transition hover:text-purple-400">
                    {service.title}
                </h3>
                <ul className="text-gray-400 list-disc list-inside space-y-2 text-center md:text-left">
                    {service.description.map((item, index) => (
                        <li key={index} className="transform transition hover:scale-105">{item}</li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
};

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
            image: img1,
        },
        {
            id: 2,
            title: "Embedded Systems and IoT Solutions",
            description: [
                "Embedded AI Development: Develop real-time embedded AI systems using RISC processors and RTOS for industries like automotive, defense, and consumer electronics.",
                "IoT Solutions: Build smart city, intelligent traffic systems, and IoT-enabled devices, integrating sensors and data collection for automation and intelligent decision-making.",
                "Connected Mobility Solutions: Develop intelligent connected mobility platforms that integrate public and private transportation with real-time analytics.",
            ],
            image: img2,
        },
        {
            id: 3,
            title: "Cloud and SaaS Product Development",
            description: [
                "SaaS Platforms: Create scalable SaaS products for industries that need cloud-based platforms, combining AI and SaaS for automation, communication, and operational efficiency.",
                "Cloud Infrastructure Consulting: Assist organizations in building and scaling cloud infrastructure and integrating AI-enabled products for global operations.",
            ],
            image: img3,
        },
        {
            id: 4,
            title: "AI-Driven Conversational Systems",
            description: [
                "Conversational AI Solutions: Develop and implement solutions such as voice biometrics, speech recognition, and virtual assistants for industries like customer service, automotive, and education.",
                "Voice Biometrics for Security: Provide AI-enabled biometric authentication solutions for industries requiring high security (e.g., finance, healthcare).",
            ],
            image: img4,
        },
        {
            id: 5,
            title: "Intelligent Mobility and Location-Based Services",
            description: [
                "Smart City Solutions: Offer intelligent mobility solutions for urban areas, including AI for traffic monitoring, vehicle health prediction, and integrating transportation systems.",
                "Location Intelligence and Fleet Management: Build AI-driven fleet management platforms and systems for optimizing logistics, transportation, and vehicle safety.",
            ],
            image: img5,
        },
    ];

    return (
        <section id="services" className="relative py-20 bg-black">
            <div className="container mx-auto px-4">
                <header className="text-center mx-auto mb-12 lg:px-20">
                    <h2 className="text-3xl leading-normal mb-2 font-bold text-white">What We Do</h2>
                    <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 100 60"
                        className="mx-auto my-4 animate-pulse"
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
                <div className="flex flex-col space-y-12">
                    {services.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

