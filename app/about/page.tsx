"use client";

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
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";

export default function AboutPage() {
    const router = useRouter();
    const navItems = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Products", link: "/products" },
        { name: "Gallery", link: "/gallery" },
        { name: "News", link: "/news" },
        { name: "Contact", link: "/contact" },
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);

    // Animation Variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div className="relative w-full min-h-screen bg-white overflow-x-hidden selection:bg-[#0C4DA2] selection:text-white">
            <Navbar>
                <NavBody>
                    <NavbarLogo />
                    <NavItems items={navItems} />
                    <div className="flex items-center gap-2">
                        <NavbarButton variant="secondary" onClick={() => router.push('/login')}>
                            Login
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
                            <a
                                key={`mobile-link-${idx}`}
                                href={item.link}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="relative text-gray-600 hover:text-[#0C4DA2] py-3 block font-medium"
                            >
                                <span className="block">{item.name}</span>
                            </a>
                        ))}
                        <div className="flex w-full flex-col gap-3 mt-4">
                            <NavbarButton onClick={() => setIsMobileMenuOpen(false)} variant="secondary" className="w-full justify-center">Login</NavbarButton>
                            <NavbarButton onClick={() => setIsMobileMenuOpen(false)} variant="primary" className="w-full justify-center flex items-center gap-2">
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

            {/* SECTION 1: HERO */}
            <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden bg-[#F0F4F8]">
                {/* Parallax Background Image */}
                <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
                    <img
                        src="/bgdb.png"
                        alt="Hero Background"
                        className="w-full h-full object-cover opacity-90"
                        onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement?.classList.add('bg-gradient-to-br', 'from-slate-100', 'to-slate-300');
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/90" />
                </motion.div>

                {/* Hero Content */}
                <div className="relative z-10 container mx-auto px-4 text-center mt-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            <h1 className="text-5xl md:text-7xl font-black text-[#0C4DA2] mb-4 drop-shadow-sm tracking-tight">
                                About <span className="text-[#8CC63F]">SiantarTop</span>
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto font-light"
                        >
                            Who we are • Our Journey • Our People
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 2: VISION & MISSION */}
            <section className="relative py-24 overflow-hidden">
                {/* Background Image for section */}
                <div className="absolute inset-0 z-0 bg-gray-900">
                    <img
                        src="/bgdb.png"
                        alt="Background"
                        className="w-full h-full object-cover opacity-10 mix-blend-overlay"
                        onError={(e) => e.currentTarget.style.display = 'none'}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/95 mix-blend-normal" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="space-y-24"
                    >
                        {/* Vision */}
                        <motion.div variants={fadeInUp} className="flex flex-col md:flex-row items-center gap-12">
                            <div className="flex-1 space-y-6">
                                <div className="inline-block px-4 py-1.5 bg-[#0C4DA2] text-white text-sm font-bold rounded-full mb-2">
                                    COMPANY VISION
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black text-[#0C4DA2] leading-tight uppercase">
                                    To be a Leading <br /> Global Snack Company
                                </h2>
                                <p className="text-xl text-gray-700 leading-relaxed font-light">
                                    We envision a world where our high-quality, innovative, and affordable products bring joy to people of all ages, everywhere. We strive to be the top choice for consumers seeking taste and quality.
                                </p>
                            </div>
                            <div className="flex-1 w-full">
                                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
                                    <img src="/image1.jpg" alt="Vision" className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.currentTarget.parentElement?.classList.add('bg-[#0C4DA2]');
                                            e.currentTarget.style.display = 'none';
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-[#0C4DA2]/20" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Mission */}
                        <motion.div variants={fadeInUp} className="flex flex-col md:flex-row-reverse items-center gap-12">
                            <div className="flex-1 space-y-6 text-right md:text-left">
                                <div className="flex justify-end md:justify-start">
                                    <div className="inline-block px-4 py-1.5 bg-[#8CC63F] text-white text-sm font-bold rounded-full mb-2">
                                        COMPANY MISSION
                                    </div>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black text-[#8CC63F] leading-tight uppercase">
                                    Commitment to <br /> Excellence
                                </h2>
                                <ul className="space-y-4 mt-4 inline-block text-left">
                                    {[
                                        "Innovate and improve product quality continuously.",
                                        "Expand global reach and accessibility.",
                                        "Build a sustainable business for all stakeholders.",
                                        "Uphold highest standards of food safety & halal."
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex gap-4 items-center">
                                            <div className="w-8 h-8 rounded-full bg-[#8CC63F]/20 text-[#8CC63F] flex items-center justify-center flex-shrink-0 font-bold text-sm">
                                                {idx + 1}
                                            </div>
                                            <p className="text-lg text-gray-700 font-medium">{item}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex-1 w-full">
                                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                                    <img src="/bgdb.png" alt="Mission" className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.currentTarget.parentElement?.classList.add('bg-[#8CC63F]');
                                            e.currentTarget.style.display = 'none';
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-[#8CC63F]/20" />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* SECTION 3: HISTORY */}
            <section className="py-24 bg-[#001f40] text-white relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#0C4DA2] skew-x-12 opacity-20 pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-4 uppercase tracking-widest border-b-2 border-[#8CC63F] inline-block pb-2">Our History</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left Narrative */}
                        <div className="space-y-8 text-lg text-gray-300 leading-relaxed font-light">
                            <p>
                                <strong className="text-white text-xl">1972 - The Beginning.</strong><br />
                                Founded by <span className="text-[#8CC63F]">Shindo Sumidomo</span>, SiantarTop began as a humble home industry in Sidoarjo, East Java. Driven by a passion for creating delicious snacks, the company surely took its first steps towards greatness.
                            </p>
                            <p>
                                <strong className="text-white text-xl">1996 - Going Public.</strong><br />
                                We achieved a significant milestone by listing on the Indonesia Stock Exchange (IDX: STTP). This marked our transition into a public company and fueled our massive expansion into noodles, biscuits, and wafers.
                            </p>
                            <p>
                                <strong className="text-white text-xl">Present Day - Global Leader.</strong><br />
                                Today, SiantarTop stands as a testament to resilience and vision, operating multiple state-of-the-art factories and exporting to over 100 countries worldwide.
                            </p>
                        </div>

                        {/* Right Timeline */}
                        <div className="space-y-8 pl-8 border-l border-white/20">
                            {[
                                { year: "1972", title: "Inception", desc: "Established in Sidoarjo, East Java." },
                                { year: "1996", title: "IPO Listing", desc: "Listed on IDX as STTP." },
                                { year: "2014", title: "Global Expansion", desc: "Reached markets in Asia & Middle East." },
                                { year: "2025", title: "Green Era", desc: "Adopted sustainable manufacturing." },
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="relative group"
                                >
                                    <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full border-4 border-[#001f40] bg-[#8CC63F] group-hover:scale-125 transition-transform"></div>
                                    <div className="flex flex-col">
                                        <span className="text-[#8CC63F] font-bold text-lg tracking-wider">{item.year}</span>
                                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#8CC63F] transition-colors">{item.title}</h3>
                                        <p className="text-gray-400 text-sm">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: TRACK RECORD */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#0C4DA2] uppercase">Company Track Record</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { number: "50+", label: "Years Experience" },
                            { number: "4", label: "Factories" },
                            { number: "100+", label: "Export Countries" },
                            { number: "1000+", label: "Employees" },
                        ].map((stat, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -5 }}
                                className="p-8 rounded-2xl bg-[#F0F4F8] text-center border-b-4 border-[#0C4DA2] hover:border-[#8CC63F] transition-all"
                            >
                                <div className="text-4xl md:text-5xl font-black mb-2 text-[#0C4DA2]">{stat.number}</div>
                                <div className="text-gray-600 font-medium uppercase text-sm tracking-wider">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 5: CORE VALUES */}
            <section className="py-24 container mx-auto px-4 bg-gray-50/50">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-[#0C4DA2] mb-4 uppercase">Company Core Values</h2>
                    <div className="w-24 h-1 bg-[#8CC63F] mx-auto rounded-full mb-6"></div>
                    <p className="max-w-3xl mx-auto text-gray-600 text-lg">
                        Our culture is built upon a strong foundation of values that guide our decisions, actions, and interactions every single day.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            title: "GOD FEARING",
                            desc: "We perform our work with sincerity and gratitude, believing that our efforts are a form of worship and service to others.",
                            icon: "🙏"
                        },
                        {
                            title: "INTEGRITY",
                            desc: "We uphold the highest standards of honesty and strong moral principles. We are transparent, ethical, and accountable in all our business dealings.",
                            icon: "🛡️"
                        },
                        {
                            title: "LOYALTY",
                            desc: "We are dedicated to the company's vision and mission. We build long-term relationships with our stakeholders based on trust and mutual respect.",
                            icon: "🤝"
                        },
                        {
                            title: "PROFESSIONALISM",
                            desc: "We strive for excellence in competence and behavior. We approach every task with a positive attitude, discipline, and a commitment to best practices.",
                            icon: "briefcase"
                        },
                        {
                            title: "INNOVATION",
                            desc: "We embrace change and continuously seek new ways to improve. We encourage creativity to develop better products and more efficient processes.",
                            icon: "💡"
                        },
                        {
                            title: "QUALITY FOCUS",
                            desc: "We never compromise on quality. From raw materials to the final product, we ensure everything meets rigorous safety and taste standards.",
                            icon: "⭐"
                        },
                        {
                            title: "TEAMWORK",
                            desc: "We believe in the power of collaboration. We support one another, share knowledge, and work together synergistically to achieve shared goals.",
                            icon: "🤲"
                        },
                        {
                            title: "RESPONSIBILITY",
                            desc: "We care for our community and the environment. We are committed to sustainable practices that minimize our footprint and maximize positive impact.",
                            icon: "🌱"
                        },
                    ].map((value, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-t-4 border-[#0C4DA2] hover:border-[#8CC63F] group h-full flex flex-col"
                        >
                            <div className="mb-6">
                                <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-3xl group-hover:bg-[#0C4DA2] group-hover:text-white transition-colors duration-300 shadow-sm">
                                    {value.icon === "briefcase" ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    ) : value.icon}
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-[#0C4DA2] mb-3 uppercase tracking-wide group-hover:text-[#8CC63F] transition-colors">{value.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                                {value.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* SECTION 6: BOD (ZIG ZAG LAYOUT) */}
            <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-24"
                    >
                        <h2 className="text-4xl font-bold text-[#0C4DA2] mb-4 uppercase tracking-widest">Board of Directors</h2>
                        <div className="w-24 h-1 bg-[#8CC63F] mx-auto rounded-full"></div>
                    </motion.div>

                    <div className="space-y-32 max-w-6xl mx-auto">
                        {[
                            {
                                name: "ARMIN",
                                role: "President Director",
                                desc: "Appointed as President Director since 2012. He has extensive experience in the food industry and has been instrumental in the company's strategic expansion.",
                                image: null
                            },
                            {
                                name: "SHINDO SUMIDOMO",
                                role: "Director",
                                desc: "Founder of SiantarTop. A visionary leader who turned a home industry into a global snack powerhouse. His legacy of taste and quality continues to drive us.",
                                image: null
                            },
                            {
                                name: "SUWANTO",
                                role: "Director",
                                desc: "Director of Operations. Overseeing manufacturing excellence and ensuring supply chain efficiency across all our diverse product lines.",
                                image: null
                            },
                        ].map((person, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24`}
                            >
                                {/* Text Side */}
                                <div className={`flex-1 text-center ${idx % 2 === 1 ? 'md:text-right' : 'md:text-left'}`}>
                                    <h3 className="text-4xl md:text-6xl font-black text-gray-900 mb-2 uppercase tracking-tighter">{person.name}</h3>
                                    <p className="text-xl text-[#0C4DA2] font-bold mb-6 tracking-widest">{person.role}</p>
                                    <p className="text-lg text-gray-600 leading-relaxed max-w-md mx-auto md:mx-0">
                                        {person.desc}
                                    </p>
                                    <div className={`w-20 h-1 bg-[#8CC63F] mt-8 ${idx % 2 === 1 ? 'ml-auto mr-auto md:mr-0' : 'mx-auto md:mx-0'}`}></div>
                                </div>

                                {/* Image Side */}
                                <div className="flex-1 w-full max-w-md">
                                    <div className="relative">
                                        <div className={`absolute top-0 w-2/3 h-full bg-[#0C4DA2]/5 rounded-3xl -z-10 ${idx % 2 === 1 ? 'right-0' : 'left-0'}`} />
                                        <div className={`absolute bottom-0 w-2/3 h-2/3 bg-[#8CC63F]/10 rounded-full -z-10 blur-2xl ${idx % 2 === 1 ? 'left-0' : 'right-0'}`} />

                                        {/* Placeholder cutout look */}
                                        <div className="aspect-[4/5] relative overflow-hidden rounded-b-full rounded-t-3xl shadow-xl bg-gradient-to-b from-gray-100 to-gray-300">
                                            {person.image ? (
                                                <img src={person.image} className="w-full h-full object-cover mix-blend-multiply" />
                                            ) : (
                                                <div className="w-full h-full flex items-end justify-center pb-0">
                                                    <div className="w-3/4 h-3/4 bg-gray-400 rounded-t-full opacity-50 relative">
                                                        <div className="absolute top-10 left-1/2 -translate-x-1/2 text-white/50 font-bold text-6xl">
                                                            ?
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 7: COMMISSIONERS */}
            <section className="py-24 container mx-auto px-4 border-t border-gray-100">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="text-center"
                >
                    <h2 className="text-2xl font-bold text-[#0C4DA2] mb-12 uppercase tracking-widest">Board of Commissioners</h2>
                    <div className="flex flex-col md:flex-row justify-center gap-12 max-w-4xl mx-auto">
                        {[
                            { name: "OSBERT KOSASIH", role: "President Commissioner" },
                            { name: "JUANDA", role: "Independent Commissioner" },
                        ].map((person, idx) => (
                            <div key={idx} className="flex-1">
                                <h3 className="text-3xl font-black text-gray-900 mb-2 uppercase">{person.name}</h3>
                                <p className="text-[#8CC63F] font-semibold tracking-wider">{person.role}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* FOOTER (Reused) */}
            <footer className="bg-[#001f40] text-gray-400 py-16 text-sm border-t border-white/10">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">

                        {/* Brand Column */}
                        <div className="col-span-2 lg:col-span-2 space-y-4">
                            <div className="flex items-center gap-2 text-white font-black text-xl tracking-tighter">
                                <img src="/logo.png" alt="ST" className="h-8 w-8 object-contain bg-white rounded-full p-1" onError={(e) => e.currentTarget.style.display = 'none'} />
                                SIANTAR TOP
                            </div>
                            <p className="max-w-xs leading-relaxed text-gray-500">
                                High Taste Specialist. Delivering happiness through innovative and high-quality snacks to families worldwide since 1972.
                            </p>
                            <div className="flex gap-4 pt-2">
                                {/* Social Icons Placeholder */}
                                <div className="w-8 h-8 rounded bg-white/5 hover:bg-white/10 flex items-center justify-center cursor-pointer transition-colors">Twitter</div>
                                <div className="w-8 h-8 rounded bg-white/5 hover:bg-white/10 flex items-center justify-center cursor-pointer transition-colors">LinkedIn</div>
                                <div className="w-8 h-8 rounded bg-white/5 hover:bg-white/10 flex items-center justify-center cursor-pointer transition-colors">Insta</div>
                            </div>
                        </div>

                        {/* Links Column 1 */}
                        <div className="space-y-4">
                            <h4 className="text-white font-bold uppercase tracking-wider text-xs">Company</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">History</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Investor Relations</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">News & Events</a></li>
                            </ul>
                        </div>

                        {/* Links Column 2 */}
                        <div className="space-y-4">
                            <h4 className="text-white font-bold uppercase tracking-wider text-xs">Products</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-white transition-colors">Noodle Snacks</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Crackers</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Biscuits</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Wafers</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Candy</a></li>
                            </ul>
                        </div>

                        {/* Links Column 3 */}
                        <div className="space-y-4">
                            <h4 className="text-white font-bold uppercase tracking-wider text-xs">Support</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Distributor Center</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Export Enquiries</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                        <span>&copy; {new Date().getFullYear()} PT. Siantar Top Tbk. All rights reserved.</span>
                        <div className="flex gap-6">
                            <span>Indonesia (HQ)</span>
                            <span>Global</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
