export default defineNuxtConfig({
	alias: {
		'@src': '/<rootdir>/src',
		'@build': '/<rootdir>/config',
	},
	dir: {
		pages: 'src/pages',
		assets: 'src/assets',
		layouts: 'src/layouts',
	},
	components: [{ path: '~/src/components', extensions: ['vue'] }],
	css: ['~/src/css/main.pcss'],
	postcss: {
		plugins: {
			'postcss-import': {},
			'tailwindcss/nesting': {},
			'tailwindcss': {
				config: './config/tailwind.config.cjs',
			},
			'autoprefixer': {},
		},
	},
})
