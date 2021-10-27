import { Router } from 'express';


const controller = require('../controllers/plano_digitalPDF.controller');
const router = Router();
router.get('/', controller.upload);

router.post('/', controller.upload, controller.uploadFile)



module.exports = router


//router.post('/', cargarArchivo);


export default router;