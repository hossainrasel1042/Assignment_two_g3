import React from "react";
import Button from "./Button";
import image_1 from "../images/banner.png"
class Front extends React.Component{
    render(){
        return(
            <div className="max-w-[1920px] w-full flex flex-col justify-center items-center mx-auto px-[8%] pt-[30px] bg-[#FF900E] bg-opacity-10">
                <h1 className="font-work font-bold text-[50px] mt-5 text-[#131313]">Brand New </h1>
                <h1 className="font-work font-bold text-[50px] text-[#131313]">Group of Architects </h1>
                <p className="font-work font-normal text-[15px] mt-3 text-[#727272]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in </p>
                <p className="font-work mb-7 font-normal text-[15px] text-[#727272]">some form, by injected humour, or randomised words which don't look even</p>
                <Button n="Explore More" h="55px" w="150px"/>
                <div className="w-[100%] h-auto">
                    <img src={image_1} alt="banner" className=" my-8 w-[100%] h-auto" />
                </div>
            </div>
        )
    }
}
export default Front;