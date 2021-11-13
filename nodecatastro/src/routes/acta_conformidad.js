import { Router } from 'express';
const router = Router();

import { crearActa_conformidad, getActa_conformidad, updateActa_conformidad } from '../controllers/acta_conformidad.controller';

// /api/usuarioa
router.post('/',crearActa_conformidad );
router.get('/', getActa_conformidad);
router.put('/:id',updateActa_conformidad);

// /api/usuario/usuarioaID




export default router;