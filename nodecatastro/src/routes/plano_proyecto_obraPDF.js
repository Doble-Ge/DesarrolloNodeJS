import { Router } from 'express';


const controller = require('../controllers/plano_proyecto_obraPDF.controller');
const router = Router();
router.get('/', controller.upload);

router.post('/', controller.upload, controller.uploadFile)



module.exports = router


//router.post('/', cargarArchivo);


export default router;