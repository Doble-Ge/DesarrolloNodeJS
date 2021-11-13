import { Router } from 'express';
const router = Router();

import { crearNotificacion, getNotificacion, updateNotificacion } from '../controllers/notificacion.controller';

// /api/usuarioa
router.post('/', crearNotificacion);
router.get('/', getNotificacion);
router.put('/:id',updateNotificacion);

// /api/usuario/usuarioaID




export default router;