import Valoracion from '../models/valoracion';



export async function getValoracion(req,res) {
    try{
        const valoracion = await Valoracion.findAll();
        res.json({
            data: valoracion
        });
    } catch (e) {
        console.log(e);
    }
   
}

export async function crearValoracion(req, res) {
    const {valoracion} = req.body;
    try {
        let nuevoValoracion = await Valoracion.create({
            valoracion
            
        }, {
            fields:['valoracion']
        });
        if (nuevoValoracion) {
            return res.json({
                message: 'Valoracion creado correctamente',
                data: nuevoValoracion
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

export async function getOneValoracion(req,res){
    try {
        const {id} = req.params;
    const valoracion = await Valoracion.findOne({
        where: {
            id: id
        }
    });
    res.json({
        data: valoracion
    });
    }catch (e){
        console.log(e);
    }
}

export async function deleteValoracion(req,res){
    try {
        const {id} = req.params;
    const deleteRowCount = await Valoracion.destroy({
        where: {
            id: id
        }
    });
    res.json({
        message: "Valoracion eliminado con éxito",
        count: deleteRowCount
    });
    }catch (e){
        console.log(e);
    }
}


