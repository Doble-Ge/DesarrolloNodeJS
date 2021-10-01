import Sequelize from 'sequelize';
import { sequelize } from '../database/db';


const SolicitudesUsuarios = sequelize.define('solicitudesUsuarios',{
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
    cuil: {
        type: Sequelize.TEXT
    },
    observacion: {
        type: Sequelize.TEXT
    }
}, {
    timestamps:false
});

export default SolicitudesUsuarios;