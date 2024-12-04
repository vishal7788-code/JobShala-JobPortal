import React, { useEffect, useState } from 'react';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { Button } from './ui/button';

const filterData = [
    {
        filterType: "Location",
        value: ["Delhi-NCR", "Gurgaon", "Noida", "Pune", "Banglore", "Mumbai", "Hyderabad"]
    },
    {
        filterType: "Job Type",
        value: ["Remote", "Full-time", "Part-time", "Internship", "On-site"]
    },
    {
        filterType: "Role",
        value: ['FullStack Developer', 'Frontend Developer', 'Backend Developer', 'Graphic Designer', 'Solana Developer', 'Blockchain Developer', 'Data Scientist', 'AI/ML Engineer', 'App Developer']
    },
    {
        filterType: "Salary",
        value: ['0-10k', '10k-20k', '20k-30k', '30k-40k', '40k-50k', '50k-60k', '60k-70k', '70k-80k', '80k-90k', '90k-100k']
    },
    {
        filterType: "Experience",
        value: ['0-2 years', '2-5 years', '5-10 years', '10-15 years', '15-20 years']
    },
];

const FilterCard = ({ isMobile, isOpen, onClose }) => {
    const [selectedValue, setSelectedValue] = useState("");
    const changeHandle = (value) => {
        setSelectedValue(value);
    }


    if (isMobile && !isOpen) return null;

    return (
        <div
            className={`${isMobile
                    ? 'fixed inset-0 bg-white z-50 shadow-lg p-5 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-200'
                    : 'mt-2  h-[calc(100vh-10rem)] overflow-y-auto mx-3 scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-gray-200 '
                }`}
        >
            <div className="flex justify-between items-center mb-4  ">

                <h1 className="text-lg font-bold text-purple-700">Filter</h1>
                <Button

                    onClick={onClose}
                    className="bg-purple-600 hover:bg-purple-700 text-sm font-medium hidden md:block mr-4 mt-2 "
                >
                    Apply
                </Button>
                {isMobile && (
                    <div className="flex items-center space-x-2 gap-2">
                        <Button
                            variant='outline'
                            onClick={onClose}
                            className="text-gray-600 hover:text-gray-700 text-lg font-bold rounded-full"
                        >
                            ✕
                        </Button>


                    </div>
                )}
            </div>
            <hr className="border-gray-400 mb-4" />
            <div className="space-y-4 ">
                <RadioGroup onChange={changeHandle} value={selectedValue}>
                    {filterData.map((item, index) => (
                        <div key={index}>
                            <h1 className="text-md font-semibold text-purple-600">{item.filterType}</h1>
                            {item.value.map((data, idx) => {
                                const itemId = `id${index} - ${idx}`
                                return (
                                    <div>
                                    <RadioGroupItem 
                                        value={data} id={itemId}
                                        className="text-purple-600 border-purple-500"
                                       
                                    />
                                    <Label className="ml-1 text-gray-700" htmlFor={itemId}>{data}</Label>
                                    </div>
                                    )

                            })}
                        </div>
                    ))}
                </RadioGroup>
            </div>


            <div className="mt-4 md:hidden lg:hidden">
                <Button
                    className="w-full bg-purple-700 text-white hover:bg-purple-800"

                >
                    Apply
                </Button>
            </div>

        </div>
    );
};

export default FilterCard;
