import { Router } from 'express';
const router = Router();

import { crearContacto, getContactos } from '../controllers/contacto.controller';

// /api/usuarioa
router.post('/', crearContacto);
router.get('/', getContactos);

// /api/usuario/usuarioaID




export default router;