import express = require('express');

const app: express.Application = express();


app.get('/', (req, res) => {
    res.send('Hejka')
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}!`);
});