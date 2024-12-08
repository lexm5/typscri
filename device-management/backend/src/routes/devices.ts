import { Router } from "express";
import { getDevices, registerDevice } from '../controllers/devicesController';

const router = Router();

router.get('./', getDevices);
router.post('/', registerDevice);

export default router;