import { Router } from 'express';
const router = Router();

import {  crearMensura,deleteMensura,getMensura, getOneMensura, updateMensura} from '../controllers/mensura.controller';

// /api/usuario
router.post('/', crearMensura);
router.get('/', getMensura);
router.get('/:id', getOneMensura);
router.delete('/:id', deleteMensura);
router.put('/:id', updateMensura);

// /api/usuario/usuarioID
//router.get('/:id', getOneUsuario);
//router.delete('/:id', deleteUsuario);
//router.put('/:id', updateUsuario);

export default router;