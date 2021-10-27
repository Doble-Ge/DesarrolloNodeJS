import Sequelize from 'sequelize';
import { sequelize } from '../database/db';

const Visacion_municipal = sequelize.define('visacion_municipal', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    pdf_visacion_municipal: {
        type: Sequelize.TEXT
    },
    mensura_id: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
});

export default Visacion_municipal;