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
    const {informe_catastral,pdf_certificado, observacion} = req.body;
    try {

        let nuevoCertificado = await Certificado.create({
            informe_catastral,
            pdf_certificado, 
            observacion
        }, {
            fields:['informe_catastral','pdf_certificado', 'observacion']
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

export async function updateCertificado(req,res){
    try{
        const {id} = req.params;
    const {informe_catastral, pdf_certificado, mensura_id, observacion} = req.body;
    
    const certificado = await Certificado.findAll({
        attributes: ['id', 'informe_catastral', 'pdf_certificado', 'mensura_id', 'observacion'],
        where: {
            id: id
        }
    });

    if(certificado.length > 0){
        certificado.forEach(async certificado => {
            await certificado.update({
                informe_catastral,
                pdf_certificado,
                mensura_id,
                observacion
            })
            
        });
    }

    return res.json({
        message: "Actualizado con éxito",
        data: certificado
    });
    }catch (e){
        console.log(e);
    }
}

export async function getCertificadoMensuraID(req,res){
    try {
        const {mensura_id} = req.params;
    const certificado = await Certificado.findOne({
        where: {
            mensura_id: mensura_id
        }
    });
    res.json({
        data: certificado
    });
    }catch (e){
        console.log(e);
    }
}