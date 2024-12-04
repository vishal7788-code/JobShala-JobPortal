import React from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import HeroSection1 from '../assets/images/HeroSection1.png'

const HeroSection = () => {
  return (
    <div className='mt-20 '>
      <div className='flex flex-col md:flex-row justify-between relative w-full top-7   '>
        <div className='relative flex flex-col items-center md:items-start md:w-1/2 md:top-[7rem] md:left-6'>
          <h1 className='text-3xl md:text-4xl font-bold text-center md:text-left'>
            Discover your next <span className='text-purple-700'>opportunity!</span>
          </h1>
          <p className='text-md mx-3 font-medium my-5 text-gray-500 text-center md:text-left'>
            Connect with jobs that align with your skills, passion, and career goals.
            <span className='text-center md:text-left'>Start your journey to a fulfilling career today.</span>
          </p>

          <div className='flex flex-col items-center md:flex-row md:gap-3'>
            <input
              className='border-2 w-[80vw] md:w-[35vw] h-[7vh] outline-none border-gray-400 px-4 font-medium rounded-3xl my-5 md:shadow-xl'
              placeholder="Your next opportunity"
            />
            <Button className="bg-purple-600 h-[7vh] w-[80vw] md:w-[14vw] relative md:top-0 top-[3rem] rounded-3xl shadow-3xl hover:bg-purple-700 ease-in-out duration-300">
              <Search />Find Jobs
            </Button>
          </div>
        </div>
        <div className='w-full md:w-1/2 order-first md:order-none'>
          <img
            src={HeroSection1}
            alt="Hero Image"
            className='w-[70vw] md:w-[50vw] bg-green-60 mx-auto relative md:mx-0 top-[-2rem] lg:top-[2rem] md:top-[3rem] xl:top-[-2rem]'
          />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
