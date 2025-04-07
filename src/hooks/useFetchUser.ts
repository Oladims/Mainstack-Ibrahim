import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';

import { GeneralService } from '../services/general';
import { userActions } from 'store/reducers/user';
import { sharedQueriesProps } from 'utils/apis';
import { User, UserData } from 'models/user';

export const useFetchUser = () => {
  const dispatch = useDispatch();
  const { isLoading } = useQuery({
    queryFn: () => {
      return GeneralService.getUser();
    },
    queryKey: ['user'],
    onSuccess: (data) => {
      const response = data as User;
      const res = new UserData(response);
      dispatch(userActions.push(res));
    },
    ...sharedQueriesProps,
  });

  return isLoading;
};
