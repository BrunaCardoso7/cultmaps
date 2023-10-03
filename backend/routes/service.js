const router = require('express').Router();

const serviceControllers = require('../controllers/serviceControllers');

// funções
router.route("/services").post((req, res)=>{
    console.log('Dados recebidos no controlador:', req.body)
    serviceControllers.create(req, res)
});
router.route("/services").get((req,res)=> serviceControllers.getAll(req, res));
router.route("/services/:id").get((req, res)=> serviceControllers.get(req, res));
router.route("/services/:id").delete((req, res)=> serviceControllers.delete(req, res));
router.route("/services/:id").put((req, res) => serviceControllers.update(req, res));

module.exports = router;