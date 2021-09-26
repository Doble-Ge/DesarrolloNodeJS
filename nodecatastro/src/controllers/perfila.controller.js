import PerfilA from '../models/perfila';

export async function crearPerfil(req, res) {
    const {nombre, tipo} = req.body;
    try {

        let nuevoPerfilA = await PerfilA.create({
            nombre,
            tipo,            
        }, {
            fields:['nombre', 'tipo']
        });
        if (nuevoPerfilA) {
            return res.json({
                message: 'Perfil creado correctamente',
                data: nuevoPerfilA
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

export async function getPerfil(req,res) {
    try{
        const traerperfila = await PerfilA.findAll();
        res.json({
            data: traerperfila
        });
    } catch (e) {
        console.log(e);
    }
   
}

export async function updatePerfil(req,res){
    try{
        const {id} = req.params;
    const {nombre, tipo} = req.body;
    
    const actperfila = await PerfilA.findAll({
        attributes: ['id', 'nombre', 'tipo'],
        where: {
            id: id
        }
    });

    if(actperfila.length > 0){
        actperfila.forEach(async acperfila => {
            await acperfila.update({
                nombre,
                tipo
            })
            
        });
    }

    return res.json({
        message: "Usuario actualizado con éxito",
        data: actperfila
    });
    }catch (e){
        console.log(e);
    }
}