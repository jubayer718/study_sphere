'use client';
import React from 'react';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app_sidebar";
const Layout  = ({children}) => {
  return (
    <div>
       <SidebarProvider>
          <AppSidebar />
          <main> 
          <SidebarTrigger />
          
             {children}
           </main>
      </SidebarProvider>
    </div>
  );
};

export default Layout ;