"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+91',
    phoneNumber: '',
    services: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Handle input changes and update form data
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Validate the form fields
  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phoneNumber) newErrors.phoneNumber = "Phone number is required";
    if (!formData.services) newErrors.services = "Service selection is required";
    if (!formData.message) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission and send data to EmailJS
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validate()) {
      // Prepare formData to send to EmailJS
      const formDataToSend = {
        fullName: `${formData.firstName} ${formData.lastName}`,  // Combine first and last name
        email: formData.email,
        phone: `${formData.countryCode} ${formData.phoneNumber}`, // Combine countryCode and phoneNumber
        services: formData.services,
        message: formData.message,
      };

      // Send form data to EmailJS
      emailjs
        .send("bizzonns", "template_bizzonns", formDataToSend, "jcCp8NB9CnI7vFdF5")
        .then(
          (response) => {
            console.log("Email sent successfully:", response);
            toast.success("Message sent successfully!");
            // Reset form after successful submission
            setFormData({
              firstName: '',
              lastName: '',
              email: '',
              countryCode: '+91',
              phoneNumber: '',
              services: '',
              message: '',
            });
            setErrors({});
          },
          (error) => {
            console.error("Error sending email:", error);
            toast.error("Failed to send message. Please try again.");
          }
        );
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-auto lg:mx-0">
      <Toaster />
      <h2 className="text-2xl font-semibold text-black mb-4">Get in Touch</h2>
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
              className={`w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 ${
                errors.firstName ? "border-red-500" : ""
              }`}
            />
            {errors.firstName && (
              <span className="text-red-500 text-sm">{errors.firstName}</span>
            )}
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              className={`w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 ${
                errors.lastName ? "border-red-500" : ""
              }`}
            />
            {errors.lastName && (
              <span className="text-red-500 text-sm">{errors.lastName}</span>
            )}
          </div>

          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 ${
              errors.email ? "border-red-500" : ""
            }`}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email}</span>
          )}

          <div className="flex space-x-2">
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              style={{ backgroundColor: "white", color: "black" }}
            >
              <option value="+91">India (+91)</option>
              <option value="+1">USA (+1)</option>
              <option value="+44">UK (+44)</option>
              <option value="+61">Australia (+61)</option>
              <option value="+81">Japan (+81)</option>
              <option value="+49">Germany (+49)</option>
              <option value="+33">France (+33)</option>
            </select>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 ${
                errors.phoneNumber ? "border-red-500" : ""
              }`}
            />
          </div>
          {errors.phoneNumber && (
            <span className="text-red-500 text-sm">{errors.phoneNumber}</span>
          )}

          <div className="mb-4">
            <select
              name="services"
              value={formData.services}
              onChange={handleChange}
              className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 ${
                errors.services ? "border-red-500" : ""
              }`}
              style={{ backgroundColor: "white", color: "black" }}
            >
              <option value="">Select a service</option>
              <option value="startup">Startup</option>
              <option value="Intellectual Property">Intellectual Property</option>
              <option value="Audits">Audits</option>
              <option value="Tax">Tax</option>
              <option value="Compliances">Compliances</option>
              <option value="License">License</option>
            </select>
            {errors.services && (
              <span className="text-red-500 text-sm">{errors.services}</span>
            )}
          </div>

          <textarea
            name="message"
            placeholder="How can we help?"
            value={formData.message}
            onChange={handleChange}
            className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 ${
              errors.message ? "border-red-500" : ""
            }`}
            maxLength={120}
            rows={4}
          ></textarea>
          {errors.message && (
            <span className="text-red-500 text-sm">{errors.message}</span>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-[#fd8115] text-white rounded-lg hover:bg-[#e96d00] transition font-semibold"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
