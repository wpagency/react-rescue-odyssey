import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
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
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				/* === RESCUE MISSION COLORS === */
				rocket: {
					DEFAULT: 'hsl(var(--rocket-orange))',
					foreground: 'hsl(var(--foreground))'
				},
				safety: {
					DEFAULT: 'hsl(var(--safety-green))',
					foreground: 'hsl(var(--background))'
				},
				alert: {
					DEFAULT: 'hsl(var(--alert-red))',
					foreground: 'hsl(var(--foreground))'
				}
			},
			backgroundImage: {
				'gradient-nebula': 'var(--gradient-nebula)',
				'gradient-cosmic': 'var(--gradient-cosmic)',
				'gradient-rescue': 'var(--gradient-rescue)',
				'gradient-space': 'var(--gradient-space)'
			},
			boxShadow: {
				'glow': 'var(--shadow-glow)',
				'rescue': 'var(--shadow-rescue)',
				'danger': 'var(--shadow-danger)'
			},
			fontFamily: {
				'space': ['Orbitron', 'monospace'],
				'cosmic': ['Space Grotesk', 'sans-serif'],
				'mono': ['Space Mono', 'monospace']
			},
			animation: {
				'float': 'float 6s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'drift': 'drift 20s linear infinite',
				'rescue-beam': 'rescue-beam 3s ease-in-out infinite'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'pulse-glow': {
					'0%, 100%': { opacity: '1', boxShadow: 'var(--shadow-glow)' },
					'50%': { opacity: '0.8', boxShadow: 'var(--shadow-rescue)' }
				},
				'drift': {
					'0%': { transform: 'translateX(-100vw) rotate(0deg)' },
					'100%': { transform: 'translateX(100vw) rotate(360deg)' }
				},
				'rescue-beam': {
					'0%': { opacity: '0.3', transform: 'scale(1)' },
					'50%': { opacity: '1', transform: 'scale(1.1)' },
					'100%': { opacity: '0.3', transform: 'scale(1)' }
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
