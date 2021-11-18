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
    const {numOrigen,tipoParcela,departamento,planoDe,matricula,comitente,
        plano_provisorio_uno,plano_provisorio_dos,plano_provisorio_tres,plano_definitivo,
        numeroArchivo,folios,cantidadParcelas,detalle_observacion,
        numeroInterno,anio,agenteInterviniente,caratula_asunto,fechaIngreso,profesional,disposicionDef} = req.body;
    try {

        let nuevoMensura = await Mensura.create({
            numOrigen,
            tipoParcela,
            departamento,
            planoDe,
            matricula,
            comitente,
            plano_provisorio_uno,
            plano_provisorio_dos,
            plano_provisorio_tres,
            plano_definitivo,
            numeroArchivo,
            folios,
            cantidadParcelas,
            detalle_observacion,
            numeroInterno,
            anio,
            agenteInterviniente,
            caratula_asunto,
            fechaIngreso,
            profesional,
            disposicionDef

        }, {
            fields:['numOrigen', 'tipoParcela', 'departamento', 'planoDe', 'matricula',
            'comitente','plano_provisorio_uno','plano_provisorio_dos','plano_provisorio_tres',
            'plano_definitivo','numeroArchivo','folios','cantidadParcelas','detalle_observacion',
            'numeroInterno','anio','agenteInterviniente','caratula_asunto','fechaIngreso','profesional','disposicionDef']
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
    const {numOrigen,tipoParcela,departamento,planoDe,matricula,comitente,
        plano_provisorio_uno,plano_provisorio_dos,plano_provisorio_tres,plano_definitivo,
        numeroArchivo,folios,cantidadParcelas,detalle_observacion,
        numeroInterno,anio,agenteInterviniente,caratula_asunto,fechaIngreso,profesional,disposicionDef} = req.body;
    
    const mensura = await Mensura.findAll({
        attributes: ['id', 'numOrigen', 'tipoParcela', 'departamento', 'planoDe', 'matricula',
        'comitente','plano_provisorio_uno','plano_provisorio_dos','plano_provisorio_tres',
        'plano_definitivo','numeroArchivo','folios','cantidadParcelas','detalle_observacion',
        'numeroInterno','anio','agenteInterviniente','caratula_asunto','fechaIngreso','profesional','disposicionDef'],
        where: {
            id: id
        }
    });

    if(mensura.length > 0){
        mensura.forEach(async mensura => {
            await mensura.update({
                numOrigen,
                tipoParcela,
                departamento,
                planoDe,
                matricula,
                comitente,
                plano_provisorio_uno,
                plano_provisorio_dos,
                plano_provisorio_tres,
                plano_definitivo,
                numeroArchivo,
                folios,
                cantidadParcelas,
                detalle_observacion,
                numeroInterno,
                anio,
                agenteInterviniente,
                caratula_asunto,
                fechaIngreso,
                profesional,
                disposicionDef
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