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
      transition: { duration: 0.6, ease: "easeOut" }
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

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-white overflow-x-hidden selection:bg-[#0C4DA2] selection:text-white">
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-2">
            <NavbarButton variant="secondary" onClick={() => window.location.href = '/career'}>
              Career
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
              <NavbarButton onClick={() => { window.location.href = '/career'; setIsMobileMenuOpen(false); }} variant="secondary" className="w-full justify-center">Career</NavbarButton>
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
          <img
            src="/bgdb.png"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-90"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement?.classList.add('bg-gradient-to-br', 'from-slate-100', 'to-slate-300');
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/90" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center mt-20">
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
              <h1 className="text-6xl md:text-8xl font-black text-[#0C4DA2] mb-6 drop-shadow-sm tracking-tight">
                High Taste <span className="text-[#8CC63F]">Specialist</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto font-light mb-10"
            >
              Pioneering snack manufacturing with passion and innovation since 1972.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#0C4DA2] text-white rounded-full font-bold text-lg hover:bg-[#0a3d82] shadow-lg hover:shadow-blue-500/40"
            >
              Discover Our World
            </motion.button>
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

      {/* SECTION 2: BRAND MARQUEE */}
      <div className="bg-[#0C4DA2] py-4 overflow-hidden relative z-20">
        <motion.div
          className="flex whitespace-nowrap gap-16 text-white/80 font-bold text-lg uppercase tracking-wider"
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear"
          }}
        >
          {/* Repeated items for smooth loop */}
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex gap-16">
              <span>Quality First</span> • <span>Innovative Products</span> • <span>Global Reach</span> • <span>Halal Certified</span> • <span>Since 1972</span> •
            </div>
          ))}
        </motion.div>
      </div>

      {/* SECTION 3: ABOUT / IMAGE SPLIT */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="py-24 container mx-auto px-4"
      >
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div variants={fadeInUp} className="flex-1 relative group w-full">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#8CC63F] to-[#0C4DA2] rounded-3xl opacity-20 group-hover:opacity-30 blur-lg transition-opacity" />
            <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/image1.jpg"
                alt="Top Quality Manufacturing Process"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  // Fallback text if image fails
                  e.currentTarget.parentElement?.classList.add('bg-gray-200', 'flex', 'items-center', 'justify-center');
                  (e.currentTarget.parentElement as HTMLElement).innerHTML = '<div class="text-gray-400">Image not found</div>';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
            </div>
          </motion.div>
          <motion.div variants={fadeInUp} className="flex-1 space-y-6">
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
          </motion.div>
        </div>
      </motion.section>

      {/* SECTION 4: PRODUCT SHOWCASE GRID */}
      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
            <p className="text-gray-600 text-lg">Discover our wide range of products beloved by millions.</p>
          </motion.div>

          {/* Infinite Marquee Container */}
          <div className="relative overflow-hidden w-full -mx-4 md:mx-0">

            <motion.div
              className="flex gap-6 w-max pb-12"
              animate={{ x: "-50%" }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 25
              }}
            >
              {/* Duplicate list for seamless loop */}
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex gap-8 items-center">
                  {[
                    { title: "Boyki", image: "/product/boyki.jpg" },
                    { title: "French", image: "/product/french.jpg" },
                    { title: "Gemez Enak", image: "/product/gemezenak.png" },
                    { title: "Go Potato", image: "/product/gopotato.jpg" },
                    { title: "Goriorio", image: "/product/goriorio.jpg" },
                    { title: "Jayamie", image: "/product/jayamie.jpg" },
                    { title: "Maestro", image: "/product/maestro.jpg" },
                    { title: "My Choco", image: "/product/mychoco.png" },
                    { title: "O Krimer", image: "/product/okrimer.png" },
                    { title: "Spix", image: "/product/spix.png" },
                    { title: "Suki", image: "/product/suki.png" },
                    { title: "Tic Tic", image: "/product/tictic.png" },
                    { title: "Twistko", image: "/product/twistko.png" },
                  ].map((item, i) => (
                    <div
                      key={`${setIndex}-${i}`}
                      className="w-32 md:w-48 flex-shrink-0 group cursor-pointer"
                    >
                      <div className="relative aspect-square flex items-center justify-center p-2 transition-transform duration-300 group-hover:scale-110">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-contain mix-blend-multiply"
                          onError={(e) => e.currentTarget.style.display = 'none'}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 5: GLOBAL REACH */}
      {/* SECTION 5: LATEST NEWS */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest News</h2>
            <p className="text-gray-600 text-lg">Stay updated with our latest stories and events.</p>
          </motion.div>

          {/* News Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* 1. Highlight News (Full Width) */}
            <motion.div
              variants={fadeInUp}
              className="col-span-1 md:col-span-3 relative h-[500px] rounded-3xl overflow-hidden group cursor-pointer shadow-lg"
            >
              <img
                src="/image1.jpg"
                alt="Highlight News"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12">
                <span className="inline-block px-4 py-1.5 bg-[#8CC63F] text-white text-sm font-bold rounded-full mb-4 w-fit">
                  Highlight
                </span>
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight group-hover:underline decoration-2 underline-offset-4">
                  SiantarTop Launches New Automated Production Line
                </h3>
                <p className="text-gray-200 text-lg max-w-2xl">
                  Increasing production capacity by 200% to meet global demand, implementing state-of-the-art sustainable technology.
                </p>
                <div className="mt-6 text-white/80 text-sm font-medium">
                  February 06, 2026 • Corporate News
                </div>
              </div>
            </motion.div>

            {/* 2. Standard News Card 1 */}
            <motion.div variants={fadeInUp} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group cursor-pointer flex flex-col h-full border border-gray-100">
              <div className="h-64 bg-amber-50 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-amber-200">
                  <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82c-1.16-.41-2-1.51-2-2.82zm14 .82V7h2v1c0 1.31-.84 2.41-2 2.82z" /></svg>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="text-sm text-[#0C4DA2] font-bold mb-3">Community</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0C4DA2] transition-colors leading-snug">
                  Annual Charity Run 2025: Running for a Better Future
                </h4>
                <p className="text-gray-500 text-sm mb-6 flex-grow">
                  Over 5,000 participants joined us in our mission to support local educational initiatives.
                </p>
                <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Jan 20, 2026</span>
              </div>
            </motion.div>

            {/* 3. Standard News Card 2 */}
            <motion.div variants={fadeInUp} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group cursor-pointer flex flex-col h-full border border-gray-100">
              <div className="h-64 bg-blue-50 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-blue-200">
                  <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="text-sm text-[#0C4DA2] font-bold mb-3">Global</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0C4DA2] transition-colors leading-snug">
                  Expansion into South American Markets
                </h4>
                <p className="text-gray-500 text-sm mb-6 flex-grow">
                  Bringing the taste of Indonesia to Brazil and Argentina with our new distribution partners.
                </p>
                <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Dec 15, 2025</span>
              </div>
            </motion.div>

            {/* 4. Standard News Card 3 */}
            <motion.div variants={fadeInUp} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group cursor-pointer flex flex-col h-full border border-gray-100">
              <div className="h-64 bg-green-50 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-green-200">
                  <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" /></svg>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="text-sm text-[#0C4DA2] font-bold mb-3">Innovation</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0C4DA2] transition-colors leading-snug">
                  Top Brand Award 2025 Winner
                </h4>
                <p className="text-gray-500 text-sm mb-6 flex-grow">
                  Recognized as the consumer's choice for the 10th consecutive year in the Noodle Snack category.
                </p>
                <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Nov 01, 2025</span>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* CLEAN FOOTER SECTION */}
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
