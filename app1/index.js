'use strict';

const express = require('express');
const app = express();

app.route('/ping')
    .get((req, res, next) => {
        return res.send('pong');
    });

app.listen(80, () => {
    console.log('App is listening on port 80.');
});
