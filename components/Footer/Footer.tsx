"use client";
import Image from "next/image";
import Link from "next/link";

 // If using Next.js

const Footer = () => {
    return (
        <footer className="bg-black font-sans text-white">
            <div className="container px-6 py-12 mx-auto">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                    <div className="sm:col-span-2">
                        <h1 className="max-w-lg text-xl font-semibold tracking-tight xl:text-2xl">
                            Subscribe to our newsletter to get an update.
                        </h1>

                        <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                            <input
                                id="email"
                                type="text"
                                className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                                placeholder="Email Address"
                            />
                            <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                                Subscribe
                            </button>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold">Quick Links</p>
                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <Link href="/#"> <p className="transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500">Home</p></Link>
                            <Link href="/#team"><p className="transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500">Who We Are</p></Link>
                            <p className="transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500">Our Philosophy</p>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold">Industries</p>
                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <p className="transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500">Retail & E-Commerce</p>
                            <p className="transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500">Information Technology</p>
                            <p className="transition-colors duration-300 hover:underline hover:cursor-pointer hover:text-blue-500">Finance & Insurance</p>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-gray-700" />

                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="flex flex-1 gap-4 hover:cursor-pointer">
                        {/* <img src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg" width="130" height="110" alt="Google Play" />
                        <img src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg" width="130" height="110" alt="App Store" /> */}
                    </div>

                    <div className="flex gap-4 hover:cursor-pointer">
                        <Link href="https://www.facebook.com/profile.php?id=61561972772982&mibextid=ZbWKwL"><Image src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg" width="30" height="30" alt="Facebook" /></Link>
                        <Link href="https://x.com/Subadhadev?t=f-3E602Dxd7GwA0lIw7GaQ&s=08"><Image src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg" width="30" height="30" alt="Twitter" /></Link> 
                        <Link href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fsubadha.co.in%2F&is_from_rle"><Image src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" width="30" height="30" alt="Instagram" /></Link>
                        <Link href="https://www.linkedin.com/company/subadha/people/"><Image src="https://www.svgrepo.com/show/28145/linkedin.svg" width="30" height="30" alt="LinkedIn" /></Link> 
                        <Link href="https://chat.whatsapp.com/FXHOHpnMQmAJGMjC8ICo9J" ><Image src="https://www.svgrepo.com/show/475692/whatsapp-color.svg" width="30" height="30" alt=""/></Link>
                        <Link href="https://t.me/SubadhaAura" ><Image src="https://www.svgrepo.com/show/452115/telegram.svg" alt="" width="30" height="30" /></Link>
                    </div>
                </div>
                <p className="p-8 text-start md:text-center md:text-lg md:p-4">© 2024 SubadhaAI Inc. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
