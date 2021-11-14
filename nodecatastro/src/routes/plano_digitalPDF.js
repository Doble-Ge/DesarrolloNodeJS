import { Router } from 'express';


const controller = require('../controllers/plano_digitalPDF.controller');
const router = Router();
router.get('/', controller.upload);

router.post('/', controller.upload, controller.uploadFile)

router.get('/download', function(req, res) {
    const file = './uploads/plano_digital/' + req.query.filename;
    console.log(req.query.filename);
    res.download(file);
});

module.exports = router


//router.post('/', cargarArchivo);


export default router;