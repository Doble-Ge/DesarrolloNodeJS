import { Router } from 'express';
const router = Router();

import { guardarPDFSubsistencia } from '../controllers/subsistencia.controller';

// /api/subsistencia
//router.post('/', crearUsuario);
//router.get('/', getUsuario);
router.post('/', guardarPDFSubsistencia);

// /api/usuario/usuarioaID
//router.get('/:id', getOneUsuario);
//router.delete('/:id', deleteUsuario);
//router.put('/:id', updateUsuario);
//router.put('/:cuil', updateUsuarioCUIL)
//router.get('/:cuil', getOneUsuarioCuil);

export default router;