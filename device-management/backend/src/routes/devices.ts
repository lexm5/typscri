import { Router } from 'express';
import { getDevices, registerDevice } from '../controllers/devicesController';

const router = Router();

router.get('/', getDevices); // GETエンドポイント
router.post('/', registerDevice); // POSTエンドポイント

export default router;
