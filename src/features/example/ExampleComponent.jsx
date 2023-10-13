import { useDispatch, useSelector } from 'react-redux';
import { method1, method2 } from './exampleSlice';

function ExampleComponent() {
  const { ex1, ex2 } = useSelector((state) => state.example);
  const dispatch = useDispatch();
  return (
    <div>
      <h1 className="my-4">Vite + React</h1>
      <h1 className="my-4 text-yellow-500">{ex1}</h1>
      <h1 className="my-4 text-yellow-500">{ex2}</h1>
      <button
        className="ml-20 rounded-full bg-green-300 p-2 hover:opacity-[0.7]"
        onClick={() => {
          dispatch(method1(100, 'EUR'));
        }}
      >
        Method 1
      </button>
      <button
        className="ml-20 rounded-full bg-green-300 p-2 hover:opacity-[0.7]"
        onClick={() => {
          dispatch(method2('100', 1));
        }}
      >
        Method 2
      </button>
    </div>
  );
}

export default ExampleComponent;
