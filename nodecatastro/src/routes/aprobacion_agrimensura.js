import { Router } from 'express';
const router = Router();

import { crearAprobacion_agrimensura, getAprobacion_agrimensura } from '../controllers/aprobacion_agrimensura.controller';

// /api/usuarioa
router.post('/',crearAprobacion_agrimensura );
router.get('/', getAprobacion_agrimensura);

// /api/usuario/usuarioaID




export default router;