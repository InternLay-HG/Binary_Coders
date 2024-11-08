/** @type {import('tailwindcss').Config} */

const labelsClasses = ['indigo', 'gray', 'green', 'blue', 'red', 'purple']

export default {
	purge: {
		content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
		safelist: [...labelsClasses.map((lbl) => `bg-${lbl}-500`), ...labelsClasses.map((lbl) => `bg-${lbl}-200`), ...labelsClasses.map((lbl) => `text-${lbl}-400`)],
	},
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				blobBlue: '#0085FF',
				blobLightBlue: '#0EAFFF',
				blobSkyBlue: '#26C3F9',
				blobTeal: '#4EAEFF',
			},
			keyframes: {
				transform: {
					'0%, 100%': { borderRadius: '33% 67% 70% 30% / 30% 40% 70% 70%' },
					'20%': { borderRadius: '37% 63% 51% 49% / 37% 35% 35% 63%' },
					'40%': { borderRadius: '36% 64% 64% 36% / 64% 48% 52% 26%' },
					'60%': { borderRadius: '37% 63% 51% 49% / 30% 30% 70% 73%' },
					'80%': { borderRadius: '40% 60% 42% 58% / 51% 51% 49% 59%' },
				},
				movement_one: {
					'0%, 100%': { transform: 'translateY(0) translateX(0) rotate(0deg)' },
					'50%': { transform: 'translateY(20px) translateX(10px) rotate(10deg)' },
				},
				movement_two: {
					'0%, 100%': { transform: 'translateY(0) translateX(0) rotate(0deg)' },
					'50%': { transform: 'translateY(-15px) translateX(-15px) rotate(-15deg)' },
				},
			},
			animation: {
				movement_one: 'movement_one 4s ease-in-out infinite',
				movement_two: 'movement_two 6s ease-in-out infinite',
			},
		},
		plugins: [],
	},
	// 	plugins: [],
	// 	// corePlugins: {
	// 	// 	preflight: false,
	// 	// },
}
