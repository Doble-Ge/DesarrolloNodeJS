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
    const {pdf_plano_digital, observacion} = req.body;
    try {

        let nuevoPlano_digital = await Plano_digital.create({
            pdf_plano_digital,
            observacion
        }, {
            fields:['pdf_plano_digital', 'observacion']
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

export async function updatePlano_Digital(req,res){
    try{
        const {id} = req.params;
    const {pdf_plano_digital, mensura_id, observacion} = req.body;
    
    const plano_digital = await Plano_digital.findAll({
        attributes: ['id', 'pdf_plano_digital', 'mensura_id', 'observacion'],
        where: {
            id: id
        }
    });

    if(plano_digital.length > 0){
        plano_digital.forEach(async plano_digital => {
            await plano_digital.update({
                pdf_plano_digital,
                mensura_id,
                observacion
            })
            
        });
    }

    return res.json({
        message: "Actualizado con éxito",
        data: plano_digital
    });
    }catch (e){
        console.log(e);
    }
}

export async function getPlanoDigitalMensuraID(req,res){
    try {
        const {mensura_id} = req.params;
    const plano = await Plano_digital.findOne({
        where: {
            mensura_id: mensura_id
        }
    });
    res.json({
        data: plano
    });
    }catch (e){
        console.log(e);
    }
}