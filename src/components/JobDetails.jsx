import React, { useEffect, useState } from 'react';
import Navbar from './shared/Navbar';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Avatar, AvatarImage } from './ui/avatar';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { setJob } from '@/redux/jobSlice';
import { useDispatch, useSelector } from 'react-redux';
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from '@/constants/constant';
import { toast } from 'sonner';


const JobDetails = () => {
    const { job } = useSelector(store => store.job)
    const { user } = useSelector(store => store.auth)
    const params = useParams();
    const jobId = params.id;
    const dispatch = useDispatch()
    const isInitialApplied = job?.applications?.some(application => application.applicant === user?._id) || false;
    const [isApplied, setIsApplied] = useState(isInitialApplied);
    useEffect(() => {
        const fetchJob = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/getjob/${jobId}`, { withCredentials: true })
                console.log(res.data)
                if (res.data.success) {
                    setIsApplied(res.data.job.applications.some(application => application.applicant === user?._id))
                    dispatch(setJob(res.data.job))
                }
            } catch (error) {
                console.error('Error from get job:', error.message); // 
            }

        }
        fetchJob();
    }, [jobId, dispatch, user?._id])

    const applyHandler = async () => {
        try {
            const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`, { withCredentials: true })
            if (res.data.success) {
                setIsApplied(true);
                const updatedJob = { ...job, applications: [...job.applications, { applicant: user?._id }] }
                dispatch(setJob(updatedJob));
                toast.success(res.data.message)
            }
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    return (
        <div>
            {/* Navbar */}
            <div>
                <Navbar />
            </div>

            {/* Main Container */}
            <div className="relative top-[8rem] px-4">
                <div className="max-w-4xl mx-auto border-2 border-purple-400 bg-purple-50 p-6 rounded-xl shadow-lg">
                    {/* Header */}
                    <div>
                        <h1 className="text-2xl font-bold text-center mb-2">Job Details</h1>
                        <hr className="border-purple-200 mx-4" />
                    </div>

                    {/* Job Details Content */}
                    <div className="mt-4 flex flex-col space-y-4">
                        {/* Company Info */}
                        <div className="flex items-center gap-3">
                            <Avatar>
                                <AvatarImage src="https://shorturl.at/GDPiJ" />
                            </Avatar>
                            <div>
                                <h2 className="text-lg font-bold">{job?.company?.name}</h2>
                                <p className="text-sm font-semibold text-gray-500">{job?.location}</p>
                            </div>
                        </div>

                        <h2 className="text-lg font-bold">Role: {job?.role}</h2>


                        <p className="text-sm text-gray-700">
                            {job?.description}
                        </p>

                        <h2 className="text-lg font-bold">Applicants: {job?.applications?.length} </h2>


                        <h2 className="text-lg font-bold">Key Highlights</h2>
                        <div className="flex flex-wrap gap-3">
                            <Badge variant="outline" className="text-blue-600 text-xs sm:text-sm border-gray-300">{job?.jobType}</Badge>
                            <Badge variant="outline" className="text-red-600 text-xs sm:text-sm border-gray-300">{job?.position} Positions</Badge>
                            <Badge variant="outline" className="text-green-600 text-xs sm:text-sm border-gray-300">{job?.role}</Badge>
                            <Badge variant="outline" className="text-orange-600 text-xs sm:text-sm border-gray-300">{job?.salary}Lpa</Badge>
                        </div>

                        {/* Apply Button */}
                        <div className="flex justify-end">
                            {isApplied ? (
                                <Button disabled className="bg-purple-600 hover:bg-purple-700 cursor-not-allowed text-white px-4 py-2">
                                    Already Applied
                                </Button>
                            ) : (
                                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2" onClick={applyHandler}>
                                    Apply Now
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;
