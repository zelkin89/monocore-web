import React from 'react';
import { motion } from 'framer-motion';

const ThreatCard: React.FC<{
    icon: React.ReactNode,
    title: string,
    id: string,
    children: React.ReactNode
}> = ({ icon, title, id, children }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group relative bg-[#0a0a0a] border border-white/10 p-8 transition-all duration-300 hover:border-brand-orange hover:-translate-y-1 flex flex-col h-full w-full"
    >
        {/* Diagnostic Header */}
        <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
            <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-brand-orange animate-pulse"></div>
                <span className="font-mono text-[9px] text-brand-orange uppercase tracking-widest">Threat_Status: Critical</span>
            </div>
            <span className="font-mono text-[9px] text-industrial/30 uppercase tracking-widest">ID: {id}</span>
        </div>

        {/* Icon */}
        <div className="text-brand-orange mb-6">
            {icon}
        </div>

        {/* Content */}
        <h3 className="font-sans text-2xl font-bold text-white uppercase tracking-tight mb-6">
            {title}
        </h3>

        {/* 
        FIX TYPOGRAPHY: Utilizziamo selettori Tailwind arbitrari per forzare 
        tutti gli <strong> all'interno del contenuto ad essere bianco puro e bold.
    */}
        <div className="font-mono text-sm text-industrial/80 leading-relaxed flex-grow [&_strong]:text-white [&_strong]:font-bold [&_b]:text-white [&_b]:font-bold">
            {children}
        </div>

        {/* Card Footer Decor */}
        <div className="mt-8 pt-4 border-t border-white/5 flex justify-end">
            <div className="w-12 h-[1px] bg-white/10 group-hover:bg-brand-orange/40 transition-colors"></div>
        </div>
    </motion.div>
);

const TheEnemies: React.FC = () => {
    const handleScrollToSolution = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const element = document.getElementById('the-solution');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="the-enemies" className="relative py-24 md:py-32 bg-void border-t border-grid-line overflow-visible">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header Sezione */}
                <div className="text-center mb-20 space-y-6">
                    <h2 className="font-sans text-4xl md:text-6xl font-bold text-industrial uppercase tracking-tighter">
                        CONTRO CHI CI <br className="md:hidden" /> POSIZIONIAMO
                    </h2>
                    <p className="font-mono text-sm md:text-base text-industrial/60 max-w-2xl mx-auto leading-relaxed">
                        Il mercato è pieno di soluzioni sbagliate. Monocore esiste perché queste tre architetture stanno danneggiando le aziende di servizi.
                    </p>
                </div>

                {/* Grid Card: items-stretch assicura che le card siano alte uguali */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

                    {/* Card 1: Frankenstein Tech */}
                    <ThreatCard
                        id="TR-001-ASSEMBLY"
                        title="Frankenstein Tech"
                        icon={
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
                                <circle cx="12" cy="12" r="3" />
                            </svg>
                        }
                    >
                        L'assemblaggio instabile di un gestionale + una piattaforma di email marketing + un software di automazione + Excel + WhatsApp.
                        <br /><br />
                        Ogni tool aggiunge complessità, non ordine. Ogni integrazione è un punto di rottura. Ogni aggiornamento rompe qualcosa che funzionava.
                        <br /><br />
                        Il risultato: un motore che costa una fortuna in abbonamenti, richiede manutenzione continua, e si ferma quando ne hai più bisogno.
                        <br /><br />
                        <strong className="block border-l border-brand-orange/30 pl-3 my-4 italic">
                            Costo mensile medio: €300–500 tra abbonamenti, integrazioni, tempo sprecato.
                        </strong>
                        <br />
                        <strong>Il problema non è tecnico. È architetturale.</strong> Stai assemblando pezzi che non sono progettati per lavorare insieme. Monocore sostituisce questo caos con un'infrastruttura unica e centrale.
                    </ThreatCard>

                    {/* Card 2: I "Whitelabel" Vuoti */}
                    <ThreatCard
                        id="TR-002-EMPTY"
                        title="I 'Whitelabel' Vuoti"
                        icon={
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <rect width="18" height="18" x="3" y="3" rx="2" />
                                <path d="M3 9h18M9 21V9" />
                            </svg>
                        }
                    >
                        Agenzie che ti rivendono l'accesso a HighLevel, ti danno le credenziali, e spariscono.
                        <br /><br />
                        Ti lasciano con un motore spento che non sai guidare. Nessuna configurazione. Nessun processo. Nessuna logica installata.
                        <br /><br />
                        Risultato: paghi l'abbonamento per un CRM che non usi perché 'è troppo complesso' o 'non abbiamo tempo di impararlo'.
                        <br /><br />
                        <strong className="block border-l border-brand-orange/30 pl-3 my-4 italic">
                            Il problema: ti hanno venduto un contenitore vuoto.
                        </strong>
                        <br />
                        HighLevel è potente, ma senza logica installata è solo un software in più da imparare.
                        <br /><br />
                        Monocore non ti vende l'accesso. Ti installa un <strong>Sistema Operativo</strong> funzionante, configurato, documentato, pronto all'uso. Tu non compri HighLevel. Tu installi <strong>Monocore OS</strong>.
                    </ThreatCard>

                    {/* Card 3: Dispersione di Energia */}
                    <ThreatCard
                        id="TR-003-LOSS"
                        title="Dispersione di Energia"
                        icon={
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m2 2 20 20M13 18l1.41-1.41M16.59 13l1.41-1.41M11.59 11.59 13 13M8 18h.01M11 15h.01M14 12h.01" />
                                <path d="M3.5 13a9 9 0 0 1 12.8-6.3" />
                                <path d="M20.5 13a9 9 0 0 1-1.5 5.1" />
                            </svg>
                        }
                    >
                        L'imprenditore passa il 60% del tempo a fare il 'tecnico tuttofare': Richiamare lead. Controllare se i commerciali hanno seguito. Chiedere aggiornamenti a voce. Ricostruire mentalmente lo stato delle trattative.
                        <br /><br />
                        Nessun protocollo. Nessun sistema. Nessuna visibilità.
                        <br /><br />
                        Risultato: zero tempo per strategia, crescita, ottimizzazione. Governi l'azienda a sensazione, non su dati certi.
                        <br /><br />
                        Monocore libera questa energia. Installa protocolli binari: ogni lead ha uno stato preciso, ogni azione è tracciata, ogni numero è visibile in tempo reale. Da <strong>'tecnico tuttofare'</strong> a <strong>'CEO dalla plancia di comando'</strong>.
                    </ThreatCard>

                </div>

                {/* Footer Sezione / Transizione */}
                <div className="mt-24 text-center">
                    <div className="max-w-4xl mx-auto">
                        {/* FIX TYPOGRAPHY: Sans-serif, white, authoritative */}
                        <p className="font-sans text-xl md:text-2xl font-medium text-white leading-relaxed">
                            Monocore non è un altro tool da aggiungere allo stack. È il sistema che sostituisce lo stack. <br className="hidden md:block" />
                            Non configuriamo software. <span className="text-brand-orange">Installiamo un Sistema Operativo.</span>
                        </p>
                    </div>

                    <div className="flex justify-center mt-8">
                        <a
                            href="#the-solution"
                            onClick={handleScrollToSolution}
                            className="group flex items-center gap-3 font-mono text-sm uppercase tracking-[0.3em] text-brand-orange hover:text-white transition-colors"
                        >
                            Scopri come funziona Monocore
                            <span className="group-hover:translate-x-2 transition-transform">→</span>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TheEnemies;
