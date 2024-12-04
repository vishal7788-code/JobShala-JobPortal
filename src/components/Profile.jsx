import React, { useState } from 'react';
import Navbar from './shared/Navbar';
import { Avatar, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Contact, Mail, Pen, Phone } from 'lucide-react';
import { Badge } from './ui/badge';
import AppliedJobs from './AppliedJobs';
import UpdateProfileBox from './UpdateProfileBox';
import { useSelector } from 'react-redux';



const Profile = () => {
    const [isOpen, setIsOpen]= useState(false);
    const {user} = useSelector(store=>store.auth)
   const updateProfileBox = () =>{
setIsOpen(true)
    };
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="h-screen overflow-auto scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-200 relative p-5 ">
                <div className="w-full lg:w-[60vw] border-2 mx-auto mt-20  border-purple-400 lg:mt-24 rounded-xl bg-purple-100 p-4 lg:p-6">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 md:justify-between md:flex-row mt-">
                        <div className="flex items-start gap-4">
                            <Avatar className="w-16 h-16 lg:w-[5vw] lg:h-[10vh]">
                                <AvatarImage src={user?.profile?.profilePhoto} />
                            </Avatar>
                            <div className='mt-3'>
                                <h2 className="text-lg font-semibold">{user?.fullname}</h2>
                               
                                <span className="text-sm text-gray-600 font-semibold">
                                   {user?.profile?.bio}
                                </span>
                            </div>
                        </div>
                        <div>
                            <Button onClick={updateProfileBox} variant="outline" className="text-purple-600 hover:text-white hover:bg-purple-600 ease-in-out duration-300 hidden lg:block">
                                <Pen />
                            </Button>
                            <Button onClick={updateProfileBox} variant="outline" className="text-purple-600 hover:text-white hover:bg-purple-700 w-[60vw] md:w-[20vw] ml-7 md:ml-4 lg:hidden">
                                <Pen />Edit details
                            </Button>
                        </div>
                    </div>

                    {/* Contact Details */}
                    <div className="mt-6">
                        <div className="flex items-center gap-2 ">
                            <Contact />
                            <h2 className="text-md font-semibold">Contact Details</h2>
                        </div>
                        <div className="flex items-center gap-2 my-3">
                            <Mail />
                            <p className="text-md text-gray-600 font-semibold">{user?.email}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone />
                            <p className="text-md text-gray-600 font-semibold">{user?.phoneNumber}</p>
                        </div>
                    </div>

                    {/* Skills */}
                    <div className="mt-6">
                        <h2 className="text-md font-semibold">Skills</h2>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {user?.profile?.skills?.map((skill, index) => (
                                <Badge
                                    variant="outline"
                                    className="text-purple-600 text-sm font-semibold border-gray-400 bg-white"
                                    key={index}
                                >
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Applied Jobs Section */}
                <div className="mx-auto w-full lg:w-[60vw] my-7">
                    <AppliedJobs />
                </div>
                <div>
                    <UpdateProfileBox isOpen={isOpen} setIsOpen={setIsOpen}/>
                </div>
            </div>
        </div>
    );
};

export default Profile;
