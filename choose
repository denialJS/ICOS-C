<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Select and Choose</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f9;
            color: #333;
        }
        header {
            background-color: #4CAF50;
            color: white;
            padding: 1rem 0;
            text-align: center;
        }
        main {
            padding: 2rem;
            text-align: center;
        }
        select {
            padding: 10px;
            font-size: 1rem;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        button {
            padding: 10px 20px;
            font-size: 1rem;
            color: white;
            background-color: #4CAF50;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 10px;
        }
        button:hover {
            background-color: #45a049;
        }
        p {
            margin-top: 20px;
            font-size: 1.2rem;
        }
    </style>
</head>
<body>
    <header>
        <h1>Select and Choose</h1>
    </header>
    <main>
        <h2>Make Your Choice</h2>
        <select id="options">
            <option value="">-- Please select an option --</option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
        </select>
        <br>
        <button onclick="showChoice()">Submit</button>
        <p id="output">Your selection will appear here.</p>
    </main>
    <script>
        function showChoice() {
            const selectElement = document.getElementById('options');
            const outputElement = document.getElementById('output');
            const selectedValue = selectElement.value;

            if (selectedValue) {
                outputElement.textContent = `You selected: ${selectedValue}`;
            } else {
                outputElement.textContent = "Please select an option first.";
            }
        }
    </script>
</body>
</html>
