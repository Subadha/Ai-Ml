import img1 from "@/images/image1.png";
import Image from "next/image";

export default function Home3() {
    return (
        <div className="flex flex-col md:flex-row bg-black justify-evenly items-center md:py-20">
            <div className="flex justify-center mb-10 md:mb-0">
                <Image
                    src={img1}
                    alt=""
                    className="w-2/3 md:w-full" // Adjust width for responsiveness
                />
            </div>
            <div className="flex flex-col text-white text-center">
                <p className="text-5xl md:text-[100px]">40+</p>
                <p className="text-lg md:text-xl">Industries innovated</p>
                <p className="text-5xl md:text-[100px] mt-4">3M+</p>
                <p className="text-lg md:text-xl">Professionals available</p>
            </div>
        </div>
    );
}
