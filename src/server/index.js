const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../../dist')));

// API route
app.post('/api', (req, res) => {
    // Mock response for API call
    const { text } = req.body;
    res.json({
        polarity: 'positive',
        subjectivity: 'subjective',
        text: text,
    });
});

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../dist/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
