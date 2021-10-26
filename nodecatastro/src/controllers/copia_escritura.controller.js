import { text } from 'express';
import Copia_escritura from '../models/copia_escritura';


export async function getCopia_escritura(req,res) {
    try{
        const copia_escritura = await Copia_escritura.findAll();
        res.json({
            data: copia_escritura
        });
    } catch (e) {
        console.log(e);
    }
   
} 

export async function crearCopia_escritura(req, res) {
    const {pdf_escritura} = req.body;
    try {

        let nuevaCopia_escritura= await Copia_escritura.create({
           pdf_escritura
        }, {
            fields:['pdf_escritura']
        });
        if (nuevaCopia_escritura) {
            return res.json({
                message: 'Copia escritura creada correctamente',
                data: nuevaCopia_escritura
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