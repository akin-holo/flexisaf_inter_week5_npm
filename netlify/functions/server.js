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

              <style>
                body {
                 text-align: center;
                }

                code {
                background-color: black;
                }
                .green-color {
                color: green;
                }
              </style>
          </head>
          <body>
              <h1>Welcome to My Node.js Paresentation</h1>
              <p>This page is generated using node.js with the help of Netlify Function.</p>

              <hr>
              <br>
              <p><em>You are able to view this server page with this snippet of code<em></p>

              <code>
                <span class="green-color"></span>
                <span class="green-color">exports</span><span class="white-color".</span>handle = async () = > {
                  return {
                    statusCode: 200,
                    headers: { 'Content-Type': 'text/html' },
                    body: '
                      <!DOCTYPE html>
                      <html lang="en">
                      <head>
                      <meta charset="UTF-8">
                      <meta name="viewport" content="width=device-width, initial-scale=1.0">
                      <title>Node.js Presentation | By Akin Holo</title>
                      </head>
                      
                      <body>
                        <h1>Welcome to My Node.js Paresentation</h1>
                        <p>This page is generated using node.js with the help of Netlify Function.</p>
                      </body>
                    </html>
                      ',
                  };
                };
              </code>
          </body>
          </html>
      `,
  };
};
{/* <span class="blue-color"></span>
<span class="blue-color"></span> */}
