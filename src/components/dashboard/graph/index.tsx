import './index.scss';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { AxisOptions, Chart } from 'react-charts';

import { RootState } from 'store/store';

type TransactionsGraph = {
  date: Date;
  amount: number;
};

type Series = {
  label: string;
  data: TransactionsGraph[];
};

export default function LineGraph() {
  const transactions = useSelector(
    (state: RootState) => state.transactions.data
  );

  const getDate = () => {
    const dateArr = transactions.map((d) => new Date(d.date));
    //prettier-ignore
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const min = new Date(Math.min(...dateArr))?.toDateString()?.slice(3); // get min date
    //prettier-ignore
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    const max = new Date(Math.max(...dateArr))?.toDateString()?.slice(3); // get max date

    return { min, max };
  };

  const refactoredTxn: TransactionsGraph[] = transactions.map((txn) => ({
    date: new Date(txn.date),
    amount: txn.amount,
  }));

  const data: Series[] = [
    {
      label: 'Amount',
      data: refactoredTxn as TransactionsGraph[],
    },
  ];

  const primaryAxis = useMemo(
    (): AxisOptions<TransactionsGraph> => ({ getValue: (datum) => datum.date }),
    []
  );

  const secondaryAxes = useMemo(
    (): AxisOptions<TransactionsGraph>[] => [
      { getValue: (datum) => datum.amount },
    ],
    []
  );

  return (
    <div className='graph-container'>
      <div className='chart-area h-[350px]'>
        {transactions.length > 0 ? (
          <Chart
            options={{
              data,
              primaryAxis,
              secondaryAxes,
              primaryCursor: false,
              defaultColors: ['#ff5403'],
            }}
          />
        ) : null}
      </div>
      <div className='flex justify-between mt-2'>
        <p className='text-[10px] text-gray-600'>{getDate().min.toString()}</p>
        <p className='text-[10px] text-gray-600'>{getDate().max.toString()}</p>
      </div>
    </div>
  );
}
