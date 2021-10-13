import { Router } from 'express';
const router = Router();

import { crearNotaExp, getNotasExp } from '../controllers/notasExp.controller';

// /api/usuarioa
router.post('/', crearNotaExp);
router.get('/', getNotasExp);

// /api/usuario/usuarioaID




export default router;