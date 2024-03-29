import express from 'express';
import { addModels, getModels, upload, getModelsByid, sentMail, saveRating,  } from '../controller/modelController.js';

const router = express.Router();

router.post('/addModels', upload.array('file', 9), addModels)
  .get('/getModels', getModels)
  .get('/getModels/:id', getModelsByid)
  .post('/sentmail', sentMail)
  .post('/submitRating/:modelId/:user', saveRating);


export default router;
