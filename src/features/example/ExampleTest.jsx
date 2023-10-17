import { useState } from 'react';
import Input from '../../ui/Input';
import Row from '../../ui/Row';

function ExampleTest() {
  const [val, setVal] = useState('');
  return (
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
  );
}

export default ExampleTest;
