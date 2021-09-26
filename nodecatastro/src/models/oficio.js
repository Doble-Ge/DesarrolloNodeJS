import Sequelize from 'sequelize';
import { sequelize } from '../database/db';

import TramiteA from './tramitea';

const Oficio = sequelize.define('oficio',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    motivo: {
        type: Sequelize.TEXT
    },
    caratula_asunto: {
        type: Sequelize.TEXT    
    },
    fechaTermino: {
        type: Sequelize.TEXT
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
    fecha: {
        type: Sequelize.TEXT
    },
    fechaIngreso: {
        type: Sequelize.TEXT
    },
    expedienteOrigen: {
        type: Sequelize.TEXT
    },
    diligenciador: {
        type: Sequelize.TEXT
    },
    asunto_caratula: {
        type: Sequelize.TEXT
    }
   
}, {
    timestamps:false
});


Oficio.hasMany(TramiteA, { foreignKey: 'tramite_id'});

export default Oficio;