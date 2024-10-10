import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { JSX, SVGProps } from "react"
import Image from "next/image"
import img from "@/images/logo.png"

export function Navbar() {
    return (
        <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 bg-black dark:bg-gray-850 sticky top-0 z-50">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="lg:hidden text-white">
                        <MenuIcon className="h-6 w-6" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="bg-black dark:bg-gray-850">
                    <div className="grid gap-2 py-6 text-white">
                        <Link href="/" className="flex w-full items-center text-lg font-semibold" prefetch={false}>
                            <Image src={img} alt="" className="w-[8vw] h-[8vh]" />
                            <p className="flex text-white">
                                SubadhaAI
                            </p>
                        </Link>
                        <Link href="/" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                            Home
                        </Link>
                        <Link href="/about" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                            About
                        </Link>
                        <Link href="/#project" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                            Services
                        </Link>
                        <Link href="/#contact" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                            Contact
                        </Link>
                    </div>
                </SheetContent>
            </Sheet>
            <Link href="/" className="mr-6 hidden lg:flex text-2xl text-white" prefetch={false}>
                <Image src={img} alt="" className="w-[8vw] h-[8vh]"/> 
                <p className="flex justify-center items-center">
                    SubadhaAI
                </p>
            </Link>
            <nav className="ml-auto  hidden lg:flex gap-6">
                <Link
                    href="/"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-black px-4 py-2 text-xl font-medium text-white transition-colors hover:bg-gray-700 hover:text-gray-200 focus:bg-gray-700 focus:text-gray-200 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-850 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                    prefetch={false}
                >
                    Home
                </Link>
                <Link
                    href="/about"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-black px-4 py-2 text-xl font-medium text-white transition-colors hover:bg-gray-700 hover:text-gray-200 focus:bg-gray-700 focus:text-gray-200 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-850 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                    prefetch={false}
                >
                    About
                </Link>
                <Link
                    href="/#project"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-black px-4 py-2 text-xl font-medium text-white transition-colors hover:bg-gray-700 hover:text-gray-200 focus:bg-gray-700 focus:text-gray-200 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-850 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                    prefetch={false}
                >
                    Services
                </Link>
                <Link
                    href="/#contact"
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-black px-4 py-2 text-xl font-medium text-white transition-colors hover:bg-gray-700 hover:text-gray-200 focus:bg-gray-700 focus:text-gray-200 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-850 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                    prefetch={false}
                >
                    Contact
                </Link>
            </nav>
        </header>
    )
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    )
}

