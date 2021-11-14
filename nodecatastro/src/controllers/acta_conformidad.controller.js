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

export async function updateActa_conformidad(req,res){
    try{
        const {id} = req.params;
    const {pdf_acta, mensura_id} = req.body;
    
    const acta_conf = await Acta_conformidad.findAll({
        attributes: ['id', 'pdf_acta', 'mensura_id'],
        where: {
            id: id
        }
    });

    if(acta_conf.length > 0){
        acta_conf.forEach(async acta_conf => {
            await acta_conf.update({
                pdf_acta,
                mensura_id
            })
            
        });
    }

    return res.json({
        message: "Actualizado con éxito",
        data: acta_conf
    });
    }catch (e){
        console.log(e);
    }
}

export async function getActaMensuraID(req,res){
    try {
        const {mensura_id} = req.params;
    const acta = await Acta_conformidad.findOne({
        where: {
            mensura_id: mensura_id
        }
    });
    res.json({
        data: acta
    });
    }catch (e){
        console.log(e);
    }
}
