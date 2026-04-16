tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#1B3B31', // Deep Forest/Emerald Green
                    light: '#2A5A4A',
                    dark: '#0E1F1A',
                },
                accent: {
                    DEFAULT: '#D1664C', // Terracotta / Brick
                    light: '#E07A5F',   
                    dark: '#A64831',
                },
                surface: {
                    DEFAULT: '#F4F5F4', // Institutional matte white/grey
                    white: '#FFFFFF',
                    alt: '#E7EBE8',    
                },
                earth: {
                    900: '#141414',
                    800: '#2C2E2D',
                    600: '#525755',
                    400: '#8A918F',
                }
            },
            fontFamily: {
                serif: ['Playfair Display', 'serif'],
                sans: ['Manrope', 'sans-serif'],
            },
            boxShadow: {
                'corporate': '0 10px 30px -10px rgba(27, 59, 49, 0.08)',
                'corporate-hover': '0 20px 40px -10px rgba(27, 59, 49, 0.15)',
                'minimal': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            },
            borderRadius: {
                'sm': '0.125rem',
                'md': '0.25rem',
                'lg': '0.5rem',
            }
        }
    }
}
