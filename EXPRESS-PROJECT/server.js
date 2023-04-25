const express = require('express');

const app = express();

const PORT = 3000;

//Express is really good at routing.

app.get('/', (req, res) => {
    res.send({
        id:1,
        name:"Issac Newton"
    });
});
app.get('/messages', (req, res) => {
    res.send('<ul><li>Hello Albert!</li></ul>');
});

app.post('/messages', (req, res) => {
    console.log('Updating messages...');
});
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`)
})
