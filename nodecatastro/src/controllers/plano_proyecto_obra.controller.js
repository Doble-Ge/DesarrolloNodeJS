import { text } from 'express';
import Plano_proyecto_obra from '../models/plano_proyecto_obra';


export async function getPlano_proyecto_obra(req,res) {
    try{
        const plano_proyecto_obra = await Plano_proyecto_obra.findAll();
        res.json({
            data: plano_proyecto_obra
        });
    } catch (e) {
        console.log(e);
    }
   
} 

export async function crearPlano_proyecto_obra(req, res) {
    const {pdf_proyecto_obra, observacion} = req.body;
    try {

        let nuevoPlano_proyecto_obra = await Plano_proyecto_obra.create({
            pdf_proyecto_obra,
            observacion
        }, {
            fields:['pdf_proyecto_obra', 'observacion']
        });
        if (nuevoPlano_proyecto_obra) {
            return res.json({
                message: 'Notificacion creada correctamente',
                data: nuevoPlano_proyecto_obra
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

export async function updatePlano_Proyecto_Obra(req,res){
    try{
        const {id} = req.params;
    const {pdf_proyecto_obra, mensura_id, observacion} = req.body;
    
    const plano_proyecto_obra = await Plano_proyecto_obra.findAll({
        attributes: ['id', 'pdf_proyecto_obra', 'mensura_id', 'observacion'],
        where: {
            id: id
        }
    });

    if(plano_proyecto_obra.length > 0){
        plano_proyecto_obra.forEach(async plano_proyecto_obra => {
            await plano_proyecto_obra.update({
                pdf_proyecto_obra,
                mensura_id,
                observacion
            })
            
        });
    }

    return res.json({
        message: "Actualizado con éxito",
        data: plano_proyecto_obra
    });
    }catch (e){
        console.log(e);
    }
}
export async function getPlanoProyectoMensuraID(req,res){
    try {
        const {mensura_id} = req.params;
    const plano = await Plano_proyecto_obra.findOne({
        where: {
            mensura_id: mensura_id
        }
    });
    res.json({
        data: plano
    });
    }catch (e){
        console.log(e);
    }
}