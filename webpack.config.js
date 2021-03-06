const path = require( "path" );
const webpackRules = require( "./webpackRules" );

const HtmlWebpackPlugin = require( "html-webpack-plugin" );
const PrettierPlugin = require("prettier-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  devtool: "source-map",
  mode: "development",
  resolve: {
    extensions: [ ".js", ".jsx", ".ts", ".tsx", ".json" ],
    alias: {
      "@": path.resolve(__dirname, 'src/'),
      "@house": path.resolve(__dirname, 'src/House'),
      "@home": path.resolve(__dirname, 'src/Home'),
    }
  },
  output: {
    path: path.join( __dirname, "/dist" ),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /.css$/i,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader",
            options: {
              modules: true,
               }
          },
      ]
      },
      ...webpackRules,
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin( {
      template: "./src/index.html",
    } ),
    new PrettierPlugin({
      printWidth: 80,
      tabWidth: 4
  })
  ],
};
