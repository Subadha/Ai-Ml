import * as React from "react";
import img2 from "@/images/image2.png";
import img3 from "@/images/image3.png";
import img4 from "@/images/image4.png";
import img5 from "@/images/image5.png";

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
        title: "Project 1",
        description: "A detailed description of Project 1 showcasing its features and functionalities.",
    },
    {
        image: img3,
        title: "Project 2",
        description: "A detailed description of Project 2 showcasing its features and functionalities.",
    },
    {
        image: img4,
        title: "Project 3",
        description: "A detailed description of Project 3 showcasing its features and functionalities.",
    },
    {
        image: img5,
        title: "Project 4",
        description: "A detailed description of Project 4 showcasing its features and functionalities.",
    },
    {
        image: img3, // Using an existing image for Project 5
        title: "Project 5",
        description: "A detailed description of Project 5 showcasing its features and functionalities.",
    },
];

export function Projects() {
    return (
        <div id="project" className="flex flex-col justify-center items-center bg-black min-h-screen p-[50px]">
            <h2 className="text-white text-6xl font-bold mb-10 text-shadow">Projects</h2>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full max-w-7xl"
            >
                <CarouselContent>
                    {projects.map((project, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 px-4">
                            <div className="transition-transform duration-300 transform hover:scale-105">
                                <Card className="rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-56 object-cover transition-transform duration-300"
                                        width={400}
                                        height={300}
                                    />
                                    <CardContent className="p-6 text-center">
                                        <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
                                        <p className="text-gray-300 text-sm">{project.description}</p>
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
