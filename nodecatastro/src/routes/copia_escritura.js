import { Router } from 'express';
const router = Router();

import { crearCopia_escritura, getCopia_escritura, updateCopia_Escritura } from '../controllers/copia_escritura.controller';

// /api/usuarioa
router.post('/',crearCopia_escritura);
router.get('/', getCopia_escritura);
router.put('/:id',updateCopia_Escritura);

// /api/usuario/usuarioaID




export default router;