import Sequelize from 'sequelize';
import { sequelize } from '../database/db';

const NotaExp = sequelize.define('notasExpedientes', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nombreCompleto: {
        type: Sequelize.TEXT
    },
    cuil: {
        type: Sequelize.TEXT
    },
    descripcion: {
        type: Sequelize.TEXT
    },
    pdf_notasExp: {
        type: Sequelize.TEXT
    }
}, {
    timestamps: false
});

export default NotaExp;
