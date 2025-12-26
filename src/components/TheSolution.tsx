import React from 'react';
import { motion } from 'framer-motion';
import { openModal } from '../store/modalStore';

interface TheSolutionProps {
    onCtaClick?: () => void; // Reso opzionale per evitare errori se non passato subito
}

const Pillar: React.FC<{
    icon: React.ReactNode,
    title: string,
    description: string,
    isLast?: boolean
}> = ({ icon, title, description, isLast }) => (
    <div className={`flex flex-col p-8 md:p-12 ${!isLast ? 'md:border-r border-white/10' : ''}`}>
        <div className="text-industrial/40 mb-8">
            {icon}
        </div>
        <h3 className="font-sans text-xl font-bold text-white uppercase tracking-tight mb-6">
            {title}
        </h3>
        {/* 
        FIX TYPOGRAPHY: Supporto per liste puntate e grassetti.
        Utilizziamo selettori Tailwind arbitrari per stilizzare ul/li iniettati.
    */}
        <div
            className="font-mono text-sm text-industrial/60 leading-relaxed 
                 [&_b]:text-industrial [&_b]:font-bold
                 [&_ul]:list-none [&_ul]:p-0 [&_ul]:mt-4 [&_ul]:space-y-3
                 [&_li]:relative [&_li]:pl-5
                 [&_li::before]:content-['-'] [&_li::before]:absolute [&_li::before]:left-0 [&_li::before]:text-industrial/30"
            dangerouslySetInnerHTML={{ __html: description }}
        />
    </div>
);

