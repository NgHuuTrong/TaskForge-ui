import { useState } from 'react';
import Input from '../../ui/Input';
import Row from '../../ui/Row';
import Button from '../../ui/Button';
import { HiArrowRightOnRectangle } from 'react-icons/hi2';
import DarkModeToggle from '../../ui/DarkModeToggle';

function ExampleTest() {
  const [val, setVal] = useState('');
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
    </>
  );
}

export default ExampleTest;
