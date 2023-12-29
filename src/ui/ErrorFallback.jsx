import Button from './Button';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="h-screen flex items-center justify-center p-[4.8rem] bg-[--color-grey-50]">
      <div className="flex flex-col border border-[--color-grey-800] rounded-[-border-radius-md] p-[4.8rem] flex-[0_1_96rem] items-center">
        <h1 className="font-bold text-[2.8rem]">Something went wrong 🧐</h1>
        <p className="font-[Sono] mb-[3.2rem]">{error.message}</p>
        <Button size="large" onClick={resetErrorBoundary}>
          Try again
        </Button>
      </div>
    </div>
  );
}

export default ErrorFallback;
