import { text } from 'express';
import Subsistencia from '../models/subsistencia';

export async function getSubsistencia(req,res) {
    try{
        const solicitudesSubsistencia = await Subsistencia.findAll();
        res.json({
            data: solicitudesSubsistencia
        });
    } catch (e) {
        console.log(e);
    }
   
} 

export async function crearSubsistencia(req, res) {
    const {titulo_subsistencia,pdf_subsistencia} = req.body;
    try {

        let nuevaSubsistencia = await Subsistencia.create({
            titulo_subsistencia,
            pdf_subsistencia
        }, {
            fields:['titulo_subsistencia', 'pdf_subsistencia']
        });
        if (nuevaSubsistencia) {
            return res.json({
                message: 'Subsistencia creada correctamente',
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

/*export async function deleteSubsistencia(req,res){
    try {
        const {id} = req.params;
    const deleteRowCount = await Subsistencia.destroy({
        where: {
            id: id
        }
    });
    res.json({
        message: "Eliminado correctamente",
        count: deleteRowCount
    });
    }catch (e){
        console.log(e);
    }
}*/

export async function updateSubsistencia(req,res){
    try{
        const {id} = req.params;
    const {titulo_subsistencia, pdf_subsistencia, mensura_id} = req.body;
    
    const subsistencia = await Subsistencia.findAll({
        attributes: ['id', 'titulo_subsistencia', 'pdf_subsistencia', 'mensura_id'],
        where: {
            id: id
        }
    });

    if(subsistencia.length > 0){
        subsistencia.forEach(async subsistencia => {
            await subsistencia.update({
                titulo_subsistencia,
                pdf_subsistencia,
                mensura_id
            })
            
        });
    }

    return res.json({
        message: "Actualizado con éxito",
        data: subsistencia
    });
    }catch (e){
        console.log(e);
    }
}

export async function getSubsistenciaMensuraID(req,res){
    try {
        const {mensura_id} = req.params;
    const subsistencia = await Subsistencia.findOne({
        where: {
            mensura_id: mensura_id
        }
    });
    res.json({
        data: subsistencia
    });
    }catch (e){
        console.log(e);
    }
}