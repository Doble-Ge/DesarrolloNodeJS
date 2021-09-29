import Sequelize from 'sequelize';
import { sequelize } from '../database/db';
import upload from './upload';

const Upload = sequelize.define('upload', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    numero: {
        type: Sequelize.NUMBER
    }
}, {
    timestamps: false
});

//Externo.hasMany(TramiteA, { foreignKey: 'tramite_id', sourceKey: 'id'});
//Externo.hasMany(TramiteA, { foreignKey: 'perfila_id'});

export default Upload;