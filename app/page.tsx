import About from '@/components/About'
import CoreProcess from '@/components/CoreProcess'
import Differentiators from '@/components/Differentiators'
import Home from '@/components/Home'
import Products from '@/components/products'
import ExpandableTable from '@/components/TableComponent'
import Testimonials from '@/components/Testimonials'
import React from 'react'

const page = () => {
  return (
    <div className='bg-white dark:bg-gray-900'>
      <Home />
      <About />
      <Products />
      <Differentiators />
      <CoreProcess />
      <Testimonials />
    </div>
  )
}

export default page
