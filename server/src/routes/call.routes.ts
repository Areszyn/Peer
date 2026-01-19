import { Router } from "express";
import { getCallHistoryController } from "../controllers/call.controller";

const router = Router();

// Get call history:
router.get("/history", getCallHistoryController);

export default router;
