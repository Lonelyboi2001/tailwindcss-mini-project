import { useState } from "react";
import { TiTick } from "react-icons/ti";
import PricingDetail from "../../Details/PricingDetail";

const Pricing = () => {
    const[detail,setDetail] = useState(PricingDetail)
    return ( 
    <section className="flex flex-col mt-10 font-serif md:flex-row">
        {
            detail.map((detail) => {
                return(
                    <div className="pricing-container box-container  mb-8 p-0 border-[13px]">
                    <div className="head-container p-10 border-b border-[#324154]">
                        <div className="mb-5 title-container text-20 ">
                            <span className="text-title ">{detail.package}</span>
                        </div>
                        <div className="flex flex-col deal-container">
                            <span className="text-memory text-48">{detail.memory}</span>
                            <span className="text-deal text-20"> {detail.price}</span>
                        </div>
                        <div className="mt-8 purchase-container">
                            <a href="" className="w-3/4 border btn-full-color btn-primary mb-9 h-14 border-violet-600 ">Purchase</a>
                        </div>
                    </div>
                    <div className="p-8 bot-container">
                        <div className="details-deal-container">
                            <span>
                                <TiTick color="white" size={"24px"} />
                                <p>{detail.detailDeal1}</p>
                            </span>
                        </div>
                        <div className="details-deal-container">
                            <span >
                                <TiTick color="white" size={"24px"} />
                                <p>{detail.detailDeal2}</p>
                            </span>
                        </div>
                        <div className="details-deal-container">
                            <span>
                                <TiTick color="white text-16" size={"24px"}/>
                                <p>{detail.detailDeal3}</p>
                            </span>
                        </div>
                    </div>
                </div>
                )
            })
        }
       
    </section>
        
     );
}
 
export default Pricing;