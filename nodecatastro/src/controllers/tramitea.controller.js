import TramiteA from '../models/tramitea';
import UsuarioA from '../models/tramitea';

export async function getTramite(req,res) {
    try{
        const tramitea = await TramiteA.findAll();
        res.json({
            data: tramitea
        });
    } catch (e) {
        console.log(e);
    }
   
}

export async function crearTramiteA(req, res) {
    const {numero, interno_catastro, caratula, observacion, fechainicio} = req.body;
    try {

        let nuevoTramite = await TramiteA.create({
            numero,
            interno_catastro,
            caratula,
            observacion,
            fechainicio
        }, {
            fields:['numero', 'interno_catastro', 'caratula', 'observacion', 'fechainicio']
        });
        if (nuevoTramite) {
            return res.json({
                message: 'Tramite iniciado!',
                data: nuevoTramite
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
    const tramitea = await TramiteA.findOne({
        where: {
            id: id
        }
    });
    res.json({
        data: tramitea
    });
    }catch (e){
        console.log(e);
    }
}

export async function deleteTramite(req,res){
    try {
        const {id} = req.params;
    const deleteRowCount = await TramiteA.destroy({
        where: {
            id: id
        }
    });
    res.json({
        message: "Tramite eliminado",
        count: deleteRowCount
    });
    }catch (e){
        console.log(e);
    }
}

export async function updateTramite(req,res){
    try{
        const {id} = req.params;
    const {numero, interno_catastro, caratula, observacion, fechainicio} = req.body;
    
    const tramitea = await TramiteA.findAll({
        attributes: ['id', 'numero', 'interno_catastro', 'caratula', 'observacion', 'fechainicio'],
        where: {
            id: id
        }
    });

    if(tramitea.length > 0){
        tramitea.forEach(async tramitea => {
            await tramitea.update({
                numero,
                interno_catastro,
                caratula,
                observacion,
                fechainicio
            })
            
        });
    }

    return res.json({
        message: "Tramite actualizado!",
        data: tramitea
    });
    }catch (e){
        console.log(e);
    }
}
