import { Router } from 'express';
const router = Router();

import { crearHistorial, deleteHistorial, getHistorial, getOneHistorial, updateHistorial } from '../controllers/historial.controller';

// /api/usuarioa
router.post('/', crearHistorial);
router.get('/', getHistorial);

// /api/usuario/usuarioaID
router.get('/:id', getOneHistorial);
router.delete('/:id', deleteHistorial);
router.put('/:id', updateHistorial);

export default router;