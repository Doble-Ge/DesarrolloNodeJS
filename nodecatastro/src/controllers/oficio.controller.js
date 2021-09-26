import Oficio from '../models/oficio';

export async function getOficio(req,res) {
    try{
        const oficio = await Oficio.findAll();
        res.json({
            data: oficio
        });
    } catch (e) {
        console.log(e);
    }
   
}

export async function crearOficio(req, res) {
    const {motivo_oficio,asunto_oficio,termino_oficio,fechavenc_oficio,observacion_oficio,
        nro_interno,anio,agente_interviniente,fecha,fecha_inicio,exp_origen,diligenciador} = req.body;
    try {

        let nuevoOficio = await Oficio.create({
            motivo_oficio,
            asunto_oficio,
            termino_oficio,
            fechavenc_oficio,
            observacion_oficio,
            nro_interno,
            anio,
            agente_interviniente,
            fecha,
            fecha_inicio,
            exp_origen,
            diligenciador
            
        }, {
            fields:['motivo_oficio', 'asunto_oficio', 'termino_oficio', 'fechavenc_oficio', 
            'observacion_oficio','nro_interno','anio','agente_interviniente','fecha',
        'fecha_inicio','exp_origen','diligenciador']
        });
        if (nuevoOficio) {
            return res.json({
                message: 'Oficio creado correctamente',
                data: nuevoOficio
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

export async function getOneOficio(req,res){
    try {
        const {id} = req.params;
    const oficio = await Oficio.findOne({
        where: {
            id: id
        }
    });
    res.json({
        data: oficio
    });
    }catch (e){
        console.log(e);
    }
}

export async function deleteOficio(req,res){
    try {
        const {id} = req.params;
    const deleteRowCount = await Oficio.destroy({
        where: {
            id: id
        }
    });
    res.json({
        message: "Oficio eliminado con éxito",
        count: deleteRowCount
    });
    }catch (e){
        console.log(e);
    }
}

export async function updateOficio(req,res){
    try{
        const {id} = req.params;
    const {motivo_oficio,asunto_oficio,termino_oficio,fechavenc_oficio,observacion_oficio,
        nro_interno,anio,agente_interviniente,fecha,fecha_inicio,exp_origen,diligenciador} = req.body;
    
    const oficio = await Oficio.findAll({
        attributes: ['id', 'motivo_oficio', 'asunto_oficio', 'termino_oficio', 'fechavenc_oficio', 
        'observacion_oficio','nro_interno','anio','agente_interviniente','fecha',
    'fecha_inicio','exp_origen','diligenciador'],
        where: {
            id: id
        }
    });

    if(oficio.length > 0){
        oficio.forEach(async usuario => {
            await usuario.update({
                motivo_oficio,
            asunto_oficio,
            termino_oficio,
            fechavenc_oficio,
            observacion_oficio,
            nro_interno,
            anio,
            agente_interviniente,
            fecha,
            fecha_inicio,
            exp_origen,
            diligenciador
            })
            
        });
    }

    return res.json({
        message: "Oficio actualizado con éxito",
        data: oficio
    });
    }catch (e){
        console.log(e);
    }
}
