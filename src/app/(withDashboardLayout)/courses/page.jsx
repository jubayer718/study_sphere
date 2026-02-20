import { Suspense } from 'react';
import CoursesClient from '@/components/layout/CourseClient';


export default function CoursesPage() {
  return (
    <div className="ml-5">
   
      <h1 className="text-2xl font-bold">All Courses</h1>
      
      <Suspense fallback={<div>Loading courses...</div>}>
        <CoursesClient />
      </Suspense>
    </div>
  );
}