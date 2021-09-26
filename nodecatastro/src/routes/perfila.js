import { Router } from 'express';
const router = Router ();

import { crearPerfil, getPerfil, updatePerfil } from '../controllers/perfila.controller';

// /api/perfil/
router.post('/', crearPerfil);
router.get('/', getPerfil);
router.put('/:id', updatePerfil);

export default router;