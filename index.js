const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Endpoint to receive data
app.post('/submit', (req, res) => {
    const { choice } = req.body;

    if (choice) {
        console.log(`Received choice: ${choice}`);
        // Save the data to a database or process it as needed
        res.status(200).send('Choice received successfully.');
    } else {
        res.status(400).send('No choice provided.');
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
