import React from 'react';
import { motion } from 'framer-motion';
import { openModal } from '../store/modalStore';

const TheFinalCta: React.FC = () => {
    // Gestione click interna (modifica l'URL o l'ID del modale qui se necessario)
    const handleCtaClick = () => {
        // Apri il modale di compatibilità
        openModal();
    };

    return (
        <section className="relative bg-black py-32 overflow-hidden border-t border-white/5">
            {/* Background Watermark - Rotated Square */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] border border-white/5 rotate-45 pointer-events-none z-0"></div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

                {/* Main Header */}
                <div className="space-y-6 mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-sans text-5xl md:text-7xl font-bold text-white uppercase tracking-tighter"
                    >
                        READY TO DEPLOY?
                    </motion.h2>
                    <p className="font-sans text-lg md:text-xl text-industrial/60 max-w-2xl mx-auto">
                        Compila l'applicazione. Se non sei adatto, te lo diciamo noi. Non vendiamo a tutti.
                    </p>
                </div>

                {/* Benefits & Price */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="font-mono text-sm md:text-base text-industrial/80 leading-relaxed space-y-8 mb-12"
                >
                    <p>
                        7 giorni per passare da caos operativo a controllo totale.
                        <br />
                        Pipeline standardizzata. Automazioni core attive. Dashboard decisionale.
                        <br />
                        Un Sistema Operativo installato, non un software da imparare.
                    </p>

                    <div className="py-6">
                        <span className="font-sans text-3xl md:text-4xl font-bold text-white block mb-1">
                            €2.000
                        </span>
                        <span className="font-mono text-xs uppercase tracking-widest text-industrial/40">
                            Prezzo fisso. Non negoziabile.
                        </span>
                    </div>
                </motion.div>

                {/* CTA Area */}
                <div className="flex flex-col items-center gap-6 mb-16">
                    <button
                        onClick={handleCtaClick}
                        className="w-full md:w-auto px-8 md:px-12 py-5 bg-brand-orange text-void font-bold text-lg uppercase tracking-widest hover:shadow-[0_0_40px_rgba(255,95,0,0.5)] transition-all active:scale-95 border-none cursor-pointer"
                    >
                        COMPILA IL FORM DI APPLICAZIONE →
                    </button>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-industrial/40">
                        2 minuti. Ti ricontattiamo entro 24 ore.
                    </span>
                </div>

                {/* Scarcity Box */}
                <div className="inline-flex items-center gap-4 bg-brand-orange/5 border border-brand-orange/20 px-6 py-4 max-w-xl text-left mx-auto rounded-sm">
                    <div className="flex-shrink-0 text-brand-orange">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                            <line x1="12" y1="9" x2="12" y2="13" />
                            <line x1="12" y1="17" x2="12.01" y2="17" />
                        </svg>
                    </div>
                    <p className="font-mono text-xs text-industrial/60 leading-tight">
                        <strong className="text-brand-orange uppercase block mb-1">Slot disponibili questo mese: 2</strong>
                        Accettiamo massimo 2 installazioni simultanee. Se i slot sono occupati, vai in lista d'attesa.
                    </p>
                </div>

                {/* Final Brand Statement */}
                <div className="mt-32 pt-32 border-t border-white/5 space-y-8">
                    <p className="font-mono text-sm text-industrial/40 max-w-md mx-auto">
                        Monocore non è un assistente virtuale amichevole. È un Architetto di Sistemi. Non configuriamo software. Installiamo un Sistema Operativo.
                    </p>
                    <h1 className="font-sans text-5xl md:text-8xl font-bold text-white uppercase tracking-tighter leading-none">
                        BUSINESS LOGIC.<br />INSTALLED.
                    </h1>
                </div>

            </div>
        </section>
    );
};

export default TheFinalCta;
