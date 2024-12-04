import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Button } from '../ui/button'
import { toast } from 'sonner'
import axios from 'axios'
import { USER_API_END_POINT } from '@/constants/constant'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '@/redux/authSlice'
import { Loader2 } from 'lucide-react'

const Signup = () => {
    const [input, setInput] = useState({
        fullname: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "",
        file: "",
    });
    const {loading} = useSelector(store => store.auth)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }
    const changeFileHandler = (e) => {
        setInput({ ...input, file: e.target.files?.[0] });
    }
    const changeRoleHandler = (value) => {
        setInput({ ...input, role: value });
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("fullname", input.fullname);
        formData.append("email", input.email);
        formData.append("phoneNumber", input.phoneNumber);
        formData.append("password", input.password);
        formData.append("role", input.role);
        if (input.file) {
            formData.append("file", input.file);
        }
        try {
            dispatch(setLoading(true));
            const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
                headers: {
                    "content-type": "multipart/form-data"
                },
                withCredentials: true
            })
            if (res.data.success) {
                toast.success(res.data.message, {
                    duration: 2000,
                })
                navigate("/login");
            }
        } catch (error) {
            toast.error(error.response.data.message, {
                duration: 2000,
            })
        } finally {
            dispatch(setLoading(false));
        }
    }

    return (
        <>
        <div><Navbar /></div>
            
            <div className='flex items-center justify-center max-w-7xl mx-auto px-4 md:px-8 lg:h-[100vh] md:h-[95vh] h-[95vh] overflow-auto scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-gray-200'>
                <form onSubmit={submitHandler} className='w-full md:mt-20  mt-20 relative top-[10rem] lg:top-14 md:top-28 md:w-3/4 lg:w-1/2 border border-purple-200 rounded-md p-4 my-10 bg-purple-100'>
                    <h1 className='text-2xl md:text-3xl font-bold'>Get Started😊</h1>
                    <span className='text-sm'>Already have an account? <Link to="/login" className='text-purple-700'>Sign in</Link></span>
                    <div className='my-2'>
                        <Label className="mx-1 text-lg">Fullname</Label>
                        <Input type="text"
                            value={input.fullname}
                            name="fullname"
                            onChange={changeEventHandler}
                            placeholder="Your fullname" className='my-2' />
                    </div>
                    <div className='my-2'>
                        <Label className="mx-1 text-lg">Email</Label>
                        <Input type="email"
                            value={input.email}
                            name="email"
                            onChange={changeEventHandler}
                            placeholder="Your email address" className='my-2' />
                    </div>
                    <div className='my-2'>
                        <Label className="mx-1 text-lg">Phone Number</Label>
                        <Input type="text"
                            value={input.phoneNumber}
                            name="phoneNumber"
                            onChange={changeEventHandler}
                            placeholder="Your phone number" className='my-2' />
                    </div>
                    <div className='my-2'>
                        <Label className="mx-1 text-lg">Password</Label>
                        <Input type="password"
                            value={input.password}
                            name="password"
                            onChange={changeEventHandler}
                            placeholder="Enter your password" className='my-2' />
                    </div>
                    <div className='my-2 flex flex-col md:flex-row md:items-center justify-between w-full'>
                        <RadioGroup defaultValue="student" className='flex flex-col md:flex-row text-purple-600 mt-4 gap-4' name="role" value={input.role} onValueChange={changeRoleHandler}>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="student" id="option-one" name="role" />
                                <Label htmlFor="option-one" className='cursor-pointer'>Student</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="recruiter" id="option-two" name="role" />
                                <Label htmlFor="option-two" className='cursor-pointer'>Recruiter</Label>
                            </div>
                        </RadioGroup>
                        <div className="flex flex-col md:flex-row my-2 items-start md:items-center gap-1.5">
                            <Label htmlFor="picture" className='mt-4 md:mt-4 text-purple-600'>Picture</Label>
                            <Input id="picture"
                                name="file"
                                onChange={changeFileHandler} className='mt-2 md:mt-4' type="file" />
                        </div>
                    </div>
                    <div className='my-2'>
                        {
                            loading ? <Button disabled className="bg-purple-600 w-full mt-5 cursor-none hover:bg-purple-700 ease-in-out duration-300"><Loader2 className='animate-spin' />Loading</Button> : <Button className='bg-purple-600 hover:bg-purple-700 ease-in-out duration-300 w-full mt-5' type="submit">Sign up</Button>
                        }
                    </div>
                </form>
            </div>
        </>
    )
}

export default Signup;
