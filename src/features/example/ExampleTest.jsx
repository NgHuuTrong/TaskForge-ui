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
      <Row>
        <Input disabled={true} />
        <Input
          onChange={(e) => setVal(e.target.value)}
          value={val}
          type="email"
          id="email"
          autoComplete="username"
        />
      </Row>

      <Row>
        <Button type="icon" size="medium">
          <HiArrowRightOnRectangle size="2.2rem" />
        </Button>
        <Button type="text">Click me</Button>
      </Row>

      <DarkModeToggle />
      <CheckBox
        size="1rem"
        checked={checked}
        onChange={() => setChecked((prev) => !prev)}
      >
        Test
      </CheckBox>
    </>
  );
}

export default ExampleTest;
