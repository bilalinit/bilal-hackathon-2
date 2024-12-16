import Image from "next/image"
import crousel from "../assets/shop-hero-1-product-slide-1.jpg"
import crouselxs from "../assets/product-slidexs.png"


const Crousel1 = () => {
  return (
    <div className=" sm:w-[1439px] sm:h-[716px] w-[416px] h-[753px] relative ">
        <div  id="item" className="sm:w-[1440px] sm:h-[716px] w-[414px] flex items-center justify-center  h-[753px] ">
            <div className="hidden sm:block"> <Image src={crousel} alt="main img"/></div>
            <div className="sm:hidden block"> <Image src={crouselxs} alt="main img"/></div>
            <div id=" contanier" className="sm:w-auto sm:h-auto w-[414px] h-[705px]   absolute sm:top-[48px] sm:left-[197.5px] sx:left-[0px] py-[112px] flex gap-[80px] ">
                <div id="row" className="sm:w-auto sm:h-auto w-[419px] h-auto  py-[48px] flex items-center justify-center  flex-col gap-[30px]">
                    <div id="content" className="w-[599px] h-auto  sm:items-start  flex items-center justify-center flex-col gap-[35px]">
                        <h5 className="  font-bold font-montserrat text-[16px] leading-[24px] tracking-[0.1px] text-white">SUMMER 2020</h5>
                        <h1 className=" w-[268px] text-center sm:text-start font-bold font-montserrat sm:text-[58px] text-[40px] sm:leading-[80px] leading-[50px] tracking-[0.2px] text-white">NEW COLLECTION</h1>
                        <h4 className=" sm:w-[376px] w-[291px] sm:text-start font-normal font-montserrat text-[20px] leading-[30px] tracking-[0.2px] text-center  text-white">We know how large objects will act, 
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