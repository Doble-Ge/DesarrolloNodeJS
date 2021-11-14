export class ActaConformidad {
    id: number
    pdf_acta: string
    mensura_id: number


    constructor(){
        this.id = this.id
        this.pdf_acta = '/nodecatastro/uploads/acta_conformidad/'
        this.mensura_id = this.mensura_id
        
    }
}

export class AprobacionAgrimensura {
    id: number
    pdf_aprobacion_agrimensura: string
    mensura_id: number

    constructor(){
        this.id = this.id
        this.pdf_aprobacion_agrimensura = '/nodecatastro/uploads/aprobacion_agrimensura/'
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
        this.pdf_certificado = '/nodecatastro/uploads/certificado/'
        this.mensura_id = this.mensura_id
    }
}

export class CitacionColindantes {
    id: number
    pdf_citacion: string
    mensura_id: number

    constructor(){
        this.id = this.id
        this.pdf_citacion = '/nodecatastro/uploads/citacion_colindante/'
        this.mensura_id = this.mensura_id
    }
}

export class CopiaEscritura {
    id: number
    pdf_escritura: string
    mensura_id: number

    constructor(){
        this.id = this.id
        this.pdf_escritura = '/nodecatastro/uploads/copia_escritura/'
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
        this.pdf_notificacion = '/nodecatastro/uploads/notificacion/'
        this.mensura_id = this.mensura_id
    }
}

export class PlanoDigital {

    id: number
    pdf_plano_digital: string
    mensura_id: number

    constructor(){
        this.id= this.id
        this.pdf_plano_digital = '/nodecatastro/uploads/plano_digital/'
        this.mensura_id = this.mensura_id
    }

}

export class PlanoProyectoObras {
    id: number
    pdf_proyecto_obra: string
    mensura_id: number

    constructor(){
        this.id = this.id
        this.pdf_proyecto_obra = '/nodecatastro/uploads/plano_proyecto_obra/'
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
        this.pdf_subsistencia = '/nodecatastro/uploads/subsistencia/'
        this.mensura_id = this.mensura_id
    }
}

export class VisacionAgrimensores {
    id: number
    pdf_visado_agrimensores: string
    mensura_id: number


    constructor(){
        this.id = this.id
        this.pdf_visado_agrimensores = '/nodecatastro/uploads/visacion_agrimensores/'
        this.mensura_id = this.mensura_id
    }
}


export class VisacionMunicipal {
    id: number
    pdf_visacion_municipal: string
    mensura_id: number

    constructor(){
        this.id = this.id
        this.pdf_visacion_municipal = '/nodecatastro/uploads/visacion_municipal/'
        this.mensura_id = this.mensura_id
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