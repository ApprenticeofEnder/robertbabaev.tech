import type { Config } from 'tailwindcss';

export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	theme: {
		extend: {
			animation: {
				fade: 'fadeIn 1s ease-in-out',
				'fade-fast': 'fadeIn 0.5s ease-in-out',
				'glow-in': 'glowIn 0.2s ease-in-out',
				'glow-out': 'glowOut 0.2s ease-in-out',
				'glow-in-lg': 'glowInLg 0.2s ease-in-out',
				'glow-out-lg': 'glowOutLg 0.2s ease-in-out'
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '100%' }
				},
				glowIn: {
					'0%': { filter: 'drop-shadow(0 0 #0000)' },
					'100%': { filter: 'drop-shadow(0 4px 3px rgba(0,255,0,0.5))' }
				},
				glowOut: {
					'0%': { filter: 'drop-shadow(0 4px 3px rgba(0,255,0,0.5))' },
					'100%': { filter: 'drop-shadow(0 0 #0000)' }
				},
				glowInLg: {
					'0%': { filter: 'drop-shadow(0 0 #0000)' },
					'100%': { filter: 'drop-shadow(0 8px 6px rgba(0,255,0,0.5))' }
				},
				glowOutLg: {
					'0%': { filter: 'drop-shadow(0 8px 6px rgba(0,255,0,0.5))' },
					'100%': { filter: 'drop-shadow(0 0 #0000)' }
				}
			},
			colors: {
				text: '#e9fbed',
				background: '#000000',
				primary: {
					50: '#e5ffeb',
					100: '#ccffd8',
					200: '#99ffb1',
					300: '#66ff8a',
					400: '#33ff63',
					500: '#00ff3c',
					600: '#00cc30',
					700: '#009924',
					800: '#006618',
					900: '#00330c',
					950: '#001a06'
				},
				secondary: {
					50: '#e9fbed',
					100: '#d4f7db',
					200: '#a8f0b8',
					300: '#7de894',
					400: '#52e071',
					500: '#26d94d',
					600: '#1fad3e',
					700: '#17822e',
					800: '#0f571f',
					900: '#082b0f',
					950: '#041608'
				},
				accent: {
					50: '#e8fced',
					100: '#d2f9db',
					200: '#a5f3b7',
					300: '#78ed93',
					400: '#4ae86f',
					500: '#1de24b',
					600: '#17b53c',
					700: '#12872d',
					800: '#0c5a1e',
					900: '#062d0f',
					950: '#031708'
				}
			},
			dropShadow: {
				glow: '0 4px 3px rgba(0,255,0,0.5)',
				'glow-lg': '0 8px 6px rgba(0,255,0,0.5)'
			},
			fontSize: {
				sm: '0.750rem',
				base: '1rem',
				xl: '1.333rem',
				'2xl': '1.777rem',
				'3xl': '2.369rem',
				'4xl': '3.158rem',
				'5xl': '4.210rem'
			},
			fontFamily: {
				heading: 'Victor Mono',
				body: 'Victor Mono'
			},
			fontWeight: {
				normal: '400',
				bold: '700'
			}
		}
	},

	plugins: [require('@tailwindcss/typography'), require('flowbite/plugin')]
} as Config;
