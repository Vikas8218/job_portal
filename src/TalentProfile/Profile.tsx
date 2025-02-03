import { Button, Divider } from "@mantine/core";
import { IconBriefcase, IconMapPin } from "@tabler/icons-react";

const Profile=()=>{
  return <div className="w-2/3">
   <div className="relative">
 <img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="" />
 <img className=" w-48 h-48 rounded-full -bottom-1/3 absolute left-3 border-mine-shaft-950 border-8" src="/vikas.jpg" alt="" />
 </div>
 <div className="px-3 mt-16 ">
<div className="text-3xl font-semibold flex justify-between" >Vikas Saini   <Button  color="brightSun.4" variant="light" >Message</Button></div>
<div className="text-xl flex gap-1 items-center"> <IconBriefcase className="h-5 w-5 stroke={1.5}"/> Software Engineer &bull; Wipro</div>
<div className="flex gap-1  text-lg text-mine-shaft-300 items-center"  >
    <IconMapPin className="h-5 w-5 stroke={1.5}"/> Noida, Sector 63A
    </div>
   </div>
   <Divider   my="xl"/>
   <div className="px-3">
    <div className="text-2xl font-semibold mb-3">About</div>
    <div className="text-sm text-mine-shaft-300 text-justify">
    As a Software Engineer at Google, I specialize in building scalable and high-performance applications. My expertise lies in integrating front-end and back-end technologies to deliver seamless user experiences. With a strong foundation in React and SpringBoot, and a focus on MongoDB for database solutions, I am passionate about leveraging the latest technologies to solve complex problems and drive innovation. My goal is to create impactful software that enhances productivity and meets user needs effectively.
    </div>
   </div>
   <Divider mx="xs"  my="xl"/>
   <div className="px-3">
    <div className="text-2xl font-semibold mb-3">Skills</div>
    <div className="flex flex-wrap gap-2">
     <div className="bg-bright-sun-300 text-sm font-medium bg-opacity-15 rounded-3xl text-bright-sun-400 px-3 py-1">React</div>
     <div className="bg-bright-sun-300 text-sm font-medium bg-opacity-15 rounded-3xl text-bright-sun-400 px-3 py-1">React</div>
     <div className="bg-bright-sun-300 text-sm font-medium bg-opacity-15 rounded-3xl text-bright-sun-400 px-3 py-1">React</div>
    </div>
   </div>
   <Divider mx="xs"  my="xl"/>
   <div className="px-3">
   <div className="text-2xl font-semibold mb-3">Experience</div>
   
   </div>
  </div>
}
export default Profile;