var path = require('path');
var webpack = require('webpack');

module.exports = {

    entry : ["@babel/polyfill","./src/index.js"], // entry'ye array verip ilk olarak src'nin altindaki index.js'ye bak. 
                                                    // Daha sonra await yapisini kullanabilmesini icin babel'dan pollyfill'i de koyduk. 

    output : {  // olusturulacak 1 dosyanin ozelliklerini burda yaziyoruz.
        path : path.resolve(__dirname,'bundles'), // bundle seklinde bir klasor acip, bunun icine bundle.js ac.
        filename : 'bundle.js'
    },

    mode : "development", // development ortaminda oldugumuz icin modumuz development.

    module : {   // webpack ile babel arasindaki iliskiyi kurmamiz gerekiyordu ve bu yuzden babel-loader'i indirmistik.
                    // projemizde babel var ve biz webpack'e diyoruz ki sen loader olarak  "babel-loader"i kullan.
                    // bu babel-loader, webpackle babel arasinda kopru gorevi gorur.
                    // babel-cli indirmememizin sebebi de : webpack zaten babel islemini kendi icinde yapiyor. sen @babel/preset-env'e gore kodlari cevir diyoruz
        rules : [
            {
                test : /\.js$/,
                exclude : /(node_modules|)/,
                use : {
                    loader : 'babel-loader',
                    options : {
                        presets : ["@babel/preset-env"]
                    }
                }

            }
        ]

    }




}