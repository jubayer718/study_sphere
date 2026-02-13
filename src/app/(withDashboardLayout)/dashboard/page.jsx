import { CalendarWithPresets } from '@/components/Calender';
import Navbar from '@/components/layout/Navbar';
import NewCourse from '@/components/layout/NewCourse';
import React from 'react';

const Dashboard = () => {
  return (
    <div className=' flex flex-col md:flex-row justify-between gap-8 my-8'>
      <div>
          <Navbar />
      <NewCourse/>
      </div>
      {/* profile */}
      <div>
       <CalendarWithPresets/>
      </div>
    </div>
  );
};

export default Dashboard;