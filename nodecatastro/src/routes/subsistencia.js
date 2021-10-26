import { Router } from 'express';
const router = Router();

import { crearSubsistencia, getSubsistencia } from '../controllers/subsistencia.controller';

// /api/usuarioa
router.post('/', crearSubsistencia);
router.get('/', getSubsistencia);

// /api/usuario/usuarioaID




export default router;