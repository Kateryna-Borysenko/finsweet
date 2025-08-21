import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@styles': path.resolve(__dirname, './src/styles'),
			'@scripts': path.resolve(__dirname, './src/scripts'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@images': path.resolve(__dirname, './src/assets/images'),
			'@sprites': path.resolve(__dirname, './src/assets/sprites'),
		},
	},
})
