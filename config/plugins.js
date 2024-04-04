module.exports = () => ({
  "local-image-sharp": {
    config: {
      cacheDir: ".image-cache",
      maxAge: 31536000,
    },
  },
  scheduler: {
		enabled: true,
		config: {
			contentTypes: {
				'api::page.page': {}
			}
		}
	},
});
