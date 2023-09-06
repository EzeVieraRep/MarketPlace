import { Router } from "express"
import { getProducts, postProducts } from "../controller/productsController";


const router = Router();

router.post('/', postProducts)
router.get('/', getProducts)


module.exports = router;