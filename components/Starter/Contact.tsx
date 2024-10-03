import React from 'react'
import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <div className="flex items-center min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-start justify-between space-y-12 lg:space-y-0 lg:space-x-12">
          <div className="w-full lg:w-1/2">
            <ContactInfo />
          </div>
          <div className="w-full lg:w-1/2">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
