import React, { useState } from 'react';
import { Popover, PopoverTrigger, PopoverContent } from '../ui/popover';
import { Avatar, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { User2, LogOut, HomeIcon } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { USER_API_END_POINT } from '@/constants/constant';
import { setUser } from '@/redux/authSlice';
import { toast } from 'sonner';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { user } = useSelector(store => store.auth)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true })
            if (res.data.success) {
                dispatch(setUser(null))
                navigate("/")
                toast.success(res.data.message, { duration: 1000 })
            }
        } catch (error) {
            toast.error(error.response.data.message, { duration: 1000 })
        }
    }

    return (
        <div className='bg-white w-full lg:fixed fixed z-10 md:fixed md:z-10 lg:z-10'>
            <div className='flex justify-between items-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16'>
                <div>
                    <h1 className='text-xl sm:text-2xl text-purple-600 font-bold'>Job<span>Shala</span></h1>
                </div>
                <div className='hidden md:flex items-center gap-5'>
                    <ul className='flex font-medium items-center gap-5'>
                        <Link to="/"> <li className='hover:text-purple-700 ease-in-out duration-300'>Home</li></Link>
                        <Link to="/Jobs"> <li className='hover:text-purple-700 ease-in-out duration-300'>Jobs</li></Link>
                        <Link to="/Browse"> <li className='hover:text-purple-700 ease-in-out duration-300'>Browse</li></Link>
                    </ul>
                    {
                        !user ? (
                            <div className='flex items-center gap-2 relative left-2'>
                                <Link to="/Login">
                                    <Button variant="outline" className='hover:bg-purple-300 text-purple-600  hover:text-purple-700 ease-in-out duration-300'>Login</Button>
                                </Link>
                                <Link to="/Signup">
                                    <Button className='bg-purple-600 hover:bg-purple-700 ease-in-out duration-300'>Get Started</Button>
                                </Link>
                            </div>
                        ) : (
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Avatar className='cursor-pointer'>
                                        <AvatarImage src={user?.profile?.profilePhoto} />
                                    </Avatar>
                                </PopoverTrigger>
                                <PopoverContent className='w-64 md:w-80'>
                                    <div className='flex gap-4 space-y-2'>
                                        <Avatar className='cursor-pointer mt-2'>
                                            <AvatarImage className='' src={user?.profile?.profilePhoto} />
                                        </Avatar>
                                        <div>
                                            <h4 className='font-medium'>{user?.fullname}</h4>
                                            <p className='text-sm text-muted-foreground'>{user?.profile?.bio}</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-2 my-2'>
                                        <div className='flex'>
                                            <User2 className='mt-2' />
                                            <Button variant="link"> <Link to='/Profile'>View Profile</Link></Button>
                                        </div>
                                        <div className='flex items-center'>
                                            <LogOut />
                                            <Button variant="link" onClick={logoutHandler}>Logout</Button>
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        )
                    }
                </div>
                <div className='md:hidden flex items-center'>
                    <div className='md:hidden flex items-center '>
                        <button
                            onClick={toggleMobileMenu}
                            className='p-2 rounded-md focus:outline-none '>
                            {isMobileMenuOpen ? (
                                // Cross Icon
                                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
                                </svg>
                            ) : (
                                // Hamburger Icon
                                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
                                </svg>
                            )}
                        </button>
                    </div>

                </div>
            </div>
            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className='md:hidden px-4 py-2 '>
                    <ul className='flex flex-col gap-2 font-medium justify-center items-center'>

                        <Link to="/"> <li className='hover:text-purple-700 ease-in-out duration-300'>Home</li></Link>
                        <li className='hover:text-purple-700 ease-in-out duration-300'>Jobs</li>
                        <li className='hover:text-purple-700 ease-in-out duration-300'>Browse</li>
                    </ul>
                    {
                        !user ? (
                            <div className='flex flex-col gap-2 mt-4'>

                                <Link to="/Login">
                                    <Button variant="outline" className='bg-purple-300 text-purple-600  ease-in-out duration-300 w-full'>Login</Button>
                                </Link>
                                <Link to="/Signup">
                                    <Button className='bg-purple-600 hover:bg-purple-700 ease-in-out duration-300 w-full'>Get Started</Button>
                                </Link>
                            </div>
                        ) : (
                            <div className='mt-4 flex items-center justify-center'>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <div className='flex items-center gap-2 cursor-pointer'>
                                            <Avatar className='cursor-pointer'>
                                                <AvatarImage src={user?.profile?.profilePhoto}/>
                                            </Avatar>
                                            <span className='font-medium'>{user?.fullname}</span>
                                        </div>
                                    </PopoverTrigger>
                                    <PopoverContent className='w-full'>
                                        <div className='flex flex-col gap-2'>
                                            <Button variant="link"><Link to='/Profile'>View Profile</Link></Button>
                                            <Button variant="link" onClick={logoutHandler}>Logout</Button>
                                        </div>
                                    </PopoverContent>
                                </Popover>
                            </div>
                        )
                    }
                </div>
            )}
            <hr className='mx-5 mt-2 ' />
        </div>

    );

};

export default Navbar;
