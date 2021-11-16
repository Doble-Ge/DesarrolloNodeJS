import Sequelize from 'sequelize';
import { sequelize } from '../database/db';

const Notificacion = sequelize.define('notificacion', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    pdf_notificacion: {
        type: Sequelize.TEXT
    },
    
    mensura_id: {
        type: Sequelize.INTEGER
    },
    observacion: {
        type: Sequelize.TEXT
    }
}, {
    timestamps: false
});

export default Notificacion;