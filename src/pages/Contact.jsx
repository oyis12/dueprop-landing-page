import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion, AnimatePresence } from 'framer-motion'
import DueDiligenceForm from '../components/DueDiligenceForm'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
   const [showModal, setShowModal] = useState(false)

  const handleInputChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // send data to backend API here
  }

  const contactInfo = [
    {
      title: 'Our Office',
      details: [
        'House C5, Aknaton estate, Gospel light avenue, off dunamis road',
        'Durumi, Area 1, Abuja, FCT 900001',
        'Nigeria'
      ]
    },
    {
      title: 'Phone Numbers',
      details: [
        '+234 703 632 6018',
        '+234 806 190 8010',
        'WhatsApp: +234 703 632 6018'
      ]
    },
    {
      title: 'Email Addresses',
      details: [
        'info@dueprop.com',
        'verification@dueprop.com',
        'support@dueprop.com'
      ]
    },
    {
      title: 'Business Hours',
      details: [
        'Mon - Fri: 8:00 AM - 6:00 PM',
        'Saturday: 9:00 AM - 2:00 PM',
        'Sunday: Closed'
      ]
    }
  ]

  const faqs = [
    {
      question: 'How quickly can I get a response?',
      answer:
        'We typically respond to all inquiries within 2-4 hours during business hours.'
    },
    {
      question: 'Can I schedule a consultation?',
      answer:
        'Yes, we offer free initial consultations. Contact us to schedule an appointment.'
    },
    {
      question: 'Do you offer emergency verification services?',
      answer:
        'Yes, we provide expedited verification services for urgent property transactions.'
    }
  ]

     useEffect(() => {
      document.body.style.overflow = showModal ? 'hidden' : ''
    }, [showModal])


  return (
    <>
    <div>
      {/* Hero */}
 <Navbar />
      <section className='relative h-[50vh] flex items-center justify-center text-center'>
        {/* Background image */}
        <div
          className='absolute inset-0 bg-cover bg-center'
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
          }}
        ></div>

        {/* Green transparent overlay */}
        <div className='absolute inset-0 bg-green-900/60'></div>

        {/* Content */}
        <div className='relative z-10 px-6'>
          <h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>
            Contact us
          </h1>
          <p className='max-w-2xl mx-auto text-lg md:text-xl text-slate-100'>
            Get in touch with our property verification experts. We're here to
            help secure your real estate investments.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Form */}
          <div>
            <h2 className='text-2xl font-bold mb-4'>Send Us a Message</h2>
            <p className='text-gray-600 mb-6'>
              Have questions about our services? Need a custom verification
              package? We'd love to hear from you.
            </p>

            <form 
             onSubmit={handleSubmit}
             className='space-y-4'
             method="POST"
             >
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                  <label className='block text-sm font-medium'>
                    Full Name *
                  </label>
                  <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleInputChange}
                    className='mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none'
                    required
                  />
                </div>
                <div>
                  <label className='block text-sm font-medium'>Email *</label>
                  <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    className='mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none'
                    required
                  />
                </div>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                  <label className='block text-sm font-medium'>Phone</label>
                  <input
                    type='text'
                    name='phone'
                    value={formData.phone}
                    onChange={handleInputChange}
                    className='mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none'
                  />
                </div>
                <div>
                  <label className='block text-sm font-medium'>Subject *</label>
                  <input
                    type='text'
                    name='subject'
                    value={formData.subject}
                    onChange={handleInputChange}
                    className='mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none'
                    required
                  />
                </div>
              </div>

              <div>
                <label className='block text-sm font-medium'>Message *</label>
                <textarea
                  name='message'
                  rows='5'
                  value={formData.message}
                  onChange={handleInputChange}
                  className='mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none'
                  required
                ></textarea>
              </div>

              <button
                type='submit'
                className='w-full bg-[#1d7039] text-white py-3 rounded-lg font-medium hover:bg-green-700 transition'
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className='text-2xl font-bold mb-4'>Get in Touch</h2>
            <p className='text-gray-600 mb-6'>
              Reach out to us through any of these channels. Our team is ready
              to assist you.
            </p>
            <div className='space-y-4'>
              {contactInfo.map((info, i) => (
                <div key={i} className='border rounded-lg p-4 shadow-sm'>
                  <h3 className='font-semibold'>{info.title}</h3>
                  <ul className='text-gray-600 text-sm mt-2 space-y-1'>
                    {info.details.map((d, j) => (
                      <li key={j}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-6xl mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold mb-6'>Multiple Ways to Reach Us</h2>
          <p className='text-gray-600 mb-12'>
            Choose the communication method that works best for you
          </p>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='p-6 bg-white rounded-lg shadow hover:shadow-lg transition'>
              <h3 className='font-semibold text-lg mb-2'>Live Chat</h3>
              <p className='text-gray-600 mb-4'>
                Chat with our support team in real-time for immediate
                assistance.
              </p>
              <button className='bg-green-600 text-white px-4 py-2 rounded-lg w-full hover:bg-green-700 block text-center'>
                <a href="https://wa.me/2347036326018" target="_blank" rel="noopener noreferrer">
                  Start Live Chat
                </a>
              </button>
            </div>
            <div className='p-6 bg-white rounded-lg shadow hover:shadow-lg transition'>
              <h3 className='font-semibold text-lg mb-2'>Phone Support</h3>
              <p className='text-gray-600 mb-4'>
                Call us directly for detailed discussions about your
                verification needs.
              </p>
              {/* <button className='border border-green-600 text-green-600 px-4 py-2 rounded-lg w-full hover:bg-green-50'>
                Call Now
              </button> */}
              <a href="tel:+2347036326018">
              <button class="border border-green-600 text-green-600 px-4 py-2 rounded-lg w-full hover:bg-green-50">
                Call Now
              </button>
            </a>
            </div>
            <div className='p-6 bg-white rounded-lg shadow hover:shadow-lg transition'>
              <h3 className='font-semibold text-lg mb-2'>Email Support</h3>
              <p className='text-gray-600 mb-4'>
                Send us detailed inquiries and receive comprehensive responses.
              </p>
              <button className='border border-green-600 text-green-600 px-4 py-2 rounded-lg w-full hover:bg-green-50'>
                <li className="list-none">
                  <a href="mailto:info@dueprop.com">Send Email</a>
                </li>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className='py-16 bg-white'>
        <div className='max-w-4xl mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center mb-10'>
            Frequently Asked Questions
          </h2>
          <div className='space-y-4'>
            {faqs.map((faq, i) => (
              <details key={i} className='border rounded-lg p-4'>
                <summary className='font-semibold cursor-pointer'>
                  {faq.question}
                </summary>
                <p className='text-gray-600 mt-2'>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='py-16 bg-[#1D7039] text-white text-center'>
        <div className='max-w-3xl mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-4'>
            Ready to Start Your Property Verification?
          </h2>
          <p className='mb-6 text-lg'>
            Don't wait - secure your property investment with professional
            verification today.
          </p>
          <button
           onClick={() => setShowModal(true)}
           className='bg-white text-green-600 font-semibold px-6 py-3 rounded-lg'>
            Get Started Now
          </button>
        </div>
      </section>
       <Footer />
    </div>

    {/* ✅ Modal with Framer Motion */}
          <AnimatePresence>
            {showModal && (
              <>
                <motion.div
                  className='fixed inset-0 z-40 bg-black/50 backdrop-blur-sm'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setShowModal(false)}
                />
                <motion.div
                  className='fixed inset-0 z-50 flex items-center justify-center p-4'
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                >
                  <DueDiligenceForm onClose={() => setShowModal(false)} />
                </motion.div>
              </>
            )}
          </AnimatePresence>
    </>
  )
}

export default Contact
