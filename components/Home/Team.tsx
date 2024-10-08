"use client";
import Image from "next/image";
import img2 from "@/images/image2.png";
import img3 from "@/images/image3.png";
import img4 from "@/images/image4.png";
import img5 from "@/images/image5.png";

const teamMembers = [
    {
        id: 1,
        name: "Alice Johnson",
        role: "CEO",
        description: "Leading the company with a vision for innovation and growth.",
        photo: img2,
    },
    {
        id: 2,
        name: "Bob Smith",
        role: "CTO",
        description: "Overseeing technological development and strategy.",
        photo: img3,
    },
    {
        id: 3,
        name: "Charlie Brown",
        role: "Lead Developer",
        description: "Expert in building scalable applications and leading teams.",
        photo: img4,
    },
    {
        id: 4,
        name: "Diana Prince",
        role: "UX Designer",
        description: "Creating user-friendly designs and improving user experience.",
        photo: img5,
    },
    {
        id: 5,
        name: "Ethan Hunt",
        role: "Project Manager",
        description: "Ensuring project delivery within time and budget.",
        photo: img3,
    },
];

export default function Team() {
    return (
        <div className="flex flex-col items-center justify-center px-6 py-12 bg-black dark:bg-gray-900 text-gray-900 dark:text-white pb-16">
            <h1 className="text-5xl  font-bold mb-4 text-center text-white">
                Meet Our Dedicated Team of Experts
            </h1>
            <p className="text-lg text-center mb-8 max-w-2xl text-white">
                This is our team of designers, developers, and creatives who mastered
                all the experience in the AI and ML.
            </p>

            <div className="flex flex-wrap justify-center gap-8">
                {teamMembers.map((member) => (
                    <figure key={member.id} className="relative w-48 h-48 md:w-64 md:h-64 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 shadow-lg rounded-lg overflow-hidden">
                        <div className="block w-full h-full">
                            <Image
                                src={member.photo}
                                width={256}
                                height={256}
                                className="object-cover w-full h-full"
                                alt={member.name}
                            />
                            <figcaption className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white px-4 py-3">
                                <p className="text-lg font-semibold text-gray-200 mb-1">
                                    {member.name}
                                </p>
                                <p className="text-sm text-gray-300">{member.role}</p>
                                <p className="text-xs text-gray-300 mt-1">{member.description}</p>
                            </figcaption>
                        </div>
                    </figure>
                ))}
            </div>
        </div>
    );
}
