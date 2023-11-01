import ExampleComponent from '../features/example/ExampleComponent';
import ExampleTest from '../features/example/ExampleTest';
import CreateBoard from '../ui/CreateBoard';
import CreateFromTemplate from '../ui/CreateFromTemplate';

import { templates } from '../ui/CreateFromTemplate';

function Example() {
  return (
    <div>
      {/* <ExampleComponent />
      <ExampleTest /> */}
      <CreateBoard/>
      
    </div>
  );
}

export default Example;
