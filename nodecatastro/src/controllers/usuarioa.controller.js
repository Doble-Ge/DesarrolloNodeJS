import { text } from 'express';
import UsuarioA from '../models/usuariosa';
//const {encrypt} = require('../controllers/encriptar')
//import { encrypt } from '../controllers/encriptar';

const bcrypt = require('bcryptjs')

const encrypt = async (textPlain) => {
    const hash = await bcrypt.hash(textPlain,10)
    return hash
}

const compare = async(passPlain, hashPlain) => {
    return await bcrypt.compare(passPlain,hashPlain)
}

export async function register(req,res){
        try{
            const{  cuil, pass} = req.body
            const usuarioa = await UsuarioA.findOne({
                where: {
                    cuil
                }
            })
            
    const boolean = false;

    const checkPassword = await compare(pass, usuarioa.pass)
            if(checkPassword){
                res.send({
                    data:usuarioa,
                    message: 'es correcta',
                    boolean: true
                })
                return true
            }

        if(!checkPassword){
                res.status(409)
                res.send({
                    error:'invalid password',
                    boolean:false
                })
                return false
            }    

        }catch(e){
            console.log(e)
        }
}

export async function crearUsuario(req, res) {
    const {nombre, apellido, email, pass, cuil, perfila_id, primerLogin} = req.body;
    const passHash = await encrypt(pass)
    try {

        let nuevoUsuario = await UsuarioA.create({
            nombre,
            apellido,
            email,
            pass:passHash,
            cuil,
            perfila_id,
            primerLogin
        }, {
            fields:['nombre', 'apellido', 'email', 'pass', 'cuil', 'perfila_id', 'primerLogin']
        });
        if (nuevoUsuario) {
            return res.json({
                message: 'Usuario creado correctamente',
                data: nuevoUsuario
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

export async function getUsuario(req,res) {
    try{
        const usuario = await UsuarioA.findAll();
        res.json({
            data: usuario
        });
    } catch (e) {
        console.log(e);
    }
   
}

export async function getOneUsuario(req,res){
    try {
        const {id} = req.params;
    const usuario = await UsuarioA.findOne({
        where: {
            id: id
        }
    });
    res.json({
        data: usuario
    });
    }catch (e){
        console.log(e);
    }
}

export async function getOneUsuarioCuil(req,res){
    try {
        const {cuil} = req.params;
    const usuario = await UsuarioA.findOne({
        where: {
            cuil: cuil
        }
    });
    res.json({
        data: usuario
    });
    }catch (e){
        console.log(e);
    }
}


export async function deleteUsuario(req,res){
    try {
        const {id} = req.params;
    const deleteRowCount = await UsuarioA.destroy({
        where: {
            id: id
        }
    });
    res.json({
        message: "Usuario eliminado con éxito",
        count: deleteRowCount
    });
    }catch (e){
        console.log(e);
    }
}

/*export async function updateUsuario(req,res){
    try{
        const {id} = req.params;
    const {nombre, apellido, email, pass, cuil, perfila_id} = req.body;
    
    const usuario = await UsuarioA.findAll({
        attributes: ['id', 'nombre', 'apellido', 'email', 'pass', 'cuil', 'perfila_id'],
        where: {
            id: id
        }
    });

    if(usuario.length > 0){
        usuario.forEach(async usuario => {
            await usuario.update({
                nombre,
                apellido,
                email,
                pass,
                cuil,
                perfila_id
            })
            
        });
    }

    return res.json({
        message: "Usuario actualizado con éxito",
        data: usuario
    });
    }catch (e){
        console.log(e);
    }
}*/

export async function updateUsuarioCUIL(req,res){
    try{
        const {cuil} = req.params;
    const {nombre, apellido, email, pass, perfila_id, primerLogin} = req.body;

    const passHash = await encrypt(pass)

    const usuario = await UsuarioA.findAll({
        attributes: ['id', 'nombre', 'apellido', 'email', 'pass', 'cuil', 'perfila_id', 'primerLogin'],
        where: {
            cuil: cuil
        }
    });

    if(usuario.length > 0){
        usuario.forEach(async usuario => {
            await usuario.update({
                nombre,
                apellido,
                email,
                pass:passHash,
                cuil,
                perfila_id,
                primerLogin
            })
            
        });
    }

    return res.json({
        message: "Usuario actualizado con éxito",
        data: usuario
    });
    }catch (e){
        console.log(e);
    }
}