import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import {V1 as routerV1} from './Router';
import sequelize from './Database/sequelize';
import {V1 as V1Documentation} from './ApiDocumentatinon';

const swaggerUi = require('swagger-ui-express');
const swaggerOptions = {
    explorer: true
};

process.env = {
    ...process.env,
    ...dotenv.config().parsed
};

const app = express();
const PORT = process.env.PORT || 3000;

var staticOptions = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html'],
    index: false,
    // maxAge: '1d',
    redirect: false,
    setHeaders: function (res, path, stat) {
        res.set('x-timestamp', Date.now());
    }
};

app.use(express.static('public', staticOptions));

// V1 routing
app.use('/api/v1', routerV1);
routerV1.use('/docs', swaggerUi.serve);
routerV1.get('/docs', swaggerUi.setup(V1Documentation, swaggerOptions));
// Redirect to page not found
routerV1.get('*', (req, res) => {
    res.redirect('/404');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../public/index.html'));
});

// синхронизация с бд, после успшной синхронизации запускаем сервер
sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Example app listening at http://localhost:${PORT}`);
    });
}).catch(err => console.log(err));