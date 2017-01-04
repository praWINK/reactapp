var config = {
   entry: './main.js',

   output: {
      path:'./',
      filename: 'indexed.js',
   },

   devServer: {
      inline: true,
      port: 8000
   },

   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',

            query: {
               presets: ['es2015', 'react']
            }
         },
         {

            test: /\.css$/,
            loader: 'style-loader!css-loader?modules'
         }

      ]
   }
}
module.exports = config;



