import Sequelize from 'sequelize';
import { sequelize } from '../database/db';

const Copia_escritura = sequelize.define('copia_escritura', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    pdf_escritura: {
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

export default Copia_escritura;