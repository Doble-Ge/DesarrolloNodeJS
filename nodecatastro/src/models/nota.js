import Sequelize from 'sequelize';
import { sequelize } from '../database/db';

import TramiteA from './tramitea';
 
const Nota = sequelize.define('nota', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    motivo: {
        type: Sequelize.TEXT
    },
    nroOrigen: {
        type: Sequelize.TEXT
    },
    asunto: {
        type: Sequelize.TEXT
    },
    fechaIngreso: {
        type: Sequelize.TEXT
    },
    fechaVencimiento: {
        type: Sequelize.TEXT
    },
    cantidadParcelas: {
        type: Sequelize.INTEGER
    },
    detalle_observacion: {
        type: Sequelize.TEXT
    },
    tramite_id:{
        type:Sequelize.INTEGER
    },
    numeroInterno: {
        type: Sequelize.TEXT
    },
    agenteInterviniente: {
        type: Sequelize.TEXT
    },
    caratula_asunto: {
        type: Sequelize.TEXT
    },
    iniciador: {
        type: Sequelize.TEXT
    },
    dni_iniciador: {
        type: Sequelize.TEXT
    },
    anio: {
        type: Sequelize.INTEGER
    },
    fecha: {
        type: Sequelize.TEXT
    }

}, {
    timestamps: false
});

Nota.hasMany(TramiteA, { foreignKey: 'tramite_id'});

export default Nota;
