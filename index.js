const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('<h1>Hello from Phillip and Friends</h1>');
});

app.listen(80, () => {
	console.log('App started');
});
