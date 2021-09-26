import express, { json } from 'express';
import morgan from 'morgan';

const cors = require('cors');
//IMPORTING ROUTES
/*import usuarioRoutes from './routes/usuario';
import tramiteRoutes from './routes/tramites';
import perfilRoutes from './routes/perfil';*/
import usuarioaRoutes from './routes/usuarioa';
import perfilaRoutes from './routes/perfila';
import historialRoutes from './routes/historial';
import externoRoutes from './routes/externo';
import oficioRoutes from './routes/oficio';
import mensuraRoutes from './routes/mensura';
import notaRoutes from './routes/nota';
import valoracionRoutes from './routes/valoracion';
//INICIACION
const app = express();
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    app.use(cors());
    next();
});
//MIDDLEWARES
app.use(morgan('dev'));
app.use(json());

//RUTAS
/*app.use('/api/usuario', usuarioRoutes);
app.use('/api/tramites', tramiteRoutes);
app.use('/api/perfil', perfilRoutes);*/
app.use('/api/usuarioa', usuarioaRoutes);
app.use('/api/perfila', perfilaRoutes);
app.use('/api/historial', historialRoutes);
app.use('/api/externo',externoRoutes);
app.use('/api/oficio',oficioRoutes);
app.use('/api/mensura',mensuraRoutes);
app.use('/api/nota',notaRoutes);
app.use('/api/valoracion',valoracionRoutes);

export default app;