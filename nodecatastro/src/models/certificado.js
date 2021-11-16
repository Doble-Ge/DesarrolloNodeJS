import Sequelize from 'sequelize';
import { sequelize } from '../database/db';

const Certificado = sequelize.define('certificado', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    informe_catastral: {
        type: Sequelize.TEXT
    },
    pdf_certificado: {
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

export default Certificado;