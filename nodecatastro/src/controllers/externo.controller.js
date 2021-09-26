import Externo from '../models/externo';

export async function getExterno(req,res) {
    try{
        const externo = await Externo.findAll();
        res.json({
            data: externo
        });
    } catch (e) {
        console.log(e);
    }
   
}

export async function crearExterno(req, res) {
    const {codigo_externo, numero_externo, anyo_externo, iniciador_externo,asunto_externo,
        cantidad_parcelas_externo,codigo_interno,observacion_externo,agente_interviniente_externo,
        fecha,fechainicio_externo,origen} = req.body;
    try {

        let nuevoExterno = await Externo.create({
            codigo_externo,
            numero_externo,
            anyo_externo,
            iniciador_externo,
            asunto_externo,
            cantidad_parcelas_externo,
            codigo_interno,
            observacion_externo,
            agente_interviniente_externo,
            fecha,
            fechainicio_externo,
            origen
   
        }, {
            fields:['codigo_externo', 'numero_externo', 'anyo_externo', 'iniciador_externo',
             'asunto_externo','cantidad_parcelas_externo','codigo_interno','observacion_externo',
            'agente_interviniente_externo','fecha','fechainicio_externo','origen']
        });
        if (nuevoExterno) {
            return res.json({
                message: 'Externo creado correctamente',
                data: nuevoExterno
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

export async function getOneExterno(req,res){
    try {
        const {id} = req.params;
    const externo = await Externo.findOne({
        where: {
            id: id
        }
    });
    res.json({
        data: externo
    });
    }catch (e){
        console.log(e);
    }
}

export async function deleteExterno(req,res){
    try {
        const {id} = req.params;
    const deleteRowCount = await Externo.destroy({
        where: {
            id: id
        }
    });
    res.json({
        message: "Externo eliminado con éxito",
        count: deleteRowCount
    });
    }catch (e){
        console.log(e);
    }
}

export async function updateExterno(req,res){
    try{
        const {id} = req.params;
    const {codigo_externo, numero_externo, anyo_externo, iniciador_externo,asunto_externo,
        cantidad_parcelas_externo,codigo_interno,observacion_externo,agente_interviniente_externo,
        fecha,fechainicio_externo,origen} = req.body;
    
    const externo = await Externo.findAll({
        attributes: ['id', 'codigo_externo', 'numero_externo', 'anyo_externo', 'iniciador_externo',
        'asunto_externo','cantidad_parcelas_externo','codigo_interno','observacion_externo',
       'agente_interviniente_externo','fecha','fechainicio_externo','origen'],
        where: {
            id: id
        }
    });

    if(externo.length > 0){
        externo.forEach(async externo => {
            await externo.update({
                codigo_externo,
            numero_externo,
            anyo_externo,
            iniciador_externo,
            asunto_externo,
            cantidad_parcelas_externo,
            codigo_interno,
            observacion_externo,
            agente_interviniente_externo,
            fecha,
            fechainicio_externo,
            origen
            })
            
        });
    }

    return res.json({
        message: "Externo actualizado con éxito",
        data: externo
    });
    }catch (e){
        console.log(e);
    }
}
