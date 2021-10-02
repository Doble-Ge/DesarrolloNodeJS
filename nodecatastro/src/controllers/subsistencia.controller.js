import Subsistencia from '../models/subsistencia';


export async function crearSubsistencia(req, res) {
    const {titulo_subsistencia, pdf_subsistencia, mensura_id} = req.body;
    try {

        let nuevaSubsistencia = await Usuario.create({
            titulo_subsistencia, 
            pdf_subsistencia, 
            mensura_id
        }, {
            fields:['titulo_subsistencia', 'pdf_subsistencia', 'mensura_id']
        });
        if (nuevaSubsistencia) {
            return res.json({
                message: 'Subsistencia de dominio cargada correctamente',
                data: nuevaSubsistencia
            });
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'algo va mal',
            data: {}
        });
    }
    
}
const multer = require('multer')


const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, './uploads/subsistencia')
    },
    filename: function (req, file, cb){
    //    console.log(file);

 cb(null, file.fieldname + '-' + Date.now() + file.originalname)

     ////'${Date.now()}-${file.originalname}'   
    }
})

const upload = multer({ storage:storage })

exports.upload = upload.single('myFile')

exports.uploadFile = (req, res) => {
    res.send({ data: 'enviar un archivo'})
}