const path = require('path');  
 module.exports = {  
    configureWebpack: {  
        resolve: {  
            alias: {  
                "@layouts": path.resolve(__dirname, 'src/components/layouts'),
                '@common': path.resolve(__dirname, 'src/components/common'),
                '@components': path.resolve(__dirname, 'src/components'),
                '@assets': path.resolve(__dirname, 'src/assets'),
                '@pages': path.resolve(__dirname, 'src/pages'),
                "@data": path.resolve(__dirname, 'src/data')
            } 
        }
    }
}