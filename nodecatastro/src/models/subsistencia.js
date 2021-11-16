import Sequelize from 'sequelize';
import { sequelize } from '../database/db';

const Subsistencia = sequelize.define('subsistencia', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    titulo_subsistencia: {
        type: Sequelize.TEXT
    },
    pdf_subsistencia: {
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

export default Subsistencia;
