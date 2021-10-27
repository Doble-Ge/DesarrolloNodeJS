import { Router } from 'express';
const router = Router();

import { crearVisacion_agrimensores, getVisacion_agrimensores } from '../controllers/visacion_agrimensores.controller';

// /api/usuarioa
router.post('/', crearVisacion_agrimensores);
router.get('/', getVisacion_agrimensores);

// /api/usuario/usuarioaID




export default router;