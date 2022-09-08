import React, { memo } from 'react';

const Button = memo(({ name, onClick }) => {
  return (
    <button
      className='w-full py-3 border-[1px] border-[#FBBB71] rounded-md bg-[#FBBB71] font-bold  shadow-lg shadow-[#ffdfb8]'
      onClick={onClick}
    >
      {name}
    </button>
  );
});

export default Button;
