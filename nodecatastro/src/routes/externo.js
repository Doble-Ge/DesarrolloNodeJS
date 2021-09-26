import { Router } from 'express';
const router = Router();

import { crearExterno, deleteExterno, getExterno, getOneExterno, updateExterno } from '../controllers/externo.controller';

// /api/usuario
router.post('/', crearExterno);
router.get('/', getExterno);
router.get('/:id', getOneExterno);
router.delete('/:id', deleteExterno);
router.put('/:id', updateExterno);

// /api/usuario/usuarioID
//router.get('/:id', getOneUsuario);
//router.delete('/:id', deleteUsuario);
//router.put('/:id', updateUsuario);

export default router;