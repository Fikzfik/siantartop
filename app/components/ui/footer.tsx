"use client";

import { NavbarLogo } from "./resizable-navbar";

export function Footer() {
    return (
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
                            <div className="w-8 h-8 rounded bg-white/5 hover:bg-white/10 flex items-center justify-center cursor-pointer transition-colors text-xs">Tw</div>
                            <div className="w-8 h-8 rounded bg-white/5 hover:bg-white/10 flex items-center justify-center cursor-pointer transition-colors text-xs">In</div>
                            <div className="w-8 h-8 rounded bg-white/5 hover:bg-white/10 flex items-center justify-center cursor-pointer transition-colors text-xs">Ig</div>
                        </div>
                    </div>

                    {/* Links Column 1 */}
                    <div className="space-y-4">
                        <h4 className="text-white font-bold uppercase tracking-wider text-xs">Company</h4>
                        <ul className="space-y-2">
                            <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
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
                            <li><a href="/products" className="hover:text-white transition-colors">Noodle Snacks</a></li>
                            <li><a href="/products" className="hover:text-white transition-colors">Crackers</a></li>
                            <li><a href="/products" className="hover:text-white transition-colors">Biscuits</a></li>
                            <li><a href="/products" className="hover:text-white transition-colors">Wafers</a></li>
                            <li><a href="/products" className="hover:text-white transition-colors">Candy</a></li>
                        </ul>
                    </div>

                    {/* Links Column 3 */}
                    <div className="space-y-4">
                        <h4 className="text-white font-bold uppercase tracking-wider text-xs">Support</h4>
                        <ul className="space-y-2">
                            <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
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
    );
}
