import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import legacy from '@vitejs/plugin-legacy';

// const persistentCachePlugin = () => {
//   let _server: any;
//   let cache: any = {};
//   const cachePath = path.resolve('./', 'node_modules/.vite/cache/');
//   return {
//       name: 'persistent-cache-plugin',
//       configureServer: async (server: any) => {
//           _server = server;
//           server.middlewares.use((req: any, res: any, next: any) => {
//               if (cache[req.url]) {
//                   const ifNoneMatch = req.headers['if-none-match'];
//                   if (ifNoneMatch && cache[req.url] === ifNoneMatch) {
//                      const { moduleGraph, transformRequest } = server;
//                      if (moduleGraph.urlToModuleMap.size && moduleGraph.urlToModuleMap.get(req.url) && moduleGraph.urlToModuleMap.get(req.url).transformResult) {
//                         next();
//                         return;
//                       } else {
//                         res.statusCode = 304;
//                         setTimeout(() => {
//                           transformRequest(req.url, server, {
//                             html: req.headers.accept?.includes('text/html')
//                           });
//                         }, 3000);
//                         return res.end();
//                       }
//                   }
//              }
//              next();
//          })
//       },
//       buildStart: async () => {
//           if (fs.existsSync(cachePath + '/cache.json')) {
//               cache = require(cachePath + '/cache.json');
//           }
//           process.once('SIGINT', async () => {
//               try {
//                   await server.close();
//               } finally {
//                   process.exit();
//               }
//           });
//       },
//       buildEnd: async () => {
//         console.log('--52 buildEnd');
//         if (!fs.existsSync(cachePath)) {
//           fs.mkdirSync(cachePath);
//         }
//         for(const [key, value] of _server.moduleGraph.urlToModuleMap) {
//           if (value.transformResult && value.transformResult.etag) {
//             cache[key] = value.transformResult.etag
//           }
//         }
//         fs.writeFileSync(cachePath + '/cache.json', JSON.stringify(cache) , err => {
//           console.log(err);
//         });
//       }
//   }
// }

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // persistentCachePlugin(),
    react(),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ],
})
