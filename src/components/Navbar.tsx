import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { openModal } from '../store/modalStore';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Il Problema', href: '#the-problem' },
        { name: 'Soluzione', href: '#the-solution' },
        { name: 'Moduli', href: '#the-modules' },
        { name: 'FAQ', href: '#faq' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-void/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                {/* Logo */}
                <a href="/" className="flex items-center gap-2 group">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-orange">
                        {/* Chassis Esterno */}
                        <rect x="2" y="2" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
                        {/* Core Arancione */}
                        <rect x="8" y="8" width="8" height="8" rx="1" fill="currentColor" />
                        {/* Pin Connettori (Dettaglio Tech) */}
                        <path d="M12 2V0 M12 24V22 M2 12H0 M24 12H22 M6 2V0 M18 2V0 M6 24V22 M18 24V22 M2 6H0 M2 18H0 M24 6H22 M24 18H22" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                    <span className="font-sans font-bold text-xl tracking-tight text-industrial group-hover:text-brand-orange transition-colors">MONOCORE</span>
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="font-mono text-sm text-industrial/70 hover:text-brand-orange transition-colors uppercase tracking-wide"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="/logs" className="font-mono text-sm text-industrial/70 hover:text-brand-orange transition-colors uppercase tracking-wide">
                        LOGS
                    </a>
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <button onClick={() => openModal()} className="border border-white/20 px-6 py-2 font-mono text-xs hover:bg-brand-orange hover:text-void hover:border-brand-orange transition-all duration-300 uppercase cursor-pointer bg-transparent">
                        Ready to Deploy
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-industrial"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-void border-b border-white/10 p-6 flex flex-col gap-6 shadow-2xl">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="font-sans text-lg font-bold text-industrial hover:text-brand-orange"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="/logs" className="font-sans text-lg font-bold text-industrial hover:text-brand-orange" onClick={() => setIsMobileMenuOpen(false)}>
                        LOGS
                    </a>
                    <button onClick={() => { setIsMobileMenuOpen(false); openModal(); }} className="bg-brand-orange text-void text-center py-4 font-bold font-sans uppercase tracking-wider w-full cursor-pointer">
                        Ready to Deploy
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
