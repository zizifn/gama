// src/index.js
const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from the server!' });
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});