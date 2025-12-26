import React from 'react';
import { ArrowRight } from 'lucide-react';
import { openModal } from '../store/modalStore';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden border-b border-white/5 bg-void">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">

                {/* Left Column: Content */}
                <div className="flex flex-col items-start text-left">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 mb-8 rounded-sm">
                        <div className="w-2 h-2 bg-brand-orange animate-pulse rounded-full"></div>
                        <span className="font-mono text-xs text-industrial/60 uppercase tracking-wider">v1.0 (Stable) Deployment Ready</span>
                    </div>

                    {/* Headline */}
                    <h1 className="font-sans font-bold text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-industrial mb-6 tracking-tight">
                        THE CENTRAL <br />
                        <span className="text-white">OPERATING</span> <br />
                        SYSTEM
                    </h1>

                    <h2 className="font-sans font-medium text-xl lg:text-2xl text-industrial/80 mb-8">
                        Smetti di assemblare pezzi. Installa il Core.
                    </h2>

                    {/* Subheadline */}
                    <p className="font-mono text-sm lg:text-base text-industrial/60 leading-relaxed max-w-lg mb-12">
                        Installiamo un Sistema Operativo aziendale in 7 giorni per micro imprese di servizi.
                        Niente software da imparare. Solo un'infrastruttura centrale standardizzata che elimina il caos operativo.
                    </p>

                    {/* CTA Block - Left Aligned Container */}
                    <div className="flex flex-col items-center md:items-start gap-4 w-full">
                        <button
                            onClick={() => openModal()}
                            className="bg-brand-orange text-void font-sans font-bold text-lg px-8 py-4 hover:bg-white hover:text-void transition-all duration-300 flex items-center justify-center gap-2 group rounded-sm cursor-pointer w-full md:w-auto"
                        >
                            VERIFICA COMPATIBILITÀ
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>

                        <span className="font-mono text-xs text-industrial/40 max-w-xs text-center md:text-left">
                            Accettiamo massimo 2 progetti al mese. Ti ricontattiamo entro 24 ore.
                        </span>

                        <a
                            href="#problem"
                            className="mt-6 md:mt-4 font-mono text-sm text-industrial/50 hover:text-brand-orange underline underline-offset-4 decoration-1 transition-colors pl-0 md:pl-8"
                        >
                            Analisi del problema →
                        </a>
                    </div>
                </div>

                {/* Right Column: Visual Artifact */}
                <div className="relative h-[400px] lg:h-[600px] w-full hidden lg:flex items-center justify-center border border-white/5 bg-white/[0.02] backdrop-blur-sm">
                    <div className="absolute top-4 right-4 font-mono text-xs text-brand-orange/80">3D_CORE_RENDER</div>
                    <div className="absolute bottom-4 left-4 font-mono text-xs text-industrial/20">STRUCTURE_INTEGRITY: 99.8%</div>

                    {/* CSS Only 3D Cube Animation */}
                    <div className="relative w-64 h-64 animate-[spin_20s_linear_infinite]" style={{ transformStyle: 'preserve-3d' }}>
                        <div className="absolute inset-0 border border-brand-orange/20 transform rotate-45 rounded-sm"></div>
                        <div className="absolute inset-0 border border-industrial/10 transform -rotate-45 scale-75 rounded-sm"></div>
                        <div className="absolute inset-0 border border-brand-orange/40 transform rotate-12 scale-50 rounded-sm shadow-[0_0_30px_rgba(255,95,0,0.1)]"></div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
