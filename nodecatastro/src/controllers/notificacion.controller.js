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
    const {pdf_notificacion, observacion} = req.body;
    try {

        let nuevaNotificacion= await Notificacion.create({
           pdf_notificacion,
           observacion
        }, {
            fields:['pdf_notificacion', 'observacion']
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
    const {pdf_notificacion, mensura_id, observacion} = req.body;
    
    const notificacion = await Notificacion.findAll({
        attributes: ['id', 'pdf_notificacion', 'mensura_id', 'observacion'],
        where: {
            id: id
        }
    });

    if(notificacion.length > 0){
        notificacion.forEach(async notificacion => {
            await notificacion.update({
                pdf_notificacion,
                mensura_id,
                observacion
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
export async function getNotifiacionMensuraID(req,res){
    try {
        const {mensura_id} = req.params;
    const notificacion = await Notificacion.findOne({
        where: {
            mensura_id: mensura_id
        }
    });
    res.json({
        data: notificacion
    });
    }catch (e){
        console.log(e);
    }
}