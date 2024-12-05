import React from 'react'
import Navbar from './shared/Navbar'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import Job from './Job'

const jobs = [1, 2, 3, 4, 5, 6, 7]

const Browse = () => {
  return (
    <div className="flex flex-col h-screen ">
      <Navbar />
      <div>
        <div className="flex flex-col items-center justify-center mt-20 md:flex-row md:gap-3 lg:mt-20 md:mt-20">
          <input
            className="border-2 w-[80vw] md:w-[35vw] h-[7vh] outline-none border-gray-400 px-4 font-medium rounded-3xl my-5 md:shadow-xl"
            placeholder="Your next opportunity"
          />
          <Button className="bg-purple-600 h-[7vh] w-[80vw] md:w-[14vw] relative bottom-4  md:top-0 rounded-3xl shadow-3xl hover:bg-purple-700 ease-in-out duration-300">
            <Search className='text-sm' />Find Jobs
          </Button>
        </div>
        <h1 className="text-center lg:text-lg  text-md font-semibold text-gray-600 lg:my-3 relative bottom-3 ">Search Results ({jobs.length})</h1>
      </div>
      <hr className='mx-auto my-2 w-[85vw]' />
      <div className="flex-1 overflow-y-auto px-5 mx-auto scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-200">
        {jobs.map((job, index) => (
          <div key={index} className="mb-8">
            <Job />
          </div>
        ))}
      </div>

    </div>
  )
}

export default Browse
