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
            type: Date,
            required: true,
            set: (value)=>{
                if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value)) {
                    return new Date(value);
                }
                return value;
            }
        }, 
        localizacao:{
            type: String, 
            required: true,
        },
        hora:{
            type: String,
            required: true
        },
        imagem:{
        //    nome:{ 
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