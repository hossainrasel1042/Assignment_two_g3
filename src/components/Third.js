import React from "react";
import images from '../images/architect.png'
class Third extends React.Component{
    render(){
        return(
            <div className="max-w-[1920px] w-fit mx-auto px-[8%] gap-10 pt-[30px] flex ">
                <div className="w-[40%]">
                    <div className="w-auto border-l-4 pl-7 rounded-l-lg border-[#FF900E]">
                        <h1 className="font-bold text-[30px] font-work text-[#131313]">Features you will<br></br>love & enjoy</h1>
                    </div>
                    <p className="text-[#727272] leading-[20px] my-5 font-normal text-[15px] font-work">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even</p>
                    <div className="flex flex-col gap-[20px] py-3 pl-5">
                        <div className="shadow-[0px_5px_10px_rgba(0,0,0,0.15)] rounded-lg flex flex-col p-3">
                            <h1 className="font-work font-semibold text-[#131313] text-[20px]">Dexktop & Mobile Version</h1>
                            <p className="text-[#727272] mt-3 leading-[20px] my-8 font-normal text-[15px] font-work">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised...........</p>
                        </div>
                        <div className="shadow-[0px_5px_10px_rgba(0,0,0,0.15)] rounded-lg flex flex-col p-3">
                            <h1 className="font-work font-semibold text-[#131313] text-[20px]">Drag & Drop Builder</h1>
                            <p className="text-[#727272] mt-3 leading-[20px] my-8 font-normal text-[15px] font-work">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised...........</p>
                        </div>
                        <div className="shadow-[0px_5px_10px_rgba(0,0,0,0.15)] rounded-lg flex flex-col p-3">
                            <h1 className="font-work font-semibold text-[#131313] text-[20px]">Awesome Modern Design</h1>
                            <p className="text-[#727272] mt-3 leading-[20px] my-8 font-normal text-[15px] font-work">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised...........</p>
                        </div>
                        <div className="shadow-[0px_5px_10px_rgba(0,0,0,0.15)] rounded-lg flex flex-col p-3">
                            <h1 className="font-work font-semibold text-[#131313] text-[20px]">Super Easy to Edit</h1>
                            <p className="text-[#727272] mt-3 leading-[20px] my-8 font-normal text-[15px] font-work">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised...........</p>
                        </div>
                    </div>
                </div>

                <div className="relative   w-[60%]">
                        <img src={images} alt="hello" className="absolute  right-0 w-[80%] h-[97%]"></img>
                        <div className=" absolute bg-[#FF900E] z-50 flex rounded-lg bottom-0 flex-col leading-[35px] text-[40px] font-work font-bold justify-center items-center w-[200px] h-[100px] text-[#fff]">
                            <h1>
                                10+Year
                            </h1>
                            <p className="text-[15px] font-normal">Experience</p>
                        </div>
                </div>
            </div>
        )
    }
}
export default Third;