import express, { json } from 'express';
import morgan from 'morgan';

const cors = require('cors');
const bodyparser = require('body-parser');


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
import uploadRoutes from './routes/upload';
import solicitudesUsuariosRoutes from './routes/solicitudesUsuarios';
import contactoRoutes from './routes/contacto';
import correoRoutes from './routes/correo'
import { envioCorreo } from './controllers/correo.controller';
import notasExpRoutes from './routes/notasExp'
import notasExpPDFRoutes from './routes/notasExpPDF';
import subsistenciaRoutes from './routes/subsistencia';
import subsistenciaPDFRoutes from './routes/subsistenciaPDF';
import acta_conformidadRoutes from './routes/acta_conformidad';
import acta_conformidadPDFRoutes from './routes/acta_conformidadPDF';
import aprobacion_agrimensuraRoutes from './routes/aprobacion_agrimensura';
import aprobacion_agrimensuraPDFRoutes from './routes/aprobacion_agrimensuraPDF';
import certificadoRoutes from './routes/certificado';
import certificadoPDFRoutes from './routes/certificadoPDF';
import citacion_colindanteRoutes from './routes/citacion_colindante';
import citacion_colindantePDFRoutes from './routes/citacion_colindantePDF';
import copia_escrituraRoutes from './routes/copia_escritura';
import copia_escrituraPDFRoutes from './routes/copia_escrituraPDF';
import estado_cuentaRoutes from './routes/estado_cuenta';
import memoria_descriptivaRoutes from './routes/memoria_descriptiva';
import notificacionRoutes from './routes/notificacion';
import notificacionPDFRoutes from './routes/notificacionPDF';
import plano_digitalRoutes from './routes/plano_digital';
import plano_digitalPDFRoutes from './routes/plano_digitalPDF';
import plano_proyecto_obraRoutes from './routes/plano_proyecto_obra';
import plano_proyecto_obraPDFRoutes from './routes/plano_proyecto_obraPDF';
import visacion_agrimensoresRoutes from './routes/visacion_agrimensores';
import visacion_agrimensoresPDFRoutes from './routes/visacion_agrimensoresPDF';
import visacion_municipalRoutes from './routes/visacion_municipal';
import visacion_municipalPDFRoutes from './routes/visacion_municipalPDF';
import path, { dirname } from 'path';

//INICIACION
const app = express();
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*")
    app.use(cors());
    next();
});
//MIDDLEWARES
app.use(morgan('dev'));
app.use(json());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, './uploads')));
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
app.use('/api/upload',uploadRoutes);
app.use('/api/solicitudesUsuarios', solicitudesUsuariosRoutes);
app.use('/api/subsistenciaPDF', subsistenciaPDFRoutes);
app.use('/api/contacto', contactoRoutes);
app.use('/api/notasExp', notasExpRoutes)
app.use('/api/envio', correoRoutes);
app.use('/api/notasExpPDF',notasExpPDFRoutes);
app.use('/api/subsistencia',subsistenciaRoutes);
app.use('/api/acta_conformidad',acta_conformidadRoutes);
app.use('/api/acta_conformidadPDF',acta_conformidadPDFRoutes);
app.use('/api/aprobacion_agrimensura',aprobacion_agrimensuraRoutes);
app.use('/api/aprobacion_agrimensuraPDF',aprobacion_agrimensuraPDFRoutes);
app.use('/api/certificado',certificadoRoutes);
app.use('/api/certificadoPDF',certificadoPDFRoutes);
app.use('/api/citacion_colindante',citacion_colindanteRoutes);
app.use('/api/citacion_colindantePDF',citacion_colindantePDFRoutes);
app.use('/api/copia_escritura',copia_escrituraRoutes);
app.use('/api/copia_escrituraPDF',copia_escrituraPDFRoutes);
app.use('/api/estado_cuenta',estado_cuentaRoutes);
app.use('/api/memoria_descriptiva',memoria_descriptivaRoutes);
app.use('/api/notificacion',notificacionRoutes);
app.use('/api/notificacionPDF',notificacionPDFRoutes);
app.use('/api/plano_digital',plano_digitalRoutes);
app.use('/api/plano_digitalPDF',plano_digitalPDFRoutes);
app.use('/api/plano_proyecto_obra',plano_proyecto_obraRoutes);
app.use('/api/plano_proyecto_obraPDF',plano_proyecto_obraPDFRoutes);
app.use('/api/visacion_agrimensores',visacion_agrimensoresRoutes);
app.use('/api/visacion_agrimensoresPDF',visacion_agrimensoresPDFRoutes);
app.use('/api/visacion_municipal',visacion_municipalRoutes);
app.use('/api/visacion_municipalPDF',visacion_municipalPDFRoutes);

//prueba subida

export default app;