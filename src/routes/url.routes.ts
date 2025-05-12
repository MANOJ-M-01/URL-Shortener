import { Router } from "express";
import {
  createShortUrl,
  redirectToOriginal,
} from "../controllers/url.controller";

const router = Router();

router.post("/shorten", createShortUrl);
router.get("/:code", redirectToOriginal);

export default router;
