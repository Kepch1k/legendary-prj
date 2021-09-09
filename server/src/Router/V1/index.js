import express from 'express';
import TestController from '../../Controllers/testController';

const router = express.Router();

router.get('/test', TestController.getData);

module.exports = router;