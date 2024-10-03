'use client'
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+91',
    phoneNumber: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone number is required';
    if (!formData.service) newErrors.service = 'Service selection is required';
    if (!formData.message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission logic
      console.log(formData);
      // Reset form or show success message if needed
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        countryCode: '+91',
        phoneNumber: '',
        service: '',
        message: '',
      });
      setErrors({});
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-auto lg:mx-0">
      <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
      <p className="text-sm text-gray-600 mb-6">You can reach us anytime</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col space-y-2">
          <div className="flex space-x-2">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              className={`w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 ${errors.firstName ? 'border-red-500' : ''}`}
            />
            {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName}</span>}
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              className={`w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 ${errors.lastName ? 'border-red-500' : ''}`}
            />
            {errors.lastName && <span className="text-red-500 text-sm">{errors.lastName}</span>}
          </div>

          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 ${errors.email ? 'border-red-500' : ''}`}
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}

          <div className="flex space-x-2">
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            >
              <option value="+91">+91</option>
              <option value="+62">+62</option>
              <option value="+44">+44</option>
            </select>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 ${errors.phoneNumber ? 'border-red-500' : ''}`}
            />
          </div>
          {errors.phoneNumber && <span className="text-red-500 text-sm">{errors.phoneNumber}</span>}

          <div className="mb-4">
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 ${errors.service ? 'border-red-500' : ''}`}
            >
              <option value="">Select a service</option>
              <option value="service1">Service 1</option>
              <option value="service2">Service 2</option>
              <option value="service3">Service 3</option>
            </select>
            {errors.service && <span className="text-red-500 text-sm">{errors.service}</span>}
          </div>

          <textarea
            name="message"
            placeholder="How can we help?"
            value={formData.message}
            onChange={handleChange}
            className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 ${errors.message ? 'border-red-500' : ''}`}
            maxLength={120}
            rows={4}
          ></textarea>
          {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
        >
          Submit
        </button>

        {/* <p className="text-xs text-center text-gray-500 mt-4">
          By contacting us, you agree to our{' '}
          <a href="#" className="text-blue-600">
            Terms of service
          </a>{' '}
          and{' '}
          <a href="#" className="text-blue-600">
            Privacy Policy
          </a>
        </p> */}
      </form>
    </div>
  );
};

export default ContactForm;
