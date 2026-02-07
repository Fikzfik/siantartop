"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "../components/ui/layout-grid";
import { useRouter } from "next/navigation";
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

export default function GalleryPage() {
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

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar>
                <NavBody>
                    <NavbarLogo />
                    <NavItems items={navItems} />
                    {/* Desktop Action Buttons - Hidden on Mobile */}
                    <div className="hidden md:flex items-center gap-2">
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
            <div className="pt-32 pb-20 px-4 md:px-8">
                <h1 className="text-4xl md:text-6xl font-bold text-[#0C4DA2] mb-8 text-center tracking-tight">
                    Our Gallery
                </h1>
                <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16 text-lg">
                    Explore our moments, achievements, and the vibrant life at Siantar Top. from our factory to your home.
                </p>
                <div className="w-full py-10">
                    <LayoutGrid cards={cards} />
                </div>
            </div>
            <Footer />
        </div>
    );
}

const SkeletonOne = () => {
    return (
        <div className="flex flex-col gap-4">
            <h3 className="font-bold md:text-4xl text-xl text-neutral-800">
                Factory Excellence
            </h3>
            <p className="font-normal text-base text-neutral-600 max-w-lg">
                State-of-the-art manufacturing facilities ensuring highest quality standards.
            </p>
        </div>
    );
};

const SkeletonTwo = () => {
    return (
        <div className="flex flex-col gap-4">
            <h3 className="font-bold md:text-4xl text-xl text-neutral-800">
                Global Distribution
            </h3>
            <p className="font-normal text-base text-neutral-600 max-w-lg">
                Reaching families across the globe with our beloved snacks.
            </p>
        </div>
    );
};
const SkeletonThree = () => {
    return (
        <div className="flex flex-col gap-4">
            <h3 className="font-bold md:text-4xl text-xl text-neutral-800">
                Innovation Hub
            </h3>
            <p className="font-normal text-base text-neutral-600 max-w-lg">
                Our R&D team constantly creating new flavors and textures.
            </p>
        </div>
    );
};
const SkeletonFour = () => {
    return (
        <div className="flex flex-col gap-4">
            <h3 className="font-bold md:text-4xl text-xl text-neutral-800">
                Community Engagement
            </h3>
            <p className="font-normal text-base text-neutral-600 max-w-lg">
                Active participation in social events and community support.
            </p>
        </div>
    );
};

const cards = [
    {
        id: 1,
        content: <SkeletonOne />,
        className: "md:col-span-2",
        thumbnail:
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=3270&auto=format&fit=crop",
    },
    {
        id: 2,
        content: <SkeletonTwo />,
        className: "col-span-1",
        thumbnail:
            "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=3270&auto=format&fit=crop",
    },
    {
        id: 3,
        content: <SkeletonThree />,
        className: "col-span-1",
        thumbnail:
            "https://images.unsplash.com/photo-1581093458791-9f302e68cc63?q=80&w=3270&auto=format&fit=crop",
    },
    {
        id: 4,
        content: <SkeletonFour />,
        className: "md:col-span-2",
        thumbnail:
            "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=3270&auto=format&fit=crop",
    },
    {
        id: 5,
        content: <SkeletonOne />,
        className: "col-span-1",
        thumbnail: "https://images.unsplash.com/photo-1536323760109-ca8c07450053?q=80&w=3270&auto=format&fit=crop"
    },
    {
        id: 6,
        content: <SkeletonTwo />,
        className: "col-span-1",
        thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=3270&auto=format&fit=crop"
    },
    {
        id: 7,
        content: <SkeletonThree />,
        className: "md:col-span-2",
        thumbnail: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=3270&auto=format&fit=crop"
    },
    {
        id: 8,
        content: <SkeletonFour />,
        className: "col-span-1",
        thumbnail: "https://images.unsplash.com/photo-1566373188540-394e1d683787?q=80&w=3270&auto=format&fit=crop"
    },
    {
        id: 9,
        content: <SkeletonOne />,
        className: "md:col-span-2",
        thumbnail: "https://images.unsplash.com/photo-1565514020176-dbf2277cc2c0?q=80&w=3270&auto=format&fit=crop"
    },
    {
        id: 10,
        content: <SkeletonTwo />,
        className: "col-span-1",
        thumbnail: "https://images.unsplash.com/photo-1605218427387-a2f260341e33?q=80&w=3270&auto=format&fit=crop"
    },
    {
        id: 11,
        content: <SkeletonThree />,
        className: "col-span-1",
        thumbnail: "https://images.unsplash.com/photo-1493612276216-9c782cb70cae?q=80&w=3270&auto=format&fit=crop"
    },
    {
        id: 12,
        content: <SkeletonFour />,
        className: "md:col-span-2",
        thumbnail: "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?q=80&w=3270&auto=format&fit=crop"
    }
];
