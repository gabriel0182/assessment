const { defineConfig } = require('cypress')

module.exports = defineConfig({
	blockHosts: ['www.google-analytics.com'],
	viewportWidth: 1480,
	viewportHeight: 980,
	screenshotOnRunFailure: true,
	video: true,
	videoCompression: 20,
	videoUploadOnPasses: false,
	defaultCommandTimeout: 50000,
	numTestsKeptInMemory: 20,
	responseTimeout: 30000,
	requestTimeout: 30000,
	taskTimeout: 20000,
	execTimeout: 200000,
	retries: {
		runMode: 1,
		openMode: 0,
	},
	scrollBehavior: 'center',
	env: {
		TAGS: 'not @ignore',
	},
	pageLoadTimeout: 80000,
	chromeWebSecurity: false,
	watchForFileChanges: false,
	reporter: 'mochawesome',
	reporterOptions: {
		reportDir: 'cypress/report/mochawesome-report',
		inline: true,
		overwrite: false,
		html: false,
		json: true,
		timestamp: 'mmddyyyy_HHMMss',
	},
	'json.schemas': [
		{
			fileMatch: ['/cypress.json'],
			url: 'https://raw.githubusercontent.com/cypress-io/cypress/develop/cli/schema/cypress.schema.json',
		},
	],
	e2e: {
		// We've imported your old cypress plugins here.
		// You may want to clean this up later by importing these.
		setupNodeEvents(on, config) {
			on('before:browser:launch', (browser, launchOptions) => {
				let args
				if (browser.name === 'chrome') {
					args.push('--lang=de')
				}
				if (browser.name === 'firefox') {
					launchOptions.args.push('--lang=de')
				}
				return launchOptions
			})
			on('before:browser:launch', (browser, launchOptions) => {
				if (browser.family === 'chromium' && browser.name !== 'electron') {
					// eslint-disable-next-line no-param-reassign
					launchOptions.preferences.default.intl = '--lang=de'
				}
				return launchOptions
			})
		},
		specPattern: '**/*.spec.js',
		experimentalSessionAndOrigin: false,
	},
})
