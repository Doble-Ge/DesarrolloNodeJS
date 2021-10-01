import { Router } from 'express';
const router = Router();

import { crearSolicitudUsuario, getSolicitudesUsuario, deleteSolicitud } from '../controllers/solicitudesUsuarios.controller';

// /api/solicitudesUsuarios/
router.post('/', crearSolicitudUsuario);
router.get('/', getSolicitudesUsuario);
router.delete('/:id', deleteSolicitud)
export default router;
