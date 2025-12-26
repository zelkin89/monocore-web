import React from 'react';
import { motion } from 'framer-motion';

const WhoIsItFor: React.FC = () => {
    return (
        <section id="who-is-it-for" className="relative py-24 md:py-32 bg-void border-t border-grid-line overflow-hidden">
            <div className="max-w-3xl mx-auto px-6">

                {/* Header Sezione - Technical Documentation Style */}
                <div className="text-center mb-20 space-y-6">
                    <h2 className="font-sans text-4xl md:text-6xl font-bold text-industrial uppercase tracking-tighter">
                        PER CHI È MONOCORE
                    </h2>
                    <p className="font-sans text-lg md:text-xl text-industrial/80 font-medium leading-relaxed max-w-2xl mx-auto">
                        Non per tutti. Solo per chi riconosce il problema e vuole risolverlo con disciplina, non con flessibilità.
                    </p>
                </div>

                {/* Blocchi Narrativi Impilati Verticalmente */}
                <div className="space-y-0">

                    {/* Blocco 01: PER TE (Indicatore Verde) */}
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="border-l-4 border-green-500 bg-white/[0.02] p-8 md:p-12 relative"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-green-500/10 rounded-sm">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF5F00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            </div>
                            <h3 className="font-sans text-2xl font-bold text-white uppercase tracking-tight">
                                Monocore è per te se:
                            </h3>
                        </div>

                        <div className="font-mono text-sm md:text-base leading-relaxed space-y-8">
                            <p>
                                <strong className="text-white block mb-1">Hai un'azienda di servizi tra 2 e 20 dipendenti.</strong>
                                <span className="text-industrial/80">Sei abbastanza grande da avere caos operativo, abbastanza piccolo da poter essere riallineato da un sistema unico.</span>
                            </p>
                            <p>
                                <strong className="text-white block mb-1">Il tuo processo di vendita è lineare e ripetibile.</strong>
                                <span className="text-industrial/80">Lead → Contatto → Appuntamento → Proposta → Chiusura. Non "ogni caso è diverso".</span>
                            </p>
                            <p>
                                <strong className="text-white block mb-1">Sei stanco di governare a sensazione.</strong>
                                <span className="text-industrial/80">Non sai quante lead sono entrate, quante sono state lavorate. Apri WhatsApp invece del CRM perché il CRM è vuoto o disordinato.</span>
                            </p>
                            <p>
                                <strong className="text-white block mb-1">Vuoi smettere di assemblare pezzi e vuoi installare un sistema centrale.</strong>
                                <span className="text-industrial/80">Non cerchi il tool perfetto. Cerchi l'infrastruttura che elimina la necessità di cercare tool.</span>
                            </p>
                            <p>
                                <strong className="text-white block mb-1">Sei disposto a seguire un protocollo standardizzato.</strong>
                                <span className="text-industrial/80">Capisci che le regole vincono sulle eccezioni. Non cerchi "su misura". Cerchi qualcosa che funziona, punto.</span>
                            </p>
                        </div>
                    </motion.div>

                    {/* Divisore Stile Codice / Log End */}
                    <div className="relative flex items-center py-16">
                        <div className="flex-grow border-t border-white/10"></div>
                        <div className="mx-6 font-mono text-xs text-industrial/20 tracking-[0.5em] select-none">
                            --- END_LOG_01 ---
                        </div>
                        <div className="flex-grow border-t border-white/10"></div>
                    </div>

                    {/* Blocco 02: NON PER TE (Indicatore Rosso) */}
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="border-l-4 border-red-500 bg-white/[0.01] p-8 md:p-12 relative"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-red-500/10 rounded-sm">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </div>
                            <h3 className="font-sans text-2xl font-bold text-white uppercase tracking-tight">
                                Monocore NON è per te se:
                            </h3>
                        </div>

                        <div className="font-mono text-sm md:text-base leading-relaxed space-y-8">
                            <p>
                                <strong className="text-white block mb-1">Sei una one-person company o hai più di 20 dipendenti.</strong>
                                <span className="text-industrial/80">Sotto i 2 dipendenti, un foglio Excel basta. Sopra i 20, hai bisogno di architetture enterprise.</span>
                            </p>
                            <p>
                                <strong className="text-white block mb-1">Il tuo processo di vendita è artigianale, non industrializzabile.</strong>
                                <span className="text-industrial/80">Ogni vendita è unica. Monocore non può standardizzare ciò che non è standardizzabile.</span>
                            </p>
                            <p>
                                <strong className="text-white block mb-1">Fai e-commerce puro.</strong>
                                <span className="text-industrial/80">Monocore è per vendite assistite.</span>
                            </p>
                            <p>
                                <strong className="text-white block mb-1">Vuoi "provare per un mese" prima di decidere.</strong>
                                <span className="text-industrial/80">Monocore non è un SaaS con trial. È un'installazione strutturale.</span>
                            </p>
                            <p>
                                <strong className="text-white block mb-1">Cerchi personalizzazioni e flessibilità.</strong>
                                <span className="text-industrial/80">"Voglio aggiungere stage", "Voglio modificare le automazioni". Se chiedi questo, Monocore è un limite per te.</span>
                            </p>
                            <p>
                                <strong className="text-white block mb-1">Cerchi un'agenzia che ti segue per sempre.</strong>
                                <span className="text-industrial/80">Monocore installa, forma, consegna, e ti rende autonomo. Non vendiamo consulenza mensile.</span>
                            </p>
                        </div>
                    </motion.div>

                </div>

                {/* Footer Sezione - Final Call to Action Statement */}
                <div className="mt-32 text-center space-y-12">
                    <div className="space-y-4">
                        <p className="font-mono text-sm md:text-base text-industrial font-medium">
                            Se sei nel primo gruppo, compila il form. Se sei nel secondo, risparmia tempo a entrambi.
                        </p>
                        <p className="font-mono text-xs text-industrial/60">
                            Questa è l'unica garanzia che offriamo: Trasparenza totale su chi siamo e chi non siamo.
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="pt-12 border-t border-grid-line"
                    >
                        <h4 className="font-sans text-2xl md:text-3xl font-bold text-white leading-tight max-w-2xl mx-auto">
                            Se hai letto fino a qui e ti riconosci nel primo gruppo, è il momento di verificare la compatibilità.
                        </h4>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default WhoIsItFor;
