import React from 'react'
import {Table, TableBody,TableCaption,TableCell,TableFooter,TableHead,TableHeader,TableRow,} from "@/components/ui/table"
import { Badge } from './ui/badge'

const appliedJobs=[
    {SerialNo:"01",
        Date:"24-11-2024",
        JobRole:"FullStack Developer",
        Company:"Atlassian",
        Status:"Selected"
    },
    {
        SerialNo:"02",
        Date:"24-11-2024",
        JobRole:"AI/ML Developer",
        Company:"Atlassian",
        Status:"Selected"
    },
    {
        SerialNo:"03",
        Date:"24-11-2024",
        JobRole:"backend Developer",
        Company:"Atlassian",
        Status:"Selected"
    },
    {
        SerialNo:"04",
        Date:"25-11-2024",
        JobRole:"Feontend Developer",
        Company:"Atlassian",
        Status:"Selected"
    }
]


const AppliedJobs = () => {
  return (
    <div>
        <div>
        <h1 className='text-lg font-semibold my-4 ml-4'>Applied Jobs</h1>
        </div>
        <div className='border-purple-400 border-2 rounded-xl bg-purple-100 p-4 '>
<Table>
    <TableHeader className='text-lg'>
        <TableRow>
            <TableHead>Serial No.</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Job Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className='text-right mr-2'>Status</TableHead>
        </TableRow>
    </TableHeader>
    <TableBody>
        {appliedJobs.map((applied)=>(
            <TableRow key={applied.SerialNo}>
                <TableCell className='text-md font-semibold'>{applied.SerialNo}</TableCell>
                <TableCell className='text-md font-semibold'>{applied.Date}</TableCell>
                <TableCell className='text-md font-semibold'>{applied.JobRole}</TableCell>
                <TableCell className='text-md font-semibold'>{applied.Company}</TableCell>
                <TableCell className='text-right'><Badge className='bg-purple-600 hover:bg-purple-600'>{applied.Status}</Badge></TableCell>
            </TableRow>
        )
        )}
    </TableBody>
</Table>
        </div>
        </div>
  )
}

export default AppliedJobs