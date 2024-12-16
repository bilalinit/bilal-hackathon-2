
import Card88 from "./Card88"

const data = [
    {
        image: "bg-[url('/image.jpg')]",
        id: 1,
    },
    {
        image: "bg-[url('/image.jpg')]",
        id: 1,
    },
    {
        image: "bg-[url('/image.jpg')]",
        id: 1,
    },
]


const Featuredpost = () => {
  return (
    <div className="sm:w-[1440px] w-[414px]  sm:pt-[112px] sm:px-[195px] flex flex-col   py-[80px] px-[42.5px]  ">
    <div className="">
    <div id="text-container" className="flex sm:hidden flex-col gap-[10px] text-center justify-center items-center pb-[80px]">
            <h6 className="font-montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#23A6F0] ">Practice Advice</h6>
            <h2 className="font-montserrat font-bold text-[40px] leading-[50px] tracking-[0.2px] ">Featured Products</h2>
            <p className="font-montserrat font-normal text-[14px] leading-[20px] tracking-[0.2px] mx-[76.5px]">Problems trying to resolve the conflict between the two major  </p>
        </div> <div id="text-container" className="sm:flex hidden flex-col gap-[10px] justify-center items-center pb-[80px]">
            <h6 className="font-montserrat font-bold text-[40px] leading-[50px] tracking-[0.2px] text-[#23A6F0] ">Practice Advice</h6>
            <h2 className="font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] ">Featured Posts</h2>
            <p className="font-montserrat font-normal text-[14px] leading-[20px] tracking-[0.2px]">Problems trying to resolve the conflict between 
            the two major realms of Classical physics: Newtonian mechanics </p>
        </div>
        <div className="  sm:flex sm:flex-row flex-col justify-center gap-[30px] ">
            {data.map((elem,id)=>{
                return(
                    <Card88 key={id} image={elem.image} />
                )
            })}
        </div></div>
</div>
  )
}

export default Featuredpost