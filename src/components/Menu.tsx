import { Link } from "react-router-dom";

function Menu(){
    return (
        <>
<div className="flex justify-center items-center invisible lg:visible mt-1">
    <Link to="/Home"><h1 className="font-semibold cursor-pointer">Home</h1></Link>
    <Link to="/News"><h1 className="ml-3 font-semibold cursor-pointer">News</h1></Link>
    <Link to="/Sport"><h1 className="ml-3 font-semibold cursor-pointer">Sport</h1></Link>
    <Link to="/Business"><h1 className="ml-3 font-semibold cursor-pointer">Business</h1></Link>
    <Link to="/Innovation"><h1 className="ml-3 font-semibold cursor-pointer">Innovation</h1></Link>
    <Link to="/Culture"><h1 className="ml-3 font-semibold cursor-pointer">Culture</h1></Link>
    <Link to="/Travel"><h1 className="ml-3 font-semibold cursor-pointer">Travel</h1></Link>
    <Link to="/Earth"><h1 className="ml-3 font-semibold cursor-pointer">Earth</h1></Link>
            
            
        </div>
        
        </>

        
    )
}

export default Menu;