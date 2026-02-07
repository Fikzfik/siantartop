"use client";

import { useState } from "react";
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
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

// Dynamically import the map component to avoid SSR issues with Leaflet
const FactoryMap = dynamic(() => import("../components/ui/factory-map"), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full bg-gray-300 animate-pulse flex items-center justify-center">
            <span className="text-gray-500">Loading Map...</span>
        </div>
    ),
});

export default function ContactPage() {
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

    const addresses = [
        {
            city: "Surabaya",
            type: "Factory and Offices",
            address: "Jl. Tambaksawah 21-23, Waru - Sidoarjo 61256 - Indonesia",
        },
        {
            city: "Bekasi",
            type: "Factory",
            address: "Jl. Narogong KM.7, Cipendawa No. 7, RT. 4, RW. 7, Kel. Bojong Menteng Kec. Rawa Lumbu, Bekasi 17117",
        },
        {
            city: "Medan",
            type: "Factory",
            address: "Jl. Raya Medan - Tanjung Morawa KM. 12.5, Desa Bangun Sari, Kec. Tanjung Morawa, Kabupaten Deli Serdang - Sumatera Utara 20362",
        },
    ];

    const marketingOffice = {
        city: "Surabaya",
        address: "Jl. Raya Lidah Harapan Timur No.9, Lakarsantri Wiyung - Surabaya 60213 - Indonesia",
        phone: "+6231 99000361 (hunting)",
    };

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

            {/* MAP SECTION */}
            <div className="relative w-full h-[50vh] min-h-[400px] bg-gray-200 overflow-hidden">
                <FactoryMap />

                {/* Overlay Header */}
                <div className="absolute top-0 left-0 w-full p-8 md:p-16 bg-gradient-to-b from-black/50 to-transparent pointer-events-none">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-white text-center drop-shadow-md tracking-tight uppercase"
                    >
                        Contact Us
                    </motion.h1>
                </div>
            </div>

            {/* CONTENT SECTION (Split Layout) */}
            <div className="bg-[#001f40] text-white py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-16">

                        {/* LEFT: ADDRESS & INFO */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex-1 space-y-12"
                        >
                            <div className="space-y-8">
                                <div className="flex items-center gap-3 text-[#8CC63F] mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
                                    <h2 className="text-xl font-bold uppercase tracking-wider">Factory and Offices</h2>
                                </div>

                                {addresses.map((addr, idx) => (
                                    <div key={idx} className="group cursor-default">
                                        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#8CC63F] transition-colors">{addr.city}:</h3>
                                        <p className="text-gray-300 leading-relaxed max-w-sm">{addr.address}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="w-full h-px bg-white/10" />

                            <div className="space-y-6">
                                <div className="flex items-center gap-3 text-[#8CC63F]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" /><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" /></svg>
                                    <h2 className="text-xl font-bold uppercase tracking-wider">Marketing & Sales Office:</h2>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1">{marketingOffice.city}:</h3>
                                    <p className="text-gray-300 leading-relaxed max-w-sm mb-2">{marketingOffice.address}</p>
                                    <p className="text-[#8CC63F] font-mono">{marketingOffice.phone}</p>
                                </div>
                            </div>

                            <div className="w-full h-px bg-white/10" />

                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <svg className="w-5 h-5 text-[#8CC63F]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                    <span className="text-xl font-bold">0 800-111-0000</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <svg className="w-5 h-5 text-[#8CC63F]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                    <span className="text-lg">customerservice@siantartop.co.id</span>
                                </div>
                            </div>

                            <div className="pt-4">
                                <p className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">Follow Us</p>
                                <div className="flex gap-4">
                                    {['Facebook', 'Twitter', 'Instagram'].map((social) => (
                                        <div key={social} className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#001f40] hover:bg-[#8CC63F] hover:text-white transition-all cursor-pointer shadow-lg transform hover:-translate-y-1">
                                            {/* Simple Icon Placeholder */}
                                            <span className="text-xs font-bold">{social[0]}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* RIGHT: CONTACT FORM */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex-1"
                        >
                            <div className="bg-[#0C4DA2] rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                                {/* Decorative circle */}
                                <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#8CC63F] rounded-full blur-3xl opacity-20 pointer-events-none" />

                                <div className="relative z-10">
                                    <h2 className="text-2xl font-bold uppercase tracking-wider mb-2">Reach Out To Us</h2>
                                    <p className="text-blue-100 mb-8 max-w-md text-sm leading-relaxed">
                                        We love to listen and we are eagerly waiting to talk to you regarding your apply. Get in touch with us if you have any queries and we will get back to you as soon as possible.
                                    </p>

                                    <form className="space-y-6">
                                        <div>
                                            <input
                                                type="text"
                                                placeholder="Name"
                                                className="w-full bg-white placeholder-gray-400 text-gray-900 px-5 py-4 rounded-xl focus:outline-none focus:ring-4 focus:ring-[#8CC63F]/50 transition-all font-medium"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="email"
                                                placeholder="Email"
                                                className="w-full bg-white placeholder-gray-400 text-gray-900 px-5 py-4 rounded-xl focus:outline-none focus:ring-4 focus:ring-[#8CC63F]/50 transition-all font-medium"
                                            />
                                        </div>
                                        <div className="relative">
                                            <select className="w-full bg-white text-gray-900 px-5 py-4 rounded-xl focus:outline-none focus:ring-4 focus:ring-[#8CC63F]/50 transition-all font-medium appearance-none cursor-pointer">
                                                <option>General Inquiry</option>
                                                <option>Product Feedback</option>
                                                <option>Careers</option>
                                                <option>Partnership</option>
                                            </select>
                                            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                            </div>
                                        </div>
                                        <div>
                                            <textarea
                                                rows={5}
                                                placeholder="Message"
                                                className="w-full bg-white placeholder-gray-400 text-gray-900 px-5 py-4 rounded-xl focus:outline-none focus:ring-4 focus:ring-[#8CC63F]/50 transition-all font-medium resize-none"
                                            />
                                        </div>

                                        <div className="pt-4">
                                            <button
                                                type="button"
                                                className="group relative px-8 py-3 bg-[#001f40] text-white font-bold uppercase tracking-widest text-sm rounded-lg overflow-hidden hover:bg-[#8CC63F] transition-colors duration-300 w-full md:w-auto"
                                            >
                                                <span className="relative z-10 group-hover:text-white transition-colors">Send Message</span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
