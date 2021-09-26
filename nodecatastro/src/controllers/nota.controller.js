import Nota from '../models/nota';

export async function getNota(req,res) {
    try{
        const nota = await Nota.findAll();
        res.json({
            data: nota
        });
    } catch (e) {
        console.log(e);
    }
   
}

export async function crearNota(req, res) {
    const {motivo,nroOrigen,asunto,fechaIngreso,fechaVencimiento,
        cantidadParcelas,detalle_observacion,numeroInterno,agenteInterviniente,caratula_asunto,iniciador,dni_iniciador,
        anio,fecha} = req.body;
    try {

        let nuevoNota = await Nota.create({
            motivo,
            nroOrigen,
            asunto,
            fechaIngreso,
            fechaVencimiento,
            cantidadParcelas,
            detalle_observacion,
            numeroInterno,
            agenteInterviniente,
            caratula_asunto,
            iniciador,
            dni_iniciador,
            anio,
            fecha
            
            
        }, {
            fields:['motivo','nroOrigen','asunto','fechaIngreso','fechaVencimiento','cantidadParcelas','detalle_observacion',
            ,'numeroInterno','agenteInterviniente','caratula_asunto','iniciador',
            'dni_iniciador','anio','fecha']
        });
        if (nuevoNota) {
            return res.json({
                message: 'Nota creada correctamente',
                data: nuevoNota
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

export async function getOneNota(req,res){
    try {
        const {id} = req.params;
    const nota = await Nota.findOne({
        where: {
            id: id
        }
    });
    res.json({
        data: nota
    });
    }catch (e){
        console.log(e);
    }
}

export async function deleteNota(req,res){
    try {
        const {id} = req.params;
    const deleteRowCount = await Nota.destroy({
        where: {
            id: id
        }
    });
    res.json({
        message: "Nota eliminada con éxito",
        count: deleteRowCount
    });
    }catch (e){
        console.log(e);
    }
}

export async function updateNota(req,res){
    try{
        const {id} = req.params;
    const {motivo,origen,asunto,fechainicio_nota,fechavenc_nota,
        cantidad_parcelas_nota,observacion_nota,nro_interno,agente_interviniente,caratula_asunto,iniciador,dni_iniciador,
        anio,fecha} = req.body;
    
    const nota = await Nota.findAll({
        attributes: ['id', 'motivo','origen','asunto','fechainicio_nota','fechavenc_nota','cantidad_parcelas_nota',
        'observacion_nota','nro_interno','agente_interviniente','caratula_asunto','iniciador',
        'dni_iniciador','anio','fecha'],
        where: {
            id: id
        }
    });

    if(nota.length > 0){
        nota.forEach(async nota => {
            await nota.update({
                motivo,
                origen,
                asunto,
                fechainicio_nota,
                fechavenc_nota,
                cantidad_parcelas_nota,
                observacion_nota,
                nro_interno,
                agente_interviniente,
                caratula_asunto,
                iniciador,
                dni_iniciador,
                anio,
                fecha
            })
            
        });
    }

    return res.json({
        message: "Nota actualizada con éxito",
        data: nota
    });
    }catch (e){
        console.log(e);
    }
}
