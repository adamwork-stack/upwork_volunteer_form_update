'use client'

import { useState } from 'react'
import Image from 'next/image'
import DonationButton from '@/components/DonationButton'

export default function VolunteerPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    dateOfBirth: '',
    emergencyContact: '',
    emergencyPhone: '',
    interests: [] as string[],
    availability: '',
    experience: '',
    additionalInfo: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target
    setFormData(prev => ({
      ...prev,
      interests: checked
        ? [...prev.interests, value]
        : prev.interests.filter(interest => interest !== value)
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        dateOfBirth: '',
        emergencyContact: '',
        emergencyPhone: '',
        interests: [],
        availability: '',
        experience: '',
        additionalInfo: '',
      })
    }, 3000)
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full min-h-[470px] 2xl:min-h-[670px] flex items-end justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/volunteer-hero.jpg)',
          }}
        />
        <div className="relative z-10 w-full sm:w-3/4 md:w-full text-center pb-8">
          <h1 className="font-bold text-6xl sm:text-4xl md:text-10xl md:leading-none uppercase text-[#f48847] leading-[0.9] md:leading-[0.55em]">
            Volunteer with us!
          </h1>
        </div>
      </section>

      {/* Subtitle */}
      <div className="pt-8 flex flex-col sm:flex-row gap-4 mx-12 md:mx-48 lg:mx-96 items-center justify-center text-center pb-8">
        <h2 className="text-base sm:text-lg md:text-2xl text-gray-800">
          Whether it&apos;s surf instruction, leading environmental education, or sharing high fives, check out all the ways you can help:
        </h2>
      </div>

      {/* Form Section */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {submitted ? (
          <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded">
            <p className="text-green-800">Thank you! Your application has been submitted.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="firstName" className="block mb-1">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block mb-1">Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="email" className="block mb-1">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-1">Phone *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="dateOfBirth" className="block mb-1">Date of Birth *</label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  required
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Address</h2>
              <div className="mb-4">
                <label htmlFor="address" className="block mb-1">Street Address *</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="city" className="block mb-1">City *</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <div>
                  <label htmlFor="state" className="block mb-1">State *</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    required
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <div>
                  <label htmlFor="zipCode" className="block mb-1">ZIP Code *</label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    required
                    value={formData.zipCode}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Emergency Contact</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="emergencyContact" className="block mb-1">Emergency Contact Name *</label>
                  <input
                    type="text"
                    id="emergencyContact"
                    name="emergencyContact"
                    required
                    value={formData.emergencyContact}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
                <div>
                  <label htmlFor="emergencyPhone" className="block mb-1">Emergency Contact Phone *</label>
                  <input
                    type="tel"
                    id="emergencyPhone"
                    name="emergencyPhone"
                    required
                    value={formData.emergencyPhone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Volunteer Interests</h2>
              <p className="text-sm mb-4">Select all that apply:</p>
              <div className="grid md:grid-cols-2 gap-2">
                {[
                  'Eco Excursions',
                  'Surf Therapy Sessions',
                  'Mentoring',
                  'Environmental Education',
                  'Event Planning',
                  'Fundraising',
                  'Administrative Support',
                  'Photography/Videography'
                ].map((interest) => (
                  <label key={interest} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      value={interest}
                      checked={formData.interests.includes(interest)}
                      onChange={handleCheckboxChange}
                      className="w-4 h-4"
                    />
                    <span>{interest}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Availability & Experience</h2>
              <div className="mb-4">
                <label htmlFor="availability" className="block mb-1">Availability *</label>
                <select
                  id="availability"
                  name="availability"
                  required
                  value={formData.availability}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded"
                >
                  <option value="">Select availability</option>
                  <option value="weekdays">Weekdays</option>
                  <option value="weekends">Weekends</option>
                  <option value="both">Both Weekdays & Weekends</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
              <div>
                <label htmlFor="experience" className="block mb-1">Relevant Experience *</label>
                <textarea
                  id="experience"
                  name="experience"
                  required
                  rows={4}
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="Tell us about your experience..."
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
            </div>

            <div>
              <label htmlFor="additionalInfo" className="block mb-1">Additional Information</label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                rows={4}
                value={formData.additionalInfo}
                onChange={handleChange}
                placeholder="Anything else you&apos;d like us to know?"
                className="w-full px-3 py-2 border rounded"
              />
            </div>

            <button
              type="submit"
              className="px-6 py-2 bg-[#f48847] text-white rounded hover:opacity-90"
            >
              Submit Application
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
