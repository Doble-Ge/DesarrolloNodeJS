import { Router } from 'express';
const router = Router();

import { crearValoracion, deleteValoracion, getOneValoracion, getValoracion, updateValoracion } from '../controllers/valoracion.controller';

// /api/usuario
router.post('/', crearValoracion);
router.get('/', getValoracion);
router.get('/:id', getOneValoracion);
router.delete('/:id', deleteValoracion);


// /api/usuario/usuarioID
//router.get('/:id', getOneUsuario);
//router.delete('/:id', deleteUsuario);
//router.put('/:id', updateUsuario);

export default router;