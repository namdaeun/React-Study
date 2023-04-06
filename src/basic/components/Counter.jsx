import React, { useEffect, useState } from 'react';

export default function Counter({ total, onClick }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
    }, [count]) 
    return (
        <div className='counter'>
         <p className='number'>
            {count} <span className='total'>/{total}</span>
        </p>
        <button
            className='button'
            onClick={() => {
                setCount((prev) => prev + 1);
                onClick();
                console.log('네트워크 호출!')
            }}
        >
            Add +
      </button>
    </div>
  );
}

