import React from 'react';
import { motion } from 'framer-motion';

interface StepProps {
    number: string;
    title: string;
    children: React.ReactNode;
    isLast?: boolean;
}

const ExecutionStep: React.FC<StepProps> = ({ number, title, children, isLast }) => (
    <div className="relative flex gap-8 md:gap-12 pb-20 group">
        {/* Vertical Line & Node */}
        <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-sm border border-brand-orange bg-void flex items-center justify-center z-10 shrink-0">
                <span className="font-sans text-xl font-bold text-brand-orange">{number}</span>
            </div>
            {!isLast && (
                <div className="absolute top-12 bottom-0 w-px bg-brand-orange/30 group-hover:bg-brand-orange transition-colors"></div>
            )}
        </div>

        {/* Content */}
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-grow pt-2"
        >
            <h3 className="font-sans text-2xl font-bold text-white uppercase tracking-tight mb-6">
                {title}
            </h3>
            <div className="font-mono text-sm md:text-base text-industrial/80 leading-relaxed space-y-4 max-w-2xl">
                {children}
            </div>
        </motion.div>
    </div>
);

const DayBlock: React.FC<{ label: string; text: string }> = ({ label, text }) => (
    <div className="p-6 bg-white/[0.03] border-l-2 border-brand-orange/40 hover:bg-white/[0.05] hover:border-brand-orange transition-all mb-4">
        <span className="font-mono text-xs text-brand-orange font-bold uppercase tracking-widest block mb-2">
            {label}
        </span>
        <p className="font-mono text-sm text-industrial/80 leading-relaxed">
            {text}
        </p>
    </div>
);

const TheExecution: React.FC = () => {
    const handleScrollToFaq = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const element = document.getElementById('faq');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="execution" className="relative py-24 md:py-32 bg-void border-t border-grid-line overflow-hidden">
            <div className="max-w-4xl mx-auto px-6">

                {/* Header Sezione */}
                <div className="text-center mb-24 space-y-6">
                    <h2 className="font-sans text-4xl md:text-6xl font-bold text-industrial uppercase tracking-tighter">
                        EXECUTION PROTOCOL
                    </h2>
                    <p className="font-sans text-lg md:text-xl text-brand-orange/80 uppercase tracking-widest font-medium">
                        Dalla compilazione del form al sistema attivo: cosa succede esattamente.
                    </p>
                    <div className="max-w-2xl mx-auto pt-6">
                        <p className="font-mono text-sm md:text-base text-industrial/50 leading-relaxed">
                            Niente preventivi lunghi. Niente call conoscitive infinite. Il processo è standardizzato, veloce, binario. O sei compatibile e procediamo, o non lo sei e te lo diciamo subito.
                        </p>
                    </div>
                </div>

                {/* Timeline Container */}
                <div className="relative pl-4 md:pl-0">

                    {/* Step 01 */}
                    <ExecutionStep number="01" title="Application Form">
                        <p>
                            Compili il form di applicazione. Cosa ti chiediamo: Nome, Email, Telefono, Azienda, Fatturato, Settore.
                            <br /><br />
                            Se i parametri non combaciano con i requisiti, la procedura si ferma qui. Non vendiamo a tutti.
                            <br /><br />
                            <strong className="text-white">Tempo stimato: 2 minuti.</strong>
                        </p>
                    </ExecutionStep>

                    {/* Step 02 */}
                    <ExecutionStep number="02" title="Diagnostic Call">
                        <p>
                            Ti ricontattiamo entro 24 ore per una chiamata di diagnosi. Non è una chiacchierata conoscitiva. È una verifica tecnica.
                            <br /><br />
                            Cosa verifichiamo: Compatibilità Revenue Path™, Canali acquisizione, Mindset team.
                            <br /><br />
                            Se tutto combacia, procediamo. Se no, te lo diciamo onestamente.
                            <br /><br />
                            Alla fine della call: <span className="text-white">O firmi il contratto o ci salutiamo.</span>
                            <br /><br />
                            <strong className="text-white">Durata: 30-45 minuti.</strong>
                        </p>
                    </ExecutionStep>

                    {/* Step 03 */}
                    <ExecutionStep number="03" title="Deploy in 7 Giorni" isLast>
                        <p className="mb-8">Dopo la firma del contratto, parte il countdown.</p>

                        <div className="space-y-4">
                            <DayBlock
                                label="Giorno 0"
                                text="Pagamento completato → accesso Welcome Area. Ricevi video onboarding e checklist."
                            />
                            <DayBlock
                                label="Giorno 1-6"
                                text="Installazione dei 7 moduli in background. System Initialization, Pipeline, Logic Engine, ecc. Tu non devi fare niente."
                            />
                            <DayBlock
                                label="Giorno 7+"
                                text="Sistema completato. Call di Handoff (60 min). Consegna chiavi. Monocore OS attivo."
                            />
                            <DayBlock
                                label="Giorno 8-21"
                                text="Supporto 14 giorni asincrono (email/ticket) per chiarimenti e bug. Niente nuove personalizzazioni."
                            />
                        </div>

                        {/* FIX: Quote branding - Added not-italic explicitly to force straight text */}
                        <p className="mt-8 font-mono text-brand-orange border-l-2 border-brand-orange pl-4 text-sm md:text-base not-italic">
                            "Installiamo, configuriamo, consegniamo le chiavi, ti formiamo. La velocità è una feature."
                        </p>
                    </ExecutionStep>

                </div>

                {/* Footer Sezione */}
                <div className="mt-20 pt-20 border-t border-grid-line text-center space-y-12">
                    <div className="max-w-2xl mx-auto">
                        <p className="font-mono text-sm md:text-base text-white/90 leading-relaxed">
                            Questo è il processo. Non ci sono sorprese, non ci sono fasi nascoste. Tutto è tracciato, visibile, standardizzato. Come il sistema che installiamo.
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        {/* FIX: Increased visibility (text-industrial/60) and spacing (mb-4) */}
                        <p className="font-mono text-xs uppercase tracking-[0.3em] text-industrial/60 mb-4">
                            Hai ancora domande? Abbiamo raccolto le più frequenti.
                        </p>
                        <a
                            href="#faq"
                            onClick={handleScrollToFaq}
                            className="font-mono text-sm text-brand-orange uppercase tracking-widest hover:text-white transition-colors cursor-pointer"
                        >
                            Vai alle FAQ ↓
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TheExecution;
