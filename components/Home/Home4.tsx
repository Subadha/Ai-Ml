"use client";
import { FaRegStar, FaBuilding } from 'react-icons/fa'; // Import icons you want to use
import { IoIosGlobe, IoMdPeople } from 'react-icons/io'; // Example icons, replace with your choice

interface Company {
    name: string;
    description: string;
    icon: JSX.Element; // React Icon component
}

const companies: Company[] = [
    {
        name: "Icertis",
        description: "As Vice President of AI R&D, Icertis leads the development of cutting-edge AI-driven contract lifecycle management solutions. The focus is on enhancing operational efficiency and ensuring compliance through intelligent automation. Icertis is redefining how organizations manage contracts with a robust AI backbone.",
        icon: <FaBuilding className="text-4xl" />, // Different icon for Icertis
    },
    {
        name: "Verint",
        description: "At Verint, I served as Sr Director Software and India Lead R&D, enhancing customer engagement through AI and analytics. My role involved driving innovative solutions in customer experience management, utilizing advanced analytics to provide actionable insights that empower businesses to engage customers effectively.",
        icon: <IoMdPeople className="text-4xl" />, // Different icon for Verint
    },
    {
        name: "Barco",
        description: "As Director of Software and Head of AI Innovation Labs, I drove AI innovation in media and entertainment sectors. This role required spearheading initiatives in image and video processing technologies, ensuring our products meet the highest standards of quality and user experience.",
        icon: <FaRegStar className="text-4xl" />, // Keep the same icon or change as needed
    },
    {
        name: "Cerence Inc.",
        description: "Leading AI R&D and Global Capability Center at Cerence, focusing on automotive AI solutions for smarter vehicles. My work involved the development of voice recognition and natural language understanding technologies, paving the way for enhanced driver and passenger experiences in connected cars.",
        icon: <IoIosGlobe className="text-4xl" />, // Keep the same icon or change as needed
    },
];

export default function CompaniesWorkedWith() {
    return (
        <div className="flex flex-col items-center text-center p-8 gap-10 md:px-[150px] bg-black text-white overflow-hidden"> {/* Prevent overflow */}
            <h2 className="text-4xl md:text-5xl  lg:text-6xl text-gradient mb-6">Companies We ve Worked With</h2>
            <div className="flex flex-col sm:gap-[100px] gap-6">
                {companies.map((company, index) => (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row items-center bg-opacity-90 rounded-lg shadow-2xl p-6 md:p-8 lg:p-12 border-l-4 border-purple-500 transition-transform duration-300 hover:scale-105"
                    >
                        <div className="mr-4 mb-4 md:mb-0">
                            {company.icon} {/* Render the icon here */}
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-lg md:text-xl lg:text-2xl font-bold">{company.name}</h3>
                            <p className="text-base md:text-lg lg:text-xl text-gray-400 mt-2">
                                {company.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
