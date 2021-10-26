import Sequelize from 'sequelize';
import { sequelize } from '../database/db';

const Aprobacion_agrimensura = sequelize.define('aprobacion_agrimensura', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    pdf_aprobacion_agrimensura: {
        type: Sequelize.TEXT
    },
    mensura_id: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
});

export default Aprobacion_agrimensura;