tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#0A192F', // Deep Navy
                    light: '#112240',
                    dark: '#06101c',
                },
                accent: {
                    DEFAULT: '#FF6B35', // Vibrant Orange
                    light: '#ff8a5d',
                    dark: '#e55a29',
                },
                surface: {
                    DEFAULT: '#F8F9FA', // Off-white / light pearl
                    white: '#FFFFFF',
                    alt: '#EBF1F5',    // Light grayish-blue for sections
                },
                slate: {
                    800: '#1e293b',
                    700: '#334155',
                    600: '#475569',
                    400: '#94a3b8',
                }
            },
            fontFamily: {
                heading: ['Syne', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
            },
            boxShadow: {
                'corporate': '0 20px 40px -15px rgba(10, 25, 47, 0.08)',
                'corporate-hover': '0 25px 50px -12px rgba(10, 25, 47, 0.15)',
            }
        }
    }
}