const TheSolution: React.FC = () => {
    const handleCtaClick = () => {
        openModal();
    };

    return (
        <section id="the-solution" className="relative scroll-mt-24 py-24 md:py-32 bg-void border-t border-grid-line overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Intro Header */}
                <div className="text-center mb-24 space-y-6">
                    <h2 className="font-sans text-4xl md:text-6xl font-bold text-industrial uppercase tracking-tighter">
                        MONOCORE™ OS
                    </h2>
                    <p className="font-sans text-lg md:text-xl text-brand-orange/80 uppercase tracking-widest font-medium">
                        Un'unica infrastruttura centrale standardizzata. Non aggiungiamo software. Li eliminiamo.
                    </p>
                    <div className="max-w-2xl mx-auto pt-8">
                        <p className="font-mono text-sm md:text-base text-industrial/50 leading-relaxed">
                            Monocore non è un CRM. Non è un software da configurare. Non è una piattaforma da imparare.
                            <br /><br />
                            <span className="text-industrial">Monocore è un Sistema Operativo aziendale.</span>
                            <br /><br />
                            Come Windows governa il tuo computer, Monocore governa il tuo processo commerciale. Lo installiamo in 7 giorni. Lo consegniamo funzionante. Tu lo usi, non lo gestisci.
                        </p>
                    </div>
                </div>

                {/* Manifesto Box */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative max-w-4xl mx-auto mb-32 group"
                >
                    {/* External Decoration */}
                    <div className="absolute -top-3 left-8 px-3 py-1 bg-brand-orange text-void font-mono text-[10px] font-bold tracking-[0.2em] uppercase z-10">
                        PROTOCOL_MANIFESTO_V1
                    </div>

                    <div className="bg-[#0a0a0a] border border-brand-orange p-8 md:p-16 relative">
                        <div className="space-y-8">
                            <span className="font-mono text-xs text-brand-orange/60 tracking-[0.4em] uppercase">
                                Il Principio Monocore
                            </span>
                            <h3 className="font-sans text-3xl md:text-5xl font-bold text-white uppercase tracking-tighter">
                                Standardization {">"} Customization
                            </h3>
                            <div className="font-mono text-sm md:text-base text-industrial/70 leading-relaxed space-y-6">
                                <p>
                                    Le regole vincono sulle eccezioni. Un sistema rigido è un sistema stabile.
                                </p>
                                <p>
                                    Non facciamo sartoria su misura, quello crea bug. Lavoriamo come Tesla: il telaio e il motore sono standardizzati per garantire massima performance e sicurezza.
                                </p>
                                <p className="text-industrial/90 border-l border-brand-orange/30 pl-4 italic">
                                    Possiamo calibrare i testi e le offerte, ma il Core del sistema non si tocca. Per la tua sicurezza.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* 3 Pilastri Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 border border-white/10 mb-24 bg-industrial/[0.01]">
                    <Pillar
                        title="The Pipeline Protocol"
                        icon={
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 12c0 3.31-2.69 6-6 6a6 6 0 0 1-6-6M12 6c3.31 0 6 2.69 6 6M12 2v4M12 18v4M2 12h4M18 12h4" />
                                <circle cx="12" cy="12" r="2" />
                            </svg>
                        }
                        description="Una pipeline standardizzata con 9 stage fissi. <b>Monocore Revenue Path™</b>. Ogni lead ha uno stato preciso, visibile in tempo reale. La pipeline si muove solo su eventi certi:<ul><li>Proposta inviata</li><li>Contratto accettato</li><li>Pagamento ricevuto</li></ul>Zero supposizioni. Il risultato: controllo binario su ogni contatto."
                    />
                    <Pillar
                        title="Logic Engine"
                        icon={
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <rect width="16" height="16" x="4" y="4" rx="2" />
                                <rect width="6" height="6" x="9" y="9" rx="1" />
                                <path d="M15 2v2M15 20v2M2 15h2M20 15h2M9 2v2M9 20v2M2 9h2M20 9h2" />
                            </svg>
                        }
                        description="23 automazioni core già installate e attive. Il sistema lavora mentre tu dormi:<ul><li><b>Lead nuova ore 23:00?</b> Email immediata.</li><li><b>Lead ferma da 5 giorni?</b> Task automatico.</li><li><b>Lead 'morta' da 120 giorni?</b> Riattivazione.</li></ul>Email-only. Nessun SMS spam. Ogni automazione ha una logica matematica di ROI."
                    />
                    <Pillar
                        isLast
                        title="Command Center"
                        icon={
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <rect width="7" height="9" x="3" y="3" rx="1" />
                                <rect width="7" height="5" x="14" y="3" rx="1" />
                                <rect width="7" height="9" x="14" y="12" rx="1" />
                                <rect width="7" height="5" x="3" y="16" rx="1" />
                            </svg>
                        }
                        description="Una dashboard decisionale. Niente grafici inutili. Solo i numeri che ti servono. In meno di 60 secondi vedi:<ul><li>Lead totali acquisite</li><li>Appuntamenti fissati</li><li>Opportunity Value</li><li>Sales Efficiency</li></ul>Governi l'azienda dalla plancia di comando."
                    />
                </div>

                {/* Footer Sezione / CTA */}
                <div className="text-center space-y-12">
                    <p className="font-mono text-sm text-industrial/70 max-w-[45ch] mx-auto leading-relaxed">
                        Questi tre pilastri lavorano insieme come un unico organismo. La Pipeline traccia. Il Logic Engine automatizza. Il Command Center governa. Nessun pezzo isolato. Un Sistema Operativo unico.
                    </p>

                    <div className="flex flex-col items-center gap-4">
                        <button
                            onClick={handleCtaClick}
                            className="px-12 py-5 bg-brand-orange text-void font-bold text-lg uppercase tracking-widest hover:shadow-[0_0_40px_rgba(255,95,0,0.5)] transition-all active:scale-95 border-none"
                        >
                            VERIFICA COMPATIBILITÀ →
                        </button>
                        <span className="font-mono text-[9px] text-industrial/40 uppercase tracking-tight">
                            Accettiamo massimo 2 progetti al mese.
                        </span>
                    </div>

                    <div className="pt-24">
                        <h4 className="font-sans text-2xl md:text-3xl font-bold text-white tracking-tight">
                            Ma cosa significa esattamente "installare un Sistema Operativo"? <br className="hidden md:block" />
                            Ecco cosa ricevi nei 7 giorni di deploy.
                        </h4>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TheSolution;
