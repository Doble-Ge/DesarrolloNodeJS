import { text } from 'express';
import Contacto from '../models/contacto';
import UsuarioA from '../models/usuariosa';

export async function getContactos(req,res) {
    try{
        const contacto = await Contacto.findAll();
        res.json({
            data: contacto
        });
    } catch (e) {
        console.log(e);
    }
   
}

export async function crearContacto(req, res) {
    const {nombreCompleto, email, telefono, consulta} = req.body;
    try {

        let nuevoContacto = await Contacto.create({
            nombreCompleto,
            email,
            telefono,
            consulta
        }, {
            fields:['nombreCompleto', 'email', 'telefono', 'consulta']
        });
        if (nuevoContacto) {
            return res.json({
                message: 'Consulta creado correctamente',
                data: nuevoContacto
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

