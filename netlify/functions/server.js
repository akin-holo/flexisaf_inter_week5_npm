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

                // code {
                // background-color: black;
                // }
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
                <br>
                  return {
                  <br>
                    statusCode: 200,
                      <br>
                    headers: { 'Content-Type': 'text/html' },
                      <br>
                    body: '
                      <br>
                      <!DOCTYPE html>
                        <br>
                      <html lang="en">
                        <br>
                      <head>
                        <br>
                      <meta charset="UTF-8">
                        <br>
                      <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <br>
                      <title>Node.js Presentation | By Akin Holo</title>
                        <br>
                      </head>
                        <br>
                      <body>
                        <br>
                        <h1>Welcome to My Node.js Paresentation</h1>
                          <br>
                        <p>This page is generated using node.js with the help of Netlify Function.</p>
                          <br>
                      </body>
                        <br>
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
