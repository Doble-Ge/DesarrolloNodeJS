import { Router } from 'express';
const controller = require('../controllers/aprobacion_agrimensuraPDF.controller')

const router = Router()

router.get('/', controller.upload);

router.post('/', controller.upload, controller.uploadFile)



module.exports = router


export default router;