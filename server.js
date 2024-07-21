// server.js

const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'portfolio')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'portfolio', 'index.html'));
});

app.get('/github.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'portfolio', 'github.html'));
});

app.get('/projects.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'portfolio', 'projects.html'));
});

app.get('/about.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'portfolio', 'about.html'));
});

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
