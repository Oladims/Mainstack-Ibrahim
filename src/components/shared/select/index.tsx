import './index.scss';
import { ChangeEvent } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import {
  Button,
  Checkbox,
  CheckboxGroup,
  Menu,
  MenuButton,
  MenuList,
  Stack,
} from '@chakra-ui/react';

interface Props {
  value: string[];
  options: string[];
  name: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const AppSelect = ({ value, options, name, placeholder, onChange }: Props) => {
  return (
    <div className='filter-custom-select'>
      <Menu isLazy closeOnSelect={false}>
        <MenuButton
          as={Button}
          rightIcon={
            <MdKeyboardArrowDown className='button-icon mt-1' size='25px' />
          }
          className='w-full custom-select-input capitalize'
        >
          {value?.length > 0
            ? value.toString()?.replaceAll(',', ', ')
            : placeholder}
        </MenuButton>
        <MenuList className='custom-select-options w-[400px] '>
          <CheckboxGroup colorScheme='red' defaultValue={value}>
            <Stack spacing={5} direction='column' className='aa px-4 py-4'>
              {options.map((item) => (
                <Checkbox
                  key={item}
                  value={item}
                  className='capitalize custom-filter-checkbox'
                  name={name}
                  onChange={onChange}
                >
                  {item}
                </Checkbox>
              ))}
            </Stack>
          </CheckboxGroup>
        </MenuList>
      </Menu>
    </div>
  );
};

export default AppSelect;
