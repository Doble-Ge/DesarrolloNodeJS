import { Router } from 'express';
const router = Router();

import { crearCertificado, getCertificado } from '../controllers/certificado.controller';

// /api/usuarioa
router.post('/',crearCertificado );
router.get('/', getCertificado);

// /api/usuario/usuarioaID




export default router;