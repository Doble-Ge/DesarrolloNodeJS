import { Router } from 'express';
const controller = require('../controllers/acta_conformidadPDF.controller')

const router = Router()

router.get('/', controller.upload);

router.post('/', controller.upload, controller.uploadFile)



module.exports = router


export default router;