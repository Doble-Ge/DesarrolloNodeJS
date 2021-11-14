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

export async function updateCopia_Escritura(req,res){
    try{
        const {id} = req.params;
    const {pdf_escritura, mensura_id} = req.body;
    
    const copia_escritura = await Copia_escritura.findAll({
        attributes: ['id', 'pdf_escritura', 'mensura_id'],
        where: {
            id: id
        }
    });

    if(copia_escritura.length > 0){
        copia_escritura.forEach(async copia_escritura => {
            await copia_escritura.update({
                pdf_escritura,
                mensura_id
            })
            
        });
    }

    return res.json({
        message: "Actualizado con éxito",
        data: copia_escritura
    });
    }catch (e){
        console.log(e);
    }
}

export async function getCopiaEscrituraMensuraID(req,res){
    try {
        const {mensura_id} = req.params;
    const copia = await Copia_escritura.findOne({
        where: {
            mensura_id: mensura_id
        }
    });
    res.json({
        data: copia
    });
    }catch (e){
        console.log(e);
    }
}