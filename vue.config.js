module.exports = {
    devServer: {
        port: 8080,
        host: 'localhost',
        https: false,
        open: true,
        proxy: {
            '/': {
                target: 'http://localhost:5002',
                changeOrigin: true,
                pathRewrite: {
                    '^/': ''
                }
            }
        }
    }
}