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