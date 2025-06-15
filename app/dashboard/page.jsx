'use client';
import React, { useState } from 'react';
import { cardData } from '../ui/carddata';
import Card from '../ui/Card';
import Transection from '../ui/Transection';

const Page = () => {
  const [selectedId, setSelectedId] = useState(0); // Default selected card is the first one

  return (
   <>
    <div className='flex items-center gap-4 w-full'>
      {cardData.map((item, index) => (
        <Card
          {...item}
          key={index}
          id={index}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
      ))}
    </div>
   
   <Transection/>
   </>




  );
};

export default Page;
