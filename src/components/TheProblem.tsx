import React from 'react';
import { motion } from 'framer-motion';

const TheProblem: React.FC = () => {
    return (
        <section id="the-problem" className="relative scroll-mt-24 border-t border-grid-line bg-void py-24 md:py-32 overflow-visible">
            <div className="max-w-7xl mx-auto px-6">
                {/* items-start è cruciale per permettere alla colonna destra di avere altezza propria e scorrere */}
                <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-start">

                    {/* Colonna Sinistra (60%) - Narrazione */}
                    <div className="md:w-[60%] space-y-12">

                        {/* Header Sezione */}
                        <div className="space-y-4">
                            <span className="font-sans text-brand-orange uppercase tracking-[0.3em] text-xs font-bold">
                                IL VERO PROBLEMA
                            </span>
                            <h2 className="font-sans text-4xl md:text-6xl font-bold text-industrial uppercase leading-tight tracking-tighter">
                                LA TASSA SULLA <br /> COMPLESSITÀ
                            </h2>
                        </div>

                        {/* Narrativa 1 */}
                        <div className="font-mono text-base text-industrial/80 leading-relaxed space-y-8 max-w-[65ch]">
                            <p>Lunedì mattina, ore 8:30.</p>

                            <ul className="list-none p-0 space-y-4">
                                <li className="flex items-start">
                                    <span className="text-brand-orange mr-3 font-bold">{">"}</span>
                                    <span>3 messaggi WhatsApp non letti da potenziali clienti.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-brand-orange mr-3 font-bold">{">"}</span>
                                    <span>2 email finite in spam che non hai visto.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-brand-orange mr-3 font-bold">{">"}</span>
                                    <span>1 chiamata persa senza messaggio in segreteria.</span>
                                </li>
                            </ul>

                            <p>
                                Apri Excel per controllare chi hai richiamato venerdì. Il file è sul computer dell'ufficio. Sei in cantiere.
                            </p>
                        </div>

                        {/* FIX UI: Blocco Citazioni (Dialoghi come log di sistema) */}
                        <div className="border-l-4 border-brand-orange bg-white/5 p-8 my-8 space-y-6">
                            <p className="font-mono text-base text-gray-300 leading-relaxed">
                                <span className="text-brand-orange/50 mr-2">[CALL_LOG_01]:</span>
                                "Chiami Marco: 'A che punto sei con il cliente del tetto?' <br />
                                Risposta: 'Sto seguendo, dovrei risentirlo questa settimana.'"
                            </p>
                            <p className="font-mono text-base text-gray-300 leading-relaxed">
                                <span className="text-brand-orange/50 mr-2">[CALL_LOG_02]:</span>
                                "Chiami Luca: 'Hai mandato il preventivo serramenti alla signora Rossi?' <br />
                                Risposta: 'Sì... credo giovedì. O era venerdì? Controllo.'"
                            </p>
                        </div>

                        {/* Narrativa 2 */}
                        <div className="font-mono text-base text-industrial/80 leading-relaxed space-y-8 max-w-[65ch]">
                            <p className="text-industrial font-bold border-b border-grid-line pb-2 w-fit">
                                Ore 10:00. Hai già perso 90 minuti a inseguire informazioni che dovrebbero essere a portata di click.
                            </p>

                            <div className="space-y-4">
                                <p>Non sai:</p>
                                <ul className="list-none p-0 space-y-3 pl-4">
                                    <li className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 bg-brand-orange"></div>
                                        <span>Quante lead sono entrate nel weekend</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 bg-brand-orange"></div>
                                        <span>Quante sono state ricontattate</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 bg-brand-orange"></div>
                                        <span>Quante stanno aspettando un preventivo</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 bg-brand-orange"></div>
                                        <span>Quante hanno detto sì ma non hanno ancora pagato</span>
                                    </li>
                                </ul>
                            </div>

                            <p>
                                Governi l'azienda a sensazione, non su dati certi. Questo è il costo nascosto del caos operativo. Non si vede nel conto economico, ma ti sta costando opportunità, tempo e controllo ogni singolo giorno.
                            </p>

                            <p>
                                Il tuo attuale stack tecnologico — un gestionale + una piattaforma di email marketing + un software di automazione + Excel + WhatsApp + memoria — è un assemblaggio instabile che si rompe sotto il peso della crescita.
                            </p>

                            <p>
                                Ogni nuovo tool aggiunge complessità, non ordine. Ogni integrazione è un punto di rottura. Ogni commerciale gestisce le lead a modo suo.
                            </p>

                            <div className="bg-brand-orange/5 border border-brand-orange/20 p-8 space-y-4">
                                <p className="text-brand-orange font-bold uppercase tracking-widest text-sm">Risultato:</p>
                                <p className="text-industrial text-lg">
                                    Paghi la Tassa sulla Complessità. In ore perse, opportunità dimenticate, decisioni prese al buio.
                                </p>
                            </div>

                            {/* FIX VISUAL: Gerarchia Finale centrata ed evidente */}
                            <div className="mt-24 text-center border-t border-grid-line pt-16">
                                <p className="font-sans text-2xl md:text-3xl font-bold leading-tight">
                                    <span className="text-white">E il problema non sono i tool.</span><br />
                                    <span className="text-brand-orange">Sono le architetture sbagliate che ti hanno venduto.</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* FIX FUNZIONALE: Sticky Column (40%) */}
                    <div className="md:w-[40%] md:sticky md:top-32 self-start pt-8 md:pt-0 z-30">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            {/* Box Glow */}
                            <div className="absolute -inset-1 bg-brand-orange/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Editor Shell */}
                            <div className="relative bg-[#0a0a0a] border border-brand-orange/30 shadow-2xl overflow-hidden rounded-sm">
                                {/* Editor Header */}
                                <div className="flex items-center justify-between px-4 py-3 border-b border-grid-line bg-void/50">
                                    <div className="flex gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-industrial/10"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-industrial/10"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-industrial/10"></div>
                                    </div>
                                    <span className="font-mono text-[10px] uppercase text-industrial/30 tracking-widest">
                                        reality_check.js
                                    </span>
                                </div>

                                {/* Editor Content */}
                                <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
                                    <div className="flex gap-4">
                                        <div className="text-industrial/20 select-none text-right">
                                            1<br />2<br />3<br />4<br />5<br />6<br />7<br />8
                                        </div>
                                        <div>
                                            <div>
                                                <span className="text-[#C678DD]">const</span>{" "}
                                                <span className="text-[#D19A66]">complexityTax</span>{" "}
                                                <span className="text-[#56B6C2]">=</span>{" "}
                                                <span className="text-[#D19A66]">false</span>;
                                            </div>
                                            <div>
                                                <span className="text-[#C678DD]">const</span>{" "}
                                                <span className="text-[#D19A66]">deploymentTime</span>{" "}
                                                <span className="text-[#56B6C2]">=</span>{" "}
                                                <span className="text-[#98C379]">"7 days"</span>;
                                            </div>
                                            <div className="h-4"></div>
                                            <div>
                                                <span className="text-[#C678DD]">if</span> (
                                                <span className="text-[#E06C75]">business</span>.
                                                <span className="text-[#56B6C2]">type</span>{" "}
                                                <span className="text-[#56B6C2]">===</span>{" "}
                                                <span className="text-[#98C379]">"SERVICE"</span>{" "}
                                                <span className="text-[#56B6C2]">&&</span>
                                            </div>
                                            <div className="pl-4">
                                                <span className="text-[#E06C75]">business</span>.
                                                <span className="text-[#56B6C2]">size</span>{" "}
                                                <span className="text-[#56B6C2]">{"<="}</span>{" "}
                                                <span className="text-[#D19A66]">20</span>) {"{"}
                                            </div>
                                            <div className="pl-4">
                                                <span className="text-[#61AFEF]">Monocore</span>.
                                                <span className="text-[#61AFEF]">install</span>();
                                            </div>
                                            <div>{"}"}</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Status Bar */}
                                <div className="px-4 py-2 border-t border-grid-line bg-void/30 flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                        <span className="font-mono text-[9px] text-industrial/40 uppercase">System: Diagnostic Mode</span>
                                    </div>
                                    <span className="font-mono text-[9px] text-brand-orange/60">UTF-8</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TheProblem;
