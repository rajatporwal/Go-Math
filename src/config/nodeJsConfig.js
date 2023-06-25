const NODE_JS_CONFIG = [
    {
      heading: "Node Foundation",
      pathname: "/node",
      children: [
        {
          title: "Creating a Node Server",
          keywords: "Creating Node Server",
          id: "creating_node_server",
          description: null,
          list: [],
          code: [
            {
              title: '',
              code: `const http = require('http')

const server = http.createServer((rs, res) => {
  // console.log(res);
  // process.exit();
  
  res.setHeader('Context-type', 'text/html')
  res.write('<html>')
  res.write('<h1>Hello from Node Js Server</h1>')
  res.write('</html>')
  res.end();
})
              
server.listen(3000)`,
            }],
          note: 'On both requests and responses, Http headers are added to transport metadata from A to B.',
        },
        {
          title: "Life cycle",
          keywords: "node life cycle",
          id: "node_life_cycle",
          description: null,
          img: "/images/node_js_life_cycle.png",
          list: [],
          code:null,
          note: null,
        },
        {
          title: "Streams and Buffer",
          keywords: "streams and buffer",
          id: "streams_and_buffer",
          description: null,
          img: "/images/streams_and_buffer.png",
          list: [
            `req.on('data') is an event listner which loads data in chunk (behaves as a promise)`,
            `req.on('end') is an event which runs after all the chunks are loaded (same as .then)`,
            `  const parsedBody = Buffer.concat(body).toString(); used to paerse chunk data`
          ],
          code:[{
            title: '',
            code: `const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title><head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/message' && method === 'POST') {
    const body = [];

    // req.on('data') is an event listner which loads data o chunk (behaves as a promise)
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    // req.on('end') is an event which runs after all the chunks are loaded (same as .then)
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFile('message.txt', message, (err) => {
      res.statusCode = 302;
      res.setHeader('Location', '/');
      return res.end();
      });
    });
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title><head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(3000);`
          }],
          note: null,
        },
        {
          title: "Express JS",
          keywords: "express js",
          id: "express_js",
          description: 'A middleware means , an incoming request is automatically funneled to bunch of functions by express js',
          list: [
            `A package that adds bunch of utility functions and tools and add a clear set of rules on how the app should be built`,
            `it's higlt extensible and other packages can be plugged into it (ex. path, body-parser)`,
            `app.use is a middleware function, which allows us to multiple function to parse a request`
          ],
          code:[{
            title: '',
            code: `const express = require('express')
const app = express()

app.use((req, res, next) => {
    console.log('in fist middleware')
    next() // allows the req to contibue to the next middleware 
    
    // if we do not call next(), program will not move to next middlewares
})

app.use((req, res, next) => {
    console.log('in second middleware')
    res.send('<h1>Hello from middleware</h1>')
})`
          }],
          note: null,
        },
        {
          title: "path npm package",
          keywords: "path npm package",
          id: "path_npm_package",
          description: `The path module in node js is used for managing and altering file paths. It's a part of the core modules with methods that help you deal with directory and file path names on the local machine's file system. Every system has a different environment and a specific operating system to manage it.`,
          code:[{
            title: '',
            code: `/* path.join creates oath as per your local sysytem
  in windows: \\views\\shop.html
  in linux: /views/shop.html
*/

router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'views', 'shop.html'))
})`
          }],
          note: null,
        },
        {
          title: "serving static files",
          keywords: "serving static files",
          id: "serving_static_files",
          description: `To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.`,
          code:[{
            title: '',
            code: `app.use(express.static(path.join(__dirname, 'public')))`}],
          note: null,
        },
      ]}
  ];
  
  export default NODE_JS_CONFIG;
  