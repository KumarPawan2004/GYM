/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '380px',
      },
      colors: {
        aura: {
          bg: '#070709',
          card: '#0f0f14',
          cardHover: '#16161f',
          surface: '#121218',
          border: 'rgba(212, 175, 55, 0.15)',
          borderHover: 'rgba(212, 175, 55, 0.35)',
          gold: '#D4AF37',
          goldLight: '#F3E5AB',
          goldDark: '#997A15',
          bronze: '#A37A4C',
          muted: '#8E8E9F',
          subtle: '#2A2A38',
          emerald: '#10B981',
        },
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F3E5AB 0%, #D4AF37 50%, #997A15 100%)',
        'gold-subtle': 'linear-gradient(135deg, rgba(243, 229, 171, 0.1) 0%, rgba(212, 175, 55, 0.05) 100%)',
        'dark-radial': 'radial-gradient(circle at 50% 0%, rgba(212, 175, 55, 0.08) 0%, rgba(7, 7, 9, 0) 70%)',
      },
      boxShadow: {
        'gold-glow': '0 0 35px -5px rgba(212, 175, 55, 0.25)',
        'gold-soft': '0 10px 30px -10px rgba(212, 175, 55, 0.15)',
        'inner-glow': 'inset 0 1px 1px 0 rgba(243, 229, 171, 0.15)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
