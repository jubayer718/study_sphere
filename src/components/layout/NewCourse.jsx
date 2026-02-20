'use client';
export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

import React, { useEffect, useState } from 'react';

import { Button } from "@/components/ui/button";
import { MdArrowForwardIos } from "react-icons/md";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image';
import { cn } from '@/lib/utils';
import useAxiosPublic from '@/app/hooks/useAxiosPublic';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';


// const courses = [
//   {
//     id: 1,
//     title: "Geography Course",
//     description: "A practical talk on component APIs, accessibility, and shipping faster.",
//     image: "/img/geography_img.jpg",
//     category: "Geography",
//     color: "bg-blue-500"
//   },
//   {
//     id: 2,
//     title: "Javascript Course",
//     description: "This course will cover the basics of JavaScript, including variables, data types, functions, and control flow.",
//     image: "/img/javascript.png",
//     category: "Programming",
//     color: "bg-yellow-500"
//   },
//   {
//     id: 3,
//     title: "Design systems meetup",
//     description: "A practical talk on component APIs, accessibility, and shipping faster.",
//     image: "/img/design.jpg",
//     category: "Design",
//     color: "bg-green-500"

//   }
// ]

const NewCourse = () => {
  const axiosPublic = useAxiosPublic();
  const searchParams = useSearchParams();
  const search = searchParams.get("search") || "";
  const [courses, setCourses] = useState([]);
  
    useEffect(() => {
    const fetchCourses = async () => {
      const res = await axiosPublic.get(`/courses`,{params:{search}});
      setCourses(res.data.data);
    };

    fetchCourses();
  }, [search, axiosPublic]);



  return (
    <div className='lg:ml-3 mt-3'>
      <h2 className='text-xl font-bold'>New Course</h2>
      {/* card section */}
      <div className='grid grid-cols-3 gap-3 mt-5 '>
        {
          courses.slice(0, 3).map(course => {
            return (
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
            )




          })
        }


      </div>
      <div className='mt-4 flex items-center justify-end'><Button className={cn('bg-cyan-200 text-black hover:bg-cyan-300')}><Link href="/courses">View All Courses</Link></Button></div>
    </div>
  );
};

export default NewCourse;