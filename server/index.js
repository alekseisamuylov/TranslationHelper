import express from 'express';
import bodyParser from 'body-parser';

import { loadFile, saveFile } from './util/file.js';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', 'Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');

    next();
});

app.get('/', async (req, res) => {
    const en = await loadFile('../data/en.json');
    const ru = await loadFile('../data/ru.json');

    res.send({ ru, en });
    // res.send({ message: 'Hello World!'});
});

app.post('/', (req, res) => {
    saveFile('ru.json', req.body);
    res.send();
});



app.listen(3333, () => {
    console.log('Started: localhost:3333');
});