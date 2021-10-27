import { text } from 'express';
import Plano_digital from '../models/plano_digital';


export async function getPlano_digital(req,res) {
    try{
        const plano_digital = await Plano_digital.findAll();
        res.json({
            data: plano_digital
        });
    } catch (e) {
        console.log(e);
    }
   
} 

export async function crearPlano_digital(req, res) {
    const {pdf_plano_digital} = req.body;
    try {

        let nuevoPlano_digital = await Plano_digital.create({
            pdf_plano_digital
        }, {
            fields:['pdf_plano_digital']
        });
        if (nuevoPlano_digital) {
            return res.json({
                message: 'Notificacion creada correctamente',
                data: nuevoPlano_digital
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