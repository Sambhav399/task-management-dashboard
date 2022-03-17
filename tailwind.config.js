const init = 0.5;

module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    safelist: [
        {
            pattern: /bg-/
        },
        {
            pattern: /text-/
        }
    ],
    theme: {
        fontFamily: {
            sans : ['Poppins', 'sans-serif'], //400, 500, 600
        },
        fontWeight: {
            '400': 400,
            '500': 500,
            '600': 600
        },
        container: {
            center: true,
        },
        extend: {
            borderRadius: {
                'none': '0',
                'sm': `${init / 4}rem`,
                DEFAULT: `${init / 2}rem`,
                'lg': `${init}rem`,
                'full': '99999px',
            },
            fontSize: {
                'h1': `${init * 3.75}rem`,
                'h2': `${init * 3.45}rem`,
                'h3': `${init * 3.05}rem`,
                'h4': `${init * 2.7}rem`,
                'h5': `${init * 2.35}rem`,
                'h6': `${init * 2}rem`,
                'sm': `${init * 1.75}rem`,
                'xs': `${init * 1.5}rem`,
            },
            colors: {
                theme: {
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    200: '#e2e8f0',
                    300: '#cbd5e1',
                    400: '#94a3b8',
                    500: '#64748b',
                    600: '#475569',
                    700: '#334155',
                    800: '#1e293b',
                    900: '#0f172a',
                }
            },
            boxShadow: {
                card: `0 0 ${init * 3}rem rgba(226, 232, 240, 1)`,
            }
        }
    },
    plugins: [
        // require('@tailwindcss/forms'),
        // require('tailwind-scrollbar-hide'),
        // require('@tailwindcss/line-clamp')
    ],
}
