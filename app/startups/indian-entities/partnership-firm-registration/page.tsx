import CompanyRegistration from '@/components/Starter/Starter';
import Testimonials from '@/components/Testimonials';
import React from 'react'
const descriptions = [
    "Ideal for Small Scale Business Size.",
    "Our Professional Team understands your requirements and assists you in selecting the Best Suitable Business Structure.",
    "Starting at Rs 4,999/- Onwards",
  ];
const page = () => {
  return (
    <div>
      <div className='mt-16 bg-[#F5FAFF]'>
      <CompanyRegistration title='Partnership Firm Registration' parent='Startup' href='/' descriptions={descriptions} />
      </div>
    </div>
  )
}

export default page
