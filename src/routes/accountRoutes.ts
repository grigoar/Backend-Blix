import express from 'express';
import * as accountController from '../controllers/accountController';
import validate from '../middlewares/validate';
import { AddAccountValidationSchema } from '../validations/accounts/AddAccountValidation';

const router = express.Router();

router
  .route('/')
  .get(accountController.getAccount)
  .post(validate(AddAccountValidationSchema), accountController.saveAccount);

export default router;

