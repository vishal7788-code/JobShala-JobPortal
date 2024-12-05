import React from 'react';
import JobCards from './JobCards'; 
import { useSelector } from 'react-redux';
import useGetAllJobs from '@/hooks/useGetAllJobs';


const LatestJob = () => {
  const { allJobs } = useSelector(store => store.job);
useGetAllJobs()
  // Check if allJobs is valid and not null
  const jobs = allJobs && Array.isArray(allJobs) ? allJobs : [];

  return (
    <div className="relative top-[10rem] mx-auto p-5 ">
      <h1 className="my-8 text-2xl md:text-3xl sm:text-4xl text-center font-bold">
        Latest Job <span className="text-purple-700">Openings</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {jobs.length === 0 ? <span className='text-center text-lg font-semibold text-gray-500'>Login to see available jobs.</span> : jobs.slice(0, 6).map((job) => (
          <JobCards key={job?._id} job={job} />
        ))}
      </div>
    </div>
  );
};
export default LatestJob;