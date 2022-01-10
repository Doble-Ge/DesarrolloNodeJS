import Sequelize from 'sequelize';
import { sequelize } from '../database/db';

const Memoria_descriptiva = sequelize.define('memoria_descriptiva', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    db_nodbmem: {
        type: Sequelize.TEXT
    },
    cantidad: {
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

export default Memoria_descriptiva;