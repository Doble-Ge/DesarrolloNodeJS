import { text } from 'express';
import SolicitudesUsuarios from '../models/solicitudesUsuarios';

export async function getSolicitudesUsuario(req,res) {
    try{
        const solicitudesUsuarios = await SolicitudesUsuarios.findAll();
        res.json({
            data: solicitudesUsuarios
        });
    } catch (e) {
        console.log(e);
    }
   
}

export async function crearSolicitudUsuario(req, res) {
    const {nombre, apellido, email, cuil, observacion} = req.body;
    try {

        let nuevaSolicitudUsuario = await SolicitudesUsuarios.create({
            nombre,
            apellido,
            email,
            cuil,
            observacion
        }, {
            fields:['nombre', 'apellido', 'email', 'cuil', 'observacion']
        });
        if (nuevaSolicitudUsuario) {
            return res.json({
                message: 'Usuario creado correctamente',
                data: nuevaSolicitudUsuario
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

export async function deleteSolicitud(req,res){
    try {
        const {id} = req.params;
    const deleteRowCount = await SolicitudesUsuarios.destroy({
        where: {
            id: id
        }
    });
    res.json({
        message: "Solicitudes eliminada con éxito",
        count: deleteRowCount
    });
    }catch (e){
        console.log(e);
    }
}
