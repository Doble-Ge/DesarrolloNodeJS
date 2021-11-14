import { Router } from 'express';
const router = Router();

import { crearAprobacion_agrimensura, getAprobacionMensuraID, getAprobacion_agrimensura, updateAprobacion_Agrimensura } from '../controllers/aprobacion_agrimensura.controller';

// /api/usuarioa
router.post('/',crearAprobacion_agrimensura );
router.get('/', getAprobacion_agrimensura);
router.put('/:id',updateAprobacion_Agrimensura);
router.get('/:mensura_id', getAprobacionMensuraID);
// /api/usuario/usuarioaID




export default router;