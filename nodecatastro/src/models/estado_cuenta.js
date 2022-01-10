import Sequelize from 'sequelize';
import { sequelize } from '../database/db';

const Estado_cuenta = sequelize.define('estado_cuenta', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    db_nodb: {
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

export default Estado_cuenta;