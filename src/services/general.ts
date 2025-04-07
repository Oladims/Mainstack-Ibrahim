import { AxiosRequestConfig } from 'axios';

import { User } from 'models/user';
import { AppAPIs } from 'utils/apis';
import { Wallet } from 'models/wallet';
import { AxiosReqHandlers } from './axios';
import { Transaction } from 'models/transaction';

const { apiRequest } = AxiosReqHandlers;

export class GeneralService {
  static getUser = async () => {
    const config: AxiosRequestConfig = {
      ...AppAPIs.fetchUser,
    };

    return await apiRequest<User>(config);
  };
  static getTransactions = async () => {
    const config: AxiosRequestConfig = {
      ...AppAPIs.fetchTransactions,
    };

    return await apiRequest<Transaction[]>(config);
  };
  static getWallet = async () => {
    const config: AxiosRequestConfig = {
      ...AppAPIs.fetchWalletBalance,
    };

    return await apiRequest<Wallet>(config);
  };
}
