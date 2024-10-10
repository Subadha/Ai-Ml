"use client";
import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import img1 from "@/images/team1.png";
import img2 from "@/images/team2.png";
import img3 from "@/images/team3.png";
import img4 from "@/images/m2.jpeg";
import img5 from "@/images/team5.png";
import img7 from "@/images/team7.png";
import Link from "next/link";

const teamMembers = [
    {
        id: 1,
        name: "Aditya Shanker",
        role: "CEO , IIM alumni , Ex Vice President of Icertis",
        photo: img1,
        linkedin: "https://www.linkedin.com/in/aditya-shanker-iiml/"
    },
    {
        id: 2,
        name: "Tarun Jain",
        role: "COO , IITH Alumni",
        photo: img7,
        linkedin: "https://www.linkedin.com/in/tarun-jain-47a0844?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
        id: 3,
        name: "Praveen M",
        role: "Lead Developer ,  IITH Alumni",
        photo: img2,
        linkedin: "https://www.linkedin.com/in/praveen-m-6789161ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
        id: 4,
        name: "Vivek Agarwal",
        role: "ML Engineer ,  IITH Alumni",
        photo: img3,
        linkedin: "https://www.linkedin.com/in/vivek-agarwal-bb6300198/"
    },
    {
        id: 5,
        name: "Kalyan Gopu",
        role: "Project Manager",
        photo: img4,
        linkedin: "https://www.linkedin.com/in/kalyan-gopu-45391b217?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
        id: 6,
        name: "Shivarama Krishna",
        role: "AI Consultant",
        photo: img5,
        linkedin: "https://www.linkedin.com/in/shivram1896?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
];

export default function Team() {
    return (
        <section className="py-24 bg-black text-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <h2 className="font-bold text-5xl mb-4">Our Team</h2>
                    <p className="text-lg max-w-2xl mx-auto">
                        Meet our dedicated team of experts in AI, ML, and more.
                    </p>
                </div>
                <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {teamMembers.map((member) => (
                        <div key={member.id} className="group">
                            <div className="relative mb-6">
                                <Image
                                    src={member.photo}
                                    alt={`${member.name} image`}
                                    className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600"
                                    width={160}
                                    height={160}
                                />
                            </div>
                            <h4 className="text-xl font-semibold text-center group-hover:text-indigo-600 transition-all duration-500">
                                {member.name}
                            </h4>
                            <p className="text-gray-500 text-center group-hover:text-gray-200 transition-all duration-500">
                                {member.role}
                            </p>
                            <div className="text-center mt-2">
                                <Link href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                    <LinkedInIcon className="text-gray-400 group-hover:text-indigo-600 transition-all duration-500" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
