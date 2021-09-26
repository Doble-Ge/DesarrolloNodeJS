import Sequelize from 'sequelize';
import { sequelize } from '../database/db';

import TramiteA from './tramitea';

const Oficio = sequelize.define('oficio',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    motivo_oficio: {
        type: Sequelize.INTEGER
    },
    asunto_oficio: {
        type: Sequelize.TEXT    
    },
    termino_oficio: {
        type: Sequelize.DATE
    },
    fechavenc_oficio: {
        type: Sequelize.DATE
    },
    observacion_oficio: {
        type: Sequelize.TEXT
    },
    tramite_id: {
        type: Sequelize.INTEGER
    },
    nro_interno: {
        type: Sequelize.TEXT    
    },
    anio: {
        type: Sequelize.INTEGER
    },
    agente_interviniente: {
        type: Sequelize.TEXT
    },
    fecha: {
        type: Sequelize.TEXT
    },
    fecha_inicio: {
        type: Sequelize.TEXT
    },
    exp_origen: {
        type: Sequelize.TEXT
    },
    diligenciador: {
        type: Sequelize.TEXT
    }
   
}, {
    timestamps:false
});


Oficio.hasMany(TramiteA, { foreignKey: 'tramite_id'});

export default Oficio;