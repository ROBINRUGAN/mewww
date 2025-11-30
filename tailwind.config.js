/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all files that contain Nativewind classes.
    content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
    presets: [require("nativewind/preset")],
    darkMode: 'media',
    theme: {
        extend: {
            colors: {
                surface: { DEFAULT: '#F2F2F7', dark: '#05060A' },
                card: { DEFAULT: '#FFFFFF', dark: '#171821' },
                border: { DEFAULT: '#E5E5EA', dark: '#2B2C33' },
                text: {
                    primary: '#0B0B0F',
                    secondary: '#8E8E93',
                    inverted: '#FFFFFF',
                },
                accent: {
                    primary: '#007AFF',
                    success: '#34C759',
                    warning: '#FF9500',
                    danger: '#FF3B30',
                    purple: '#5856D6',
                },
            },
            borderRadius: {
                xl: 20,
            },
        },
    },
    plugins: [],
}