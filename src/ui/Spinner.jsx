import React from 'react';

const Spinner = () => {
  return (
    <div className="mx-[auto] w-[15%] min-w-[1.8rem] max-w-[4.8rem] aspect-square rounded-[50%] border-4 border-t-[radial-gradient(farthest-side,_var(--color-red-700)_94%,_#000)_top/10px_10px_no-repeat,_conic-gradient(#000_30%,_var(--color-red-700))] animate-spin z-10" />
  );
};

export default Spinner;
