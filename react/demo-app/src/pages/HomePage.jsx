import React from 'react'
import Carousel from '../components/Carousel'
import Card from '../components/Card'

const HomePage = () => {
  return (
    <>
     <Carousel />
     <div className='text-center mt-5 text-muted mb-4'>
      <h2 >Our Latest Products</h2>
     </div>
     <Card />
    </>
  )
}

export default HomePage