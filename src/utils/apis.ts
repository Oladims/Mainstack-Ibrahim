import { RequestMethod } from 'models/apis';
import { UseQueryOptions } from 'react-query';
export class AppAPIs {
  static fetchUser: RequestMethod = {
    method: 'GET',
    url: '/user',
  };

  static fetchWalletBalance: RequestMethod = {
    method: 'GET',
    url: '/wallet',
  };

  static fetchTransactions: RequestMethod = {
    method: 'GET',
    url: '/transactions',
  };
}

export const sharedQueriesProps: UseQueryOptions = {
  retry: 5,
  refetchOnReconnect: true,
  retryDelay: 2000,
};
