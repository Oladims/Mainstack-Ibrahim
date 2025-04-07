import { Tooltip } from '@chakra-ui/react';
import './index.scss';
import icon1 from 'assets/app-bar-list-1.png';
import icon2 from 'assets/app-bar-list-2.png';
import icon3 from 'assets/app-bar-list-3.png';
import icon4 from 'assets/app-bar-list-4.png';

const AppBar = () => {
  const icons = [
    { id: 1, img: icon1, label: 'Link in Bio' },
    { id: 2, img: icon2, label: 'Store' },
    { id: 3, img: icon3, label: 'Media Kit' },
    { id: 4, img: icon4, label: 'Invoicing' },
  ];
  return (
    <div className='app-bar absolute left-[20px] top-[300px] flex flex-col items-center justify-center'>
      {icons.map((icon) => (
        <Tooltip
          hasArrow
          key={icon.id}
          label={icon.label}
          placement='right'
          fontSize='12px'
          py={2}
        >
          <div className='app-bar-icon cursor-pointer gap-2'>
            <img src={icon.img} alt='Icon' />
          </div>
        </Tooltip>
      ))}
    </div>
  );
};

export default AppBar;
