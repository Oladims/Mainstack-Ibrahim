import './index.scss';
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/react';
import './index.scss';
import { ChangeEvent, useState } from 'react';

import AppSelect from 'components/shared/select';
import AppButton from 'components/shared/button';
import DateRange from './DateRange';
import QuickDate from './QuickDate';
import { Transaction } from 'models/transaction';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  allTransactions: Transaction[];
  setTransactions: (txn: Transaction[], count: number) => void;
  clear: () => void;
}

interface Filters {
  type: string[];
  status: string[];
}

const TransactionFilter = ({
  isOpen,
  onClose,
  allTransactions,
  setTransactions,
  clear,
}: Props) => {
  const [filter, setFilter] = useState<Filters>({ status: [], type: [] });
  const [date, setDate] = useState({ startDate: '', endDate: '' });

  const handleSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked, name, value } = e.target;
    let item: string[] = filter[name as keyof typeof filter];

    if (checked) {
      item = [...item, value];
    } else {
      item = item.filter((e) => e !== value);
    }

    setFilter((prev) => ({ ...prev, [name as keyof typeof filter]: item }));
  };

  const handleDate = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setDate((prev) => ({ ...prev, [name]: value }));
  };

  const handleClear = () => {
    setFilter({ status: [], type: [] });
    setDate({ startDate: '', endDate: '' });
    clear();
  };

  const handleApply = () => {
    let count = 0;
    let txn = allTransactions;

    if (filter.status.length > 0) {
      count = count + 1;
      txn = txn.filter((item) => filter.status.includes(item.status));
    }
    if (filter.type.length > 0) {
      count = count + 1;
      txn = txn.filter((item) => filter.type.includes(item.type));
    }
    if (date.startDate.length > 0 || date.endDate.length > 0) {
      if (date.startDate.length > 0) {
        txn = txn.filter((item) => item.date >= date.startDate);
      }
      if (date.endDate.length > 0) {
        txn = txn.filter((item) => item.date <= date.endDate);
      }
      count = count + 1;
    }

    setTransactions(txn, count);
    onClose();
  };

  return (
    <Drawer isOpen={isOpen} placement='right' onClose={onClose} size='md'>
      <DrawerOverlay />
      <DrawerContent className='transaction-filter-drawer'>
        <DrawerCloseButton />
        <DrawerHeader>
          <div className='filter-heading w-full flex items-center justify-between'>
            <h2 className='text'>Filter</h2>
          </div>
        </DrawerHeader>
        <DrawerBody className='filter-options flex flex-col w-full gap-8 mt-2'>
          <QuickDate />
          <div className='date-range flex flex-col w-full gap-3'>
            <h5 className='select-filter-label'>Date Range</h5>
            <DateRange date={date} onChange={handleDate} />
          </div>
          <div className='transaction-type  flex flex-col w-full gap-3'>
            <h5 className='select-filter-label'>Transaction Type</h5>
            <AppSelect
              value={filter.type}
              options={typeOptions}
              name='type'
              onChange={handleSelect}
              placeholder='filter by transaction type'
            />
          </div>
          <div className='transaction-status custom-select flex flex-col w-full gap-3'>
            <h5 className='select-filter-label'>Transaction Status</h5>
            <AppSelect
              value={filter.status}
              options={statusOptions}
              name='status'
              onChange={handleSelect}
              placeholder='filter by transaction status'
            />
          </div>
        </DrawerBody>
        <DrawerFooter className='flex w-full gap-3 items-center'>
          <AppButton
            variant='outline'
            onClick={handleClear}
            className='app-filter-clear-btn basis-1/2'
          >
            Clear
          </AppButton>
          <AppButton
            colorScheme='blackAlpha'
            bg='#131316'
            className='app-filter-apply-btn basis-1/2'
            onClick={handleApply}
            isDisabled={
              date.startDate.length < 1 &&
              date.endDate.length < 1 &&
              filter.status.length < 1 &&
              filter.type.length < 1
            }
          >
            Apply
          </AppButton>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default TransactionFilter;

const statusOptions = ['successful', 'pending', 'failed'];
const typeOptions = [
  'store transaction',
  'get tipped',
  'withdrawal',
  'chargeback',
  'cashback',
];
