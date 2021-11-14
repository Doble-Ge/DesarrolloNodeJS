import { Router } from 'express';
const router = Router();

import { crearActa_conformidad, getActaMensuraID, getActa_conformidad, updateActa_conformidad } from '../controllers/acta_conformidad.controller';

// /api/usuarioa
router.post('/',crearActa_conformidad );
router.get('/', getActa_conformidad);
router.put('/:id',updateActa_conformidad);
router.get('/:mensura_id', getActaMensuraID);
// /api/usuario/usuarioaID




export default router;