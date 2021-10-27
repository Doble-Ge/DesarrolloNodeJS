import { Router } from 'express';
const router = Router();

import { crearMemoria_descriptiva, getMemoria_descriptiva } from '../controllers/memoria_descriptiva.controller';

// /api/usuarioa
router.post('/',crearMemoria_descriptiva);
router.get('/', getMemoria_descriptiva);

// /api/usuario/usuarioaID




export default router;