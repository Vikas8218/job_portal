import Header from "../Header/Header";
import Companies from "../LandingPage/Companies";
import DreamJob from "../LandingPage/dreamjob";
import JobCategory from "../LandingPage/JobCategory";
const Homepage=()=>{
  return(
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
        <Header/>
       <DreamJob/>
      <Companies/>
      <JobCategory/>
    </div>
  )
}
export default Homepage;