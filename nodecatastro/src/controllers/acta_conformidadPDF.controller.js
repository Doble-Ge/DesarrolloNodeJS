import express from 'express'
import { path } from '../routes/correo'
const multer = require('multer')
//ASDASD

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, './uploads/acta_conformidad')
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

