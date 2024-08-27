
import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative">
        <img
          src="/hack-repairs.jpg" 
          width={100}
          height={100}
          alt="Logo"
          className="rounded-full"
          
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-[100px] w-[100px] border-t-4 border-button border-solid"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;