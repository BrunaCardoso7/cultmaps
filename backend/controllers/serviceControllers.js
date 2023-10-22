const {Eventos: EventosModels} = require('../models/Eventos')

const serviceControllers = {
    uploadImage: async (req, res)=>{
        try {
            if(!req.file){
                return res.status(400).json({msg: "nenhuma imagem foi inserida"})
            }
            const imagePath = req.file.path;
            
            // Crie um novo evento usando o modelo Mongoose
            const newEvent = new EventosModels({
                nome: req.body.nome,
                author: req.body.author,
                tipo: req.body.tipo,
                categoria: req.body.categoria, 
                descricao: req.body.descricao,
                data: req.body.data,
                localizacao: req.body.localizacao,
                hora: req.body.hora,
                imagem: imagePath
            });

            // Salve o evento no banco de dados
            const response = await newEvent.save();
            return res.status(200).json({msg: "imagem recebida"+response})
        } catch (error) {
            console.log(`Erro no upload de imagem: ${error}`);
            return res.status(500).send();
        }
    },
    search: async(req, res)=>{
        try {
            const termoPesquisa = req.body.pesquisa

            const resultados = await EventosModels.find({campo: {$regex: new RegExp(termoPesquisa, 'i')}});

            if (resultados.length > 0) {
                res.status(200).json(resultados);
            } else {
                res.status(404).json({ mensagem: "Nenhum resultado encontrado para o termo de pesquisa." });
            }
        } catch (error) {
            console.log("errorPesq"+error)
        }
    },
    create: async(req, res)=>{
        try{
            console.log('dados recebidos', req.body);
            const response = await EventosModels.create({
                nome: req.body.nome, 
                author: req.body.author,
                categoria: req.body.categoria, 
                tipo: req.body.tipo,
                descricao: req.body.descricao, 
                data: req.body.data, 
                localizacao: req.body.localizacao,
                hora: req.body.hora, 
                imagem: req.file.imagem
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
            categoria: req.body.categoria, 
            tipo: req.body.tipo,
            descricao:  req.body.descricao,
            data:  req.body.data,
            localizacao: req.body.localizacao,
            hora:  req.body.hora,
            imagem:  req.file.imagem
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