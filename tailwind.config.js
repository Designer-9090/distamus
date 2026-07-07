/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './ddu2026.html',
    './ddu2025.html',
    './next-chapter.html',
    './secret-vault.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: { slate: { 950: '#020617' } },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'sans-serif'],
        display: ['Poppins', 'ui-sans-serif', 'sans-serif'],
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '50%': { transform: 'translate(30px,-40px) scale(1.08)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        pulseglow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(139,92,246,0.55), 0 0 14px 2px rgba(34,211,238,0.25)' },
          '50%': { boxShadow: '0 0 0 6px rgba(139,92,246,0.08), 0 0 22px 6px rgba(34,211,238,0.4)' },
        },
      },
      animation: {
        'float-slow': 'floatSlow 18s ease-in-out infinite',
        'float-slower': 'floatSlow 26s ease-in-out infinite reverse',
        'gradient-shift': 'gradientShift 6s ease infinite',
        pulseglow: 'pulseglow 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
