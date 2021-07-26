module.exports = {
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/',
        '/about',
        '/home',
        '/contact'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true,
    }
  }
}
