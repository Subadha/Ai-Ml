// app/project/[id]/page.tsx

import Image from 'next/image';
import { notFound } from 'next/navigation';
import { projects } from '@/data';

interface ProjectDetailsProps {
    params: {
        id: string;
    };
}

const ProjectDetails = ({ params }: ProjectDetailsProps) => {
    const { id } = params;
    const project = projects.find((p) => p.id.toString() === id);

    if (!project) {
        return notFound();
    }

    return (
        <div className="flex flex-col justify-center items-center bg-gradient-to-b bg-black min-h-screen p-12">
            <div className="w-full  bg-black bg-opacity-80 rounded-lg shadow-lg p-8 flex flex-col md:flex-row">
                {/* Image Section */}
                <div className="md:w-1/2">
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={400}
                        className="w-full object-cover rounded-lg transition-transform transform hover:scale-105"
                    />
                </div>

                {/* Text Section */}
                <div className="md:w-1/2 md:pl-8 flex flex-col justify-center">
                    <h2 className="text-white text-4xl sm:text-left text-center font-extrabold mb-4">{project.title}</h2>
                    <p className="text-gray-300 text-lg mb-4">{project.description}</p>

                    <div className="mt-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">Additional Details</h3>
                        <p className="text-gray-400 mb-4">
                            Here you can add more cool elements like key technologies, timelines, challenges, or achievements related to the project.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {/* Example: Add some tech icons or badges here */}
                            <span className="bg-gray-700 text-gray-300 rounded-full px-3 py-1 text-sm">React</span>
                            <span className="bg-gray-700 text-gray-300 rounded-full px-3 py-1 text-sm">Node.js</span>
                            <span className="bg-gray-700 text-gray-300 rounded-full px-3 py-1 text-sm">CSS3</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;