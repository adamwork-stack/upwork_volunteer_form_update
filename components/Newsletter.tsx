'use client'

import { useState } from 'react'

export default function Newsletter() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Here you would typically send the data to your newsletter service
    console.log('Newsletter signup:', formData)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setSubmitted(true)
    setFormData({ firstName: '', lastName: '', email: '' })
    setIsSubmitting(false)
    
    // Reset success message after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section className="flex flex-col xl:flex-row justify-center items-center bg-white bg-opacity-65 py-8 gap-2 pr-2">
      <h2 className="text-2xl text-[#541E1B] mx-4">Join the Un Mar Community!</h2>
      <form 
        onSubmit={handleSubmit}
        className="w-full md:w-auto px-4 md:space-x-2 space-y-2 md:space-y-0 flex flex-col md:flex-row items-start md:items-center pr-12 md:pr-0"
      >
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full md:w-[200px] px-4 py-1 bg-transparent text-[#541E1B] border border-[#541E1B] rounded-full focus:outline-none placeholder:text-[#541E1B]"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full md:w-[200px] px-4 py-1 bg-transparent text-[#541E1B] border border-[#541E1B] rounded-full focus:outline-none placeholder:text-[#541E1B]"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full md:w-[300px] px-4 py-1 bg-transparent text-[#541E1B] border border-[#541E1B] rounded-full focus:outline-none placeholder:text-[#541E1B]"
        />
        <button
          type="submit"
          disabled={isSubmitting || submitted}
          className="rounded-2xl text-sm text-white p-2 bg-[#f48847] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Subscribing...' : submitted ? 'Subscribed!' : 'Subscribe'}
        </button>
      </form>
    </section>
  )
}
