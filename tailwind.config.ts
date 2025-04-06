import { fontFamily } from 'tailwindcss/defaultTheme';
import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

const config: Config = {
	darkMode: ['class'],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	safelist: ['dark'],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border) / <alpha-value>)',
				input: 'hsl(var(--input) / <alpha-value>)',
				ring: 'hsl(var(--ring) / <alpha-value>)',
				background: 'hsl(var(--background) / <alpha-value>)',
				foreground: 'hsl(var(--foreground) / <alpha-value>)',
				primary: {
					DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
					foreground: 'hsl(var(--primary-foreground) / <alpha-value>)'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
					foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
					foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
					foreground: 'hsl(var(--muted-foreground) / <alpha-value>)'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
					foreground: 'hsl(var(--accent-foreground) / <alpha-value>)'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
					foreground: 'hsl(var(--popover-foreground) / <alpha-value>)'
				},
				card: {
					DEFAULT: 'hsl(var(--card) / <alpha-value>)',
					foreground: 'hsl(var(--card-foreground) / <alpha-value>)'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				xl: 'calc(var(--radius) + 4px)',
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				heading: 'Victor Mono',
				body: 'Victor Mono'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--bits-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--bits-accordion-content-height)' },
					to: { height: '0' }
				},
				'caret-blink': {
					'0%,70%,100%': { opacity: '1' },
					'20%,50%': { opacity: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '100%' }
				},
				'glow-in': {
					'0%': { filter: 'drop-shadow(0 0 #0000)' },
					'100%': { filter: 'drop-shadow(0 4px 3px rgba(0,255,0,0.5))' }
				},
				'glow-out': {
					'0%': { filter: 'drop-shadow(0 4px 3px rgba(0,255,0,0.5))' },
					'100%': { filter: 'drop-shadow(0 0 #0000)' }
				},
				'glow-in-lg': {
					'0%': { filter: 'drop-shadow(0 0 #0000)' },
					'100%': { filter: 'drop-shadow(0 8px 6px rgba(0,255,0,0.5))' }
				},
				'glow-out-lg': {
					'0%': { filter: 'drop-shadow(0 8px 6px rgba(0,255,0,0.5))' },
					'100%': { filter: 'drop-shadow(0 0 #0000)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'caret-blink': 'caret-blink 1.25s ease-out infinite',
				fade: 'fadeIn 1s ease-in-out',
				'fade-fast': 'fadeIn 0.5s ease-in-out',
				'glow-in': 'glowIn 0.2s ease-in-out',
				'glow-out': 'glowOut 0.2s ease-in-out',
				'glow-in-lg': 'glowInLg 0.2s ease-in-out',
				'glow-out-lg': 'glowOutLg 0.2s ease-in-out'
			},
			dropShadow: {
				'glow-sm': '0 2px 1px rgba(0,255,0,0.5)',
				glow: '0 4px 3px rgba(0,255,0,0.5)',
				'glow-lg': '0 8px 6px rgba(0,255,0,0.5)'
			}
		}
	},
	plugins: [tailwindcssAnimate]
};

export default config;
