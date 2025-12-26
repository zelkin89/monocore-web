import React from 'react';
import { motion } from 'framer-motion';
import { openModal } from '../store/modalStore';

interface ModuleData {
    id: string;
    number: string;
    title: string;
    color: string;
    received: string[];
    output: string;
    icon: React.ReactNode;
}

const modules: ModuleData[] = [
    {
        id: "mod-01",
        number: "01",
        title: "SYSTEM INITIALIZATION",
        color: "#3B82F6",
        received: ["Account HighLevel intestato a te", "Dominio collegato", "Email configurate", "Calendario sync", "Struttura utenti"],
        output: "Setup infrastrutturale completo. Il sistema è pronto per ricevere lead.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>
        )
    },
    {
        id: "mod-02",
        number: "02",
        title: "THE PIPELINE PROTOCOL",
        color: "#10B981",
        received: ["Revenue Path™ con 9 stage fissi", "Workflow di ingresso", "Stage di contatto e appuntamento", "Stage di proposta e chiusura"],
        output: "Ogni lead ha uno stato preciso. Controllo binario su ogni contatto.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 7 13.5 15.5 8.5 10.5 2 17" />
                <polyline points="16 7 22 7 22 13" />
            </svg>
        )
    },
    {
        id: "mod-03",
        number: "03",
        title: "LOGIC ENGINE",
        color: "#FF5F00",
        received: ["23 automazioni core attive", "Lead Response immediata", "Recall automatici", "Remind appuntamenti", "Riattivazione lead 'morte'"],
        output: "Meno lavoro manuale. Il sistema non dimentica e non si stanca. Email-only.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="16" height="16" x="4" y="4" rx="2" />
                <path d="m9 12 2 2 4-4" />
            </svg>
        )
    },
    {
        id: "mod-04",
        number: "04",
        title: "INPUT TERMINALS",
        color: "#8B5CF6",
        received: ["Monocore Intake Form unico", "Campi standard ottimizzati", "Validazione dati real-time", "Integrazione sito web esistente"],
        output: "Le lead entrano ordinate e pulite. Zero attriti nel passaggio dati.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                <polyline points="10 17 15 12 10 7" />
                <line x1="15" y1="12" x2="3" y2="12" />
            </svg>
        )
    },
    {
        id: "mod-05",
        number: "05",
        title: "COMMAND CENTER",
        color: "#F59E0B",
        received: ["Dashboard decisionale real-time", "KPI: Lead Totali & Appuntamenti", "Opportunity Value Tracking", "Sales Efficiency Index"],
        output: "In 60 secondi vedi lo stato del business. Sai se il problema è lead o vendita.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 3v18h18" />
                <path d="m19 9-5 5-4-4-3 3" />
            </svg>
        )
    },
    {
        id: "mod-06",
        number: "06",
        title: "COMPANY DATA LAYER",
        color: "#78350F",
        received: ["Struttura dati minimale e pulita", "Tag predefiniti (Source, Lifecycle)", "Scoring automatico lead", "Filtri di visualizzazione"],
        output: "CRM pulito nel tempo. Dati affidabili che non degenerano col tempo.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
            </svg>
        )
    },
    {
        id: "mod-07",
        number: "07",
        title: "TRAINING & HANDOFF",
        color: "#EF4444",
        received: ["5 Video Training (8-12 min)", "Guida PDF Brandizzata", "Call di Handoff (60 min)", "Supporto dedicato 14 giorni"],
        output: "Autonomia operativa totale. Nessuna dipendenza da Monocore.",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                <path d="M7 21h10" />
                <path d="M12 3v18" />
                <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
            </svg>
        )
    }
];

