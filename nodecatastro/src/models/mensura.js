import Sequelize from 'sequelize';
import { sequelize } from '../database/db';

import TramiteA from './tramitea';

const Mensura = sequelize.define('mensura',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    numOrigen: {
        type: Sequelize.TEXT
    },
    tipoParcela: {
        type: Sequelize.TEXT   
    },
    departamento: {
        type: Sequelize.TEXT
    },
    planoDe: {
        type: Sequelize.TEXT
    },
    matricula: {
        type: Sequelize.TEXT
    },
    comitente: {
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
    numeroArchivo: {
        type: Sequelize.INTEGER
    },
    folios: {
        type: Sequelize.TEXT
    },
    cantidadParcelas: {
        type: Sequelize.INTEGER
    },
    detalle_observacion: {
        type: Sequelize.TEXT
    },
    tramite_id: {
        type: Sequelize.INTEGER
    },
    numeroInterno: {
        type: Sequelize.TEXT
    },
    anio: {
        type: Sequelize.INTEGER
    },
    agenteInterviniente: {
        type: Sequelize.TEXT
    },
    caratula_asunto: {
        type: Sequelize.TEXT
    },
    fechaIngreso: {
        type: Sequelize.TEXT
    },
    profesional: {
        type: Sequelize.TEXT
    },
    disposicionDef: {
        type: Sequelize.TEXT
    },
    
    
    
}, {
    timestamps:false
});


Mensura.hasMany(TramiteA, { foreignKey: 'tramite_id'});

export default Mensura;