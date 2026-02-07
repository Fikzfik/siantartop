"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    NavbarLogo,
    NavbarButton,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
} from "../components/ui/resizable-navbar";
import { Footer } from "../components/ui/footer";
import { cn } from "@/lib/utils";

export default function NewsPage() {
    const router = useRouter();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Products", link: "/products" },
        { name: "Gallery", link: "/gallery" },
        { name: "News", link: "/news" },
        { name: "Contact", link: "/contact" },
    ];

    const newsItems = [
        {
            id: 1,
            title: "Siantar Top Received Top Brand Award 2024",
            date: "October 15, 2024",
            category: "Corporate",
            image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=2070&auto=format&fit=crop",
            excerpt: "We are proud to announce that Siantar Top has once again been recognized as a market leader, receiving the prestigious Top Brand Award for our commitment to quality.",
        },
        {
            id: 2,
            title: "Launching New Flavor: Spicy Seaweed Noodle",
            date: "September 28, 2024",
            category: "Product Launch",
            image: "https://images.unsplash.com/photo-1536323760109-ca8c07450053?q=80&w=3270&auto=format&fit=crop",
            excerpt: "Experience the taste of the ocean with a kick! Our newest noodle flavor combines savory seaweed with a spicy blend of chilies.",
        },
        {
            id: 3,
            title: "Community Clean Up Day in Sidoarjo",
            date: "September 10, 2024",
            category: "CSR",
            image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2070&auto=format&fit=crop",
            excerpt: "Over 500 employees participated in our annual clean-up event, demonstrating our commitment to environmental sustainability and community welfare.",
        },
        {
            id: 4,
            title: "Expansion of Manufacturing Plant in Medan",
            date: "August 22, 2024",
            category: "Corporate",
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
            excerpt: "To meet growing demand, we are expanding our production facilities in Medan with state-of-the-art machinery and increased capacity.",
        },
        {
            id: 5,
            title: "Siantar Top Goes Green: Solar Panel Installation",
            date: "August 05, 2024",
            category: "CSR",
            image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2073&auto=format&fit=crop",
            excerpt: "We have successfully installed solar panels across our main factory roof, reducing our carbon footprint by 30% annually.",
        },
        {
            id: 6,
            title: "Annual Shareholders Meeting 2024 Highlights",
            date: "July 12, 2024",
            category: "Corporate",
            image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop",
            excerpt: "Key takeaways from our annual meeting, discussing financial growth, future strategies, and dividend distributions for our valued stakeholders.",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar>
                <NavBody>
                    <NavbarLogo />
                    <NavItems items={navItems} />
                    <div className="hidden md:flex items-center gap-2">
                        <NavbarButton variant="secondary" onClick={() => router.push('/career')}>
                            Career
                        </NavbarButton>
                        <NavbarButton variant="primary" onClick={() => router.push('/cart')} className="flex items-center gap-2">
                            <span className="hidden sm:inline">Cart</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="9" cy="21" r="1" />
                                <circle cx="20" cy="21" r="1" />
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                            </svg>
                        </NavbarButton>
                    </div>
                </NavBody>

                <MobileNav>
                    <MobileNavHeader>
                        <NavbarLogo />
                        <MobileNavToggle
                            isOpen={isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        />
                    </MobileNavHeader>

                    <MobileNavMenu
                        isOpen={isMobileMenuOpen}
                        onClose={() => setIsMobileMenuOpen(false)}
                    >
                        {navItems.map((item, idx) => (
                            <div
                                key={`mobile-link-${idx}`}
                                onClick={() => {
                                    router.push(item.link);
                                    setIsMobileMenuOpen(false);
                                }}
                                className="relative text-gray-600 hover:text-[#0C4DA2] py-3 block font-medium cursor-pointer"
                            >
                                <span className="block">{item.name}</span>
                            </div>
                        ))}
                        <div className="flex w-full flex-col gap-3 mt-4">
                            <NavbarButton onClick={() => { router.push('/career'); setIsMobileMenuOpen(false); }} variant="secondary" className="w-full justify-center">Career</NavbarButton>
                            <NavbarButton onClick={() => { router.push('/cart'); setIsMobileMenuOpen(false); }} variant="primary" className="w-full justify-center flex items-center gap-2">
                                <span>Cart</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="9" cy="21" r="1" />
                                    <circle cx="20" cy="21" r="1" />
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                                </svg>
                            </NavbarButton>
                        </div>
                    </MobileNavMenu>
                </MobileNav>
            </Navbar>

            {/* Hero Section */}
            <div className="relative bg-[#0C4DA2] text-white py-32 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
                    {/* Placeholder for hero background image if needed */}
                    <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop" alt="News Background" className="w-full h-full object-cover" />
                </div>
                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
                    >
                        Latest News & Updates
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
                    >
                        Stay informed about our latest products, corporate achievements, and community initiatives.
                    </motion.p>
                </div>
            </div>

            {/* News Grid */}
            <div className="flex-grow py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {newsItems.map((news, index) => (
                            <motion.div
                                key={news.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col group cursor-pointer"
                                onClick={() => router.push(`/news/${news.id}`)}
                            >
                                <div className="h-64 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-10"></div>
                                    <img
                                        src={news.image}
                                        alt={news.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[#0C4DA2] z-20 shadow-sm">
                                        {news.category}
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="text-sm text-gray-500 mb-2 flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></svg>
                                        {news.date}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0C4DA2] transition-colors line-clamp-2">
                                        {news.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                                        {news.excerpt}
                                    </p>
                                    <div className="flex items-center text-[#0C4DA2] font-semibold group-hover:translate-x-1 transition-transform mt-auto">
                                        Read More
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>


                    {/* Pagination or Load More - Placeholder */}
                    <div className="mt-16 text-center">
                        <button className="px-8 py-3 bg-white border border-gray-300 text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition-colors shadow-sm">
                            Load More News
                        </button>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    );
}
