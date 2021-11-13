import { Router } from 'express';
const router = Router();

import { crearCertificado, getCertificado, updateCertificado } from '../controllers/certificado.controller';

// /api/usuarioa
router.post('/',crearCertificado );
router.get('/', getCertificado);
router.put('/:id',updateCertificado);

// /api/usuario/usuarioaID




export default router;