import { Router } from 'express';
const router = Router();

import { crearNota,deleteNota,getNota, getOneNota, updateNota} from '../controllers/nota.controller';

// /api/usuario
router.post('/', crearNota);
router.get('/', getNota);
router.get('/:id', getOneNota);
router.delete('/:id', deleteNota);
router.put('/:id', updateNota);

// /api/usuario/usuarioID
//router.get('/:id', getOneUsuario);
//router.delete('/:id', deleteUsuario);
//router.put('/:id', updateUsuario);

export default router;