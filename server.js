console.log('Server code running...');

const express = require('express');
const app = express();

// give from public dir
app.use(express.static('public'));

// listen on 5000 
const port = process.env.PORT || 5000;

app.listen(5000, () => {
    console.log(`Listening on ${port}`)
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})