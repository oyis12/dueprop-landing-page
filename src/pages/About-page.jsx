import { CheckCircle, Clock, FileText, Shield, Users } from 'lucide-react'
import three from '../assets/3.png'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import Navbar from '../components/Navbar'
import TestimonialSlider from '../components/Testimonials'

export default function AboutPage () {
  return (
    <>
      <div className='min-h-screen bg-white'>
        <Navbar />

        <div className='bg-white text-slate-800'>
          {/* Hero Section */}
          <section className='relative h-[50vh] flex items-center justify-center text-center'>
            {/* Background image */}
            <div
              className='absolute inset-0 bg-cover bg-center'
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1560184897-77ec180b1a09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
              }}
            ></div>

            {/* Green transparent overlay */}
            <div className='absolute inset-0 bg-green-900/60'></div>

            {/* Content */}
            <div className='relative z-10 px-6'>
              <h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>
                About Dueprop
              </h1>
              <p className='max-w-2xl mx-auto text-lg md:text-xl text-slate-100'>
                We are a due diligence company in the PropTech space, empowering
                clients with actionable and reliable property verification
                reports.
              </p>
            </div>
          </section>

          {/* Company Overview */}
          <section className='py-16 px-6 max-w-6xl mx-auto'>
            <div className='grid md:grid-cols-2 gap-10 md:gap-8 items-center'>
              <div className='flex justify-center'>
                <img
                  src={three}
                  alt='Receive Report'
                  className='max-w-[220px] md:max-w-sm'
                />
              </div>
              <div>
                <h2 className='text-3xl font-bold text-slate-900 mb-6'>
                  Who We Are
                </h2>
                <p className='text-slate-600 leading-relaxed max-w-4xl mx-auto text-lg'>
                  Dueprop was founded out of a deep commitment to combating real
                  estate fraud — a problem that costs buyers and investors
                  billions of naira annually, not only in Nigeria but around the
                  world. We serve individual property buyers seeking to verify
                  the authenticity of real estate before making a purchase. In
                  addition, we support financial institutions and loan providers
                  by conducting thorough collateral verification for their
                  clients. Our operations are driven by a team of legal
                  professionals with over 40 years of combined experience,
                  working alongside seasoned experts in the real estate sector.
                </p>
                <div className='mt-6'></div>
              </div>
            </div>
          </section>

          {/* Mission & Who We Serve */}
          <section className='py-16 px-6 bg-slate-50'>
            <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-10'>
              <div className='bg-white shadow-md rounded-2xl p-8'>
                <h3 className='text-2xl font-semibold text-green-700 mb-4'>
                  Our Mission
                </h3>
                <p className='text-slate-600 leading-relaxed'>
                  Our mission is simple: to empower our clients with clear,
                  actionable, and reliable search reports derived from official
                  government records. We are building trust in the real estate
                  sector through innovation and transparency.
                </p>
              </div>
              <div className='bg-white shadow-md rounded-2xl p-8'>
                <h3 className='text-2xl font-semibold text-green-700 mb-4'>
                  Who We Serve
                </h3>
                <p className='text-slate-600 leading-relaxed'>
                  From everyday individuals securing their dream home to
                  financial institutions protecting their investments, Dueprop
                  supports all stakeholders in the real estate ecosystem.
                  Whether you are buying, lending, or investing, we provide the
                  clarity and peace of mind you need.
                </p>
              </div>
            </div>
          </section>

          {/* Partners Section */}
          <section className='py-16 bg-slate-50 px-6'>
            <div className='max-w-6xl mx-auto text-center'>
              <h2 className='text-3xl font-bold text-slate-900 mb-10'>
                Our Partners
              </h2>
              <p className='max-w-2xl mx-auto text-slate-600 mb-12'>
                We collaborate with leading institutions and organizations to
                strengthen trust in Nigeria’s real estate ecosystem.
              </p>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-8 items-center'>
                <img
                  src='https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_Nigerian_Banks.png'
                  alt='Partner 1'
                  className='h-14 mx-auto grayscale hover:grayscale-0 transition'
                />
                <img
                  src='https://upload.wikimedia.org/wikipedia/commons/e/e0/Nigerian_Institute_of_Estate_Surveyors_and_Valuers_logo.png'
                  alt='Partner 2'
                  className='h-14 mx-auto grayscale hover:grayscale-0 transition'
                />
                <img
                  src='https://upload.wikimedia.org/wikipedia/commons/4/4e/Nigerian_Bar_Association_logo.png'
                  alt='Partner 3'
                  className='h-14 mx-auto grayscale hover:grayscale-0 transition'
                />
                <img
                  src='https://upload.wikimedia.org/wikipedia/commons/6/6b/Coat_of_arms_of_Nigeria.svg'
                  alt='Partner 4'
                  className='h-14 mx-auto grayscale hover:grayscale-0 transition'
                />
              </div>
            </div>
          </section>

          {/* Closing Section */}
          <section className='py-16 px-6 max-w-4xl mx-auto text-center'>
            <h2 className='text-2xl font-semibold mb-4 text-green-700'>
              Building Trust in Real Estate
            </h2>
            <p className='text-slate-600 leading-relaxed'>
              At Dueprop, we are not just a PropTech company — we are your
              trusted partner in due diligence. By combining technology, legal
              expertise, and real estate knowledge, we ensure that every
              transaction you make is safe, transparent, and fraud-free.
            </p>
          </section>

          {/* Packages Section */}
          <section className='py-20 bg-gradient-subtle'>
            <div className='container mx-auto px-4'>
              <div className='text-center mb-16'>
                <h2 className='text-3xl lg:text-4xl font-bold text-foreground mb-4'>
                  Our Verification Packages
                </h2>
                <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
                  Choose the right level of due diligence for your property
                  investment needs
                </p>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
                {/* Basic Package */}
                <div className='bg-card p-8 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border border-border'>
                  <div className='text-center mb-6'>
                    <div className='inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4'>
                      <FileText className='h-8 w-8 text-primary' />
                    </div>
                    <h3 className='text-2xl font-bold text-card-foreground mb-2'>
                      Basic
                    </h3>
                    <p className='text-muted-foreground'>
                      Essential verification
                    </p>
                  </div>
                  <ul className='space-y-3 mb-8'>
                    <li className='flex items-start'>
                      <CheckCircle className='h-5 w-5 text-success mt-0.5 mr-3 flex-shrink-0' />
                      <span className='text-card-foreground'>
                        Property location verification
                      </span>
                    </li>
                    <li className='flex items-start'>
                      <CheckCircle className='h-5 w-5 text-success mt-0.5 mr-3 flex-shrink-0' />
                      <span className='text-card-foreground'>
                        Title and property nexus check
                      </span>
                    </li>
                    <li className='flex items-start'>
                      <Clock className='h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0' />
                      <span className='text-muted-foreground'>
                        4-5 days turnaround
                      </span>
                    </li>
                  </ul>
                  {/* <Button
                    variant='outline'
                    className='w-full'
                    // onClick={() => setIsModalOpen(true)}
                  >
                    Choose Basic
                  </Button> */}
                </div>

                {/* Main Package */}
                <div className='bg-card p-8 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-2 border-primary relative'>
                  <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
                    <span className='bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium'>
                      Most Popular
                    </span>
                  </div>
                  <div className='text-center mb-6'>
                    <div className='inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4'>
                      <Shield className='h-8 w-8 text-primary' />
                    </div>
                    <h3 className='text-2xl font-bold text-card-foreground mb-2'>
                      Main
                    </h3>
                    <p className='text-muted-foreground'>
                      Comprehensive verification
                    </p>
                  </div>
                  <ul className='space-y-3 mb-8'>
                    <li className='flex items-start'>
                      <CheckCircle className='h-5 w-5 text-success mt-0.5 mr-3 flex-shrink-0' />
                      <span className='text-card-foreground'>
                        Property location verification
                      </span>
                    </li>
                    <li className='flex items-start'>
                      <CheckCircle className='h-5 w-5 text-success mt-0.5 mr-3 flex-shrink-0' />
                      <span className='text-card-foreground'>
                        Title authenticity verification
                      </span>
                    </li>
                    <li className='flex items-start'>
                      <CheckCircle className='h-5 w-5 text-success mt-0.5 mr-3 flex-shrink-0' />
                      <span className='text-card-foreground'>
                        Property wellness & size details
                      </span>
                    </li>
                    <li className='flex items-start'>
                      <Clock className='h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0' />
                      <span className='text-muted-foreground'>
                        3 days turnaround
                      </span>
                    </li>
                  </ul>
                  {/* <Button
                    className='w-full'
                    // onClick={() => setIsModalOpen(true)}
                  >
                    Choose Main
                  </Button> */}
                </div>

                {/* Professional Package */}
                <div className='bg-card p-8 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border border-border'>
                  <div className='text-center mb-6'>
                    <div className='inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4'>
                      <Users className='h-8 w-8 text-primary' />
                    </div>
                    <h3 className='text-2xl font-bold text-card-foreground mb-2'>
                      Professional
                    </h3>
                    <p className='text-muted-foreground'>
                      Complete legal verification
                    </p>
                  </div>
                  <ul className='space-y-3 mb-8'>
                    <li className='flex items-start'>
                      <CheckCircle className='h-5 w-5 text-success mt-0.5 mr-3 flex-shrink-0' />
                      <span className='text-card-foreground'>
                        Everything in Main package
                      </span>
                    </li>
                    <li className='flex items-start'>
                      <CheckCircle className='h-5 w-5 text-success mt-0.5 mr-3 flex-shrink-0' />
                      <span className='text-card-foreground'>
                        Indebtedness & encumbrances check
                      </span>
                    </li>
                    <li className='flex items-start'>
                      <CheckCircle className='h-5 w-5 text-success mt-0.5 mr-3 flex-shrink-0' />
                      <span className='text-card-foreground'>
                        Property history index
                      </span>
                    </li>
                    <li className='flex items-start'>
                      <Clock className='h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0' />
                      <span className='text-muted-foreground'>
                        1-2 weeks turnaround
                      </span>
                    </li>
                  </ul>
                  {/* <Button
                    variant='premium'
                    className='w-full'
                    // onClick={() => setIsModalOpen(true)}
                  >
                    Choose Professional
                  </Button> */}
                </div>
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </>
  )
}
