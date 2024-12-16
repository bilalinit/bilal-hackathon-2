import Image from "next/image"
import phone from "../assets/phone.png"
import mail from "../assets/mail.png"
import insta from "../assets/insta.png"
import tube from "../assets/youtube.png"
import twiter from "../assets/twiter.png"
import facebook from "../assets/facebook.png"
import drop from "../assets/dropdown.png"
import login from "../assets/login.png"
import search from "../assets/search.png"
import cart from "../assets/cart icon.png"
import fav from "../assets/fav icon.png"



import cartxs from "../assets/cart icon xs.png"
import menuxs from "../assets/menu xs.png"
import searchxs from "../assets/search xs.png"


const NavBar = () => {
  return (
    <div className=" sm:w-[1439px] sm:h-[136px] w-[414px] h-[532px] bg-white relative ">
        <div id="nav dark" className=" w-[1439px] h-[58px] bg-[#252B42] sm:block hidden ">
            <div className=" w-[1439px] h-[46px] absolute top-[9px] left-[2px]">
                <div className=" w-[1438px] h-[46px]">
                    <div className=" w-[1438px] h-[46px] flex justify-between px-[24px]">
                        <div className=" flex">
                           <Image src={phone} alt="phone" className=""/>
                           <Image src={mail} alt="phone" className=""/>
                        </div>
                        <div className="w-auto h-auto flex gap-[10px] p-[10px] font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-white ">Follow Us  and get a chance to win 80% off</div>
                        <div className=" w-auto h-auto p-[10px] flex gap-[10px]">
                            <h6 className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-white ">Follow Us  :</h6>
                            <div className=" w-[120px] h-[26px] flex gap-[6px] "> 
                                <Image src={insta} alt="insta logo" />
                                <Image src={tube} alt="tube logo" />
                                <Image src={facebook} alt="facbook logo" />
                                <Image src={twiter} alt="twiter logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div id="nav light" className="w-[1437px] h-[58px] sm:top-[70px] flex absolute">
            <div className="w-[187px] relative h-[58px] sm:left-[38px]  sm:top-[0px] top-[23px] left-[35px] ">
                <h3 className="font-montserrat font-bold text-[24px] leading-[24px] tracking-[0.2px] absolute top-[13px]  ">Bandage</h3>
            </div>

            <Image src={searchxs} alt="dropdown icon" className=" block sm:hidden w-[24px] h-[24px] absolute top-[40px] left-[248px]  " />
            <Image src={cartxs} alt="dropdown icon" className=" block sm:hidden w-[24px] h-[22.4px] absolute top-[41px] left-[296px] " />
            <Image src={menuxs} alt="dropdown icon" className=" block sm:hidden w-[24px] h-[13.71px] absolute top-[45px] left-[352px]  " />

            <div className="h-auto w-auto absolute top-[164px] left-[164px] flex sm:hidden flex items-center justify-center flex-col gap-[30px]">
                <p className=" font-montserrat font-normal text-[30px] leading-[45px] tracking-[0.2px] text-[#737373] text-center cursor-pointer">Home</p>
                <p className=" font-montserrat font-normal text-[30px] leading-[45px] tracking-[0.2px] text-[#737373] text-center cursor-pointer">Product</p>
                <p className=" font-montserrat font-normal text-[30px] leading-[45px] tracking-[0.2px] text-[#737373] text-center cursor-pointer ">Pricing</p>
                <p className=" font-montserrat font-normal text-[30px] leading-[45px] tracking-[0.2px] text-[#737373] text-center cursor-pointer ">Contact</p>
            </div>




            <div className="w-[1155px] h-[58px] absolute left-[265px] sm:block  hidden ">
                <div className=" w-auto h-auto absolute top-[16.5px]  ">
                    <ul className="flex gap-[15px] items-center justify-center font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-center cursor-pointer text-[#737373]">
                        <li>Home</li>
                        <li><Image src={drop} alt="twiter logo" /> </li>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Contact</li>
                        <li>Pages</li>
                    </ul>
                </div>
                <div className="w-auto h-auto absolute top-[2px] left-[832px]">
                    <ul className=" flex  items-center">
                        <li className="w-[166px] h-[54px] "> <Image src={login} alt="dropdown icon" /> </li>
                        <li className="w-[46px] h-[46px] "><Image src={search} alt="dropdown icon" /></li>
                        <li className="w-[56px] h-[46px] "><Image src={cart} alt="dropdown icon" /></li>
                        <li className="w-[56px] h-[46px] "><Image src={fav} alt="dropdown icon" /></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar