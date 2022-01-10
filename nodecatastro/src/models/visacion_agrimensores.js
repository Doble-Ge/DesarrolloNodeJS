import Sequelize from 'sequelize';
import { sequelize } from '../database/db';

const Visacion_agrimensores = sequelize.define('visacion_agrimensores', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    pdf_visado_agrimensores: {
        type: Sequelize.TEXT
    },
    mensura_id: {
        type: Sequelize.INTEGER
    },
    tipo: {
        type: Sequelize.TEXT
    },
    observacion: {
        type: Sequelize.TEXT
    }
}, {
    timestamps: false
});

export default Visacion_agrimensores;