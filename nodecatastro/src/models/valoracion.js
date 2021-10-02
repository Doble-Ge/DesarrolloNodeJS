import Sequelize from 'sequelize';
import { sequelize } from '../database/db';

import TramiteA from './tramitea';
 
const Valoracion = sequelize.define('valoracion', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    valoracion: {
        type: Sequelize.INTEGER
    },
    tramite_id:{
        type:Sequelize.INTEGER
    }

}, {
    timestamps: false
});

//Valoracion.hasMany(TramiteA, { foreignKey: 'tramite_id'});

export default Valoracion;