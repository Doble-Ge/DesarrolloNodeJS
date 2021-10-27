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
    const {pdf_citacion} = req.body;
    try {

        let nuevoPlano_proyecto_obra = await Plano_proyecto_obra.create({
            pdf_citacion
        }, {
            fields:['pdf_citacion']
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