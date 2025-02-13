# FlexiSAF Intermediate - NODE.js Presentation
_Learning outcome for Understanding the Basic of Nodejs and npm or yarn - week 5_


## Table of contents

- [Overview](#overview)
  - [Basic of NODEjs](#basic-of-nodejs)
  - [Core Modules in NODEjs](#core-modules-in-nodejs)
  - [Presentation](#presentation)
  - [Screenshot](#screenshot)
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



## Presentation

  Example
```js
const fs = require('fs');
const path = require('path');

exports.handler = async () => {
    const filePath = path.join(__dirname, 'index.html');


    if (!fs.existsSync(filePath)) {

        fs.writeFileSync(filePath, '<h1>Welcome to My Netlify Page</h1>');
    }

    const content = fs.readFileSync(filePath, 'utf-8');

    return {
        statusCode: 200,
        headers: { 'Content-Type': 'text/html' },
        body: content,
    };
};

```

### Screenshot

![](/image.jpg)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)






