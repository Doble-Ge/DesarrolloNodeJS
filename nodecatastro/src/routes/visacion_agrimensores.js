import { Router } from 'express';
const router = Router();

import { crearVisacion_agrimensores, getVisacion_agrimensores, updateVisacion_Agrimensores } from '../controllers/visacion_agrimensores.controller';

// /api/usuarioa
router.post('/', crearVisacion_agrimensores);
router.get('/', getVisacion_agrimensores);
router.put('/:id',updateVisacion_Agrimensores);

// /api/usuario/usuarioaID




export default router;