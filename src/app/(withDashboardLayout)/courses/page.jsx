import { Suspense } from 'react';
import CoursesClient from '@/components/layout/CourseClient';
import Navbar from '@/components/layout/Navbar';


export default function CoursesPage() {
  return (
    <div className="ml-5">
      <Suspense fallback={<div>Loading courses...</div>}>
    <Navbar/>
      <h1 className="text-2xl font-bold">All Courses</h1>
      
        <CoursesClient />
      </Suspense>
    </div>
  );
}