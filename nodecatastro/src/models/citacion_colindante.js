import Sequelize from 'sequelize';
import { sequelize } from '../database/db';

const Citacion_colindante = sequelize.define('citacion_colindante', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    pdf_citacion: {
        type: Sequelize.TEXT
    },
   
    mensura_id: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
});

export default Citacion_colindante;