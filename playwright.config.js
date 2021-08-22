const config  = {
	use: {
		headless: true,
		screenshot: 'only-on-failure',
		video: 'retry-with-video'
	},
	timeout: 5000,
	retries: 1,
	reporter: 'line',
	outputDir: './screenshots'
}
module.exports = config;