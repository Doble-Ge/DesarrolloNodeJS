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
    const {pdf_visacion_municipal, observacion} = req.body;
    try {

        let nuevaVisacion_municipal= await Visacion_municipal.create({
            pdf_visacion_municipal,
            observacion
        }, {
            fields:['pdf_visacion_municipal', 'observacion']
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

export async function updateVisacion_Municipal(req,res){
    try{
        const {id} = req.params;
    const {pdf_visacion_municipal, mensura_id, observacion} = req.body;
    
    const visacion_municipal = await Visacion_municipal.findAll({
        attributes: ['id', 'pdf_visacion_municipal', 'mensura_id', 'observacion'],
        where: {
            id: id
        }
    });

    if(visacion_municipal.length > 0){
        visacion_municipal.forEach(async visacion_municipal => {
            await visacion_municipal.update({
                pdf_visacion_municipal,
                mensura_id, 
                observacion
            })
            
        });
    }

    return res.json({
        message: "Actualizado con éxito",
        data: visacion_municipal
    });
    }catch (e){
        console.log(e);
    }
}
export async function getVisacionMunicipalMensuraID(req,res){
    try {
        const {mensura_id} = req.params;
    const visacion_municipal = await Visacion_municipal.findOne({
        where: {
            mensura_id: mensura_id
        }
    });
    res.json({
        data: visacion_municipal
    });
    }catch (e){
        console.log(e);
    }
}