import { text } from 'express';
import Visacion_municipal from '../models/visacion_municipal';


export async function getVisacion_municipal(req,res) {
    try{
        const visacion_municipal = await Visacion_municipal.findAll();
        res.json({
            data: visacion_municipal
        });
    } catch (e) {
        console.log(e);
    }
   
} 

export async function crearVisacion_municipal(req, res) {
    const {pdf_visacion_municipal} = req.body;
    try {

        let nuevaVisacion_municipal= await Visacion_municipal.create({
            pdf_visacion_municipal
        }, {
            fields:['pdf_visacion_municipal']
        });
        if (nuevaVisacion_municipal) {
            return res.json({
                message: 'Visacion municipal creada correctamente',
                data: nuevaVisacion_municipal
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