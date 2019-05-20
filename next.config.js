// var path = require('path');

// module.exports = {
//   distDir: 'build',
//   // webpack: (config, { buildId, dev }) => {
//   //   config.resolve.symlinks = false
//   //   return config
//   // },
  
//   webpack: (config, { dev }) => {
//       console.log(config.resolve);
//     // This is to transpile raw files outside Nextjs project simply imported ex: "../../component.js"
//       //config.resolve.symlinks = false;
//       config.externals = ['node_modules'+/^\@tcp\/.*/];
//       // This is to transpile raw files outside Nextjs project simply imported ex: "../../component.js"
//       config.module.rules.map(function(conf) {
//         if (
//           conf.include &&
//           conf.use.loader === 'next-babel-loader'
//         ) {
//           conf.include = [
//             ...conf.include,
//             path.resolve(__dirname, '/node_modules/@tcp/'),
//           ];
//         }
//         console.log("conf----------------------------------------")
//         console.log(conf)

//         return conf;
//       });
//     return config 
//   },

//   webpackDevMiddleware: (config) => {
//     // remove this
//     return config;
//   },
//   // transpileModules: [
//   //   (()=>{
//   //     //This is to transpile files of a module inside node_modules of Nextjs project
//   //     return /^\@tcp\/.*/;
//   //   })()
//   // ]
// }

const withTM = require('next-transpile-modules');
 
module.exports = withTM({
  transpileModules: ['@tcp']
});