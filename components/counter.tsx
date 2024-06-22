'use client'
import React from 'react'
import CountUp from 'react-countup'
const Counter = ({amount}:{amount:number}) => {
  return (
    <div className='w-full'>
      $<CountUp end={amount} />
    </div>
  )
}

export default Counter
