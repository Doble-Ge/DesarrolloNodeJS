import { Router } from 'express';
const router = Router();

import { crearActa_conformidad, getActa_conformidad } from '../controllers/acta_conformidad.controller';

// /api/usuarioa
router.post('/',crearActa_conformidad );
router.get('/', getActa_conformidad);

// /api/usuario/usuarioaID




export default router;