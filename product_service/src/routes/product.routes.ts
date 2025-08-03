import express from 'express';
import { ProductController } from '../controllers/product.controllers';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = express.Router();


router.use(authMiddleware);

router.post('/', ProductController.create);

/**
 * @swagger
 * /product:
 *   get:
 *     summary: Récupère la liste produits
 *     responses:
 *       200:
 *         description: Succès
 */
router.get('/', ProductController.getAll);
router.get('/:id', ProductController.getOne);
router.put('/:id', ProductController.update);
router.delete('/:id', ProductController.delete);

export default router;
