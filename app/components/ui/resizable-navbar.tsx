"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

function cn(...classes: (string | undefined | false)[]) {
    return classes.filter(Boolean).join(" ");
}

export const Navbar = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <div className={cn("fixed top-0 inset-x-0 z-50 pointer-events-none", className)}>
            {children}
        </div>
    );
};

export const NavBody = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        // Debounce/Hysteresis logic: only change state if meaningful scroll diff or specific thresholds
        if (latest > 50 && !isScrolled) {
            setIsScrolled(true);
        } else if (latest < 40 && isScrolled) {
            setIsScrolled(false);
        }
    });

    return (
        <motion.div
            layout
            initial={{ width: "100%", maxWidth: "1200px", borderRadius: "9999px" }}
            animate={{
                width: isScrolled ? "auto" : "100%", // 'auto' is smoother than fit-content with layout prop
                maxWidth: isScrolled ? "850px" : "1200px",
                y: isScrolled ? 0 : 0,
                padding: isScrolled ? "0.75rem 1.5rem" : "0.75rem 2rem",
            }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 30, // Higher damping prevents overshoot/bounciness
                mass: 0.8 // Lighter mass for quicker response
            }}
            className={cn(
                "hidden md:flex pointer-events-auto items-center justify-between bg-white/95 backdrop-blur-md border border-gray-100 mx-auto shadow-[0_8px_30px_rgb(0,0,0,0.04)] gap-4",
                "mt-6",
                className
            )}
            style={{
                borderRadius: "9999px" // Ensure border radius stays consistent
            }}
        >
            {children}
        </motion.div>
    );
};

export const NavbarLogo = () => {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    return (
        <a href="/" className="flex items-center gap-2 mr-2">
            <motion.div
                layout
                animate={{
                    height: 44, // Fixed height
                    width: isScrolled ? 44 : "auto",
                }}
                className="relative flex items-center justify-start"
            >
                <AnimatePresence mode="wait">
                    {isScrolled ? (
                        <motion.img
                            key="logo-icon"
                            src="/logo.png"
                            alt="ST"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.2 }}
                            className="h-full w-full object-contain"
                        />
                    ) : (
                        <motion.img
                            key="logo-full"
                            src="/fulllogo.png"
                            alt="SiantarTop"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            transition={{ duration: 0.2 }}
                            className="h-full w-auto object-contain object-left min-w-[120px]"
                        />
                    )}
                </AnimatePresence>
            </motion.div>
        </a>
    );
};

export const NavItems = ({ items }: { items: { name: string; link: string }[] }) => {
    const pathname = usePathname();

    return (
        <div className="flex items-center gap-1">
            {items.map((item, idx) => {
                const isActive = pathname === item.link;
                return (
                    <a
                        key={idx}
                        href={item.link}
                        className={cn(
                            "px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full",
                            isActive
                                ? "bg-[#0C4DA2] text-white shadow-md shadow-blue-500/20"
                                : "text-gray-600 hover:text-[#0C4DA2] hover:bg-blue-50/50"
                        )}
                    >
                        {item.name}
                    </a>
                );
            })}
        </div>
    );
};

export const NavbarButton = ({
    children,
    variant = "primary",
    className,
    onClick,
    ...props
}: {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    className?: string;
    onClick?: () => void;
} & React.ComponentPropsWithoutRef<"button">) => {
    const variantStyles = {
        primary: "bg-gradient-to-r from-[#0C4DA2] to-[#0a3d82] text-white hover:shadow-lg hover:shadow-blue-500/20",
        secondary: "bg-white text-gray-900 hover:bg-gray-50 border border-gray-100",
    };

    return (
        <button onClick={onClick} className={cn("px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300", variantStyles[variant], className)} {...props}>
            {children}
        </button>
    );
};

export const MobileNav = ({ children }: { children: React.ReactNode }) => {
    return <div className="md:hidden pointer-events-auto">{children}</div>;
};

export const MobileNavHeader = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex items-center justify-between px-6 py-4 bg-white/95 backdrop-blur-md border-b border-gray-100">
            {children}
        </div>
    );
};

export const MobileNavToggle = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => {
    return (
        <button onClick={onClick} className="p-2 text-gray-600 hover:text-[#0C4DA2]" aria-label="Toggle menu">
            <div className="w-6 h-5 flex flex-col justify-between">
                <span className={cn("block h-0.5 w-full bg-current rounded transition-all duration-300", isOpen && "rotate-45 translate-y-2")} />
                <span className={cn("block h-0.5 w-full bg-current rounded transition-all duration-300", isOpen && "opacity-0")} />
                <span className={cn("block h-0.5 w-full bg-current rounded transition-all duration-300", isOpen && "-rotate-45 -translate-y-2")} />
            </div>
        </button>
    );
};

export const MobileNavMenu = ({
    children,
    isOpen,
    onClose,
}: {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
}) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 top-[73px]"
                    />
                    <motion.div
                        initial={{ y: "-100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed top-[73px] inset-x-0 bg-white shadow-xl z-50 p-6 rounded-b-3xl border-t border-gray-100"
                    >
                        {children}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
