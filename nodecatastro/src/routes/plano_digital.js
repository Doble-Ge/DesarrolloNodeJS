import { Router } from 'express';
const router = Router();

import { crearPlano_digital, getPlano_digital, updatePlano_Digital } from '../controllers/plano_digital.controller';

// /api/usuarioa
router.post('/', crearPlano_digital);
router.get('/', getPlano_digital);
router.put('/:id',updatePlano_Digital);

// /api/usuario/usuarioaID




export default router;