import { Router } from 'express';


const controller = require('../controllers/subsistenciaPDF.controller');
const router = Router();
router.get('/', controller.upload);

router.post('/', controller.upload, controller.uploadFile)



module.exports = router


//router.post('/', cargarArchivo);


export default router;