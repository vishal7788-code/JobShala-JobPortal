import { JOB_API_END_POINT } from '@/constants/constant'
import { setAllJobs } from '@/redux/jobSlice';
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'sonner';

const useGetAllJobs = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(store => store.auth)
    useEffect(() => {
        if (!user) {
            console.error('Error from get all jobs')
            return;
        }


        const fetchAllJobs = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/allJobs`, { withCredentials: true })
                if (res.data.success) {
                    dispatch(setAllJobs(res.data.jobs))
                }
            } catch (error) {
                console.error('Error from get all jobs:', error.message, error.response?.data);
            }
        }
        fetchAllJobs();
    }, [user, dispatch])
}

export default useGetAllJobs
