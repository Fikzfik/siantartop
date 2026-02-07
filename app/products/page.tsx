"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

// Dummy Data
const products = [
    { id: 1, name: "Mie Gemez Enaak", category: "Noodle", image: "/product/gemezenak.png", desc: "Crunchy noodle snack with savory flavor." },
    { id: 2, name: "Goriorio", category: "Biscuit", image: "/product/goriorio.jpg", desc: "Sandwich biscuit with rich vanilla cream." },
    { id: 3, name: "Twistko", category: "Corn Snack", image: "/product/twistko.png", desc: "Roasted corn snack with a unique twist shape." },
    { id: 4, name: "Go Potato", category: "Cracker", image: "/product/gopotato.jpg", desc: "Crispy potato cracker with authentic taste." },
    { id: 5, name: "Boyki", category: "Noodle", image: "/product/boyki.jpg", desc: "Classic noodle snack with spicy flavor." },
    { id: 6, name: "French Fries 2000", category: "Cracker", image: "/product/french.jpg", desc: "Premium potato stick sensation." },
    { id: 7, name: "Spix", category: "Noodle", image: "/product/spix.png", desc: "Tasty noodle snack for everyone." },
    { id: 8, name: "Tic Tic", category: "Snack", image: "/product/tictic.png", desc: "Garlic flavored crunchy snack." },
    { id: 9, name: "Maestro", category: "Noodle", image: "/product/maestro.jpg", desc: "Delicious instant noodle." },
    { id: 10, name: "Jaya Mie", category: "Noodle", image: "/product/jayamie.jpg", desc: "Traditional taste instant noodle." },
    { id: 11, name: "Suki", category: "Candy", image: "/product/suki.png", desc: "Sweet and fruity candy." },
    { id: 12, name: "My Choco", category: "Beverage", image: "/product/mychoco.png", desc: "Rich chocolate drink." },
    { id: 13, name: "O'Krimer", category: "Beverage", image: "/product/okrimer.png", desc: "Perfect creamer for your coffee." },
];

const categories = ["All", "Noodle", "Biscuit", "Corn Snack", "Cracker", "Snack", "Beverage", "Candy", "Coffee"];

const ProductItem = ({ product, router }: { product: any, router: any }) => {
    const [imageError, setImageError] = useState(false);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="group relative bg-white rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
            onClick={() => router.push(`/products/${product.id}`)}
        >
            <div className="relative w-full aspect-[4/3] flex items-center justify-center p-6">
                {!imageError ? (
                    <>
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                            onError={() => setImageError(true)}
                        />
                        {/* Cool Hover Overlay */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
                            <div className="border-2 border-white/80 px-4 py-2 mb-2 rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-white font-bold text-lg tracking-wider uppercase">
                                    {product.name}
                                </h3>
                                <div className="h-0.5 w-full bg-white/50 my-1"></div>
                                <span className="text-white/90 text-sm font-medium">EXPORT</span>
                            </div>
                            <p className="text-white/70 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                {product.category} &bull; Export Quality
                            </p>
                        </div>
                    </>
                ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-center">
                        <h3 className="text-lg font-bold text-gray-800">
                            {product.name} - Export
                        </h3>
                        <p className="text-sm text-gray-500 mt-1 uppercase tracking-wide">
                            Export Snacks
                        </p>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default function ProductPage() {
    const router = useRouter();
    const [activeCategory, setActiveCategory] = useState("All");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const filteredProducts = activeCategory === "All"
        ? products
        : products.filter(p => p.category === activeCategory);

    const navItems = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Products", link: "/products" },
        { name: "Gallery", link: "/gallery" },
        { name: "News", link: "/news" },
        { name: "Contact", link: "/contact" },
    ];

    return (
        <div className="min-h-screen bg-gray-50 selection:bg-[#0C4DA2] selection:text-white">
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
                            <NavbarButton onClick={() => { router.push('/login'); setIsMobileMenuOpen(false); }} variant="secondary" className="w-full justify-center">Login</NavbarButton>
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

            {/* HERO SECTION */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0C4DA2] to-[#062a5c]" />
                <div className="absolute inset-0 opacity-10 bg-[url('/pattern.png')] bg-repeat" />
                <div className="container relative z-10 px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-4"
                    >
                        Our Products
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto"
                    >
                        Explore our wide range of high-quality snacks and beverages loved by millions.
                    </motion.p>
                </div>
            </section>

            {/* PRODUCT FILTER & GRID */}
            <section className="py-16 md:py-24 px-4 container mx-auto">
                {/* Categories */}
                <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 transform rounded-full hover:scale-105 active:scale-95 ${activeCategory === category
                                ? "bg-[#0C4DA2] text-white shadow-lg shadow-blue-500/30 ring-2 ring-offset-2 ring-[#0C4DA2]"
                                : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-gray-300"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 min-h-[600px] content-start"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.map((product) => (
                            <ProductItem key={product.id} product={product} router={router} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-300">
                        <div className="bg-white p-4 rounded-full inline-block mb-4 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M16 16s-1.5-2-4-2-4 2-4 2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
                        <p className="text-gray-500">We couldn't find any products in the "{activeCategory}" category.</p>
                        <button
                            onClick={() => setActiveCategory("All")}
                            className="mt-6 px-6 py-2 bg-white border border-gray-200 text-gray-600 rounded-full hover:bg-gray-50 font-medium transition-colors"
                        >
                            View all products
                        </button>
                    </div>
                )}
            </section>
            <Footer />
        </div>
    );
}
