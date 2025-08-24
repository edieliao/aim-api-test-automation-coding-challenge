import "dotenv/config";

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(process.env.LOCAL_API_PORT, () => {
    console.log('Server is running on ' + process.env.API_URL);
});