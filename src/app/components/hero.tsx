import Image from "next/image"
import first from "../assets/filter.png"
import sec from "../assets/filter (1).png"
import thd from "../assets/media bg-cover.png"
import forth from "../assets/media bg-cover (1).png"
import first2 from "../assets/first2.png"
import sec2 from "../assets/sec2.png"
import thd2 from "../assets/thd3.png"
import for4 from "../assets/for4.png"

const Hero = () => {
  return (
    <div className="sm:w-[1440px] sm:h-[770px] w-[414px] h-[1850px] bg-white  ">
    <div className="h-auto w-auto absolute sm:left-[175px] left-[40.5px] pt-[80px] flex-col  flex gap-[48px] items-center justify-center">
        <div id="row" className="sm:w-[607px] w-[333px] h-auto justify-center items-center flex ">
            <div id="maincontain" className="w-[607px] sm:h-[62px] h-[82px] gap[10px]  flex flex-col    items-center justify-center">
                <h3  className="w-[181px] h-[32px] font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] text-nowrap   " >EDITOR’S PICK</h3>
                <h2 className="sm:w-[347px] sm:h-[20px] text-center w-[196px] h-[40px] font-montserrat font-normal text-[14px] leading-[20px] tracking-[0.2px] ">Problems trying to resolve the conflict between</h2>
            </div>
        </div>
        <div id="row2" className="w-auto h-auto  flex sm:flex-row flex-col gap-[30px] sm:gap-[30px] ">

          <div id="col-md-6" className="sm:w-[510px] sm:h-[500px] w-[324px] h-[500px] relative   ">
            <div id="card-item" className="sm:w-[510px] sm:h-[500px] w-[324px] h-[500px] relative ">
              <div id="card-contant" className="w-[170px] h-[48px] absolute top-[426px] bg-white left-[31px]">
                <h2 className="w-[40px] h-[24px] absolute top-[12px] left-[64px] font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px]">MEN</h2>
              </div>
              <Image src={first} alt="" className="sm:w-[510px] sm:h-[500px] w-[324px] h-[500px] sm:block hidden" />
              <Image src={first2} alt="" className="sm:w-[510px] sm:h-[500px] w-[324px] h-[500px]  block sm:hidden" />
            </div>
          </div>

          <div id="colmd-3" className="sm:w-[240px] sm:h-[500px] w-[324px] h-[500px]">
            <div id="card-item2" className="sm:w-[240px] sm:h-[500px] w-[324px] h-[500px] relative">
              <div id="card-contant2" className="w-[136px] h-[48px] absolute top-[434px] bg-white sm:left-[21px] left-[63.5px] flex  items-center justify-center ">
                <h2 className="  font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] ">WOMEN</h2>
              </div>
              <Image src={sec} alt="" className="sm:w-[240px] sm:h-[500px]  sm:block hidden" />
              <Image src={sec2} alt="" className="sm:w-[240px] sm:h-[500px] w-[324px] h-[500px] block sm:hidden " />
            </div>
          </div>

          <div id="col-md-4" className="h-auto sm:w-auto w-[325px]  flex gap-[16px] flex-col   ">
          <div id="card-item3" className="sm:w-[240px] h-[242px] w-[325px]  relative">
              <div id="card-contant3" className="w-[170px] h-[48px] absolute top-[171px] left-[14px]  bg-white flex  items-center justify-center ">
                <h2 className="  font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] ">ACCESSORIES</h2>
              </div>
              <Image src={thd} alt="" className="w-[240px] h-[242px] sm:block hidden" />
              <Image src={thd2} alt="" className="w-[325px] h-[242px] block sm:hidden" />
            </div>

            <div  id="card-item4" className="sm:w-[240px] h-[242px] w-[325px] relative">
              <div id="card-contant4" className="w-[170px] h-[48px] absolute top-[171px] left-[14px]  bg-white flex  items-center justify-center ">
                <h2 className="  font-montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] ">KIDS</h2>
              </div>
              <Image src={forth} alt="" className="w-[240px] h-[242px] sm:block hidden" />
              <Image src={for4} alt="" className="w-[325px] h-[242px] block sm:hidden" />
            </div>
          </div>
        </div>
    </div>
</div>
  )
}

export default Hero