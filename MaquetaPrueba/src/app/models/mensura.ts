export class ActaConformidad {
    id: number
    pdf_acta: string
    mensura_id: number
    observacion: string


    constructor(){
        this.id = this.id
        this.pdf_acta = this.pdf_acta
        this.mensura_id = this.mensura_id
        this.observacion = this.observacion
    }
}

export class AprobacionAgrimensura {
    id: number
    pdf_aprobacion_agrimensura: string
    mensura_id: number
    observacion: string

    constructor(){
        this.id = this.id
        this.pdf_aprobacion_agrimensura = this.pdf_aprobacion_agrimensura
        this.mensura_id = this.mensura_id
        this.observacion = this.observacion
    }
}

export class Certificados {
    id: number
    informe_catastral: string
    pdf_certificado: string
    mensura_id: number
    observacion: string

    constructor(){
        this.id = this.id
        this.informe_catastral = this.informe_catastral
        this.pdf_certificado = this.pdf_certificado
        this.mensura_id = this.mensura_id
        this.observacion = this.observacion
    }
}

export class CitacionColindantes {
    id: number
    pdf_citacion: string
    mensura_id: number
    observacion: string

    constructor(){
        this.id = this.id
        this.pdf_citacion = this.pdf_citacion
        this.mensura_id = this.mensura_id
        this.observacion = this.observacion
    }
}

export class CopiaEscritura {
    id: number
    pdf_escritura: string
    mensura_id: number
    observacion: string

    constructor(){
        this.id = this.id
        this.pdf_escritura = this.pdf_escritura
        this.mensura_id = this.mensura_id
        this.observacion = this.observacion
    }
}

export class EstadoCuenta {
    id: number
    db_nodb: string
    mensura_id: number
    observacion: string

    constructor(){
        this.id = this.id
        this.db_nodb = "Debe"
        this.mensura_id = this.mensura_id
        this.observacion = this.observacion
    }
}

export class MemoriaDescriptivas {
    id: number
    db_nodbmem: string
    cantidad: string
    mensura_id: number
    observacion: string

    constructor(){
        this.id = this.id
        this.db_nodbmem = "Debe"
        this.cantidad = this.cantidad
        this.mensura_id = this.mensura_id
        this.observacion = this.observacion
    }
}

export class Notificaciones {
    id: number
    pdf_notificacion: string
    mensura_id: number
    observacion: string

    constructor(){
        this.id = this.id
        this.pdf_notificacion = this.pdf_notificacion
        this.mensura_id = this.mensura_id
        this.observacion = this.observacion
    }
}

export class PlanoDigital {

    id: number
    pdf_plano_digital: string
    mensura_id: number
    observacion: string

    constructor(){
        this.id= this.id
        this.pdf_plano_digital = this.pdf_plano_digital
        this.mensura_id = this.mensura_id
        this.observacion = this.observacion
    }

}

export class PlanoProyectoObras {
    id: number
    pdf_proyecto_obra: string
    mensura_id: number
    observacion: string

    constructor(){
        this.id = this.id
        this.pdf_proyecto_obra = this.pdf_proyecto_obra
        this.mensura_id = this.mensura_id
        this.observacion = this.observacion
    }
}

export class Subsistencia {
    id: number
    titulo_subsistencia: string
    pdf_subsistencia: string
    mensura_id: number
    observacion: string

    constructor(){
        this.id = this.id
        this.titulo_subsistencia = this.titulo_subsistencia
        this.pdf_subsistencia = this.pdf_subsistencia
        this.mensura_id = this.mensura_id
        this.observacion = this.observacion
    }
}

export class VisacionAgrimensores {
    id: number
    pdf_visado_agrimensores: string
    tipo: string
    mensura_id: number
    observacion: string

    constructor(){
        this.id = this.id
        this.pdf_visado_agrimensores = this.pdf_visado_agrimensores
        this.mensura_id = this.mensura_id
        this.tipo = 'Agrimensor'
        this.observacion = this.observacion
    }
}


export class VisacionMunicipal {
    id: number
    pdf_visacion_municipal: string
    mensura_id: number
    observacion: string

    constructor(){
        this.id = this.id
        this.pdf_visacion_municipal = this.pdf_visacion_municipal
        this.mensura_id = this.mensura_id
        this.observacion = this.observacion
    }

}

export class id_Mensuras{
    id_subsistencia: number
    id_acta_conformidad: number
    id_aprobacion_agrimensura: number
    id_certificado: number
    id_citacion_colindante: number
    id_copia_escritura: number
    id_estado_cuenta: number
    id_memoria_descriptiva: number
    id_notificacion: number
    id_planoDigital: number
    id_plano_proyecto_obra: number
    id_visacion_agrimensores: number
    id_visacion_municipal: number
}