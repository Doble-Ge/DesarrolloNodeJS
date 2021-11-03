import { text } from 'express';
import Notificacion from '../models/notificacion';


export async function getNotificacion(req,res) {
    try{
        const notificacion = await Notificacion.findAll();
        res.json({
            data: notificacion
        });
    } catch (e) {
        console.log(e);
    }
   
} 

export async function crearNotificacion(req, res) {
    const {pdf_notificacion} = req.body;
    try {

        let nuevaNotificacion= await Notificacion.create({
           pdf_notificacion
        }, {
            fields:['pdf_notificacion']
        });
        if (nuevaNotificacion) {
            return res.json({
                message: 'Notificacion creada correctamente',
                data: nuevaNotificacion
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

export async function updateNotificacion(req,res){
    try{
        const {id} = req.params;
    const {pdf_notificacion, mensura_id} = req.body;
    
    const notificacion = await Notificacion.findAll({
        attributes: ['id', 'pdf_notificacion', 'mensura_id'],
        where: {
            id: id
        }
    });

    if(notificacion.length > 0){
        notificacion.forEach(async notificacion => {
            await notificacion.update({
                pdf_notificacion,
                mensura_id
            })
            
        });
    }

    return res.json({
        message: "Actualizado con éxito",
        data: notificacion
    });
    }catch (e){
        console.log(e);
    }
}