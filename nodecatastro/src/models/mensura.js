import Sequelize from 'sequelize';
import { sequelize } from '../database/db';

import TramiteA from './tramitea';

const Mensura = sequelize.define('mensura',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    n_origen: {
        type: Sequelize.TEXT
    },
    tipo_parcela: {
        type: Sequelize.INTEGER   
    },
    departamento_mensura: {
        type: Sequelize.INTEGER
    },
    plano_mensura: {
        type: Sequelize.TEXT
    },
    matricula: {
        type: Sequelize.TEXT
    },
    comitente_mensura: {
        type: Sequelize.TEXT
    },
    plano_provisorio_uno: {
        type: Sequelize.TEXT
    },
    plano_provisorio_dos: {
        type: Sequelize.TEXT    
    },
    plano_provisorio_tres: {
        type: Sequelize.TEXT
    },
    plano_definitivo: {
        type: Sequelize.TEXT
    },
    archivo_mensura: {
        type: Sequelize.TEXT
    },
    folio_mensura: {
        type: Sequelize.TEXT
    },
    cantidad_parcelas_mensura: {
        type: Sequelize.TEXT
    },
    observacion_mensura: {
        type: Sequelize.TEXT
    },
    tramite_id: {
        type: Sequelize.INTEGER
    },
    n_interno: {
        type: Sequelize.TEXT
    },
    anio: {
        type: Sequelize.INTEGER
    },
    agente_interviniente: {
        type: Sequelize.TEXT
    },
    asunto: {
        type: Sequelize.TEXT
    },
    fecha_inicio: {
        type: Sequelize.TEXT
    },
    profesional: {
        type: Sequelize.TEXT
    },
    disposicion_def: {
        type: Sequelize.TEXT
    },
    
    
    
}, {
    timestamps:false
});


Mensura.hasMany(TramiteA, { foreignKey: 'tramite_id'});

export default Mensura;