import Sequelize from 'sequelize';
import { sequelize } from '../database/db';



const Perfil = sequelize.define('perfil', {
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
   /* usuario_id: {
        type: Sequelize.INTEGER
    },
    tramite_id: {
        type: Sequelize.INTEGER
    }*/
}, {
    timestamps: false
}); 

export default Perfil;