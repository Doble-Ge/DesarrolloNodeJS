import { Router } from 'express';
const router = Router();

import { crearVisacion_municipal, getVisacion_municipal, updateVisacion_Municipal } from '../controllers/visacion_municipal.controller';

// /api/usuarioa
router.post('/', crearVisacion_municipal);
router.get('/', getVisacion_municipal);
router.put('/:id',updateVisacion_Municipal);

// /api/usuario/usuarioaID




export default router;