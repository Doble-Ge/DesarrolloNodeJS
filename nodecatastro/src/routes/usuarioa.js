import { Router } from 'express';
const router = Router();

import { crearUsuario, deleteUsuario, getOneUsuario, getOneUsuarioCuil, getUsuario, register, updateUsuario, updateUsuarioCUIL } from '../controllers/usuarioa.controller';

// /api/usuarioa
router.post('/crear', crearUsuario);
router.get('/', getUsuario);
router.post('/registro',register);

// /api/usuario/usuarioaID
//router.get('/:id', getOneUsuario);
router.delete('/:id', deleteUsuario);
//router.put('/:id', updateUsuario);
router.put('/:cuil', updateUsuarioCUIL)
router.get('/:cuil', getOneUsuarioCuil);

export default router;
