import Sequelize from 'sequelize';
import { sequelize } from '../database/db';

import Perfil from './perfil';

const Usuario = sequelize.define('usuario', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nombre: {
        type: Sequelize.TEXT,
    },
    apellido:{
        type: Sequelize.TEXT
    },
    email: {
        type: Sequelize.TEXT
    },
    pass: {
        type: Sequelize.TEXT
    },
    cuil:{
        type: Sequelize.NUMERIC
    },
    perfila_id: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
});


/*Usuario.hasMany(Perfil, { foreignKey: 'usuario_id'});
Perfil.belongsTo(Usuario, { foreignKey: 'tramite_id', sourceKey: 'id'});
*/
export default Usuario;