import React from "react";
import icon1 from "../images/icons/customers.png"
import icon2 from "../images/icons/email.png"
import icon3 from "../images/icons/projects.png"
import icon4 from "../images/icons/ribon.png"

function Icons({images,value,desc}){
    return(
        <div className="h-[200px] rounded-[5px] border-[1px] border-solid border-[#FF900E] w-[200px] flex p-5 flex-col gap-3 justify-center items-center">
            <img src={images} className="size-[40px]"/>
            <h2 className="font-work font-semibold text-[35px] text-[#424242]">{value}</h2>
            <p className="font-work font-semibold text-[#727272] text-[15px]">{desc}</p>
        </div>
    )
}
class Fourth extends React.Component{
    render(){
        return(
            <div className="max-w-[1920px] w-full flex flex-col  mx-auto px-[8%] pt-[30px]">
                <h1 className="font-work font-bold text-[30px] my-5 text-[#131313]">Some Facts</h1>
                <p className="font-work font-normal text-[15px]  text-[#727272]">There are many variations of passages of Lorem Ipsum available, but</p>
                <p className="font-work mb-7 font-normal text-[15px] text-[#727272]">the majority have suffered alteration.</p>
                <div className="w-[100%] grid grid-cols-4 ml-8 my-[50px]">
                    <Icons images={icon1} value={54} desc={"Award winning"}/>
                    <Icons images={icon2} value={54} desc={"Award winning"}/>
                    <Icons images={icon3} value={54} desc={"Award winning"}/>
                    <Icons images={icon4} value={54} desc={"Award winning"}/>
                    
                </div>
            </div>
        )
    }
}
export default Fourth