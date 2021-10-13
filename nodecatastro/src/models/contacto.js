import Sequelize from 'sequelize';
import { sequelize } from '../database/db';

const Contacto = sequelize.define('contacto', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nombreCompleto: {
        type: Sequelize.TEXT
    },
    email: {
        type: Sequelize.TEXT
    },
    telefono: {
        type: Sequelize.TEXT
    },
    consulta: {
        type: Sequelize.TEXT
    }
}, {
    timestamps: false
});

export default Contacto;
