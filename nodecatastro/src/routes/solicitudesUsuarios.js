import { Router } from 'express';
const router = Router();

import { crearSolicitudUsuario, getSolicitudesUsuario } from '../controllers/solicitudesUsuarios.controller';

// /api/solicitudesUsuarios/
router.post('/', crearSolicitudUsuario);
router.get('/', getSolicitudesUsuario);

export default router;