export class ActaConformidad {
    id: number
    pdf_acta: string
    mensura_id: number


    constructor(){
        this.id = this.id
        this.pdf_acta = 'ACA VA EL PATH'
        this.mensura_id = this.mensura_id
        
    }
}

export class AprobacionAgrimensura {
    id: number
    pdf_aprobacion_agrimensura: string
    mensura_id: number

    constructor(){
        this.id = this.id
        this.pdf_aprobacion_agrimensura = 'ACA VA EL PATH'
        this.mensura_id = this.mensura_id
    }
}

export class Certificados {
    id: number
    informe_catastral: string
    pdf_certificado: string
    mensura_id: number

    constructor(){
        this.id = this.id
        this.informe_catastral = this.informe_catastral
        this.pdf_certificado = 'ACA VA EL PATH'
        this.mensura_id = this.mensura_id
    }
}

export class CitacionColindantes {
    id: number
    pdf_citacion: string
    mensura_id: number

    constructor(){
        this.id = this.id
        this.pdf_citacion = this.pdf_citacion
        this.mensura_id = this.mensura_id
    }
}

export class CopiaEscritura {
    id: number
    pdf_escritura: string
    mensura_id: number

    constructor(){
        this.id = this.id
        this.pdf_escritura = this.pdf_escritura
        this.mensura_id = this.mensura_id
    }
}

export class EstadoCuenta {
    id: number
    db_nodb: string
    mensura_id: number

    constructor(){
        this.id = this.id
        this.db_nodb = this.db_nodb
        this.mensura_id = this.mensura_id
    }
}

export class MemoriaDescriptivas {
    id: number
    db_nodbmem: boolean
    cantidad: string
    mensura_id: number

    constructor(){
        this.id = this.id
        this.db_nodbmem = this.db_nodbmem
        this.cantidad = this.cantidad
        this.mensura_id = this.mensura_id
    }
}

export class Notificaciones {
    id: number
    pdf_notificacion: string
    mensura_id: number

    constructor(){
        this.id = this.id
        this.pdf_notificacion = this.pdf_notificacion
        this.mensura_id = this.mensura_id
    }
}

export class PlanoDigital {

    id: number
    pdf_plano_digital: string
    mensura_id: number

    constructor(){
        this.id= this.id
        this.pdf_plano_digital = this.pdf_plano_digital
        this.mensura_id = this.mensura_id
    }

}

export class PlanoProyectoObras {
    id: number
    pdf_citacion: string
    mensura_id: number

    constructor(){
        this.id = this.id
        this.pdf_citacion = this.pdf_citacion
        this.mensura_id = this.mensura_id
    }
}

export class Subsistencia {
    id: number
    titulo_subsistencia: string
    pdf_subsistencia: string
    mensura_id: number

    constructor(){
        this.id = this.id
        this.titulo_subsistencia = this.titulo_subsistencia
        this.pdf_subsistencia = this.pdf_subsistencia
        this.mensura_id = this.mensura_id
    }
}

export class VisacionAgrimensores {
    id: number
    pdf_visado_agrimensores: string
    mensura_id: number


    constructor(){
        this.id = this.id
        this.pdf_visado_agrimensores = this.pdf_visado_agrimensores
        this.mensura_id = this.mensura_id
    }
}


export class VisacionMunicipal {
    id: number
    pdf_visacion_municipal: string
    mensura_id: number

    constructor(){
        this.id = this.id
        this.pdf_visacion_municipal = this.pdf_visacion_municipal
        this.mensura_id = this.mensura_id
    }
}