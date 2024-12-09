import Image from "next/image"
import crousel from "../assets/shop-hero-1-product-slide-1.jpg"
import crouselxs from "../assets/product-slidexs.png"


const Crousel1 = () => {
  return (
    <div className=" md:w-[1439px] md:h-[716px] xs:w-[416px] xs:h-[753px] relative ">
        <div  id="item" className="md:w-[1440px] md:h-[716px] xs:w-[414px] xs:flex xs:items-center xs:justify-center  xs:h-[753px] ">
            <div className="xs:hidden md:block"> <Image src={crousel} alt="main img"/></div>
            <div className="md:hidden xs:block"> <Image src={crouselxs} alt="main img"/></div>
            <div id=" contanier" className="md:w-auto md:h-auto xs:w-[414px] xs:h-[705px]   absolute md:top-[48px] md:left-[197.5px] sx:left-[0px] py-[112px] flex gap-[80px] ">
                <div id="row" className="md:w-auto md:h-auto xs:w-[419px] xs:h-auto  py-[48px] flex xs:items-center xs:justify-center  flex-col gap-[30px]">
                    <div id="content" className="w-[599px] h-auto  md:items-start  flex xs:items-center xs:justify-center flex-col gap-[35px]">
                        <h5 className="  font-bold font-montserrat text-[16px] leading-[24px] tracking-[0.1px] text-white">SUMMER 2020</h5>
                        <h1 className=" xs:w-[268px] xs:text-center md:text-start font-bold font-montserrat md:text-[58px] xs:text-[40px] md:leading-[80px] xs:leading-[50px] tracking-[0.2px] text-white">NEW COLLECTION</h1>
                        <h4 className=" md:w-[376px] xs:w-[291px] md:text-start font-normal font-montserrat text-[20px] leading-[30px] tracking-[0.2px] xs:text-center  text-white">We know how large objects will act, 
                        but things on a small scale.</h4>
                        <div className=" w-[221px] h-auto rounded-[5px] py-[15px] px-[40px] bg-[#2DC071]"><h3 className=" text-nowrap font-bold font-montserrat text-[24px] leading-[32px] tracking-[0.1px] text-center text-white">SHOP NOW</h3> </div>
                    </div>
                    

                    <div id="empty" className="w-[415px] h-[280px] "></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Crousel1