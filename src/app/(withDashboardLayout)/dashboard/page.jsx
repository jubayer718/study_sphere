import { CalendarWithPresets } from '@/components/Calender';

import NewCourse from '@/components/layout/NewCourse';
import React, { Suspense } from 'react';

const Dashboard = () => {
  
  return (
    <div className=' flex flex-col md:flex-row justify-between gap-8 my-8'>
    <Suspense fallback={<div>Loading...</div>}>
      <div>
      <NewCourse/>
        </div>
        </Suspense>
      {/* profile */}
      <div>
       <CalendarWithPresets/>
      </div>
    </div>
  );
};

export default Dashboard;