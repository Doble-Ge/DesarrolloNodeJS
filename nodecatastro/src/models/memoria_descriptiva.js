import Sequelize from 'sequelize';
import { sequelize } from '../database/db';

const Memoria_descriptiva = sequelize.define('memoria_descriptiva', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    db_nodbmem: {
        type: Sequelize.BOOLEAN
    },
    cantidad: {
        type: Sequelize.TEXT
    },
    mensura_id: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
});

export default Memoria_descriptiva;