import Sequelize from 'sequelize';
import { sequelize } from '../database/db';

import TramiteA from './tramitea';
import UsuarioA from './usuariosa';

const Historial = sequelize.define('historial', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    estado: {
        type: Sequelize.TEXT,
    },
    fechahora: {
        type: Sequelize.TEXT
    },
    tramite_id: {
        type: Sequelize.INTEGER
    },
    usuario_id: {
        type: Sequelize.INTEGER
    }    
}, {
    timestamps: false
});


//Historial.belongsto(UsuarioA, { foreignkey: 'usuario_id', sourceKey: 'id'});
//Historial.belongsto(TramiteA, { foreignkey: 'tramite_id', sourceKey: 'id'});
//Perfil.belongsTo(Usuario, { foreignKey: 'tramite_id', sourceKey: 'id'});
export default Historial;