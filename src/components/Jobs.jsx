import React, { useState } from 'react';
import Navbar from './shared/Navbar';
import Job from './Job';
import FilterCard from './FilterCard';
import { Filter } from 'lucide-react'; 
import { useSelector } from 'react-redux';
 

const Jobs = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const { allJobs } = useSelector(store => store.job);

    // Safe check if allJobs is an array
    const jobs = Array.isArray(allJobs) ? allJobs : [];

    return (
        <div className="overflow-hidden h-[90vh] relative">
            <Navbar />
            <div className="h-[calc(100vh-4rem)] flex lg:mt-20 md:mt-20">
                <div className="fixed bottom-4 right-4 z-40 md:hidden">
                    <button
                        className="bg-purple-700 text-white p-4 rounded-full shadow-md flex items-center justify-center relative left-3 top-3" 
                        size="icon"
                        onClick={() => setIsFilterOpen(true)}
                    >
                        <Filter size={10} />
                    </button>
                </div>

                <div className="hidden md:block md:w-[25%] w-[20%] mx-5">
                    <FilterCard isMobile={false} />
                </div>

                <div className="flex-1 overflow-y-auto h-[calc(100vh-10rem)] scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-200">
                    {jobs.length <= 0 ? (
                        <span>No Jobs</span>
                    ) : (
                        <div className="grid grid-cols-1 gap-5 lg:ml-10 md:w-[90%] lg:w-[80%] w-[100%] p-5 lg:p-10 ">
                            {jobs.map((job) => (
                                <div key={job?._id}>
                                    <Job job={job} />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <FilterCard isMobile={true} isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />
        </div>
    );
};


export default Jobs;
