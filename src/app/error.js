'use client'; 


import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className='min-h-[80vh] flex flex-col justify-center items-center gap-2'>
      <h2 className='text-2xl font-bold text-red-700'>Something went wrong!</h2>
      <p className='text-xl'>"{error.message}"</p>
      <button className='  p-2 rounded = bg-cyan-700 font-bold text-slate-50'
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
