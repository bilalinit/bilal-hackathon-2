import Link from "next/link"
import Image from "next/image"
import aero from "../assets/icn arrow-right icn-xs.png"

const Breadcrumbs = () => {
  return (
    <div id=" container" className="sm:w-[1440px] w-[414px] h-auto py-6 flex justify-center items-center bg-[#FAFAFA]">
        <div className="sm:w-[1033px] w-[414px]  h-auto ">
            <div id="col-md-6" className="sm:w-[509px] w-[414px] flex items-center sm:justify-start justify-center">
                <div id="breadcrumbs" className="w-auto h-auto py-[10px] flex items-center gap-[15px]">
                    <Link href={'/'} className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] ">Home</Link>
                    <Image src={aero} alt="aero image" className="w-[9px] h-[16px]"/>
                    <h6 className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#BDBDBD] cursor-pointer ">Shop</h6>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Breadcrumbs