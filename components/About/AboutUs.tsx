import Image from 'next/image';
import img2 from "@/images/image2.png"
import img3 from "@/images/image3.png"
import img4 from "@/images/image4.png"
import img5 from "@/images/image5.png"

const AboutUs = () => {
    return (
        <>
            <section className="py-24 relative bg-black"> {/* Added bg-black here */}
                <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                    <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
                        <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                            <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                                <Image
                                    className="rounded-xl object-cover"
                                    src={img2}
                                    alt="About Us image"
                                    width={500} // Specify your desired width
                                    height={500} // Specify your desired height
                                />
                            </div>
                            <Image
                                className="sm:ml-0 ml-auto rounded-xl object-cover"
                                src={img3}
                                alt="About Us image"
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                            <div className="w-full flex-col justify-center items-start gap-8 flex">
                                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                    <h2 className="text-gray-200 text-4xl font-bold font-manrope leading-normal lg:text-start text-center"> {/* Changed to text-gray-200 */}
                                        Empowering Each Other to Succeed
                                    </h2>
                                    <p className="text-gray-400 text-base font-normal leading-relaxed lg:text-start text-center"> {/* Changed to text-gray-400 */}
                                        Every project we ve undertaken has been a collaborative effort, where every person involved has left their mark. Together, we ve not only constructed buildings but also built enduring connections that define our success story.
                                    </p>
                                </div>
                                <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                                    <div className="flex-col justify-start items-start inline-flex">
                                        <h3 className="text-gray-200 text-4xl font-bold font-manrope leading-normal">33+</h3> {/* Changed to text-gray-200 */}
                                        <h6 className="text-gray-400 text-base font-normal leading-relaxed">Years of Experience</h6> {/* Changed to text-gray-400 */}
                                    </div>
                                    <div className="flex-col justify-start items-start inline-flex">
                                        <h4 className="text-gray-200 text-4xl font-bold font-manrope leading-normal">125+</h4> {/* Changed to text-gray-200 */}
                                        <h6 className="text-gray-400 text-base font-normal leading-relaxed">Successful Projects</h6> {/* Changed to text-gray-400 */}
                                    </div>
                                    <div className="flex-col justify-start items-start inline-flex">
                                        <h4 className="text-gray-200 text-4xl font-bold font-manrope leading-normal">52+</h4> {/* Changed to text-gray-200 */}
                                        <h6 className="text-gray-400 text-base font-normal leading-relaxed">Happy Clients</h6> {/* Changed to text-gray-400 */}
                                    </div>
                                </div>
                            </div>
                            <button className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                                <span className="px-1.5 text-white text-sm font-medium leading-6">Read More</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 relative xl:mr-0 lg:mr-5 mr-0 bg-black"> {/* Added bg-black here */}
                <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                    <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
                        <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                            <div className="w-full flex-col justify-center items-start gap-8 flex">
                                <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                                    <h6 className="text-gray-400 text-base font-normal leading-relaxed">About Us</h6>
                                    <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                        <h2 className="text-white text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                            The Tale of Our Achievement Story
                                        </h2>
                                        <p className="text-gray-400 text-base font-normal leading-relaxed lg:text-start text-center"> {/* Changed to text-gray-400 */}
                                            Our achievement story is a testament to teamwork and perseverance. Together, we ve overcome challenges, celebrated victories, and created a narrative of progress and success.
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full flex-col justify-center items-start gap-6 flex">
                                    <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                        <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                            <h4 className="text-gray-200 text-2xl font-bold font-manrope leading-9">33+ Years</h4> {/* Changed to text-gray-200 */}
                                            <p className="text-gray-400 text-base font-normal leading-relaxed">Influencing Digital Landscapes Together</p> {/* Changed to text-gray-400 */}
                                        </div>
                                        <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                            <h4 className="text-gray-200 text-2xl font-bold font-manrope leading-9">125+ Projects</h4> {/* Changed to text-gray-200 */}
                                            <p className="text-gray-400 text-base font-normal leading-relaxed">Excellence Achieved Through Success</p> {/* Changed to text-gray-400 */}
                                        </div>
                                    </div>
                                    <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                                        <div className="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                            <h4 className="text-gray-200 text-2xl font-bold font-manrope leading-9">26+ Awards</h4> {/* Changed to text-gray-200 */}
                                            <p className="text-gray-400 text-base font-normal leading-relaxed">Our Dedication to Innovation Wins Understanding</p> {/* Changed to text-gray-400 */}
                                        </div>
                                        <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                            <h4 className="text-gray-200 text-2xl font-bold font-manrope leading-9">99% Happy Clients</h4> {/* Changed to text-gray-200 */}
                                            <p className="text-gray-400 text-base font-normal leading-relaxed">Mirrors our Focus on Client Satisfaction.</p> {/* Changed to text-gray-400 */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="sm:w-fit w-full group px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex">
                                <span className="px-1.5 text-indigo-600 text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">Read More</span>
                                <svg className="group-hover:translate-x-0.5 transition-all duration-700 ease-in-out" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996" stroke="#4F46E5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div className="w-full lg:justify-start justify-center items-start flex">
                            <div className="sm:w-[564px] w-full sm:h-[646px] h-full  rounded-3xl  border-gray-200 relative">
                                <Image
                                    className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                                    src={img4}
                                    alt="About Us image"
                                    width={500}
                                    height={500}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 relative bg-black"> {/* Added bg-black here */}
                <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                    <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
                        <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                            <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                                <h2 className="text-gray-200 text-4xl font-bold font-manrope leading-normal lg:text-start text-center"> {/* Changed to text-gray-200 */}
                                    Building Stronger Communities through Collaboration and Empowerment
                                </h2>
                                <p className="text-gray-400 text-base font-normal leading-relaxed lg:text-start text-center"> {/* Changed to text-gray-400 */}
                                    Through collaboration, diverse perspectives and strengths are leveraged to create inclusive environments where everyone has the opportunity to thrive. This approach not only fosters personal growth and achievement but also strengthens the fabric of society.
                                </p>
                            </div>
                            <button className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                                <span className="px-1.5 text-white text-sm font-medium leading-6">Get Started</span>
                            </button>
                        </div>
                        <Image
                            className="lg:mx-0 mx-auto h-full rounded-3xl object-cover"
                            src={img5}
                            alt="About Us image"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutUs;
