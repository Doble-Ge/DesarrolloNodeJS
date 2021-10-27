import { Router } from 'express';
const router = Router();

import { crearNotificacion, getNotificacion } from '../controllers/notificacion.controller';

// /api/usuarioa
router.post('/', crearNotificacion);
router.get('/', getNotificacion);

// /api/usuario/usuarioaID




export default router;