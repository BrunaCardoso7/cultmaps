const mongoose = require('mongoose');

async function main(){
    try{
        await mongoose.connect(
            "mongodb+srv://obitadrawing:V70HuUQVP3ls9lhW@cluster0.x1eqeqc.mongodb.net/?retryWrites=true&w=majority",
        )

        console.log("conectado ao banco")
    }catch(error){
        console.log(`error: ${error}`);
    }

}

module.exports = main;