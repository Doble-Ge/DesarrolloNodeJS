import Sequelize from 'sequelize';
import { sequelize } from '../database/db';

import TramiteA from './tramitea';
 
const Externo = sequelize.define('externo', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    codigo_externo: {
        type: Sequelize.TEXT
    },
    numero_externo: {
        type: Sequelize.TEXT
    },
    anyo_externo: {
        type: Sequelize.INTEGER
    },
    iniciador_externo: {
        type: Sequelize.TEXT
    },
    asunto_externo: {
        type: Sequelize.TEXT
    },
    cantidad_parcelas_externo: {
        type: Sequelize.TEXT
    },
    codigo_interno: {
        type: Sequelize.TEXT
    },
    observacion_externo: {
        type: Sequelize.TEXT
    },
    tramite_id:{
        type:Sequelize.INTEGER
    },
    agente_interviniente_externo: {
        type: Sequelize.TEXT
    },
    fecha: {
        type: Sequelize.TEXT
    },
    fechainicio_externo:{
        type:Sequelize.TEXT
    },
    origen:{
        type:Sequelize.TEXT
    },


}, {
    timestamps: false
});

Externo.hasMany(TramiteA, { foreignKey: 'tramite_id'});

export default Externo;
