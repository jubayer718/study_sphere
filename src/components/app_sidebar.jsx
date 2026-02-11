import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import Link from "next/link"

// Icons
import { MdAllInbox } from "react-icons/md";
import { PiHandbagDuotone } from "react-icons/pi";
import { IoIosChatboxes } from "react-icons/io";
import { FaRegChartBar } from "react-icons/fa";
import { AiOutlineSchedule } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <h1 className={cn('text-4xl bolder border-none')}><span className="text-cyan-500 ">Study</span>Sphere</h1>
      </SidebarHeader>

      <SidebarContent>
      
        <SidebarGroup className={cn('mt-5')}>
          <Link className="flex items-center gap-2 hover:bg-cyan-200 hover:text-cyan-800 p-3 " href={'/dashboard'}><span><MdAllInbox /></span>Dashboard</Link>
        </SidebarGroup>
            <SidebarGroup className={cn('-mt-5')}>
              <Link className="flex items-center gap-2 hover:bg-cyan-200 hover:text-cyan-800 p-3 " href={'/courses'}> <span><PiHandbagDuotone /></span>Courses</Link>
        </SidebarGroup>
        <SidebarGroup className={cn('-mt-5')}>
          <Link className="flex items-center gap-2 hover:bg-cyan-200 hover:text-cyan-800 p-3 " href={'/chats'}><span><IoIosChatboxes /></span>Chats</Link>
        </SidebarGroup>
        <SidebarGroup className={cn('-mt-5')}>
          <Link className="flex items-center gap-2 hover:bg-cyan-200 hover:text-cyan-800 p-3 " href={'/grade'}><span><FaRegChartBar /></span>Grade</Link>
        </SidebarGroup>
        <SidebarGroup className={cn('-mt-5')} >
          <Link className="flex items-center gap-2 hover:bg-cyan-200 hover:text-cyan-800 p-3 " href={'/schedule'}><span><AiOutlineSchedule /></span>Schedule</Link>
        </SidebarGroup>
        <SidebarGroup className={cn('-mt-5')}>
          <Link className="flex items-center gap-2 hover:bg-cyan-200 hover:text-cyan-800 p-3 " href={'/settings'}><span><FiSettings /></span>Settings</Link>
        </SidebarGroup>
       
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}