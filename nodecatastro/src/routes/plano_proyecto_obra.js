import { Router } from 'express';
const router = Router();

import { crearPlano_proyecto_obra, getPlano_proyecto_obra } from '../controllers/plano_proyecto_obra.controller';

// /api/usuarioa
router.post('/', crearPlano_proyecto_obra);
router.get('/', getPlano_proyecto_obra);

// /api/usuario/usuarioaID




export default router;