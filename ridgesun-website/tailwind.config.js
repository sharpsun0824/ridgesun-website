/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        'industrial': {
          'primary': '#0f172a',
          'secondary': '#1e293b',
          'accent': '#2563eb',
          'danger': '#dc2626',
        },
        'success': {
          'green': '#059669',
        },
        'warning': {
          'amber': '#f59e0b',
        },
        'neutral': {
          'background': '#f8fafc',
          'surface': '#f1f5f9',
          'border': '#e2e8f0',
          'text': {
            'primary': '#0f172a',
            'secondary': '#64748b',
          }
        }
      },
      fontFamily: {
        'display': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'body': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'mono': ['Roboto Mono', 'monospace'],
      },
      fontSize: {
        'industrial-lg': '1.125rem',
        'industrial-xl': '1.25rem',
        'industrial-2xl': '1.5rem',
        'industrial-3xl': '1.875rem',
        'industrial-4xl': '2.25rem',
        'industrial-5xl': '3rem',
      },
      spacing: {
        'industrial-1': '0.25rem',
        'industrial-2': '0.5rem',
        'industrial-3': '0.75rem',
        'industrial-4': '1rem',
        'industrial-6': '1.5rem',
        'industrial-8': '2rem',
        'industrial-12': '3rem',
        'industrial-16': '4rem',
      },
      borderRadius: {
        'industrial-sm': '0.25rem',
        'industrial-md': '0.5rem',
        'industrial-lg': '0.75rem',
        'industrial-xl': '1rem',
      },
      boxShadow: {
        'industrial-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'industrial-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'industrial-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'industrial-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        'industrial-tech': '0 10px 15px -3px rgba(37, 99, 235, 0.1)',
      },
      animation: {
        'scan': 'scan 2s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 15s ease infinite',
      },
      keyframes: {
        'scan': {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        }
      }
    }
  },
  plugins: [],
}