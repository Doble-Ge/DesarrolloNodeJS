import { Router } from 'express';
const router = Router();

import { crearVisacion_municipal, getVisacion_municipal } from '../controllers/visacion_municipal.controller';

// /api/usuarioa
router.post('/', crearVisacion_municipal);
router.get('/', getVisacion_municipal);

// /api/usuario/usuarioaID




export default router;