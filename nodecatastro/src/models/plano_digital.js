import Sequelize from 'sequelize';
import { sequelize } from '../database/db';

const Plano_digital = sequelize.define('plano_digital', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    pdf_plano_digital: {
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

export default Plano_digital;