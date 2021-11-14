import { Router } from 'express';
const controller = require('../controllers/citacion_colindantePDF.controller')

const router = Router()

router.get('/', controller.upload);

router.post('/', controller.upload, controller.uploadFile)

router.get('/download', function(req, res) {
    const file = './uploads/citacion_colindante/' + req.query.filename;
    console.log(req.query.filename);
    res.download(file);
});

module.exports = router


export default router;