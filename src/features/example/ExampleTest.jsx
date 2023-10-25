import { useState } from 'react';
import Input from '../../ui/Input';
import Row from '../../ui/Row';
import Button from '../../ui/Button';
import { HiArrowRightOnRectangle } from 'react-icons/hi2';
import DarkModeToggle from '../../ui/DarkModeToggle';
import CheckBox from '../../ui/CheckBox';

function ExampleTest() {
  const [val, setVal] = useState('');
  const [checked, setChecked] = useState(false);
  return (
    <>
      <DarkModeToggle />
    </>
  );
}

export default ExampleTest;
