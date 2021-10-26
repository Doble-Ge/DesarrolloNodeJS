import { Router } from 'express';
const router = Router();

import { crearCitacion_colindante, getCitacion_colindante } from '../controllers/citacion_colindante.controller';

// /api/usuarioa
router.post('/',crearCitacion_colindante);
router.get('/', getCitacion_colindante);

// /api/usuario/usuarioaID




export default router;