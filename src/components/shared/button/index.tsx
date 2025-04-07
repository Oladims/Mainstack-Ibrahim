import { Button, ButtonProps } from '@chakra-ui/react';

interface Props extends ButtonProps {}

const AppButton = ({ children, ...r }: Props) => {
  return (
    <Button
      className='app-button'
      display='flex'
      alignItems='center'
      justifyContent='center'
      borderRadius='100px'
      textAlign='center'
      fontSize='14px'
      fontStyle='normal'
      fontWeight={600}
      lineHeight='24px'
      letterSpacing='-0.4px'
      alignContent='stretch'
      padding='14px 35px'
      gap='10px'
      {...r}
    >
      {children}
    </Button>
  );
};

export default AppButton;
