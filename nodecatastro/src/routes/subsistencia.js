import { Router } from 'express';
const router = Router();

import { crearSubsistencia, getSubsistencia, updateSubsistencia } from '../controllers/subsistencia.controller';

// /api/usuarioa
router.post('/', crearSubsistencia);
router.get('/', getSubsistencia);
router.put('/:id',updateSubsistencia);

// /api/usuario/usuarioaID




export default router;