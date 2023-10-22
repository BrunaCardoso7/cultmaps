const router = require('express').Router();
const serviceControllers = require('../controllers/serviceControllers');
const multer = require('multer')
const  upload  =  require('../config/multer')

// funções

router.route("/services").post(upload.single('imagem'), async (req, res) => serviceControllers.uploadImage(req, res))
router.route("/services").post(upload.none ( ), async (req, res)=>{
    console.log('Dados recebidos no controlador:', req.body)
    return serviceControllers.create(req, res)
});
router.route("/services").get(upload . none ( ), (req,res)=> serviceControllers.getAll(req, res));
router.route("/services/:id").get(upload . none ( ), (req, res)=> serviceControllers.get(req, res));
router.route("/services/:id").delete(upload . none ( ), (req, res)=> serviceControllers.delete(req, res));
router.route("/services/:id").put(upload . none ( ), (req, res) => serviceControllers.update(req, res));

module.exports = router;