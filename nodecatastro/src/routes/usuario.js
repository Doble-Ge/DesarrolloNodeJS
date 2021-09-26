import { Router } from 'express';
const router = Router();

import { crearUsuario, deleteUsuario, getOneUsuario, getUsuario, updateUsuario } from '../controllers/usuario.controller';

// /api/usuario
router.post('/', crearUsuario);
router.get('/', getUsuario);

// /api/usuario/usuarioID
router.get('/:id', getOneUsuario);
router.delete('/:id', deleteUsuario);
router.put('/:id', updateUsuario);

export default router;