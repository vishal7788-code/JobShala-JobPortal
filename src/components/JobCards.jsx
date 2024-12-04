import React from 'react'
import { Badge } from './ui/badge'

const JobCards = ({job}) => {
    return (
        <div className='  p-4  rounded-lg shadow-xl bg-white '>
            <div>
                <h1 className='text-lg font-semibold' >
                    {job?.company?.name}
                </h1>
                <p className='text-gray-500 text-sm  mt-1 '>
                    India
                </p>
            </div>
            <div className='my-3'>
                <span className='text-md font-semibold'>{job?.title}</span>
                <p className='text-sm font-medium my-2 text-gray-500'>{job?.description}</p>
            </div>
            <div className='flex  gap-3 my-4 items-center ' >
                <Badge variant={"outline"} className={'text-blue-600  '}>{job?.position} Positions</Badge>
                <Badge variant={"outline"} className={'text-red-600'} >{job?.jobType}</Badge>
                <Badge variant={"outline"} className={'text-green-600'}>{job?.role}</Badge>
                <Badge variant={"outline"} className={'text-orange-600'}>{job?.salary}LPA</Badge>
            </div>
        </div>
    )
}

export default JobCards