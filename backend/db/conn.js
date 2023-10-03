const mongoose = require('mongoose');

async function main(){
    try{
        await mongoose.connect(
            "mongodb+srv://cultmapsEnterprise:Odpgs9nkesFF3WkE@cultmap.qfxaslp.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp",
        )

        console.log("conectado ao banco")
    }catch(error){
        console.log(`error: ${error}`);
    }

}

module.exports = main;