import Sequelize from 'sequelize';
import { sequelize } from '../database/db';

import Perfil from './perfil';

const Tramite = sequelize.define('tramite', {
    id: {
        type: Sequelize.INTEGER
    },
    nombre: {
        type: Sequelize.VARCHAR
    },
    fechainicio: {
        type: Sequelize.DATE
    }
}, {
    timestamps: false
});

Tramite.hasMany(perfil, { foreignKey: 'tramite_id', sourceKey: 'id'});
Perfil.belongsTo(Tramite, { foreignKey: 'tramite_id', sourceKey: 'id'});


export default Tramite;
