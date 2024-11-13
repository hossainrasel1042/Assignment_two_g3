function Button({n,h,w}){
    const buttonStyle = {
        height: h,
        width: w,
    };
    return (
        <button style={buttonStyle} className="bg-[#FF900E] rounded-lg text-[18px] font-work font-semibold flex items-center text-white justify-center">{n}</button>
    )
}
export default Button;