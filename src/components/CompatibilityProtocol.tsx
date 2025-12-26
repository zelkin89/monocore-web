import { motion } from 'framer-motion';
import React from 'react';
import { openModal } from '../store/modalStore';

interface CompatibilityProtocolProps {
    onCtaClick?: () => void;
}

const CheckIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-brand-orange">
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

const XIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);

const ProtocolList: React.FC<{ items: { title: string; desc: string }[]; isCompatible: boolean }> = ({ items, isCompatible }) => (
    <ul className="space-y-8 list-none p-0 m-0">
        {items.map((item, index) => (
            <li key={index} className="flex items-start gap-4 group list-none m-0 p-0">
                {/* Icon Container - Fixed to Top-Start alignment with optical correction */}
                <div className="mt-1 flex-shrink-0 flex items-center justify-center">
                    {isCompatible ? <CheckIcon /> : <XIcon />}
                </div>
                {/* Text Content */}
                <div className="font-mono text-sm leading-relaxed">
                    <strong className="block text-industrial font-bold uppercase tracking-tight mb-1 group-hover:text-white transition-colors">
                        {item.title}
                    </strong>
                    <span className="text-industrial/60 group-hover:text-industrial/80 transition-colors">
                        {item.desc}
                    </span>
                </div>
            </li>
        ))}
    </ul>
);

