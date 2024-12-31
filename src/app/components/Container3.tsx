import Card4contain from "./Card4contain"

const data = [
    {   
        id: 1,
        image:"bg-[url('/1card.jpeg')]",
        heading:"CLOTHS",
        paragraph:"5 Items",
    },
    {
        id: 2,
        image:"bg-[url('/2card.jpeg')]",
        heading:"CLOTHS",
        paragraph:"5 Items",
    },
    {
        id: 3,
        image:"bg-[url('/3card.jpeg')]",
        heading:"CLOTHS",
        paragraph:"5 Items",
    },
    {
        id: 4,
        image:"bg-[url('/4card.jpeg')]",
        heading:"CLOTHS",
        paragraph:"5 Items",
    },
    {
        id: 5,
        image:"bg-[url('/5card.jpeg')]",
        heading:"CLOTHS",
        paragraph:"5 Items",
    },
   
    
]

const Container3 = () => {
  return (
    <div className="sm:w-[1440px] w-[414px] sm:px-[176px] sm:py-0 px-[41px] py-[24px] bg-[#FAFAFA]">
        <div id="card-div" className=" sm:flex sm:flex-row flex flex-col gap-[15px] sm:pb-[48px]">
           {data.map((elem)=>{
            return(
                <Card4contain key={elem.id} image={elem.image} heading={elem.heading} paragraph={elem.paragraph} />
            )
           })}
        </div>
    </div>
  )
}

export default Container3