const {Eventos: EventosModels} = require('../models/Eventos')

const serviceControllers = {
    create: async(req, res)=>{
        try{
            console.log('dados recebidos', req.body);
            const response = await EventosModels.create({
                nome: req.body.nome, 
                author: req.body.author, 
                descricao: req.body.descricao, 
                data: req.body.data, 
                hora: req.body.hora, 
                imagem: req.body.imagem
            });
            res.status(201).json({response, msg: "Serviço criado com sucesso"});
        }catch(e){
            console.log(`erroer: ${e}`)
            return res.status(500).send()
        }
    },
    getAll:async(req, res)=>{
        try{
            const services = await EventosModels.find()

            res.json(services)
        }catch(e){
            console.log(e)
        }
    },
    get: async(req, res)=>{
        try {
            const id = req.params.id;
            const service = await EventosModels.findById(id);
            if(!service){
                res.status(404).json({msg: "serviço não encontrado"})
                return;
            }
            res.json(service);

        } catch (error) {
            console.log(`Error: ${error}`)
        }

    },
    delete: async(req, res)=>{
        try {
            const id = req.params.id;
            const service = await EventosModels.findById(id);
            if(!service){
                res.status(404).json({msg: "Evento não encontrado"})
                return;
            }
            res.json(service);

            const deletedService  = await EventosModels.findByIdAndDelete(id);
            res.status(200).json({deletedService, msg: "Evento excluido com sucesso"})

        } catch (error) {
            console.log(`Error: ${error}`)
        }
    },
    update: async(req, res)=>{
        const id = req.params.id;
        const service ={
            nome: req.body.nome,
            author:  req.body.author,
            descricao:  req.body.descricao,
            data:  req.body.data,
            hora:  req.body.hora,
            imagem:  req.body.imagem
        };

        const updatedService = await EventosModels.findByIdAndUpdate(id, service);
        if(!updatedService){
            res.status(404).json({msg: "Evento não encontrado"})
            return;
        }
        res.status(200).json({service, msg: "Evento atualizado com sucesso"})
    }
}

module.exports = serviceControllers;