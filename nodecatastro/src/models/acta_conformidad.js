import Sequelize from 'sequelize';
import { sequelize } from '../database/db';

const Acta_conformidad = sequelize.define('acta_conformidad', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    pdf_acta: {
        type: Sequelize.TEXT
    },
    mensura_id: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
});

export default Acta_conformidad;
