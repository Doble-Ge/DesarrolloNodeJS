import { Router } from 'express';
import { cargarArchivo } from '../controllers/subsistencia.controller';
const router = Router();
const controller = require('../controllers/subsistencia.controller');

router.get('/', controller.upload);
router.post('/', controller.upload, controller.uploadFile)



module.exports = router


//router.post('/', cargarArchivo);


export default router;