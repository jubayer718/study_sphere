import Navbar from "@/components/layout/Navbar";
import NewCourse from "@/components/layout/NewCourse";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <NewCourse/>

    </div>
  );
}
