const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const multer = require('multer');
const upload = multer();

app.use(upload.array()); // Lida com solicitações multipart/form-data

const bodyParser = require('body-parser');

// Use o body-parser para analisar solicitações JSON e de formulário
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// DB connection
const conn = require("./db/conn");
conn();

// routers

const routes = require('./routes/router');

app.use('/api', routes)


app.listen(3000, function(){
    console.log("servidor aberto na porta 3000!!");
});
