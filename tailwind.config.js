const init = 0.5;

module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
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
                    50: '#fafafa',
                    100: '#f4f4f5',
                    200: '#e4e4e7',
                    300: '#d4d4d8',
                    400: '#a1a1aa',
                    500: '#71717a',
                    600: '#52525b',
                    700: '#3f3f46',
                    800: '#27272a',
                    900: '#18181b',
                },
            }
        }
    },
    plugins: [
        // require('@tailwindcss/forms'),
        // require('tailwind-scrollbar-hide')
    ],
}
