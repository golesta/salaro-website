'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We\'ll get back to you within one business day.')
  }

  return (
    <section id="contact" className="section bg-navy-light">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-300">
            Tell us about your project or challenge. We'll listen first.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Our Offices</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Guildford, Surrey GU3 3BY, United Kingdom</h4>
                <p className="text-gray-300">Tel: +44 7485 222490</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Berlin, Germany</h4>
                <p className="text-gray-300">EU enquiries — contact via <a href="https://www.abigolestanian.com/" className="text-amber hover:text-amber-light transition-colors duration-200" target="_blank" rel="noopener noreferrer">abigolestanian.com</a></p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Pondicherry, India</h4>
                <p className="text-gray-300">Development & Delivery</p>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-navy border border-gray-600 rounded-lg focus:border-amber focus:outline-none text-white"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-navy border border-gray-600 rounded-lg focus:border-amber focus:outline-none text-white"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company (optional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-navy border border-gray-600 rounded-lg focus:border-amber focus:outline-none text-white"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-navy border border-gray-600 rounded-lg focus:border-amber focus:outline-none text-white resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>

              <p className="text-sm text-gray-400 text-center">
                We typically respond within one business day.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}