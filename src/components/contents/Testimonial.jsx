import React from 'react'

const Testimonial = () => {
  return (
    <section className="relative z-0 my-28 px-10 md:px-20 py-14 md:py-20 w-full h-auto">
        <h2 className='absolute -z-[1] top-12 -left-5 text-8xl text-[#435a651c] font-playfair font-semibold'>Testimonials</h2>
        <div className='translate-y-9 w-full h-auto grid grid-cols-2 items-start'>
            <h3 className='w-2/3 text-3xl text-[#263238] font-semibold font-montserrat'>In Their Words: Stories of Wellness</h3>
            <p className='justify-self-end w-2/3 text-base text-right text-[#263238] font-semibold font-montserrat'>Hear firsthand how Aroviya transforms lives with expert care and personalized wellness solutions. Our testimonials reflect the trust and positive impact we bring to our user's health journeys.</p>
        </div>
    </section>
  )
}

export default Testimonial