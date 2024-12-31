import Image from "next/image"
import spon1 from "../assets/spon1.png"
import spon2 from "../assets/spon2.png"
import spon3 from "../assets/spon3.png"
import spon4 from "../assets/spon4.png"
import spon5 from "../assets/spon5.png"
import spon6 from "../assets/spon6.png"

const Sponsors = () => {
  return (
    <div className="sm:w-[1440px] w-[414px] sm:px-[195px] sm:py-[58px] px-0 py-[110px] bg-[#FAFAFA] ">
    <div className="sm:flex sm:flex-row flex flex-col sm:gap-[30px] gap-[60px] items-center ">
    <Image src={spon1} alt="" className=" " />
    <Image src={spon2} alt="" className=" " />
    <Image src={spon3} alt="" className=" " />
    <Image src={spon4} alt="" className=" " />
    <Image src={spon5} alt="" className=" " />
    <Image src={spon6} alt="" className=" " />
    </div>
</div>
  )
}

export default Sponsors