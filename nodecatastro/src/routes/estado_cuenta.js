import { Router } from 'express';
const router = Router();

import { crearEstado_cuenta, getEstado_cuenta } from '../controllers/estado_cuenta.controller';

// /api/usuarioa
router.post('/',crearEstado_cuenta);
router.get('/', getEstado_cuenta);

// /api/usuario/usuarioaID




export default router;