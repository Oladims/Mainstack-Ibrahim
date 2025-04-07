import { useMediaQuery } from '@chakra-ui/react';
import RevenuePage from 'pages/dashboard/revenue';

const App = () => {
  const [isDesktop] = useMediaQuery('(min-width: 1050px)');

  return (
    <>
      {isDesktop ? (
        <RevenuePage />
      ) : (
        <div className='w-screen h-screen flex items-center justify-center'>
          <p className='w-fit text-lg font-bold'>
            Please open on a desktop device
          </p>
        </div>
      )}
    </>
  );
};

export default App;
