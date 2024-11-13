import React from "react";
import logo1 from "../images/sponsors/amazon.png"
import logo2 from "../images/sponsors/figma.png"
import logo3 from "../images/sponsors/google.png"
import logo4 from "../images/sponsors/spotify.png"
import logo5 from "../images/sponsors/telerama.png"
function Logos({images}){
    return(
        <img src={images} className="w-[120px] h-auto"></img>
    )
}
class Fifth extends React.Component{
    render(){
        return(
            <div className="max-w-[1920px] w-full flex flex-col justify-center items-center  mx-auto px-[8%] pt-[30px]">
                <h1 className="font-work font-bold text-[30px] my-5 text-[#131313]">Our Sponspors</h1>
                <p className="font-work font-normal text-[15px]  text-[#727272]">There are many variations of passages of Lorem Ipsum available, but</p>
                <p className="font-work mb-7 font-normal text-[15px] text-[#727272]">the majority have suffered alteration.</p>
                <div className="w-[100%] grid grid-cols-5 my-[50px]">
                    <Logos images={logo1}/>
                    <Logos images={logo2}/>
                    <Logos images={logo3}/>
                    <Logos images={logo4}/>
                    <Logos images={logo5}/>
                </div>
            </div>
        )
    }
}
export default Fifth