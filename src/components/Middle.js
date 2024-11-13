import React from "react";
import Button from "./Button";
import image_1 from "../images/team1.png"
import image_2 from "../images/team2.png"
import image_3 from "../images/team3.png"
import image_4 from "../images/team4.png"
class Middle extends React.Component{
    render(){
        return(
            <div className="max-w-[1920px] w-full h-[600px]  flex justify-center items-center mx-auto px-[8%] pt-[30px]">
               <div className=" w-[50%] h-[100%] gap-5 grid grid-cols-2 mr-9 place-content-center">
                <img src={image_1} className=" rounded-[12px] w-[100%] h-[240px]"/>
                <img src={image_2} className="rounded-[12px] w-[100%] h-[240px]"/>
                <img src={image_3} className="rounded-[12px] w-[100%] h-[240px]"/>
                <img src={image_4} className="rounded-[12px] w-[100%] h-[240px]"/>
               </div>
               <div className="w-[50%] flex flex-col  items-start">
                <div className="leading-[47px]">
                <h1 className="text-[#131313] text-[40px] font-work m-0 font-bold"><span className="text-[#727272] text-[40px] font-work font-medium">Quick list</span> of Our </h1>
                <h1 className="text-[#FF900E] text-[40px] font-work m-0 font-bold">Features</h1>
                </div>
                <p className="my-5 text-[#727272] text-[15px] font-work font-normal">here are many variations of passages of Lorem Ipsum available,<br></br>but the majority have suffered alteration in some form, by injected<br></br> humour, or randomised words which don't look even</p>
                <Button n="Explore More" h="55px" w="150px" />
               </div>
            </div>
        )
    }
}
export default Middle;