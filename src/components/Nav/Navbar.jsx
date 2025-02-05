"use client";
import { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi"; // Import icons

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/Aboutpage" },
        { name: "Features", href: "/Featurespage" },
        { name: "Services", href: "/Servicespage" },
        { name: "Contact", href: "/Contactpage" },
    ];

    return (
        <nav className="bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-lg">
            <div className=" mx-auto  flex justify-between items-center w-11/12   py-4">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md">
                        <img src="./mainlogo.png" alt="Logo" className="w-8 h-8 object-cover" />
                    </div>
                    <span className="text-xl font-semibold">Living Care Pharmacy</span>
                </div>

           
                <button
                    className="md:hidden flex items-center text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
                </button>

               
                <ul className="hidden md:flex space-x-8 text-lg">
                    {links.map((link) => (
                        <li key={link.name}>
                            <Link href={link.href} className="hover:text-gray-200 transition duration-300">
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Menu (Only Visible on Small Devices) */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <ul className="flex flex-col space-y-4 text-lg px-6 pb-4">
                    {links.map((link) => (
                        <li key={link.name}>
                            <Link
                                href={link.href}
                                className="block text-white hover:text-gray-200 transition duration-300"
                                onClick={() => setIsOpen(false)} 
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
