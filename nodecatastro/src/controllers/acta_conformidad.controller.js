import { text } from 'express';
import Acta_conformidad from '../models/acta_conformidad';
import Subsistencia from '../models/acta_conformidad';

export async function getActa_conformidad(req,res) {
    try{
        const acta_conformidad = await Acta_conformidad.findAll();
        res.json({
            data: acta_conformidad
        });
    } catch (e) {
        console.log(e);
    }
   
} 

export async function crearActa_conformidad(req, res) {
    const {pdf_acta} = req.body;
    try {

        let nuevaActa = await Acta_conformidad.create({
            pdf_acta
        }, {
            fields:['pdf_acta']
        });
        if (nuevaActa) {
            return res.json({
                message: 'Acta creada correctamente',
                data: nuevaActa
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