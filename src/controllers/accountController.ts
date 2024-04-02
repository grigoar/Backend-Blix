import { Request, Response } from 'express';
import * as accountService from '../services/accountService';

const saveAccount = async (req: Request, res: Response) => {
  console.log('req.body', req.body);
  await accountService.saveAccountToJSONFile(req.body);
  res.status(201).json({
    message: 'Account saved',
  });
};

const getAccount = async (req: Request, res: Response) => {
  const account = await accountService.readAccountFromJSONFile();
  if (!account) {
    res.status(404).json({
      message: 'Account not found',
      data: null,
    });
    return;
  }
  res.status(200).json({
    message: 'Account found',
    data: account,
  });
};

export { saveAccount, getAccount };

