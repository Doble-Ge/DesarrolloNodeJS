import { text } from 'express';
import Certificado from '../models/certificado';


export async function getCertificado(req,res) {
    try{
        const certificado = await Certificado.findAll();
        res.json({
            data: certificado
        });
    } catch (e) {
        console.log(e);
    }
   
} 

export async function crearCertificado(req, res) {
    const {informe_catastral,pdf_certificado} = req.body;
    try {

        let nuevoCertificado = await Certificado.create({
            informe_catastral,
            pdf_certificado
        }, {
            fields:['informe_catastral','pdf_certificado']
        });
        if (nuevoCertificado) {
            return res.json({
                message: 'Acta creada correctamente',
                data: nuevoCertificado
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