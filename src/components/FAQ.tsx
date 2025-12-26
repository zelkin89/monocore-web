import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { openModal } from '../store/modalStore';

interface FAQItemProps {
    question: string;
    answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-white/10 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex items-center justify-between text-left group cursor-pointer focus:outline-none"
            >
                <span className={`font-sans text-lg md:text-xl font-bold transition-colors ${isOpen ? 'text-brand-orange' : 'text-white group-hover:text-brand-orange'}`}>
                    {question}
                </span>
                <span className="ml-4 flex-shrink-0">
                    <div className={`w-6 h-6 flex items-center justify-center select-none transition-colors ${isOpen ? 'text-brand-orange' : 'text-brand-orange group-hover:text-white'}`}>
                        {isOpen ? (
                            // Icona MENO (-)
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                        ) : (
                            // Icona PIÙ (+)
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                        )}
                    </div>
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="overflow-hidden"
                    >
                        {/* Added padding for readability */}
                        <div className="pt-2 pb-8 font-mono text-sm md:text-base text-industrial/80 leading-relaxed max-w-2xl">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ: React.FC = () => {
    const faqData = [
        {
            question: "Non ho tempo di imparare un altro software",
            answer: "Non devi imparare un software complesso. Devi solo seguire il protocollo. I nostri video di training durano meno di 10 minuti l'uno. Se sai inviare un messaggio su WhatsApp, sai usare Monocore OS."
        },
        {
            question: "Costa troppo (€2.000)",
            answer: "Monocore non è un costo, è un investimento per l'eliminazione del caos. Recuperi l'investimento entro 6 mesi semplicemente eliminando abbonamenti a tool frammentati e riducendo le ore perse dal tuo team."
        },
        {
            question: "E se non funziona per il mio settore?",
            answer: "Se superi il protocollo di compatibilità nella Diagnostic Call, il sistema funzionerà. È un processo binario. Se non siamo sicuri di poterti dare risultati, te lo diciamo prima di farti firmare."
        },
        {
            question: "Compro Monocore o HighLevel?",
            answer: "Compri Monocore OS. HighLevel è il telaio su cui costruiamo, ma Monocore è il motore, la logica e il protocollo di installazione che rende il sistema operativo."
        },
        {
            question: "Posso personalizzare?",
            answer: "No. La struttura è fissa per garantire stabilità e scalabilità. Possiamo calibrare testi e offerte, ma l'architettura core non si tocca. Come una Tesla: la carrozzeria è tua, il motore è standard."
        },
        {
            question: "Cosa succede dopo i 14 giorni?",
            answer: "Sei totalmente autonomo. Il sistema è installato sul tuo account, ne hai le chiavi e la proprietà. Non ci sono costi nascosti o lock-in tecnologici."
        },
        {
            question: "Davvero solo 2 progetti al mese?",
            answer: "Sì. È un limite operativo reale. Ogni installazione richiede una verifica tecnica umana per garantire lo standard Monocore. Non è una strategia di marketing, è una questione di qualità."
        }
    ];

    return (
        <section id="faq" className="relative scroll-mt-24 py-24 md:py-32 bg-void border-t border-grid-line overflow-hidden">
            <div className="max-w-3xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="font-sans text-4xl md:text-6xl font-bold text-industrial uppercase tracking-tighter">
                        DOMANDE FREQUENTI
                    </h2>
                    <p className="font-mono text-xs uppercase tracking-[0.3em] text-industrial/40 bg-transparent border-none shadow-none">
                        RISPOSTE CHIARE. NESSUN LINGUAGGIO DA VENDITORE.
                    </p>
                </div>

                {/* Accordion List */}
                <div className="space-y-2 bg-[#0a0a0a] border border-white/5 p-6 md:p-10 rounded-sm">
                    {faqData.map((item, index) => (
                        <FAQItem key={index} question={item.question} answer={item.answer} />
                    ))}
                </div>

                {/* Closing CTA */}
                <div className="mt-24 p-12 bg-white/[0.02] border border-white/5 text-center space-y-8">
                    <p className="font-mono text-sm md:text-base text-industrial/70">
                        Altre domande? Compila il form. Durante la Diagnostic Call chiariamo tutto.
                    </p>
                    <button
                        onClick={() => openModal()}
                        className="px-12 py-5 bg-brand-orange text-void font-bold text-lg uppercase tracking-widest hover:shadow-[0_0_40px_rgba(255,95,0,0.5)] transition-all active:scale-95 border-none cursor-pointer"
                    >
                        COMPILA IL FORM DI APPLICAZIONE →
                    </button>
                </div>

            </div>
        </section>
    );
};

export default FAQ;
