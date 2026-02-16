'use client';
import useAxiosPublic from '@/app/hooks/useAxiosPublic';
import Navbar from '@/components/layout/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { MdArrowForwardIos } from 'react-icons/md';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const axiosPublic = useAxiosPublic();
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";
  useEffect(() => { 
    const getCourses = async () => {
      const { data } = await axiosPublic.get('/courses',{params:{search}});
      setCourses(data.data);
    }
    getCourses();
  }, [search, axiosPublic]);

  return (
    <div className='ml-5'>
      <Navbar/>
      <h1 className="text-2xl font-bold">All Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5  gap-4 mt-4">
        {courses.map(course => (
           <Card key={course._id} className={`relative mx-auto w-full p-2 rounded-lg ${course.color}`} >
                <div className={`absolute inset-0 z-30 aspect-video rounded-lg ${course.color}`} />
                <div className='w-40'>
                   <img
                  src={course.image}
                  alt="Event cover"
                  className="relative z-50 aspect-video object-cover w-full rounded-lg "
                />
               </div>
                <CardHeader className={cn('p-0 text-black relative z-50')}>

                  <CardTitle className={cn('p-0 ')}>{course.title}</CardTitle>
                  <CardDescription className={cn("p-0 text-black")}>
                    {course.description}
                    <p className="block text-sm  my-2  text-black"><span className='font-semibold '>Category:</span> {course.category}</p>
                  </CardDescription>
                </CardHeader>
                <CardFooter className={'relative'}>
                  <div className='flex items-center justify-between gap-2 '>
                    <div  className='flex items-center relative'>
                    <img src="/img/male1.png" alt="" className='w-10 h-8 '/>
                    <img src="/img/male2.png" alt="" className='w-10 h-8 absolute left-4 '/>
                    <img src="/img/male3.png" alt="" className='w-10 h-8 absolute left-7'/>
                    </div>
                    <Button className="flex items-center gap-1 p-1  cursor-pointer absolute right-2"><MdArrowForwardIos className='text-sm'/>  </Button>
                </div>
                </CardFooter>
              </Card>
        ))}
      </div>
    </div>
  );
};

export default Courses;