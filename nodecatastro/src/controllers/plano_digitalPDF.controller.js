const multer = require('multer')

let date = new Date()
let day = date.getDate()
let mes = date.getMonth()+1
let anio = date.getFullYear()
let horas = date.getHours()
let minutos = date.getMinutes()

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, './uploads/plano_digital')
    },
    filename: function (req, file, cb){
    //    console.log(file);

 cb(null, file.fieldname + '_' + day +'-' + mes + '-' + anio + '_'+ horas +'-' + minutos +'_'+file.originalname)

     ////'${Date.now()}-${file.originalname}'   
    }
})

const upload = multer({ storage:storage })

exports.upload = upload.single('plano_digital')

exports.uploadFile = (req, res) => {
    res.send({ data: 'enviar un archivo'})
}