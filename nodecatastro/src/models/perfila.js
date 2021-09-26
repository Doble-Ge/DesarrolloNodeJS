import Sequelize from 'sequelize';
import { sequelize } from '../database/db';



const PerfilA = sequelize.define('perfila', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nombre: {
        type: Sequelize.TEXT
    },
    tipo: {
        type: Sequelize.BOOLEAN
    },      
}, {
    timestamps: false
}); 


export default PerfilA;