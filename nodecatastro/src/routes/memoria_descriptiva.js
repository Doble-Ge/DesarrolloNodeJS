import { Router } from 'express';
const router = Router();

import { crearMemoria_descriptiva, getMemoriaDescMensuraID, getMemoria_descriptiva } from '../controllers/memoria_descriptiva.controller';

// /api/usuarioa
router.post('/',crearMemoria_descriptiva);
router.get('/', getMemoria_descriptiva);
router.get('/mensura_id', getMemoriaDescMensuraID);

// /api/usuario/usuarioaID




export default router;