const mongoose = require('mongoose');

const { Schema } = mongoose;

const eventosSchema = new Schema({
        nome: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        descricao:{
            type: String,
            required: true
        },
        data:{
            type: String,
            required: true
        },
        hora:{
            type: String,
            required: true
        },
        imagem:{
            type: String,
            required: true
        },
    },   
    { timestamps:true } 
);

const Eventos = mongoose.model("Eventos ", eventosSchema);
module.exports = {
    Eventos,
    eventosSchema,
}