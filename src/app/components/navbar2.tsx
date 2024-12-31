import Image from "next/image"
import cal from "../assets/icn settings icn-xs.png"
import vec from "../assets/Vector.png"
import insta2 from "../assets/insta2.png"
import you2 from "../assets/you2.png"
import face2 from "../assets/face2.png"
import x2 from "../assets/x2.png"
import down from "../assets/down.png"
import ss from "../assets/ss.png"
import ser from "../assets/ser.png"
import cart2 from "../assets/cart2.png"
import heart from "../assets/heart.png"
import nav from "../assets/navbar icon.png"
import ss2 from "../assets/ss2.png"
import ser2 from "../assets/ser2.png"
import cartp2 from "../assets/cartp2.png"
import heart2 from "../assets/heart2.png"

const Navbar2 = () => {
  return (
    <div>
    <div className='w-[1440px] pl-[197px] pr-[223px] sm:block hidden pt-[9px] pb-[3px] bg-[#23856D] '>
        <div className=" sm:flex hidden gap-[30px]">
            <div id="phone-num" className=" flex gap-[5px] p-[10px]  items-center justify-center">
                <Image src={cal} alt="" />
                <div className="font-montserrat font-normal text-[12px] leading-[16px] tracking-[0.2px] text-white ">(225) 555-0118</div>
            </div>

            <div id="email" className=" flex gap-[5px] p-[10px] items-center justify-center">
                <Image src={vec} alt="" className="w-[16px] h-[12px] " />
                <div className="font-montserrat font-normal text-[12px] leading-[16px] tracking-[0.2px] text-white ">michelle.rivera@example.com</div>
            </div>

            <div id="follow" className=" flex gap-[5px] p-[10px]">
              <h6 className="font-montserrat font-bold text-[#FFFFFF] text-[14px] leading-[24px] tracking-[0.2px]">Follow Us  and get a chance to win 80% off</h6>
            </div>

            <div id="logo" className=" flex gap-[5px] p-[10px]">
              <h6 className="font-montserrat font-bold text-[#FFFFFF] text-[14px] leading-[24px] tracking-[0.2px]">Follow Us  :</h6>
              <Image src={insta2} alt="" />
              <Image src={you2} alt="" />
              <Image src={face2} alt="" />
              <Image src={x2} alt="" />
            </div>
        </div>
      </div>


      <div className=" sm:block hidden w-[1440px] px-[199px] py-[10px]">
         <div className="flex gap-[119px]  items-center">
            <h3 className="font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px]">Bandage</h3>
              <div id="right-side" className=" flex gap-[125px]">
                <div className="flex justify-center items-center gap-[15px]">
                    <p className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">Home</p>
                      <div className="flex items-center gap-[9px]">
                        <p className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">Shop</p>
                        
                        <Image src={down} alt="" className="w-[10px] h-[10px] " />
                      </div>
                    <p className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373] ">About</p>
                    <p className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373] ">Blog</p>
                    <p className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373] ">Contact</p>
                    <p className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373] ">Pages</p>
                </div>

                <div className="flex items-center justify-center">
                  <div className="flex items-center justify-center gap-[5px] p-[15px]">
                     <Image src={ss} alt="" className=" " />
                     <p className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-nowrap text-[#23A6F0]">Login / Register</p>
                  </div>
                  <Image src={ser} alt="" className=" " />
                  <Image src={cart2} alt="" className=" " />
                  <Image src={heart} alt="" className=" " />
                </div>
              </div>
         </div>
      </div>


      <div id="phone-size" className="w-[414px] pl-[2.1875rem] pr-[38px] block sm:hidden">
        <div className=" flex  justify-between items-center  pt-[23px]">
        <h3 className="font-montserrat font-bold text-[1.5rem] leading-[2rem] tracking-[0.00625rem]">Bandage</h3>
        <Image src={nav} alt="" className=" " />
        </div>
          <div className="flex justify-center items-center pt-[68px]">
            <div className=" flex flex-col justify-center items-center gap-[30px] text-center ">
                    <p className="font-montserrat font-normal text-[30px] leading-[45px] tracking-[0.2px] text-[#252B42]">Home</p>
                    
                        <p className="font-montserrat font-normal text-[30px] leading-[45px] tracking-[0.2px] text-[#737373]">Shop</p>
                        
                        
                      
                    <p className="font-montserrat font-normal text-[30px] leading-[45px] tracking-[0.2px] text-[#737373] ">About</p>
                    <p className="font-montserrat font-normal text-[30px] leading-[45px] tracking-[0.2px] text-[#737373] ">Blog</p>
                    <p className="font-montserrat font-normal text-[30px] leading-[45px] tracking-[0.2px] text-[#737373] ">Contact</p>
                    <p className="font-montserrat font-normal text-[30px] leading-[45px] tracking-[0.2px] text-[#737373] ">Pages</p>
                </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="flex items-center justify-center gap-[5px] px-[15px] py-[23.5px]">
                     <Image src={ss2} alt="" className="  " />
                     <p className="font-montserrat font-normal text-[30px] leading-[45px] tracking-[0.2px] text-[#23A6F0]">Login / Register</p>
                  </div>
                  <Image src={ser2} alt="" className=" " />
                  <Image src={cartp2} alt="" className=" " />
                  <Image src={heart2} alt="" className=" " />
          </div>
      </div>

    </div>
  )
}

export default Navbar2