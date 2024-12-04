import { JOB_API_END_POINT } from '@/constants/constant'
import { setAllJobs } from '@/redux/jobSlice';
import axios from 'axios'
import {useEffect}from 'react'
import { useDispatch } from 'react-redux'

const useGetAllJobs = () => {
    const dispatch=useDispatch();
  useEffect(()=>{
    const fetchAllJobs = async () =>{
        try {
            const res = await axios.get(`${JOB_API_END_POINT}/allJobs`,{withCredentials:true})
            if(res.data.success){
                dispatch(setAllJobs(res.data.jobs))
            }
        } catch (error) {
            console.error('Error from get all jobs');
        }
    }
    fetchAllJobs();
  },[dispatch])
}

export default useGetAllJobs