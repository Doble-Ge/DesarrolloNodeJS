import Sequelize from 'sequelize';
import { sequelize } from '../database/db';

import PerfilA from './perfila';

const UsuarioA = sequelize.define('usuarioa',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nombre: {
        type: Sequelize.TEXT
    },
    apellido: {
        type: Sequelize.TEXT    
    },
    email: {
        type: Sequelize.TEXT
    },
    pass: {
        type: Sequelize.TEXT
    },
    cuil: {
        type: Sequelize.TEXT
    },
    perfila_id: {
        type: Sequelize.NUMBER
    }
}, {
    timestamps:false
});


PerfilA.hasMany(UsuarioA, { foreignKey: 'perfila_id'});

export default UsuarioA;