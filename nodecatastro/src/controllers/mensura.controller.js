import Mensura from '../models/mensura';

export async function getMensura(req,res) {
    try{
        const mensura = await Mensura.findAll();
        res.json({
            data: mensura
        });
    } catch (e) {
        console.log(e);
    }
   
}

export async function crearMensura(req, res) {
    const {n_origen,tipo_parcela,departamento_mensura,plano_mensura,matricula,comitente_mensura,
        plano_provisorio_uno,plano_provisorio_dos,plano_provisorio_tres,plano_definitivo,
        archivo_mensura,folio_mensura,cantidad_parcelas_mensura,observacion_mensura,
    n_interno,anio,agente_interviniente,asunto,fecha_inicio,profesional,disposicion_def} = req.body;
    try {

        let nuevoMensura = await Mensura.create({
            n_origen,
            tipo_parcela,
            departamento_mensura,
            plano_mensura,
            matricula,
            comitente_mensura,
            plano_provisorio_uno,
            plano_provisorio_dos,
            plano_provisorio_tres,
            plano_definitivo,
            archivo_mensura,
            folio_mensura,
            cantidad_parcelas_mensura,
            observacion_mensura,
            n_interno,
            anio,
            agente_interviniente,
            asunto,
            fecha_inicio,
            profesional,
            disposicion_def

        }, {
            fields:['n_origen', 'tipo_parcela', 'departamento_mensura', 'plano_mensura', 'matricula'
            ,'comitente_mensura','plano_provisorio_uno','plano_provisorio_dos','plano_provisorio_tres',
        'plano_definitivo','archivo_mensura','folio_mensura','cantidad_parcelas_mensura','observacion_mensura',
    'n_interno','anio','agente_interviniente','asunto','fecha_inicio','profesional','disposicion_def']
        });
        if (nuevoMensura) {
            return res.json({
                message: 'Mensura creado correctamente',
                data: nuevoMensura
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

export async function getOneMensura(req,res){
    try {
        const {id} = req.params;
    const mensura = await Mensura.findOne({
        where: {
            id: id
        }
    });
    res.json({
        data: mensura
    });
    }catch (e){
        console.log(e);
    }
}

export async function deleteMensura(req,res){
    try {
        const {id} = req.params;
    const deleteRowCount = await Mensura.destroy({
        where: {
            id: id
        }
    });
    res.json({
        message: "Mensura eliminado con éxito",
        count: deleteRowCount
    });
    }catch (e){
        console.log(e);
    }
}

export async function updateMensura(req,res){
    try{
        const {id} = req.params;
    const {n_origen,tipo_parcela,departamento_mensura,plano_mensura,matricula,comitente_mensura,
        plano_provisorio_uno,plano_provisorio_dos,plano_provisorio_tres,plano_definitivo,
        archivo_mensura,folio_mensura,cantidad_parcelas_mensura,observacion_mensura,
    n_interno,anio,agente_interviniente,asunto,fecha_inicio,profesional,disposicion_def} = req.body;
    
    const mensura = await Mensura.findAll({
        attributes: ['id', 'n_origen', 'tipo_parcela', 'departamento_mensura', 'plano_mensura', 'matricula'
        ,'comitente_mensura','plano_provisorio_uno','plano_provisorio_dos','plano_provisorio_tres',
        'plano_definitivo','archivo_mensura','folio_mensura','cantidad_parcelas_mensura','observacion_mensura',
        'n_interno','anio','agente_interviniente','asunto','fecha_inicio','profesional','disposicion_def'],
        where: {
            id: id
        }
    });

    if(mensura.length > 0){
        mensura.forEach(async mensura => {
            await mensura.update({
                n_origen,
                tipo_parcela,
                departamento_mensura,
                plano_mensura,
                matricula,
                comitente_mensura,
                plano_provisorio_uno,
                plano_provisorio_dos,
                plano_provisorio_tres,
                plano_definitivo,
                archivo_mensura,
                folio_mensura,
                cantidad_parcelas_mensura,
                observacion_mensura,
                n_interno,
                anio,
                agente_interviniente,
                asunto,
                fecha_inicio,
                profesional,
                disposicion_def
            })
            
        });
    }

    return res.json({
        message: "Mensura actualizado con éxito",
        data: mensura
    });
    }catch (e){
        console.log(e);
    }
}