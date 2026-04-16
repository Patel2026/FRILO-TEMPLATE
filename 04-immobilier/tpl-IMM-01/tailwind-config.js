tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#0B1E36', // Midnight Blue
                    light: '#1A365D',
                    dark: '#051120',
                },
                accent: {
                    DEFAULT: '#C9A26A', // Champagne Gold
                    light: '#DFB980',   
                    dark: '#B0884F',
                },
                surface: {
                    DEFAULT: '#F8FAFC', // Crisp light gray
                    white: '#FFFFFF',
                    alt: '#F1F5F9',    
                },
                slate: {
                    900: '#0F172A', 
                    800: '#1E293B',
                    600: '#475569',
                    400: '#94A3B8',
                }
            },
            fontFamily: {
                display: ['Montserrat', 'sans-serif'], // Replacing classic serif with sharp modern sans
                sans: ['Plus Jakarta Sans', 'sans-serif'],
            },
            boxShadow: {
                'luxury': '0 20px 40px -15px rgba(11, 30, 54, 0.1)',
                'luxury-hover': '0 30px 60px -12px rgba(11, 30, 54, 0.2)',
                'card': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
            },
            borderRadius: {
                'xl': '1rem',
                '2xl': '1.5rem',
            }
        }
    }
}
