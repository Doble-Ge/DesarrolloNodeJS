import { Router } from 'express';
const router = Router();

import { crearMemoria_descriptiva, getMemoriaDescMensuraID, getMemoria_descriptiva, updateMemoriaDescriptiva } from '../controllers/memoria_descriptiva.controller';

// /api/usuarioa
router.post('/',crearMemoria_descriptiva);
router.get('/', getMemoria_descriptiva);
router.get('/:mensura_id', getMemoriaDescMensuraID);
router.put('/:id', updateMemoriaDescriptiva);

// /api/usuario/usuarioaID




export default router;