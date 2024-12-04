import React from 'react'
import { Button } from './ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'

const CategoryCarousel = () => {
    const category = [
        'FullStack Developer',
        'Frontend Developer',
        'Backend Developer',
        'Graphic Designer',
        'Solana Developer',
        'Blockchain Developer',
        'Data Scientist',
        'AI/ML Engineer',
        'App Developer'
    ];

    return (
        <div className='w-full md:w-[30vw] relative top-[-2rem] md:top-[8rem] md:left-[3.5rem] xl:top-[-5rem] lg:top-[3rem] 2xl:top-[-8rem] right-2' >
            <Carousel className='text-center font-semibold'>
                <CarouselContent className='w-full md:w-[30vw] mx-auto'>
                    {category.map((cat, index) => (
                        <CarouselItem key={index}>
                            <Button className='bg-transparent  border-2 rounded-3xl w-[80vw] md:w-[20vw] h-[7vh] border-gray-500 text-black hover:border-purple-600 hover:text-purple-600 hover:bg-white ease-in-out duration-500'>
                                {cat}
                            </Button>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="text-black hover:text-purple-600 hidden md:flex " />
                <CarouselNext className="text-black hover:text-purple-600 hidden md:flex" />
            </Carousel>
        </div>
    );
};

export default CategoryCarousel;
