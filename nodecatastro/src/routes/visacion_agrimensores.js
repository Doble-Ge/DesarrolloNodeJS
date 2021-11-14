import { Router } from 'express';
const router = Router();

import { crearVisacion_agrimensores, getVisacionAgrimensorMensuraID, getVisacion_agrimensores, updateVisacion_Agrimensores } from '../controllers/visacion_agrimensores.controller';

// /api/usuarioa
router.post('/', crearVisacion_agrimensores);
router.get('/', getVisacion_agrimensores);
router.put('/:id',updateVisacion_Agrimensores);
router.get('/:mensura_id', getVisacionAgrimensorMensuraID);
// /api/usuario/usuarioaID




export default router;