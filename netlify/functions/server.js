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
