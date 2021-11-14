import { Router } from 'express';
const router = Router();

import { crearCitacion_colindante, getCitacionMensuraID, getCitacion_colindante, updateCitacion_Colindante } from '../controllers/citacion_colindante.controller';

// /api/usuarioa
router.post('/',crearCitacion_colindante);
router.get('/', getCitacion_colindante);
router.put('/:id',updateCitacion_Colindante);
router.get('/:mensura_id', getCitacionMensuraID);
// /api/usuario/usuarioaID




export default router;