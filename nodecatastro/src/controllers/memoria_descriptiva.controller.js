import { text } from 'express';
import Memoria_descriptiva from '../models/memoria_descriptiva';


export async function getMemoria_descriptiva(req,res) {
    try{
        const memoria_descriptiva = await Memoria_descriptiva.findAll();
        res.json({
            data: memoria_descriptiva
        });
    } catch (e) {
        console.log(e);
    }
   
} 

export async function crearMemoria_descriptiva(req, res) {
    const {db_nodbmem,cantidad} = req.body;
    try {

        let nuevaMemoria_descriptiva= await Memoria_descriptiva.create({
           db_nodbmem,
           cantidad
        }, {
            fields:['db_nodbmem','cantidad']
        });
        if (nuevaMemoria_descriptiva) {
            return res.json({
                message: 'Memoria descriptiva creada correctamente',
                data: nuevaMemoria_descriptiva
            
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

export async function getMemoriaDescMensuraID(req,res){
    try {
        const {mensura_id} = req.params;
    const memoria_descriptiva = await Memoria_descriptiva.findOne({
        where: {
            mensura_id: mensura_id
        }
    });
    res.json({
        data: memoria_descriptiva
    });
    }catch (e){
        console.log(e);
    }
}