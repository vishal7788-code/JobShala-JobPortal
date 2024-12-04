import React, { useState } from 'react';
import Navbar from '../shared/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Button } from '../ui/button';
import axios from 'axios';
import { toast } from 'sonner';
import { USER_API_END_POINT } from '@/constants/constant';
import { useDispatch, useSelector } from 'react-redux';
import { Loader2 } from 'lucide-react';
import { setLoading, setUser } from '@/redux/authSlice';

const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: "",
        role: "",
    });
    const { loading } = useSelector(store => store.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const changeRoleHandler = (value) => {
        setInput({ ...input, role: value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            dispatch(setLoading(true));
           
            const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
                headers: {
                    "content-type": "application/json",
                },
                withCredentials: true,
            });
            if (res.data.success) {
                dispatch(setUser(res.data.user));
                navigate("/");
                toast.success(res.data.message, { duration: 2000 });
            }
        } catch (error) {
            toast.error(error.response.data.message, { duration: 2000 });
        } finally {
            dispatch(setLoading(false));
        }
    };

    return (
        <>
            <Navbar />
            <div className='flex items-center justify-center max-w-7xl mx-auto px-4 md:px-8 md:h-[95vh]  h-[95vh] overflow-auto scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-gray-200'>
                <form onSubmit={submitHandler} className='w-full md:w-3/4 mt-20 lg:w-1/2 border border-purple-200 relative md:top-[3rem] top-[3rem] rounded-md p-4 my-10 bg-purple-100 md:mt-20 lg:mt-20'>
                    <h1 className='text-3xl font-bold '>Welcome Back 👋🏻</h1>
                    <span className='text-sm text-gray-400'>Enter your email and password to access your account.</span>
                    <div className='my-2'>
                        <Label className="mx-1 text-lg">Email</Label>
                        <Input
                            type="text"
                            name="email"
                            value={input.email}
                            onChange={changeEventHandler}
                            placeholder="Your email address"
                            className='my-2 w-full'
                        />
                    </div>
                    <div className='my-2'>
                        <Label className="mx-1 text-lg">Password</Label>
                        <Input
                            type="password"
                            name="password"
                            value={input.password}
                            onChange={changeEventHandler}
                            placeholder="Enter your password"
                            className='my-2 w-full'
                        />
                    </div>
                    <div className='my-2 flex flex-col md:flex-row items-start md:items-center justify-between w-full'>
                        <RadioGroup defaultValue="student" className='flex text-purple-800 mt-4 gap-4 flex-wrap' value={input.role} onValueChange={changeRoleHandler}>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="student" id="option-one" name="role" />
                                <Label htmlFor="option-one" className='cursor-pointer'>Student</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="recruiter" id="option-two" />
                                <Label htmlFor="option-two" className='cursor-pointer'>Recruiter</Label>
                            </div>
                        </RadioGroup>
                    </div>

                    <div className='my-2'>
                        {loading ? (
                            <Button disabled className="bg-purple-600 w-full mt-5 cursor-none hover:bg-purple-700 ease-in-out duration-300">
                                <Loader2 className='animate-spin' /> Loading
                            </Button>
                        ) : (
                            <Button className='bg-purple-800 hover:bg-purple-900 ease-in-out duration-300 w-full mt-5' type="submit">
                                Login
                            </Button>
                        )}

                        <span className='text-sm mt-6 block'>
                            Don't have an account? <Link to="/signup" className='text-purple-700'>Signup</Link>
                        </span>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;
