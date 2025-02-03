import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Companies from "../LandingPage/Companies";
import DreamJob from "../LandingPage/dreamjob";
import JobCategory from "../LandingPage/JobCategory";
import Subscribe from "../LandingPage/Subscribe";
import Testimonials from "../LandingPage/testimonials";
import Working from "../LandingPage/Working";
const Homepage=()=>{
  return(
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
       <DreamJob/>
      <Companies/>
      <JobCategory/>
      <Working/>
      <Testimonials/>
      <Subscribe/>
    </div>
  )
}
export default Homepage;