import { text } from 'express';
import Historial from '../models/historial';

export async function getHistorial(req,res) {
    try{
        const historial = await Historial.findAll();
        res.json({
            data: historial
        });
    } catch (e) {
        console.log(e);
    }
   
}

export async function crearHistorial(req, res) {
    const {estado, fechahora, mensura_id, usuario, area, mail_user} = req.body;
    try {

        let nuevoHistorial = await Historial.create({
            estado,
            fechahora,
            mensura_id,
            usuario,
            area,
            mail_user
        }, {
            fields:['estado', 'fechahora', 'mensura_id', 'usuario', 'area', 'mail_user']
        });
        if (nuevoHistorial) {
            return res.json({
                message: 'Registrado',
                data: nuevoHistorial
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

export async function getOneHistorial(req,res){
    try {
        const {id} = req.params;
    const historial = await Historial.findOne({
        where: {
            id: id
        }
    });
    res.json({
        data: historial
    });
    }catch (e){
        console.log(e);
    }
}

/*export async function getOneUsuarioCuil(req,res){
    try {
        const {cuil} = req.params;
    const usuario = await UsuarioA.findOne({
        where: {
            cuil: cuil
        }
    });
    res.json({
        data: usuario
    });
    }catch (e){
        console.log(e);
    }
}*/


export async function deleteHistorial(req,res){
    try {
        const {id} = req.params;
    const deleteRowCount = await Historial.destroy({
        where: {
            id: id
        }
    });
    res.json({
        message: "Eliminado",
        count: deleteRowCount
    });
    }catch (e){
        console.log(e);
    }
}

export async function updateHistorial(req,res){
    try{
        const {id} = req.params;
    const {estado, fechahora, mensura_id, usuario, area, mail_user} = req.body;
    
    const historial = await Historial.findAll({
        attributes: ['id', 'estado', 'fechahora', 'mensura_id', 'usuario', 'area', 'mail_user'],
        where: {
            id: id
        }
    });

    if(historial.length > 0){
        historial.forEach(async historial => {
            await historial.update({
                estado,
                fechahora,
                mensura_id,
                usuario,
                area,
                mail_user
            })
            
        });
    }

    return res.json({
        message: "Historial actualizado con éxito",
        data: historial
    });
    }catch (e){
        console.log(e);
    }
}
