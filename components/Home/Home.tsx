"use client";
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';

export default function Home() {
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const textElement = textRef.current;
        if (textElement) {
            const containerWidth = textElement.offsetWidth;

            gsap.fromTo(
                textElement,
                { x: 0 }, // Start position
                {
                    x: `-${containerWidth / 2}px`, // End position for seamless loop
                    duration: 10, // Duration for the scroll
                    ease: "none", // Linear for consistent speed
                    repeat: -1, // Infinite loop
                }
            );
        }
    }, []);

    return (
        <div className="relative flex flex-col h-screen justify-center items-center bg-black px-4 overflow-hidden">   
            <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] md:w-[500px] md:h-[500px] sm:w-[400px] sm:h-[400px] bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700 opacity-50 blur-3xl rounded-full pointer-events-none"></div>
            <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] md:w-[500px] md:h-[500px] sm:w-[400px] sm:h-[400px] bg-gradient-to-tl from-pink-500 to-red-600 opacity-50 blur-3xl rounded-full pointer-events-none"></div>
            <div className="relative max-w-6xl text-center space-y-10 z-10 text-white">
                <h1 className="text-4xl md:text-7xl sm:text-4xl font-extrabold mb-4 drop-shadow-lg">
                    Driving Innovation with AI and Machine Learning Solutions
                </h1>
                <p className="text-xl leading-relaxed max-w-xl mx-auto md:text-xl sm:text-sm">
                    Over 25 years of expertise in developing AI, Generative AI, and Intelligent Mobility Solutions for global industries.
                </p>
                <div className="flex flex-col md:flex-row md:gap-10 md:justify-center md:items-center">
                    <Link href="/services">
                        <button className="w-[70vw] sm:w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold px-8 py-4 rounded-full shadow-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 mb-4 md:mb-0 md:mr-4"
                            aria-label="Explore Our Services">
                            Explore Our Services
                        </button>
                    </Link>
                    <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ29kzqxxw-Hydb2sSIvA7OOfBHr_QLI7Nssa6k0JdMx6Za8dFuKKuLb68B60h94nzM4H-qPOB0U">
                        <button className="w-[70vw] sm:w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold px-8 py-4 rounded-full shadow-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 mb-4 md:mb-0 md:mr-4"
                            aria-label="Explore Our Services">
                            Book a Call
                        </button>
                    </Link>
                </div>

                
                
            </div>

            {/* Scrolling Text */}
            <div className="absolute bottom-0 left-0 w-full text-white overflow-hidden">
                <div
                    ref={textRef}
                    className="flex whitespace-nowrap items-center"
                >
                    {/* Scrolling items */}
                    {['Gemini', 'ChatGPT', 'Nvidia', 'Snowflake'].flatMap((text, index) => (
                        <p key={index} className="text-2xl sm:text-3xl md:text-4xl inline-block font-bold drop-shadow-lg mx-6">
                            {text}
                        </p>
                    ))}
                    {/* Duplicate the text items for seamless effect */}
                    {['Gemini', 'ChatGPT', 'Nvidia', 'Snowflake'].flatMap((text, index) => (
                        <p key={index + 4} className="text-2xl sm:text-3xl md:text-4xl inline-block font-bold drop-shadow-lg mx-6">
                            {text}
                        </p>
                    ))}
                    {['Gemini', 'ChatGPT', 'Nvidia', 'Snowflake'].flatMap((text, index) => (
                        <p key={index + 4} className="text-2xl sm:text-3xl md:text-4xl inline-block font-bold drop-shadow-lg mx-6">
                            {text}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}
