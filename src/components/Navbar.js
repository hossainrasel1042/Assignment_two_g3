import React from "react";
class Navbar extends React.Component{
    render(){
        return(
            <div className="max-w-[1920px] w-full mx-auto px-[8%] pt-[30px] bg-[#FF900E] bg-opacity-10">
                <div className="flex justify-between items-center h-[60px]">
                    <h1 className="font-work font-bold text-[40px] text-[#131313]">G3 Architect</h1>
                    <ul className="flex items-center gap-10 text-[#474747] font-work font-medium text-[15px]">
                        <li><a href="/home.html"> Home</a></li>
                        <li><a href="/home.html"> About</a></li>
                        <li><a href="/home.html">Contact Us</a></li>
                        <li><a href="/home.html">Login </a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Navbar;