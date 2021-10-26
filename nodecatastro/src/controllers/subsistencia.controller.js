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