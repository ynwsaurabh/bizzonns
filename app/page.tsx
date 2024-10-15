import About from '@/components/About'
import BusinessStats from '@/components/BusinessStats'
import CoreProcess from '@/components/CoreProcess'
import Differentiators from '@/components/Differentiators'
import Home from '@/components/Home'
import Locations from '@/components/Locations'
import Services from '@/components/Services'
import ExpandableTable from '@/components/TableComponent'
import Testimonials from '@/components/Testimonials'
import React from 'react'

const page = () => {
  return (
    <div className='bg-[#F2F0EF] dark:bg-gray-900'>
      <Home />
      <About />
      <Services />
      <Differentiators />
      <CoreProcess />
      <BusinessStats />
      <Locations />
      <Testimonials />
    </div>
  )
}

export default page
