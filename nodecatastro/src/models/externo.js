import Sequelize from 'sequelize';
import { sequelize } from '../database/db';

import TramiteA from './tramitea';
 
const Externo = sequelize.define('externo', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    codigoOrigen: {
        type: Sequelize.TEXT
    },
    numeroOrigen: {
        type: Sequelize.TEXT
    },
    anio: {
        type: Sequelize.INTEGER
    },
    iniciador: {
        type: Sequelize.TEXT
    },
    caratula_asunto: {
        type: Sequelize.TEXT
    },
    cantidadParcelas: {
        type: Sequelize.INTEGER
    },
    numeroInterno: {
        type: Sequelize.TEXT
    },
    detalle_observacion: {
        type: Sequelize.TEXT
    },
    tramite_id:{
        type:Sequelize.INTEGER
    },
    agenteInterviniente: {
        type: Sequelize.TEXT
    },
    fecha: {
        type: Sequelize.TEXT
    },
    fechaIniciacion:{
        type:Sequelize.TEXT
    },
    origenExpediente:{
        type:Sequelize.TEXT
    },
    anioOrigen: {
        type:Sequelize.TEXT
    },
    asunto_caratula: {
        type:Sequelize.TEXT
    }


}, {
    timestamps: false
});

//Externo.hasMany(TramiteA, { foreignKey: 'tramite_id'});

export default Externo;
