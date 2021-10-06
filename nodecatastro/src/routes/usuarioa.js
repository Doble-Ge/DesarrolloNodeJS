import { Router } from 'express';
const router = Router();

import { crearUsuario, deleteUsuario, getOneUsuario, getOneUsuarioCuil, getUsuario, updateUsuario, updateUsuarioCUIL } from '../controllers/usuarioa.controller';

// /api/usuarioa
router.post('/', crearUsuario);
router.get('/', getUsuario);

// /api/usuario/usuarioaID
//router.get('/:id', getOneUsuario);
router.delete('/:id', deleteUsuario);
//router.put('/:id', updateUsuario);
router.put('/:cuil', updateUsuarioCUIL)
router.get('/:cuil', getOneUsuarioCuil);

export default router;
