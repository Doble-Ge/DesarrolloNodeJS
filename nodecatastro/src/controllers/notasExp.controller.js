import { text } from 'express';
import Contacto from '../models/contacto';
import NotaExp from '../models/notasExpedientes';
import UsuarioA from '../models/usuariosa';

export async function getNotasExp(req,res) {
    try{
        const notasExp = await NotaExp.findAll();
        res.json({
            data: notasExp
        });
    } catch (e) {
        console.log(e);
    }
   
}

export async function crearNotaExp(req, res) {
    const {nombreCompleto, cuil, descripcion, pdf_notasExp} = req.body;
    try {

        let nuevaNota = await NotaExp.create({
            nombreCompleto,
            cuil,
            descripcion,
            pdf_notasExp
        }, {
            fields:['nombreCompleto', 'cuil', 'descripcion', 'pdf_notasExp']
        });
        if (nuevaNota) {
            return res.json({
                message: 'Notas creado correctamente',
                data: nuevaNota
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