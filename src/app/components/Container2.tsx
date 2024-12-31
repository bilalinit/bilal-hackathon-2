import Image from "next/image"
import side from "../assets/side.png"

const Container2 = () => {
  return (
    <div className=" sm:w-[1440px] w-[414px] sm:px-[195px] sm:py-[24px] bg-[#FAFAFA]  py-[48px]  ">
    <div id="inerdiv" className="sm:flex sm:flex-row gap-[70px] flex flex-col items-center  ">
        <div className="sm:pr-[447px]  ">
            <h3 className="font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] ">Shop</h3>
        </div>
        
        <div className="sm:pl-[390px] flex items-center ">
            <div className="flex items-center gap-[15px]">
                <p className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px]">Home</p>
                <Image src={side} alt="" className=" " />
                <h5 className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#BDBDBD]">Shop</h5>
            </div>
        </div>
    </div>
</div>
  )
}

export default Container2