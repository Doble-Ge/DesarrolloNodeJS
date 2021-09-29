import { Router } from 'express';
const controller = require('../controllers/upload')

const router = Router()


router.post(
    '/',
    controller.upload,
    controller.uploadFile
)

module.exports = router


export default router;