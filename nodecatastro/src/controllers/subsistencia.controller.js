import Subsistencia from "../models/subsistencia";
const multer = require('multer')
const path = require('path')
var pathh;

//export async function cargarArchivo(req,res){
//    const storage = await multer.diskStorage({
      const storage = multer.diskStorage({
        destination: function (req, file, cb){
            cb(null, './uploads/subsistencia')
        },
        filename: function (req, file, cb){
        //    console.log(file);
    
     pathh = cb(null, file.fieldname + '-' + Date.now() + file.originalname);
    
         ////'${Date.now()}-${file.originalname}'   
        }
    })
    
    const upload = multer({ storage:storage })
    
    exports.upload = upload.single('myFile')
    
    exports.uploadFile = (req, res) => {
        res.send({ cb })
    }

//}

