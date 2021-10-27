import { text } from 'express';
import Visacion_agrimensores from '../models/visacion_agrimensores';


export async function getVisacion_agrimensores(req,res) {
    try{
        const visacion_agrimensores = await Visacion_agrimensores.findAll();
        res.json({
            data: visacion_agrimensores
        });
    } catch (e) {
        console.log(e);
    }
   
} 

export async function crearVisacion_agrimensores(req, res) {
    const {pdf_visado_agrimensores} = req.body;
    try {

        let nuevaVisacion_agrimensores = await Visacion_agrimensores.create({
            pdf_visado_agrimensores
        }, {
            fields:['pdf_visado_agrimensores']
        });
        if (nuevaVisacion_agrimensores) {
            return res.json({
                message: 'Visacion agrimensores creada correctamente',
                data: nuevaVisacion_agrimensores
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