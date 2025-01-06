import { Link } from "react-router-dom";

const NavLinks=()=>{
  const links=[
  {name:"Find Jobs",url:"Find-jobs"},
  {name:"Find Talent",url:"Find-talent"},
  {name:"Upload Job",url:"upload-job"},
  {name:"About us",url:"about"},

 ]
 return <div className="flex gap-5">
  {
    links.map((link,index)=><Link key={index} to={link.url} >{link.name}</Link>)
  }
    </div>

}
export default NavLinks;