export default function Home2() {
    return (
        <div id="section1" className="flex flex-col h-full p-8 md:p-12  lg:p-[150px] bg-black text-white gap-[100px]">
            <div className="flex flex-col bg-opacity-90 rounded-lg shadow-xl p-6 md:p-8 lg:p-12 border-l-4 border-purple-500 hover:scale-105 transition-transform duration-300">
                <div className="flex h-full text-lg md:text-xl lg:text-2xl text-center px-4 md:px-8 lg:px-12">
                    At Our Company, we specialize in cutting-edge AI and machine learning development, providing innovative solutions that transform industries such as automotive, technology, and smart mobility.
                </div>
                <div className="flex justify-center items-center h-full pt-4 md:pt-8 pb-3 text-base md:text-lg lg:text-xl text-center font-bold">
                    <p className="text-blue-400">25+ years of industry experience</p>
                </div>
                <div className="flex justify-center items-center h-full pt-2 md:pt-4 text-xs md:text-sm lg:text-base text-center font-bold">
                    <p className="text-gray-400">AI expertise in Generative AI, Autonomous Vehicles, and more</p>
                </div>
            </div>
            <div className="flex flex-col py-8 md:pt-12 lg:pt-16 justify-center items-center gap-4 md:gap-8">
                <div className="flex h-full text-4xl md:text-5xl lg:text-6xl text-center px-4 md:px-8 lg:px-12">
                    <p className="text-gradient">Expert product & solution deployment</p>
                </div>
                <div className="flex h-full text-base md:text-lg lg:text-xl text-center px-4 md:px-8 lg:px-12">
                    <p>
                        In the AGI era, only Turing has the right combination of training experience with the world s most powerful LLMs—GPT, Claude, and more—and AI-powered product development expertise to build faster, more efficient genAI solutions.
                    </p>
                </div>
            </div>
        </div>
    );
}
