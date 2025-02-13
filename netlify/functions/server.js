exports.handler = async () => {
  return {
      statusCode: 200,
      headers: { 'Content-Type': 'text/html' },
      body: `
          <!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Node.js Presentation | By Akin Holo</title>
              <link rel="icon" type="image/x-icon" href="https://github.com/akin-holo/image-preview/blob/main/logo.png?raw=true">

              <style>
              body {
                text-align: center;
                font-size: 1.3rem;
              }
               span {
                font-weight: bolder;
                font-size: 30px;
               }
                .blue-color {
                color: blue
                }
                .red-color {
                color: red;
                }
                .purple-color {
                color: purple}
              </style>
          </head>
          <body>
              <h1>Welcome to My Node.js Paresentation</h1>
              <p>This page is generated using node.js with the help of Netlify Function.</p>

              <hr>
              
              <br>
              <span class="blue-color">I </span> <span class="red-color">hope</span> it is <span class="purple-color">commendable</span> </span>
              
              <p>See you in week 6</P>
          </body>
          </html>
      `,
  };
};

