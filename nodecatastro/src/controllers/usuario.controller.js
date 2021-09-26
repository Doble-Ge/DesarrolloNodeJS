import Usuario from '../models/usuario';

export async function getUsuario(req,res) {
    try{
        const usuario = await Usuario.findAll();
        res.json({
            data: usuario
        });
    } catch (e) {
        console.log(e);
    }
   
}

export async function crearUsuario(req, res) {
    const {nombre, apellido, email, pass, cuil} = req.body;
    try {

        let nuevoUsuario = await Usuario.create({
            nombre,
            apellido,
            email,
            pass,
            cuil
        }, {
            fields:['nombre', 'apellido', 'email', 'pass', 'cuil']
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

export async function getOneUsuario(req,res){
    try {
        const {id} = req.params;
    const usuario = await Usuario.findOne({
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

export async function deleteUsuario(req,res){
    try {
        const {id} = req.params;
    const deleteRowCount = await Usuario.destroy({
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

export async function updateUsuario(req,res){
    try{
        const {id} = req.params;
    const {nombre, apellido, email, pass, cuil} = req.body;
    
    const usuario = await Usuario.findAll({
        attributes: ['id', 'nombre', 'apellido', 'email', 'pass', 'cuil'],
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
                cuil
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

