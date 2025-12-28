import React, { useEffect, useState } from 'react';
import { useStore } from '@nanostores/react';
import { isModalOpen, closeModal } from '../store/modalStore';
import { X } from 'lucide-react';

const CompatibilityModal = () => {
    const $isOpen = useStore(isModalOpen);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // State per i parametri UTM
    const [utmParams, setUtmParams] = useState({
        utm_source: '',
        utm_medium: '',
        utm_campaign: '',
        utm_content: '',
        utm_id: ''
    });

    // Cattura i parametri UTM e gestisce il lock dello scroll
    useEffect(() => {
        if ($isOpen) {
            document.body.style.overflow = 'hidden';

            // Cattura UTM dall'URL corrente
            const params = new URLSearchParams(window.location.search);
            setUtmParams({
                utm_source: params.get('utm_source') || '',
                utm_medium: params.get('utm_medium') || '',
                utm_campaign: params.get('utm_campaign') || '',
                utm_content: params.get('utm_content') || '',
                utm_id: params.get('utm_id') || ''
            });

        } else {
            document.body.style.overflow = 'unset';
            setIsSubmitting(false); // Reset state on close
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [$isOpen]);

    if (!$isOpen) return null;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        // Payload completo con Dati Form, UTM e Metadati
        const payload = {
            ...data,
            ...utmParams,
            page_url: window.location.href,
            submitted_at: new Date().toISOString()
        };

        try {
            // 1. Invio Dati al Webhook
            await fetch('https://services.leadconnectorhq.com/hooks/UmQy5oSXJS1TuHetZtH4/webhook-trigger/84f09f27-0dd8-4100-870f-f9983d54dd18', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            // 2. Redirect alla Thank You Page (sempre)
            window.location.href = '/thank-you';

        } catch (error) {
            console.error("Errore invio modulo:", error);
            // Fallback: Redirigi comunque per non bloccare l'utente
            window.location.href = '/thank-you';
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center sm:p-4">

            {/* Modal Container */}
            <div className="w-full h-[100dvh] sm:h-auto sm:max-h-[90vh] sm:max-w-xl bg-void border border-white/10 sm:rounded-sm shadow-2xl flex flex-col overflow-hidden">

                {/* STICKY HEADER (Mobile UX Fix) */}
                <div className="sticky top-0 z-50 bg-void border-b border-white/10 p-4 flex justify-between items-center shrink-0">
                    <span className="font-mono text-xs text-industrial/50 uppercase tracking-widest">
                        SYSTEM APPLICATION
                    </span>
                    <button
                        onClick={() => closeModal()}
                        className="flex items-center gap-2 font-mono text-xs text-brand-orange hover:text-white transition-colors border border-brand-orange/30 px-3 py-1 rounded-sm uppercase bg-brand-orange/10"
                    >
                        CHIUDI [X]
                    </button>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-6 sm:p-8">
                    <div className="mb-8">
                        <h2 className="font-sans text-2xl md:text-3xl font-bold text-brand-orange mb-2 uppercase">
                            COMPATIBILITY CHECK
                        </h2>
                        <p className="font-mono text-xs md:text-sm text-industrial/60">
                            ACCESSO AI FILE DI CONFIGURAZIONE AZIENDALE RICHIESTO.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6 font-mono text-sm">

                        <div className="space-y-2">
                            <label className="text-industrial/40 text-[10px] uppercase tracking-widest block">01. Nome e Cognome</label>
                            <input required name="full_name" type="text" placeholder="Inserisci il tuo nome..." className="w-full bg-transparent border-b border-white/10 py-2 text-industrial focus:border-brand-orange focus:outline-none transition-colors rounded-none placeholder:text-white/10" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-industrial/40 text-[10px] uppercase tracking-widest block">02. Email</label>
                            <input required name="email" type="email" placeholder="nome@azienda.it" className="w-full bg-transparent border-b border-white/10 py-2 text-industrial focus:border-brand-orange focus:outline-none transition-colors rounded-none placeholder:text-white/10" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-industrial/40 text-[10px] uppercase tracking-widest block">03. Telefono</label>
                            <input required name="phone" type="tel" placeholder="+39 ..." className="w-full bg-transparent border-b border-white/10 py-2 text-industrial focus:border-brand-orange focus:outline-none transition-colors rounded-none placeholder:text-white/10" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-industrial/40 text-[10px] uppercase tracking-widest block">04. Nome Azienda</label>
                            <input required name="company_name" type="text" placeholder="Azienda S.R.L." className="w-full bg-transparent border-b border-white/10 py-2 text-industrial focus:border-brand-orange focus:outline-none transition-colors rounded-none placeholder:text-white/10" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-industrial/40 text-[10px] uppercase tracking-widest block">05. Sito Web</label>
                            <input required name="website" type="text" inputMode="url" placeholder="www.azienda.it" className="w-full bg-transparent border-b border-white/10 py-2 text-industrial focus:border-brand-orange focus:outline-none transition-colors rounded-none placeholder:text-white/10" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-industrial/40 text-[10px] uppercase tracking-widest block">06. Fatturato Aziendale</label>
                            <select required name="revenue" className="w-full bg-void border-b border-white/10 py-2 text-industrial focus:border-brand-orange focus:outline-none transition-colors rounded-none appearance-none cursor-pointer">
                                <option value="" disabled selected>Seleziona range...</option>
                                <option value="<50k">&lt; 50.000 €</option>
                                <option value="50k-150k">50.000 € - 150.000 €</option>
                                <option value="150k-500k">150.000 € - 500.000 €</option>
                                <option value="500k-1M">500.000 € - 1.000.000 €</option>
                                <option value=">1M">&gt; 1.000.000 €</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-industrial/40 text-[10px] uppercase tracking-widest block">07. Settore Operativo</label>
                            <input required name="industry" type="text" placeholder="Es. Consulenza, Marketing, Logistica..." className="w-full bg-transparent border-b border-white/10 py-2 text-industrial focus:border-brand-orange focus:outline-none transition-colors rounded-none placeholder:text-white/10" />
                        </div>

                        {/* Hidden UTM Fields if needed in form, but we pass them in payload directly */}

                        <div className="flex flex-col gap-3 mt-6 mb-6">
                            {/* Privacy Consent Checkbox */}
                            <div className="flex items-start gap-3">
                                <input
                                    id="privacy-consent"
                                    name="privacy_consent"
                                    type="checkbox"
                                    required
                                    className="mt-1 w-4 h-4 bg-void border border-white/20 rounded-sm accent-brand-orange cursor-pointer shrink-0"
                                />
                                <label htmlFor="privacy-consent" className="text-[10px] text-industrial/60 font-mono leading-relaxed cursor-pointer select-none">
                                    Dichiaro di aver letto e compreso la <a href="/privacy" target="_blank" className="text-brand-orange hover:underline">Privacy Policy</a> e acconsento al trattamento dei miei dati personali, inclusi contatti commerciali, comunicazioni di marketing e attività di profilazione, secondo quanto indicato nella Privacy Policy.
                                </label>
                            </div>

                            {/* Terms Consent Checkbox */}
                            <div className="flex items-start gap-3">
                                <input
                                    id="terms-consent"
                                    name="terms_consent"
                                    type="checkbox"
                                    required
                                    className="mt-1 w-4 h-4 bg-void border border-white/20 rounded-sm accent-brand-orange cursor-pointer shrink-0"
                                />
                                <label htmlFor="terms-consent" className="text-[10px] text-industrial/60 font-mono leading-relaxed cursor-pointer select-none">
                                    Dichiaro di aver letto e accettato i <a href="/terms" target="_blank" className="text-brand-orange hover:underline">Termini e Condizioni di Servizio</a>.
                                </label>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full bg-industrial text-void font-bold font-sans uppercase py-4 hover:bg-brand-orange transition-colors rounded-sm tracking-widest text-lg ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {isSubmitting ? 'ELABORAZIONE DATI...' : 'INIZIA ANALISI'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CompatibilityModal;
