import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-black text-white">
            <div className="container px-6 py-12 mx-auto">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <p className="font-semibold">Quick Links</p>
                        <div className="mt-5 space-y-2">
                            <Link href="/#" passHref>
                                <p className="transition-colors duration-300 hover:underline hover:text-blue-500">Home</p>
                            </Link>
                            <Link href="/#team" passHref>
                                <p className="transition-colors duration-300 hover:underline hover:text-blue-500">Who We Are</p>
                            </Link>
                            <Link href="/#section1" passHref>
                                <p className="transition-colors duration-300 hover:underline hover:text-blue-500">Our Philosophy</p>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold">Industries</p>
                        <div className="mt-5 space-y-2">
                            <Link href="#" passHref>
                                <p className="transition-colors duration-300 hover:underline hover:text-blue-500">Retail & E-Commerce</p>
                            </Link>
                            <Link href="#" passHref>
                                <p className="transition-colors duration-300 hover:underline hover:text-blue-500">Information Technology</p>
                            </Link>
                            <Link href="https://subadha.netlify.app/" passHref>
                                <p className="transition-colors duration-300 hover:underline hover:text-blue-500">Web Development</p>
                            </Link>
                        </div>
                    </div>

                    <div className="hidden lg:block">
                        {/* Placeholder for additional links or content */}
                    </div>

                    <div>
                        <p className="font-semibold">Follow Us</p>
                        <div className="flex mt-5 space-x-4">
                            <Link href="https://www.facebook.com/profile.php?id=61561972772982&mibextid=ZbWKwL" passHref>
                                <Image src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg" width={30} height={30} alt="Facebook" />
                            </Link>
                            <Link href="https://x.com/Subadhadev?t=f-3E602Dxd7GwA0lIw7GaQ&s=08" passHref>
                                <Image src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg" width={30} height={30} alt="Twitter" />
                            </Link>
                            <Link href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fsubadha.co.in%2F&is_from_rle" passHref>
                                <Image src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" width={30} height={30} alt="Instagram" />
                            </Link>
                            <Link href="https://www.linkedin.com/company/subadha/people/" passHref>
                                <Image src="https://www.svgrepo.com/show/28145/linkedin.svg" width={30} height={30} alt="LinkedIn" />
                            </Link>
                            <Link href="https://wa.me/917382308795" passHref>
                                <Image src="https://www.svgrepo.com/show/475692/whatsapp-color.svg" width={30} height={30} alt="WhatsApp" />
                            </Link>
                            <Link href="https://t.me/SubadhaAura" passHref>
                                <Image src="https://www.svgrepo.com/show/452115/telegram.svg" width={30} height={30} alt="Telegram" />
                            </Link>
                        </div>
                    </div>
                </div>

                <hr className="my-6 border-gray-700" />

                <p className="text-center mt-4 text-sm">© 2024 SubadhaAI Inc. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
