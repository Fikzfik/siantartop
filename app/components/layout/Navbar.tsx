"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { href: "/", label: "Dashboard" },
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/gallery", label: "Gallery" },
    { href: "/news", label: "News" },
    { href: "/investor", label: "Investor" },
    { href: "/career", label: "Career" },
    { href: "/contact", label: "Contact" },
];

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close menu on route change
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMenuOpen]);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5 py-2"
                    : "bg-transparent py-4"
                    }`}
            >
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-14">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="flex items-center gap-3 group"
                        >
                            <div
                                className={`w-10 h-10 rounded-xl bg-gradient-to-br from-[#0C4DA2] to-[#8CC63F] flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg ${isScrolled ? "shadow-[#0C4DA2]/20" : "shadow-white/20"
                                    }`}
                            >
                                <span className="text-white font-bold text-lg">ST</span>
                            </div>
                            <div className="flex flex-col">
                                <span
                                    className={`font-bold text-lg transition-colors duration-300 ${isScrolled ? "text-gray-900" : "text-white"
                                        }`}
                                >
                                    SiantarTop
                                </span>
                                <span
                                    className={`text-[10px] font-medium tracking-wider transition-colors duration-300 ${isScrolled ? "text-gray-500" : "text-white/70"
                                        }`}
                                >
                                    EST. 1972
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 group ${isActive
                                            ? isScrolled
                                                ? "text-[#0C4DA2]"
                                                : "text-white"
                                            : isScrolled
                                                ? "text-gray-600 hover:text-[#0C4DA2]"
                                                : "text-white/80 hover:text-white"
                                            }`}
                                    >
                                        {link.label}
                                        {/* Active indicator */}
                                        <span
                                            className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full transition-all duration-300 ${isActive
                                                ? "w-6 bg-gradient-to-r from-[#0C4DA2] to-[#8CC63F]"
                                                : "w-0 group-hover:w-4 bg-current"
                                                }`}
                                        />
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Right Side */}
                        <div className="flex items-center gap-2 sm:gap-3">
                            {/* Cart Button */}
                            <Link
                                href="/cart"
                                className={`relative p-2.5 rounded-xl transition-all duration-300 ${isScrolled
                                    ? "hover:bg-gray-100 text-gray-700"
                                    : "hover:bg-white/10 text-white"
                                    }`}
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                    />
                                </svg>
                            </Link>

                            {/* Login Button */}
                            <Link
                                href="/login"
                                className={`hidden sm:flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 ${isScrolled
                                    ? "bg-gradient-to-r from-[#0C4DA2] to-[#0a3d82] text-white hover:shadow-lg hover:shadow-[#0C4DA2]/25 hover:-translate-y-0.5"
                                    : "bg-white/15 backdrop-blur-sm text-white border border-white/30 hover:bg-white hover:text-[#0C4DA2]"
                                    }`}
                            >
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                                Login
                            </Link>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className={`lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300 ${isScrolled
                                    ? "hover:bg-gray-100 text-gray-700"
                                    : "hover:bg-white/10 text-white"
                                    }`}
                                aria-label="Toggle menu"
                            >
                                <div className="w-5 h-4 flex flex-col justify-between">
                                    <span
                                        className={`block h-0.5 rounded-full transition-all duration-300 ${isScrolled ? "bg-gray-700" : "bg-white"
                                            } ${isMenuOpen
                                                ? "rotate-45 translate-y-[7px]"
                                                : ""
                                            }`}
                                    />
                                    <span
                                        className={`block h-0.5 rounded-full transition-all duration-300 ${isScrolled ? "bg-gray-700" : "bg-white"
                                            } ${isMenuOpen ? "opacity-0 scale-0" : ""}`}
                                    />
                                    <span
                                        className={`block h-0.5 rounded-full transition-all duration-300 ${isScrolled ? "bg-gray-700" : "bg-white"
                                            } ${isMenuOpen
                                                ? "-rotate-45 -translate-y-[7px]"
                                                : ""
                                            }`}
                                    />
                                </div>
                            </button>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 transition-all duration-500 lg:hidden ${isMenuOpen
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                    }`}
            >
                {/* Backdrop */}
                <div
                    className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${isMenuOpen ? "opacity-100" : "opacity-0"
                        }`}
                    onClick={() => setIsMenuOpen(false)}
                />

                {/* Menu Panel */}
                <div
                    className={`absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    {/* Menu Header */}
                    <div className="flex items-center justify-between p-6 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0C4DA2] to-[#8CC63F] flex items-center justify-center">
                                <span className="text-white font-bold text-lg">ST</span>
                            </div>
                            <span className="font-bold text-lg text-gray-900">Menu</span>
                        </div>
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-100 transition-colors"
                        >
                            <svg
                                className="w-5 h-5 text-gray-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Menu Links */}
                    <div className="p-4 overflow-y-auto h-[calc(100%-180px)]">
                        <div className="space-y-1">
                            {navLinks.map((link, index) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-300 ${isActive
                                            ? "bg-gradient-to-r from-[#0C4DA2] to-[#0a3d82] text-white shadow-lg"
                                            : "text-gray-700 hover:bg-gray-50"
                                            }`}
                                        style={{
                                            transitionDelay: isMenuOpen
                                                ? `${index * 50}ms`
                                                : "0ms",
                                        }}
                                    >
                                        <span
                                            className={`w-2 h-2 rounded-full ${isActive
                                                ? "bg-[#8CC63F]"
                                                : "bg-gray-300"
                                                }`}
                                        />
                                        <span className="text-base font-medium">
                                            {link.label}
                                        </span>
                                        {isActive && (
                                            <svg
                                                className="w-5 h-5 ml-auto"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 5l7 7-7 7"
                                                />
                                            </svg>
                                        )}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Menu Footer */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100 bg-gray-50">
                        <Link
                            href="/login"
                            onClick={() => setIsMenuOpen(false)}
                            className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-[#0C4DA2] to-[#8CC63F] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                            </svg>
                            Login / Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
