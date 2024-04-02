import fs from 'fs';
import { Account } from '../types/accounts/Account';

const saveAccountToJSONFile = async (account: Account): Promise<void> => {
  try {
    await fs.promises.writeFile(
      './account.json',
      JSON.stringify(account, null, 2)
    );
  } catch (err) {
    console.error(err);
  }
};

const readAccountFromJSONFile = async (): Promise<Account | null> => {
  try {
    const data = await fs.promises.readFile('./account.json', 'utf-8');
    if (!data) return null;
    return JSON.parse(data);
  } catch (err) {
    return null;
  }
};

export { saveAccountToJSONFile, readAccountFromJSONFile };

