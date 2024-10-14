"use client";
import * as React from "react";
import { useRouter } from 'next/navigation'; // App Router uses 'next/navigation'
import { projects } from "@/data";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import Image from 'next/image';

export function Projects() {
    const router = useRouter();

    const handleLearnMore = (id: number) => {
        router.push(`/project/${id}`); // Dynamic route for each project
    };

    return (
        <div id="project" className="flex flex-col justify-center items-center bg-black min-h-screen p-[50px]">
            <h2 className="text-white text-6xl font-bold md:mb-[100px] mb-[50px] text-shadow">Projects</h2>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full max-w-7xl"
            >
                <CarouselContent>
                    {projects.map((project,index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 px-4">
                            <div className="h-full">
                                <Card className="rounded-xl overflow-hidden shadow-lg transition-shadow duration-300 bg-gray-900 border-2 border-purple-500 flex flex-col h-full">
                                    <div className="relative">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-[250px] object-cover transition-transform duration-300"
                                            width={400}
                                            height={250}
                                            placeholder="blur" // Optional: improves loading experience
                                            blurDataURL="/path/to/placeholder" // Optional: your placeholder image
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-40"></div>
                                    </div>
                                    <CardContent className="p-6 text-center flex flex-col justify-between h-full">
                                        <div className="flex-grow min-h-[100px]">
                                            <h3 className="text-2xl font-bold text-white mb-2 text-shadow">{project.title}</h3>
                                            <p className="text-gray-300 text-sm mb-4">{project.briefDescription}</p>
                                        </div>
                                        <button
                                            className="bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300 hover:bg-blue-500 mt-4"
                                            onClick={() => handleLearnMore(project.id)}
                                        >
                                            Learn More
                                        </button>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious
                    className="text-white hover:text-gray-400 transition duration-300"
                    aria-label="Previous"
                />
                <CarouselNext
                    className="text-white hover:text-gray-400 transition duration-300"
                    aria-label="Next"
                />
            </Carousel>
        </div>
    );
}
