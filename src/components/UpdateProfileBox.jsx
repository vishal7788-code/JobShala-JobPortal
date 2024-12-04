import React, { useState } from 'react';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Loader2, X } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'sonner';
import { USER_API_END_POINT } from '@/constants/constant';
import { setLoading, setUser } from '@/redux/authSlice';

const UpdateProfileBox = ({ isOpen, setIsOpen }) => {
    const { user } = useSelector(store => store.auth);
    const { loading } = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        fullname: user?.fullname,
        email: user?.email,
        phoneNumber: user?.phoneNumber,
        bio: user?.profile?.bio,
        skills: user?.profile?.skills?.map(skill => skill),
        file:user?.profile?.profilePhoto,})

    const onChangeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };
    const onChangeFileHandler = (e) => {
        setInput({ ...input, file: e.target.files?.[0]});
    };


    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('fullname', input.fullname);
        formData.append('email', input.email);
        formData.append('phoneNumber', input.phoneNumber);
        formData.append('bio', input.bio);
        formData.append('skills', input.skills);
        formData.append('file', input.file)

        try {
            dispatch(setLoading(true));
            const res = await axios.post(`${USER_API_END_POINT}/updateProfile`, formData, {
                headers: {
                    'content-type': 'multipart/form-data',
                },
                withCredentials: true,
            });
            if (res.data.success) {
                dispatch(setUser(res.data.user));
                toast.success(res.data.message, {
                    duration: 1000,
                });
            }
        } catch (error) {
            console.error('Error from form');
            toast.error(error.response.data.message, {
                duration: 1000,
            });
        } finally {
            dispatch(setLoading(false));
        }
        setIsOpen(false);
    };

    return (
        <div>
            <div>
            <Dialog open={isOpen} >
                <DialogContent onInteractOutside={() => setIsOpen(false)}>
                    <DialogHeader>
                        <DialogTitle className="text-purple-600 top-4  lg:top-0 relative">Update Your Profile</DialogTitle>
                        {/* Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-8 right-4 lg:top-4 text-gray-600 hover:text-gray-800"
                            aria-label="Close"
                        >
                            <X size={24} />
                        </button>
                    </DialogHeader>
                    <form onSubmit={onSubmitHandler} className='relative '>
                        <div>
                            <div className="my-1 lg:my-2">
                                <Label htmlFor="name" className="text-md font-semibold text-purple-500">
                                    Name
                                </Label>
                                <Input id="name" name="fullname" onChange={onChangeEventHandler} value={input.fullname} />
                            </div>
                            <div className="my-1">
                                <Label htmlFor="email" className="text-md font-semibold text-purple-500">
                                    Email
                                </Label>
                                <Input id="email" type="email" name="email" onChange={onChangeEventHandler} value={input.email} />
                            </div>
                            <div className="my-1">
                                <Label htmlFor="phoneNumber" className="text-md font-semibold text-purple-500">
                                    Phone Number
                                </Label>
                                <Input id="phoneNumber" name="phoneNumber" value={input.phoneNumber} onChange={onChangeEventHandler} />
                            </div>
                            <div className="my-1">
                                <Label htmlFor="bio" className="text-md font-semibold text-purple-500">
                                    Bio
                                </Label>
                                <Input id="bio" value={input.bio} name="bio" onChange={onChangeEventHandler} />
                            </div>
                            <div className="my-1 lg:my-2">
                                <Label htmlFor="skills" className="text-md font-semibold text-purple-500">
                                    Skills
                                </Label>
                                <Input id="skills" value={input.skills} onChange={onChangeEventHandler} name="skills" />
                            </div>
                            <div>
                                <Label htmlFor="profilePhoto" className="text-md font-semibold text-purple-500">Profile Photo</Label>
                                <Input type="file" name='profilePhoto' onChange={onChangeFileHandler}/>
                            </div>
                        </div>
                        <DialogFooter className='relative bottom-1'>
                            {loading ? (
                                <Button
                                    disabled
                                    className="bg-purple-600 w-full mt-5 cursor-none hover:bg-purple-700 ease-in-out duration-300"
                                >
                                    <Loader2 className="animate-spin" /> Loading
                                </Button>
                            ) : (
                                <Button
                                    className="bg-purple-600 hover:bg-purple-700 ease-in-out duration-300 w-full mt-5"
                                    type="submit"
                                >
                                    Update Profile
                                </Button>
                            )}
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
            </div>
        </div>
    );
};

export default UpdateProfileBox;
