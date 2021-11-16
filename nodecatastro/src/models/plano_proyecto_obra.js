import Sequelize from 'sequelize';
import { sequelize } from '../database/db';

const Plano_proyecto_obra = sequelize.define('plano_proyecto_obra', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    pdf_proyecto_obra: {
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

export default Plano_proyecto_obra;