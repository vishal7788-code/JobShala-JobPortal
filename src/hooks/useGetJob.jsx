import { JOB_API_END_POINT } from '@/constants/constant'
import { setAllJobs, setJob } from '@/redux/jobSlice';
import axios from 'axios'
import {useEffect}from 'react'
import { useDispatch } from 'react-redux'

const useGetJob = (jobId) => {
    const dispatch=useDispatch();
  useEffect(()=>{
    const fetchJob = async () =>{
        try {
            const res = await axios.get(`${JOB_API_END_POINT}//getjob/${jobId}`,{withCredentials:true})
            if(res.data.success){
                dispatch(setJob(res.data.jobs))
            }
        } catch (error) {
            console.error('Error from get all jobs');
        }
    }
    fetchJob();
  },[dispatch])
}

export default useGetJob