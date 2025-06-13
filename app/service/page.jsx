import React from 'react'
import gamingHeadphones from '../data'
import Card from '../ui/Card'

const Page = () => {
  return (
    <div className='p-10 overflow-x-hidden min-h-screen'>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full gap-4 h-full'>
        {gamingHeadphones?.map((item, index) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}

export default Page