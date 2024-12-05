import React from 'react';
import { Button } from './ui/button';
import { Bookmark } from 'lucide-react';
import { Avatar, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { useNavigate } from 'react-router-dom';

const Job = ({ job }) => {
    const navigate = useNavigate();
    const daysAgo = (mongodbTime) => {
        const createdAt = new Date(mongodbTime);
        const today = new Date();
        const diffTime = today - createdAt;
        return Math.floor(diffTime / (1000 * 24 * 60 * 60))
    }

        ;
    const navigateToJobDetails = () => {
        navigate(`/Jobs/Description/${job?._id}`)
    }
    return (
        <div className="shadow-xl p-4 md:p-5 rounded-lg bg-white relative ">
            <div className="flex items-center justify-between">
                <p className="text-xs text-gray-500"> {daysAgo(job?.createdAt) === 0 ? "Today" : `${daysAgo(job?.createdAt)}`} day ago</p>
                <Button variant="outline" className="rounded-full" size="icon">
                    <Bookmark />
                </Button>
            </div>

            <div className="flex items-center gap-3 my-2">
                <Button variant="outline" className="rounded-full" size="icon">
                    <Avatar>
                        <AvatarImage src="https://shorturl.at/GDPiJ" />
                    </Avatar>
                </Button>
                <div>
                    <h1 className="text-lg sm:text-md font-bold">{job?.company?.name}</h1>
                    <p className="text-xs text-gray-500">{job?.location}</p>
                </div>
            </div>

            <div className="p-2">
                <h1 className="text-sm sm:text-md font-semibold mx-4">{job?.title}</h1>
                <p className="text-xs sm:text-sm mx-4 mt-2 text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis animi laborum placeat magnam corporis ullam
                    consequuntur atque eligendi amet blanditiis.
                </p>
            </div>
            <div className='flex gap-2 text-sm font-semibold mx-6 mb-3'>
                <h1>Role:</h1>
                <span>{job?.role}</span>
            </div>
            <div className="mx-6 my-3">
                <h1 className="text-md font-semibold text-gray-500">Key Highlights</h1>
            </div>


            <div className="flex gap-3 mx-4 mt-3 flex-wrap">
                <Badge variant="outline" className="text-blue-600 text-xs sm:text-sm">{job?.jobType}</Badge>
                <Badge variant="outline" className="text-red-600 text-xs sm:text-sm">{job?.position} Positions</Badge>
                <Badge variant="outline" className="text-green-600 text-xs sm:text-sm">{job?.role}</Badge>
                <Badge variant="outline" className="text-orange-600 text-xs sm:text-sm">{job?.salary} Lpa</Badge>
            </div>

            <div className="flex  sm:flex-row justify-end items-center gap-3 mt-3">
                <Button onClick={navigateToJobDetails} className="bg-purple-700 hover:bg-purple-800 text-xs sm:text-sm">View Details</Button>
            </div>
        </div>
    );
};


export default Job;
