

const express = require('express');
const app = express();


app.get('/', (req, res) => {
    const tm = Math.floor(Date.now() / 1000);
    res.json({ tm });
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
