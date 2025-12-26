import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black border-t border-white/10 py-12 md:py-16 relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0 text-sm font-mono">

                    {/* Logo & Tagline */}
                    <div className="text-center md:text-left space-y-2">
                        <h4 className="font-sans font-bold text-lg text-industrial/40 tracking-tight uppercase">
                            MONOCORE™ — The Central Operating System
                        </h4>
                    </div>

                    {/* Links */}
                    <div className="flex gap-8 text-industrial/30 uppercase tracking-widest text-xs">
                        <a href="/privacy" className="hover:text-brand-orange transition-colors">Privacy Policy</a>
                        <span className="select-none text-white/10">|</span>
                        <a href="/cookie" className="hover:text-brand-orange transition-colors">Cookie Policy</a>
                        <span className="select-none text-white/10">|</span>
                        <a href="/terms" className="hover:text-brand-orange transition-colors">Termini di Servizio</a>
                    </div>

                    {/* Copyright & Status */}
                    <div className="text-center md:text-right space-y-3">
                        <p className="text-industrial/20 uppercase tracking-wider text-xs">
                            © 2025 Monocore. Tutti i diritti riservati.
                        </p>

                        {/* System Status Indicator */}
                        <div className="flex items-center justify-center md:justify-end gap-2">
                            <div className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </div>
                            <span className="text-[10px] text-green-500/60 uppercase tracking-widest">
                                SYSTEM STATUS: OPERATIONAL
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
