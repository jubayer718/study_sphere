import Navbar from '@/components/layout/Navbar';
import NewCourse from '@/components/layout/NewCourse';
import React from 'react';

const Dashboard = () => {
  return (
    <div className='flex  justify-between'>
      <div>
          <Navbar />
      <NewCourse/>
      </div>
      {/* profile */}
      <div>
        <h2 className='text-xl font-bold'>Profile</h2>
      </div>
    </div>
  );
};

export default Dashboard;