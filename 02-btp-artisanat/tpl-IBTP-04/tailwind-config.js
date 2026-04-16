tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#0A0A0A', // Onyx Black / Deep Monolith
                    light: '#1F1F1F',
                    dark: '#000000',
                },
                accent: {
                    DEFAULT: '#D97706', // Architectural Amber / Rust
                    light: '#F59E0B',   
                    dark: '#B45309',
                },
                surface: {
                    DEFAULT: '#121212', // Slightly lighter black for cards
                    white: '#FFFFFF',
                    alt: '#1A1A1A',    
                },
                concrete: {
                    900: '#171717',
                    800: '#262626',
                    600: '#525252',
                    400: '#A3A3A3',
                    200: '#E5E5E5'
                }
            },
            fontFamily: {
                display: ['Oswald', 'sans-serif'], // Very structural, tall typography
                sans: ['Roboto', 'sans-serif'],    // Technical, clean body
            },
            boxShadow: {
                'solid': '8px 8px 0px 0px rgba(217, 119, 6, 1)', // Hard brutalist shadow using accent
                'glow': '0 0 40px -10px rgba(217, 119, 6, 0.3)',
            },
            borderRadius: {
                'none': '0px', // Strict geometric shapes
                'sm': '0px',
                'md': '0px',
                'lg': '0px',
            }
        }
    }
}
