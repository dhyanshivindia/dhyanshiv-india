/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './public/**/*.html',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          obsidian: '#0A0A0F',
          'obsidian-light': '#12121A',
          cyan: '#00FFFF',
          'cyan-glow': '#00FFFF40',
          purple: '#A855F7',
          'purple-glow': '#A855F740',
          'purple-dark': '#7C3AED',
          gray: '#1E1E2E',
          'gray-light': '#2A2A3A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'rotate-slow': 'rotate-slow 20s linear infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'rotate-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(135deg, #0A0A0F 0%, #1A0A2E 50%, #0A0A0F 100%)',
        'neon-gradient': 'linear-gradient(90deg, #00FFFF, #A855F7, #00FFFF)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
      },
      boxShadow: {
        'neon-cyan': '0 0 20px #00FFFF, 0 0 40px #00FFFF40',
        'neon-purple': '0 0 0 0 20px #A855F7, 0 0 40px #A855F740',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}