module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {},
	daisyui: {
		themes: [
			{
				black: {
					...require('daisyui/src/theming/themes')['black'],
					primary: '#38bdf8'
				}
			}
		]
	},
	plugins: [require('daisyui'), require('tailwind-scrollbar')({ nocompatible: true })],
	variants: {
		display: ['group-hover']
	}
}
