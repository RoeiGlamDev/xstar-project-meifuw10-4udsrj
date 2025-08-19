import type { Config } from 'tailwindcss'
/.*?/
 * Tailwind CSS configuration for GlamCS cosmetics brand.
 * This configuration includes a custom color palette and animations
 * to reflect the modern and luxurious style of the brand.
 */

const config: Config = {
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#FFA500', // GlamCS brand orange/
        },
        white: '#FFFFFF', // GlamCS brand white/
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in forwards',
        'fade-out': 'fadeOut 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      // Additional modern design principles can be added here/
    },
  },
  plugins: [],
}
export default config;