# FlexiSAF Intermediate - NODE.js Presentation
_Learning outcome for Understanding the Basic of Nodejs and npm or yarn - week 5_


## Table of contents

- [Overview](#overview)
  - [Basic of NODEjs](#basic-of-nodejs)
  - [Core Modules in NODEjs](#core-modules-in-nodejs)
  - [Screenshot](#screenshot)
  - [Presentation](#presentation)
  - [Links](#links)

  

## Overview


### Basic of NODEjs

Node.js is a powerful runtime environment that allows JavaScript to run outside the browser. Its allow us to:
- _Generate dynamic page content in web applications._ 

- _Handle file operations such as creating, opening, reading, writing, deleting, and closing files on the server._  

- _Collect and process form data from users._ 

- _Interact with databases by adding, deleting, and modifying data efficiently._



### Core Modules in NODEjs
 - ***File System (fs)*** allows reading and writing files on our computer. The module is apply through the `var fs = require('fs');`
 - ***HTTP Module (http)*** enables us to transfer data over the Hyper Text Transfer Protocol (HTTP). We do this with `var http = require('http');` 
 - ***Path Module (path)***


### Screenshot

![](/preview.jpg)



## Presentation

  Example
```js
const http = require('http');
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');


const server = http.createServer((req, res) => {
    
    fs.readFile(filePath, (err, data) => {
        if (err) {
            
            const defaultContent = "<h1>Welcome to My Node.js Server</h1>";
            fs.writeFile(filePath, defaultContent, (writeErr) => {
                if (writeErr) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    return res.end('Server Error: Unable to create file');
                }
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(defaultContent);
            });
        } else {
            
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
});


server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});


```


### Links

- Solution URL: [Live host](https://fip-intermediate-week5-npm.netlify.app/.netlify/functions/server)






