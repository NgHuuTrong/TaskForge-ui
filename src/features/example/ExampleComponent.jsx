import { useDispatch, useSelector } from 'react-redux';
import { method1, method2 } from './exampleSlice';
import Button from '../../ui/Button';

function ExampleComponent() {
  const { ex1, ex2 } = useSelector((state) => state.example);
  const dispatch = useDispatch();
  return (
    <div>
      <h1 className="my-4">Vite + React</h1>
      <h1 className="my-4 text-yellow-500">{ex1}</h1>
      <h1 className="my-4 text-yellow-500">{ex2}</h1>
      <Button
        type="primary"
        classNames="rounded-full"
        onClick={() => {
          dispatch(method1(100, 'EUR'));
        }}
      >
        Method 1
      </Button>
      <Button
        type="danger"
        onClick={() => {
          dispatch(method2('100', 1));
        }}
      >
        Method 2
      </Button>
    </div>
  );
}

export default ExampleComponent;
