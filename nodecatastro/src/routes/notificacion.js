import { Router } from 'express';
const router = Router();

import { crearNotificacion, getNotifiacionMensuraID, getNotificacion, updateNotificacion } from '../controllers/notificacion.controller';

// /api/usuarioa
router.post('/', crearNotificacion);
router.get('/', getNotificacion);
router.put('/:id',updateNotificacion);
router.get('/:mensura_id',getNotifiacionMensuraID);
// /api/usuario/usuarioaID




export default router;