import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';

import { sharedQueriesProps } from 'utils/apis';
import { GeneralService } from '../services/general';
import { Transaction, TransactionData } from 'models/transaction';
import { transactionsActions } from 'store/reducers/transactions';

export const useFetchTransactions = () => {
  const dispatch = useDispatch();
  const { isLoading } = useQuery({
    queryFn: GeneralService.getTransactions,
    queryKey: ['transactions'],
    onSuccess: (data) => {
      const response = data as Transaction[];
      const res = response.map((r: Transaction) => new TransactionData(r));
      dispatch(transactionsActions.push(res));
    },
    ...sharedQueriesProps,
  });

  return isLoading;
};
