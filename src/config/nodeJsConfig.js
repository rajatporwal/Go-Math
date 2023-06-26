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
          note: 'Express js relies heavily on middleware functions, you can easily add them by calling use()',
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
          title: "serving static and html files",
          keywords: "serving static files",
          id: "serving_static_files",
          description: ``,
          list: [
            `To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.`,
            `you can send files to users using sendFile() method`
          ],
          code:[{
            title: '',
            code: `app.use(express.static(path.join(__dirname, 'public')))`}],
          note: null,
        },
        {
          title: "Template Engines",
          keywords: "template engines pug",
          id: "template_engines",
          description: `
          A template engine enables you to use static template files in your application. At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client. This approach makes it easier to design an HTML page.`,
          list: [
            'pug',
            'handlebars',
            'ejs'
          ],
          code:[{
            title: 'set view engines',
            code: `// app.set to set the known view engines
            
app.set('view engine', 'pug');
app.set('views', 'views');

// app.engine() is used to set new template which is not built in

const expressHbs = require('express-handlebars')
app.engine('handlebars', expressHbs())`
          },{
            title: 'pug template',
            code: ` // res.render will render add-product.pug template
            
router.get('/add-product', (req, res, next) => {
  res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product' });
});

/*
  add-product.pug
  title #{pageTitle} render the values passed from res.render method
*/

<!DOCTYPE html>
html(lang="en")
    head
        meta(charset="UTF-8")
        meta(name="viewport", content="width=device-width, initial-scale=1.0")
        meta(http-equiv="X-UA-Compatible", content="ie=edge")
        title #{pageTitle}
        link(rel="stylesheet", href="/css/main.css")
        block styles
    body   
        header.main-header
            nav.main-header__nav
                ul.main-header__item-list
                    li.main-header__item
                        a(href="/", class=(path === '/' ? 'active' : '')) Shop
                    li.main-header__item
                        a(href="/admin/add-product", class=(path === '/admin/add-product' ? 'active' : '')) Add Product
        block content
`}],
          note: null,
        },
      ]}
  ];
  
  export default NODE_JS_CONFIG;
  