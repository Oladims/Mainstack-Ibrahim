import AppButton from 'components/shared/button';

import { MdOutlineReceiptLong } from 'react-icons/md';

const Empty = ({ reset }: { reset: () => void }) => {
  return (
    <div className='empty-transaction-container flex flex-col gap-5'>
      <div className='icon-container flex justify-center items-center'>
        <MdOutlineReceiptLong size='24px' />
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='text-black '>
          No matching transaction found for the selected filter
        </h2>
        <p>Change your filters to see more results, or add a new product.</p>
      </div>
      <AppButton className='empty-button w-fit' onClick={reset}>
        Clear Filter
      </AppButton>
    </div>
  );
};

export default Empty;
