/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                'void': '#050505',       // Sfondo principale (Nero profondo)
                'industrial': '#F0F0F0', // Testo principale (Bianco sporco)
                'brand-orange': '#FF5F00', // CTA e Accenti (Arancione sicurezza)
                'grid-line': 'rgba(240, 240, 240, 0.1)', // Linee griglia
                'success': '#00ff00',    // Verde terminale
                'error': '#ff0000',      // Rosso terminale
            },
            fontFamily: {
                sans: ['"Space Grotesk"', 'sans-serif'],
                mono: ['"JetBrains Mono"', 'monospace'],
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};
