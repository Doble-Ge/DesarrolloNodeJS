const multer = require('multer')

let date = new Date()
let day = date.getDate()
let mes = date.getMonth()+1
let anio = date.getFullYear()
let horas = date.getHours()
let minutos = date.getMinutes()

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, './uploads/citacion_colindante')
    },
    filename: function (req, file, cb){
    //    console.log(file);
    let date = new Date()
    let day = date.getDate()
    let mes = date.getMonth()+1
    let anio = date.getFullYear()
    let horas = date.getHours()
    let minutos = date.getMinutes()

 cb(null, file.fieldname + '_' + day +'-' + mes + '-' + anio + '_'+ horas +'-' + minutos +'_'+file.originalname)

     ////'${Date.now()}-${file.originalname}'   
    }
})

const upload = multer({ storage:storage })

exports.upload = upload.single('citacion_colindante')

exports.uploadFile = (req, res) => {
    res.send({ data: 'enviar un archivo'})
}