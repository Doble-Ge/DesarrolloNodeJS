import { text } from 'express';
import Aprobacion_agrimensura from '../models/aprobacion_agrimensura';
import Subsistencia from '../models/acta_conformidad';

export async function getAprobacion_agrimensura(req,res) {
    try{
        const aprobacion_agrimensura = await Aprobacion_agrimensura.findAll();
        res.json({
            data: aprobacion_agrimensura
        });
    } catch (e) {
        console.log(e);
    }
   
} 

export async function crearAprobacion_agrimensura(req, res) {
    const {pdf_aprobacion_agrimensura} = req.body;
    try {

        let nuevaAprobacion_agrimensura = await Aprobacion_agrimensura.create({
            pdf_aprobacion_agrimensura
        }, {
            fields:['pdf_aprobacion_agrimensura']
        });
        if (nuevaAprobacion_agrimensura) {
            return res.json({
                message: 'Acta creada correctamente',
                data: nuevaAprobacion_agrimensura
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