const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Endpoint to handle color data
app.post('/color', (req, res) => {
    const { color } = req.body;
    if (color) {
        console.log(`Received color: ${color}`);
        res.json({ message: `You selected ${color}` });
    } else {
        res.status(400).json({ message: 'No color received' });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
