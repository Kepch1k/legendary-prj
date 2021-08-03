import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import router from './Router/index';
import sequelize from './Database/sequelize';
const app = express();
const PORT = process.env.PORT || 3000;

process.env = {
    ...process.env,
    ...dotenv.config().parsed
};

var options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html'],
    index: false,
    // maxAge: '1d',
    redirect: false,
    setHeaders: function (res, path, stat) {
        res.set('x-timestamp', Date.now())
    }
};

app.use(express.static('public', options));

app.use('/api', router);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/../public/index.html'));
})

// синхронизация с бд, после успшной синхронизации запускаем сервер
sequelize.sync().then(()=>{
    app.listen(PORT, () => {
        console.log(`Example app listening at http://localhost:${PORT}`)
    })
}).catch(err=>console.log(err));