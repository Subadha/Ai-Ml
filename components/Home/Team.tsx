"use client";
import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import img1 from "@/images/team1.png"
import img2 from "@/images/team2.png"
import img3 from "@/images/team3.png"
import img4 from "@/images/m2.jpeg"
import img5 from "@/images/team5.png"
import img7 from "@/images/team7.png"

const teamMembers = [
    {
        id: 1,
        name: "Aditya Shanker",
        role: "CEO",
        description: "Leading the company with a vision for innovation and growth.",
        photo: img1,
        linkedin: "https://www.linkedin.com/in/aditya-shanker-iiml/"
    },
    {
        id: 2,
        name: "Tarun Jain",
        role: "COO",
        description: "Overseeing technological development and strategy.",
        photo: img7,
        linkedin: "https://www.linkedin.com/in/tarun-jain-47a0844?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
        id: 3,
        name: "Praveen M",
        role: "Lead Developer",
        description: "Expert in building scalable applications and leading teams.",
        photo: img2,
        linkedin: "https://www.linkedin.com/in/praveen-m-6789161ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
        id: 4,
        name: "Vivek Agarwal",
        role: "ML Engineer",
        description: "Creating user-friendly designs and improving user experience.",
        photo: img3,
        linkedin: "https://www.linkedin.com/in/vivek-agarwal-bb6300198/"
    },
    {
        id: 5,
        name: "Kalyan Gopu",
        role: "Project Manager",
        description: "Ensuring project delivery within time and budget.",
        photo: img4,
        linkedin: "https://www.linkedin.com/in/kalyan-gopu-45391b217?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
        id: 6,
        name: "Shivarama Krishna",
        role: "AI Consultant",
        description: "Driving marketing strategies and campaigns.",
        photo: img5,
        linkedin: "https://www.linkedin.com/in/shivram1896?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
];

export default function Team() {
    return (
            <div id="team" className="font-body flex flex-col items-center justify-center px-6 py-12 bg-black dark:bg-gray-900 text-gray-900 dark:text-white pb-16">
                <h1 className="text-5xl font-bold mb-4 text-center text-white">
                    Meet Our Dedicated Team of Experts
                </h1>
                <p className="text-lg text-center mb-8 max-w-2xl text-white">
                    This is our team of designers, developers, and creatives who mastered all the experience in the AI and ML.
                </p>

                <div className="flex flex-wrap justify-center gap-8">
                    {teamMembers.map((member) => (
                        <figure key={member.id} className="relative w-48 h-48 md:w-64 md:h-64 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 shadow-lg rounded-lg overflow-hidden">
                            <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full h-full"
                            >
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
                                    <p className="text-sm text-gray-300">
                                        {member.role}
                                    </p>
                                    <LinkedInIcon className="text-gray-300 inline-block h-5 w-5 mt-1" />
                                </figcaption>
                            </a>
                        </figure>
                    ))}
                </div>
            </div>
    );
}
