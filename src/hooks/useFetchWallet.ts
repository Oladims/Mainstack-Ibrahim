import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';

import { Wallet, WalletData } from 'models/wallet';
import { sharedQueriesProps } from 'utils/apis';
import { GeneralService } from '../services/general';
import { walletActions } from 'store/reducers/wallet';

export const useFetchWallet = () => {
  const dispatch = useDispatch();
  const { isLoading } = useQuery({
    queryFn: () => {
      return GeneralService.getWallet();
    },
    queryKey: ['wallet'],
    onSuccess: (data) => {
      const response = data as Wallet;
      const res = new WalletData(response);
      dispatch(walletActions.push(res));
    },
    ...sharedQueriesProps,
  });

  return isLoading;
};
