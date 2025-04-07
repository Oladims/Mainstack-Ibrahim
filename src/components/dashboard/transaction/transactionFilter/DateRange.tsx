import './index.scss';
import { ChangeEvent, useRef } from 'react';

interface Props {
  date: { startDate: string; endDate: string };
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const DateRange = ({ date, onChange }: Props) => {
  const today = new Date();
  const startDateRef = useRef<HTMLInputElement>(null);
  const endDateRef = useRef<HTMLInputElement>(null);
  return (
    <div className='filter-custom-date flex items-center gap-3'>
      <input
        type='date'
        name='startDate'
        className='custom-select-date basis-1/2'
        ref={startDateRef}
        value={date.startDate}
        onChange={(e) => {
          onChange(e);
          endDateRef.current?.showPicker();
        }}
      />
      <input
        type='date'
        name='endDate'
        className='custom-select-date basis-1/2'
        ref={endDateRef}
        value={date.endDate}
        min={
          date.startDate.length > 1
            ? date.startDate
            : today.toISOString().split('T')[0]
        }
        onChange={onChange}
      />
    </div>
  );
};

export default DateRange;
