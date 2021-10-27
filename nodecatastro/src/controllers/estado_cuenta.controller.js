import { text } from 'express';
import Estado_cuenta from '../models/estado_cuenta';


export async function getEstado_cuenta(req,res) {
    try{
        const estado_cuenta = await Estado_cuenta.findAll();
        res.json({
            data: estado_cuenta
        });
    } catch (e) {
        console.log(e);
    }
   
} 

export async function crearEstado_cuenta(req, res) {
    const {db_nodb} = req.body;
    try {

        let nuevoEstado_cuenta= await Estado_cuenta.create({
           db_nodb
        }, {
            fields:['db_nodb']
        });
        if (nuevoEstado_cuenta) {
            return res.json({
                message: 'Estado de cuenta creada correctamente',
                data: nuevoEstado_cuenta
            
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