import Sequelize from 'sequelize';
import { sequelize } from '../database/db';

const Subsistencia = sequelize.define('subsistencia', {
    id: {
        type: Sequelize.INTEGER
    },
    titulo_subsistencia: {
        type: Sequelize.TEXT
    },
    pdf_subsistencia: {
        type: Sequelize.TEXT
    },
    mensura_id: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
});

export default Subsistencia;
