import { Router } from "express";
import {
    getServices,
    getServiceById,
    getServiceByType,
    postService,
    updateService,
    paginationService,
} from "../controllers/service";

const router = Router();

router.get("/pagination", paginationService);

router.get("/", getServices);
router.get("/type/:type", getServiceByType);
router.get("/:id", getServiceById);
router.post("/", postService);
router.put("/:id", updateService);

export default router;
