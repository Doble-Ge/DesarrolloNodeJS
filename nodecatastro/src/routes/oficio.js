import { Router } from 'express';
const router = Router();

import { crearOficio, deleteOficio, getOficio, getOneOficio, updateOficio } from '../controllers/oficio.controller';

// /api/usuarioa
router.post('/', crearOficio);
router.get('/', getOficio);

// /api/usuario/usuarioaID
router.get('/:id', getOneOficio);
router.delete('/:id', deleteOficio);
router.put('/:id', updateOficio);

export default router;