require('dotenv').config();
const { PORT, MONGODB_URL } = process.env;

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = PORT || 4000;

mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB is connected'))
    .catch((err) => console.log(err));

app.get('/', (req, res) => {
    res.send('TEST PAGE');
});

app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
});