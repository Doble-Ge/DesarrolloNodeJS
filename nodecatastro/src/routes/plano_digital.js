import { Router } from 'express';
const router = Router();

import { crearPlano_digital, getPlano_digital } from '../controllers/plano_digital.controller';

// /api/usuarioa
router.post('/', crearPlano_digital);
router.get('/', getPlano_digital);

// /api/usuario/usuarioaID




export default router;