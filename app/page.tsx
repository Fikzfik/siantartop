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
} from "./components/ui/resizable-navbar";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const navItems = [
    { name: "Dashboard", link: "/" },
    { name: "About", link: "/about" },
    { name: "Products", link: "/products" },
    { name: "Gallery", link: "/gallery" },
    { name: "News", link: "/news" },
    { name: "Contact", link: "/contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <div className="relative w-full min-h-screen bg-white overflow-x-hidden selection:bg-[#0C4DA2] selection:text-white">
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-2">
            <NavbarButton variant="secondary" onClick={() => window.location.href = '/login'}>
              Login
            </NavbarButton>
            <NavbarButton variant="primary" onClick={() => window.location.href = '/cart'} className="flex items-center gap-2">
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

      {/* SECTION 1: FULL SCREEN HERO ILLUSTRATION */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#F0F4F8]">
        {/* Parallax Background Image */}
        <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
          {/* Replace this src with your full illustration e.g. /hero-bg.jpg */}
          <img
            src="/bgdb.png"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-90"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              // Fallback gradient if no image
              e.currentTarget.parentElement?.classList.add('bg-gradient-to-br', 'from-slate-100', 'to-slate-300');
            }}
          />
          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/90" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-black text-[#0C4DA2] mb-6 drop-shadow-sm tracking-tight">
              Taste the <span className="text-[#8CC63F]">Joy</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto font-light mb-10">
              Pioneering snack manufacturing with passion and innovation since 1972.
            </p>
            <button className="px-8 py-4 bg-[#0C4DA2] text-white rounded-full font-bold text-lg hover:bg-[#0a3d82] hover:scale-105 transition-all shadow-lg hover:shadow-blue-500/40">
              Discover Our World
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-[#0C4DA2]"
        >
          <svg className="w-8 h-8 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </motion.div>
      </section>

      {/* SECTION 2: BRAND MARQUEE (OPTIONAL) */}
      <div className="bg-[#0C4DA2] py-4 overflow-hidden relative z-20">
        <div className="flex animate-marquee whitespace-nowrap gap-16 text-white/80 font-bold text-lg uppercase tracking-wider">
          <span>Quality First</span> • <span>Innovative Products</span> • <span>Global Reach</span> • <span>Halal Certified</span> • <span>Since 1972</span> •
          <span>Quality First</span> • <span>Innovative Products</span> • <span>Global Reach</span> • <span>Halal Certified</span> • <span>Since 1972</span> •
        </div>
      </div>

      {/* SECTION 3: ABOUT / IMAGE SPLIT */}
      <section className="py-24 container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#8CC63F] to-[#0C4DA2] rounded-3xl opacity-20 group-hover:opacity-30 blur-lg transition-opacity" />
            <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200 shadow-xl">
              {/* Placeholder for About Image */}
              <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-100">
                Top Quality Manufacturing Process
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-6">
            <span className="text-[#8CC63F] font-bold tracking-wider uppercase text-sm">About SiantarTop</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Building a Legacy of <br /> <span className="text-[#0C4DA2]">Taste & Quality</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded in 1972, SiantarTop has grown into one of Indonesia's leading snack manufacturers.
              We believe in creating high-quality, affordable products that bring happiness to everyone, everywhere.
              Our commitment to excellence is reflected in our state-of-the-art facilities and continuous innovation.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-[#0C4DA2]">50+</span>
                <span className="text-sm text-gray-500">Years Experience</span>
              </div>
              <div className="w-px bg-gray-200 mx-4" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-[#0C4DA2]">100+</span>
                <span className="text-sm text-gray-500">Global Markets</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: PRODUCT SHOWCASE GRID */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Featured Brands</h2>
            <p className="text-gray-600 text-lg">Discover our wide range of products beloved by millions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Noodle Snacks", color: "bg-orange-50" },
              { title: "Crackers", color: "bg-blue-50" },
              { title: "Biscuits & Wafers", color: "bg-pink-50" },
              { title: "Candy", color: "bg-purple-50" },
              { title: "Coffee", color: "bg-yellow-50" },
              { title: "New Innovations", color: "bg-green-50" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className={`${item.color} rounded-3xl p-8 h-80 relative overflow-hidden group border border-gray-100/50 shadow-sm hover:shadow-xl transition-all cursor-pointer`}
              >
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 relative z-10">{item.title}</h3>
                <p className="text-gray-500 mt-2 relative z-10">Premium quality ingredients</p>
                <div className="absolute bottom-8 left-8">
                  <span className="text-[#0C4DA2] font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
                    View Products →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: GLOBAL REACH */}
      <section className="py-24 container mx-auto px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 -z-10 rounded-l-full blur-3xl opacity-60" />

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Touching Lives <br />Around the Globe</h2>
            <p className="text-lg text-gray-600 mb-8">
              SiantarTop products are enjoyed in over 100 countries. Our strict adherence to international quality standards guarantees safety and satisfaction in every pack.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="text-3xl font-bold text-[#8CC63F] mb-1">ISO 9001</div>
                <div className="text-sm text-gray-500">Quality Management</div>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="text-3xl font-bold text-[#0C4DA2] mb-1">Halal</div>
                <div className="text-sm text-gray-500">Certified Products</div>
              </div>
            </div>
          </div>
          <div className="flex-1 h-96 w-full bg-gray-100 rounded-3xl flex items-center justify-center text-gray-400">
            {/* Map Placeholder */}
            <span>World Map Interaction Placeholder</span>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="bg-[#0C4DA2] py-20 text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Partner with Us?</h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10">
            Whether you are a distributor, retailer, or investor, lets build a successful future together.
          </p>
          <button className="px-10 py-4 bg-white text-[#0C4DA2] font-bold rounded-full text-lg hover:bg-[#8CC63F] hover:text-white transition-colors shadow-lg">
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
}
