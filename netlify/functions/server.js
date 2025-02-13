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
          </head>
          <body>
              <h1>Welcome to My Node.js Paresentation</h1>
              <p>This page is generated using node.js with the help of Netlify Function.</p>
          </body>
          </html>
      `,
  };
};