const ModuleCard: React.FC<{ module: ModuleData; index: number }> = ({ module, index }) => {
    const isEven = index % 2 === 0;

    return (
        <div className={`relative flex flex-col md:flex-row items-center justify-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

            {/* Content Card (z-20) */}
            <motion.div
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="w-full md:w-[45%] z-20"
            >
                <div className="bg-[#0a0a0a] border border-white/5 p-6 md:p-10 relative overflow-hidden group hover:border-white/20 transition-all">
                    <div className="flex justify-between items-start mb-8">
                        <div className="space-y-2">
                            <span className="font-mono text-3xl font-bold text-brand-orange block">
                                {module.number}
                            </span>
                            <h3 className="font-sans text-xl md:text-2xl font-bold text-white uppercase tracking-tighter">
                                {module.title}
                            </h3>
                        </div>
                        <div
                            className="p-3 bg-white/5 rounded-sm"
                            style={{ color: module.color }}
                        >
                            {module.icon}
                        </div>
                    </div>

                    <div className="space-y-4 mb-8">
                        <span className="font-mono text-[10px] uppercase text-industrial/30 tracking-widest block">
                            COSA RICEVI:
                        </span>
                        <ul className="space-y-2">
                            {module.received.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 font-mono text-sm text-industrial/60 leading-tight">
                                    <span className="text-industrial/20 mt-1">—</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div
                        className="p-5 border-l-2 bg-white/[0.02]"
                        style={{ borderLeftColor: module.color }}
                    >
                        <span className="font-mono text-[9px] uppercase tracking-widest block mb-2 opacity-50">
                            Output Concreto:
                        </span>
                        <p className="font-sans text-sm font-medium text-white/90">
                            {module.output}
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Circuit Style Connectors - Perfectly aligned with the Spine */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center w-32 h-px pointer-events-none">

                {/* Horizontal Line Connector */}
                <div
                    className={`absolute h-px bg-white/20 w-1/2 z-10 ${isEven ? 'right-1/2' : 'left-1/2'}`}
                    style={{ width: 'calc(50% + 1px)' }}
                ></div>

                {/* Dot on the spine */}
                <div
                    className="w-2.5 h-2.5 rounded-full bg-void border-2 z-40"
                    style={{ borderColor: module.color, boxShadow: `0 0 10px ${module.color}80` }}
                ></div>
            </div>

            <div className="hidden md:block w-[45%]"></div>
        </div>
    );
};

const TheModules: React.FC = () => {
    const handleCtaClick = () => {
        openModal();
    };

    return (
        <section id="the-modules" className="relative py-24 md:py-32 bg-void border-t border-grid-line overflow-hidden isolate">
            {/* Defensive background layer to prevent visual artifacts */}
            <div className="absolute inset-0 bg-void -z-10"></div>

            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-32 space-y-6">
                    <h2 className="font-sans text-4xl md:text-6xl font-bold text-industrial uppercase tracking-tighter">
                        I 7 MODULI MONOCORE™
                    </h2>
                    <p className="font-mono text-sm md:text-base text-industrial/60 max-w-2xl mx-auto leading-relaxed">
                        Cosa viene installato nei 7 giorni di deploy. Ogni modulo ha un output preciso. <br className="hidden md:block" />
                        Niente teoria, solo sistema funzionante.
                    </p>
                </div>

                {/* TIMELINE CONTAINER */}
                <div className="relative">
                    {/* FIX VISUAL: LA "SPINE" CONTINUA (UNICO DIV) */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/20 -translate-x-1/2 z-0 hidden md:block pointer-events-none"></div>

                    {/* Mobile Spine */}
                    <div className="absolute left-4 top-0 bottom-0 w-px bg-white/20 md:hidden z-0 pointer-events-none"></div>

                    {/* MODULE LIST */}
                    <div className="relative z-10 space-y-12 md:space-y-24">
                        {modules.map((module, index) => (
                            <ModuleCard key={module.id} module={module} index={index} />
                        ))}
                    </div>
                </div>

                {/* SECTION FOOTER */}
                <div className="mt-40 text-center space-y-12">
                    <div className="max-w-3xl mx-auto">
                        {/* FIX TYPOGRAPHY: Footer bianco, normal-case, firma arancione */}
                        <div className="font-mono text-sm md:text-base text-white/90 leading-relaxed tracking-wide space-y-10">
                            <p>
                                Questi 7 moduli vengono installati in sequenza nei 7 giorni di deploy.
                                Non scegli cosa includere. Ricevi il pacchetto completo.
                            </p>

                            <div className="pt-6">
                                <span className="text-brand-orange font-bold uppercase tracking-[0.3em] text-xs md:text-sm">
                                    MONOCORE INSTALLATION V1.0 (STABLE)
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <button
                            onClick={handleCtaClick}
                            className="px-12 py-5 bg-brand-orange text-void font-bold text-lg uppercase tracking-widest hover:shadow-[0_0_40px_rgba(255,95,0,0.5)] transition-all active:scale-95 border-none"
                        >
                            VERIFICA COMPATIBILITÀ →
                        </button>
                        <span className="font-mono text-[10px] text-industrial/30 uppercase tracking-widest mt-2">
                            Protocol: standard_deployment_sequence
                        </span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TheModules;
