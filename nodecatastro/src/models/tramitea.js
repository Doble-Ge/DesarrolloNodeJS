import Sequelize from 'sequelize';
import { sequelize } from '../database/db';
import Externo from './externo';

const TramiteA = sequelize.define('tramite', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    numero: {
        type: Sequelize.NUMBER
    },
    interno_catastro: {
        type: Sequelize.INTEGER
    },
    caratula: {
        type: Sequelize.TEXT
    },
    observacion: {
        type: Sequelize.TEXT
    },
    fechainicio: {
        type: Sequelize.DATE
    }
}, {
    timestamps: false
});

//Externo.hasMany(TramiteA, { foreignKey: 'tramite_id', sourceKey: 'id'});
//Externo.hasMany(TramiteA, { foreignKey: 'perfila_id'});

export default TramiteA;