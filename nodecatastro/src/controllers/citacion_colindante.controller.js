import { text } from 'express';
import Citacion_colindante from '../models/citacion_colindante';


export async function getCitacion_colindante(req,res) {
    try{
        const citacion_colindante = await Citacion_colindante.findAll();
        res.json({
            data: citacion_colindante
        });
    } catch (e) {
        console.log(e);
    }
   
} 

export async function crearCitacion_colindante(req, res) {
    const {pdf_citacion, observacion} = req.body;
    try {

        let nuevaCitacion_colindante= await Citacion_colindante.create({
            pdf_citacion,
            observacion
        }, {
            fields:['pdf_citacion', 'observacion']
        });
        if (nuevaCitacion_colindante) {
            return res.json({
                message: 'Citacion creada correctamente',
                data: nuevaCitacion_colindante
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

export async function updateCitacion_Colindante(req,res){
    try{
        const {id} = req.params;
    const {pdf_citacion, mensura_id} = req.body;
    
    const citacion_colindante = await Citacion_colindante.findAll({
        attributes: ['id', 'pdf_citacion', 'mensura_id'],
        where: {
            id: id
        }
    });

    if(citacion_colindante.length > 0){
        citacion_colindante.forEach(async citacion_colindante => {
            await citacion_colindante.update({
                pdf_citacion,
                mensura_id
            })
            
        });
    }

    return res.json({
        message: "Actualizado con éxito",
        data: citacion_colindante
    });
    }catch (e){
        console.log(e);
    }
}
export async function getCitacionMensuraID(req,res){
    try {
        const {mensura_id} = req.params;
    const citacion = await Citacion_colindante.findOne({
        where: {
            mensura_id: mensura_id
        }
    });
    res.json({
        data: citacion
    });
    }catch (e){
        console.log(e);
    }
}