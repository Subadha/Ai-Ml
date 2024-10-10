import * as React from "react";
import img2 from "@/images/project1.png";
import img3 from "@/images/project5.png";
import img4 from "@/images/project3.png";
import img5 from "@/images/project4.png";
import img6 from "@/images/project2.png";

import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import Image from 'next/image';

const projects = [
    {
        image: img2,
        title: "Leading Generative AI Practice",
        description: "Led product management and engineering teams, collaborating closely with the CXO team to define the product vision and growth strategy, while fostering an innovative culture.",
    },
    {
        image: img3,
        title: "AI Innovation Labs",
        description: "Initiated and led Barco AI Innovation Labs, focusing on the creation of future AI products with a 100+ member software platform team.",
    },
    {
        image: img4,
        title: "Transforming Automotive AI",
        description: "Transformed the India back office to the largest Global Capability Center (GCC), developing AI products in generative AI and speech recognition, resulting in a $25M business trajectory.",
    },
    {
        image: img5,
        title: "Smart City Mobility Product",
        description: "Initiated product transformation at Pitney Bowes Software, achieving an 80% revenue jump through IoT, augmented reality, and machine learning technologies.",
    },
    {
        image: img6,
        title: "AI-Enabled Future Meeting Rooms",
        description: "Created AI-enabled future meeting rooms using vision AI and conversational AI to enhance collaboration and productivity.",
    },
];

export function Projects() {
    return (
        <div id="project" className="flex flex-col justify-center items-center bg-black min-h-screen p-[50px]">
            <h2 className="text-white text-6xl font-bold md:mb-[100px] text-shadow">Projects</h2>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full max-w-7xl"
            >
                <CarouselContent>
                    {projects.map((project, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 px-4">
                            <div>
                                <Card className="rounded-xl overflow-hidden shadow-lg transition-shadow duration-300 bg-gray-900 border-2 border-purple-500 relative z-10 h-[450px]">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-[250px] object-cover transition-transform duration-300"
                                        width={400}
                                        height={250}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-40"></div>
                                    <CardContent className="p-6 text-center relative z-20 flex flex-col justify-between h-full">
                                        <div className="flex-grow min-h-[100px]">
                                            <h3 className="text-2xl font-bold text-white mb-2 text-shadow">{project.title}</h3>
                                            <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                                        </div>
                                        <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300 hover:bg-blue-500 mt-4">
                                            Learn More
                                        </button>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="text-white hover:text-gray-400 transition duration-300" />
                <CarouselNext className="text-white hover:text-gray-400 transition duration-300" />
            </Carousel>
        </div>
    );
}
