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

export async function updateEstado_Cuenta(req,res){
    try{
        const {id} = req.params;
    const {db_nodb, mensura_id} = req.body;
    
    const estado_cuenta = await Estado_cuenta.findAll({
        attributes: ['id', 'db_nodb', 'mensura_id'],
        where: {
            id: id
        }
    });

    if(estado_cuenta.length > 0){
        estado_cuenta.forEach(async estado_cuenta => {
            await estado_cuenta.update({
                db_nodb,
                mensura_id
            })
            
        });
    }

    return res.json({
        message: "Actualizado con éxito",
        data: estado_cuenta
    });
    }catch (e){
        console.log(e);
    }
}

export async function getEstadoCuentaMensuraID(req,res){
    try {
        const {mensura_id} = req.params;
    const estadocuenta = await Estado_cuenta.findOne({
        where: {
            mensura_id: mensura_id
        }
    });
    res.json({
        data: estadocuenta
    });
    }catch (e){
        console.log(e);
    }
}