const CompatibilityProtocol: React.FC = () => {
    const compatibleItems = [
        { title: "Imprese di servizi B2B/B2C High Ticket", desc: "Edili leggere, installatori, artigiani, liberi professionisti." },
        { title: "Team da 2 a 20 dipendenti", desc: "Abbastanza grande da avere caos operativo. Abbastanza piccola da essere riallineata." },
        { title: "Processo di vendita lineare", desc: "Lead → Contatto → Appuntamento → Proposta → Chiusura." },
        { title: "Vuoi dati certi, non sensazioni", desc: "Sei stanco di governare \"a memoria\"." },
        { title: "Cerchi disciplina operativa", desc: "Sei disposto a seguire un protocollo standardizzato." }
    ];

    const incompatibleItems = [
        { title: "Hai meno di 2 dipendenti", desc: "Con 1 persona il workflow resta \"in testa\". Il valore percepito è troppo basso." },
        { title: "Hai più di 20 dipendenti", desc: "Hai bisogno di pipeline multiple, approvazioni complesse e integrazioni ERP. Monocore è troppo rigido." },
        { title: "Fai e-commerce puro", desc: "Mismatch strutturale. La tua pipeline è nel checkout, non nel CRM." },
        { title: "Hai un processo di vendita non ripetibile", desc: "Ogni vendita è diversa. La pipeline standardizzata perde senso. Rischio progetto custom." },
        { title: "Vuoi \"provare per un mese\"", desc: "Monocore è un'installazione strutturale, non un software SaaS. Se vuoi provare, cerchi un tool, non un OS." },
        { title: "Cerchi \"sartoria su misura\"", desc: "Ogni eccezione crea bug. Se cerchi flessibilità, non cerchi un Sistema Operativo." }
    ];

    const handleCtaClick = () => {
        openModal();
    };

    return (
        <section id="compatibility-protocol" className="relative py-24 md:py-32 bg-void border-t border-grid-line overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header Sezione */}
                <div className="text-center mb-20 space-y-6">
                    <h2 className="font-sans text-4xl md:text-6xl font-bold text-industrial uppercase tracking-tighter">
                        PROTOCOLLO DI <br className="md:hidden" /> COMPATIBILITÀ
                    </h2>
                    <p className="font-sans text-lg md:text-xl text-brand-orange/80 uppercase tracking-[0.2em] font-medium">
                        Standardization {">"} Customization. <br className="md:hidden" /> Le regole vincono sulle eccezioni.
                    </p>
                </div>

                {/* Intro Block (Tesla Statement) */}
                <div className="max-w-2xl mx-auto text-center mb-24">
                    <p className="font-mono text-sm md:text-base text-industrial/60 leading-relaxed">
                        Monocore non è per tutti. Non facciamo sartoria su misura. Non adattiamo il sistema alle tue richieste.
                        <br /><br />
                        Lavoriamo come Tesla: Il telaio e il motore sono standardizzati per garantire massima performance e sicurezza.
                        <br /><br />
                        <span className="text-white">Puoi scegliere il colore della carrozzeria (testi, offerte, branding), ma il Core del sistema non si tocca. Per la tua sicurezza.</span>
                    </p>
                </div>

                {/* Binary Qualification Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-24">

                    {/* Card SYSTEM COMPATIBLE */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-green-950/10 border border-green-500/40 p-8 md:p-12 relative overflow-hidden group hover:border-green-500 transition-all duration-500 h-full list-none"
                    >
                        {/* Background Glow */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 blur-3xl rounded-full"></div>

                        <div className="relative z-10 h-full flex flex-col">
                            <div className="flex items-start gap-4 mb-10 list-none">
                                <div className="mt-1 flex-shrink-0">
                                    <CheckIcon />
                                </div>
                                <h3 className="font-sans text-3xl font-bold text-green-500 uppercase tracking-tight m-0">
                                    SYSTEM COMPATIBLE
                                </h3>
                            </div>
                            <ProtocolList items={compatibleItems} isCompatible={true} />
                        </div>
                    </motion.div>

                    {/* Card INCOMPATIBLE */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-red-950/10 border border-red-500/40 p-8 md:p-12 relative overflow-hidden group hover:border-red-500 transition-all duration-500 h-full list-none"
                    >
                        {/* Background Glow */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-3xl rounded-full"></div>

                        <div className="relative z-10 h-full flex flex-col">
                            <div className="flex items-start gap-4 mb-10 list-none">
                                <div className="mt-1 flex-shrink-0">
                                    <XIcon />
                                </div>
                                <h3 className="font-sans text-3xl font-bold text-red-500 uppercase tracking-tight m-0">
                                    INCOMPATIBLE
                                </h3>
                            </div>
                            <ProtocolList items={incompatibleItems} isCompatible={false} />
                        </div>
                    </motion.div>

                </div>

                {/* Section Footer */}
                <div className="text-center space-y-12">
                    <div className="max-w-4xl mx-auto space-y-8">
                        {/* Label in White (no orange), Uppercase, Mono */}
                        <p className="font-mono text-sm text-industrial/40 font-bold leading-relaxed uppercase tracking-widest">
                            Statement Finale // Protocol_Pos_01
                        </p>

                        <div className="font-mono text-sm md:text-base leading-relaxed space-y-8">
                            <p className="text-industrial/70 normal-case">
                                Questa è una scelta di posizionamento, non di capacità tecnica. Potremmo fare progetti custom. Ma sceglieremmo di essere una pseudo-agenzia CRM. Monocore è un Sistema Operativo standardizzato per un target preciso.
                            </p>

                            {/* Statement Final - FORCED: White, Normal Case, Bold */}
                            <p className="text-white font-bold border-t border-grid-line pt-8 text-lg md:text-xl normal-case">
                                Se rientri nel protocollo di compatibilità, ottieni un sistema che funziona. Se non rientri, non sprechiamo il tuo tempo né il nostro. Trasparenza totale.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <button
                            onClick={handleCtaClick}
                            className="px-12 py-5 bg-brand-orange text-void font-bold text-lg uppercase tracking-widest hover:shadow-[0_0_40px_rgba(255,95,0,0.5)] transition-all active:scale-95 border-none"
                        >
                            VERIFICA SE SEI COMPATIBILE →
                        </button>
                        <span className="font-mono text-[9px] text-industrial/40 uppercase tracking-tight">
                            Compila il form. Se rientri nel protocollo, ti ricontattiamo entro 24 ore.
                        </span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CompatibilityProtocol;
