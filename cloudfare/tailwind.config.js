/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Physio Home brand palette
        'ph-deep': '#183C35',      // Verde profundo — primary
        'ph-secondary': '#42685B', // Verde secundário
        'ph-offwhite': '#F5F3ED',  // Off-white — fundos
        'ph-beige': '#E8E3D8',     // Bege suave
        'ph-grafite': '#242825',   // Grafite — textos escuros
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'tightish': '-0.02em',
        'tighter2': '-0.03em',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        scrollDot: {
          '0%': { transform: 'translateY(0)', opacity: '0' },
          '30%': { opacity: '1' },
          '100%': { transform: 'translateY(14px)', opacity: '0' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'scroll-dot': 'scrollDot 1.8s cubic-bezier(0.22,1,0.36,1) infinite',
        'fade-in-up': 'fadeInUp 1s cubic-bezier(0.22,1,0.36,1) both',
      },
    },
  },
  plugins: [],
};
