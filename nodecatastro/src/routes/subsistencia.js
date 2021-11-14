import { Router } from 'express';
const router = Router();

import { crearSubsistencia, getSubsistencia, getSubsistenciaMensuraID, updateSubsistencia } from '../controllers/subsistencia.controller';

// /api/usuarioa
router.post('/', crearSubsistencia);
router.get('/', getSubsistencia);
router.put('/:id',updateSubsistencia);
router.get('/:mensura_id', getSubsistenciaMensuraID);
// /api/usuario/usuarioaID




export default router;