import { TiTick } from "react-icons/ti";
const Pricing = () => {
    return ( 
    <section className="flex flex-col mt-10 md:flex-row">
        <div className="pricing-container box-container mb-8 p-0 border-[#324154] border-[13px] md:mr-5">
            <div className="head-container p-10 border-b border-[#324154]">
                <div className="mb-5 title-container text-20 ">
                    <span className="text-title ">BASIC</span>
                </div>
                <div className="flex flex-col deal-container">
                    <span className="text-memory text-48">100GB</span>
                    <span className="text-deal text-20"> $1.99/Month</span>
                </div>
                <div className="mt-8 purchase-container">
                    <a href="" className="w-3/4 border purchase-btn btn-primary mb-9 h-14 border-violet-600 ">Purchase</a>
                </div>
            </div>
            <div className="p-8 bot-container">
                <div className="details-deal-container">
                    <span className="flex justify-center details-deal">
                        <TiTick color="white" size={"24px"} className="inline-block"/>
                        <p className="mb-4 text-16">100BG of storage</p>
                    </span>
                </div>
                <div className="details-deal-container">
                    <span className="flex justify-center details-deal">
                        <TiTick color="white" size={"24px"} className="inline-block"/>
                        <p className="mb-4 text-16">Option to add members</p>
                    </span>
                </div>
                <div className="details-deal-container">
                    <span className="flex justify-center details-deal">
                        <TiTick color="white text-16" size={"24px"} className="inline-block"/>
                        <p>Extra member benefits</p>
                    </span>
                </div>
            </div>
        </div>
        <div className="pricing-container box-container mb-8 p-0 border-violet-600 border-[13px] md:mr-5 md:ml-5">
            <div className="p-10 border-b head-container border-violet-600">
                <div className="title-container mb-7 text-20 ">
                    <span className="text-title">STANDARD</span>
                </div>
                <div className="flex flex-col deal-container">
                    <span className="text-memory text-48">200GB</span>
                    <span className="text-deal text-20"> $3.99/Month</span>
                </div>
                <div className="mt-8 purchase-container">
                    <a href="" className="w-3/4 purchase-btn btn-primary h-14 bg-violet-600 mb-9">Purchase</a>
                </div>
            </div>
            <div className="p-8 bot-container">
                <div className="details-deal-container">
                    <span className="flex justify-center details-deal">
                        <TiTick color="white" size={"24px"} className="inline-block"/>
                        <p className="mb-4 text-16">200BG of storage</p>
                    </span>
                </div>
                <div className="details-deal-container">
                    <span className="flex justify-center details-deal">
                        <TiTick color="white" size={"24px"} className="inline-block"/>
                        <p className="mb-4 text-16">Option to add members</p>
                    </span>
                </div>
                <div className="details-deal-container">
                    <span className="flex justify-center details-deal">
                        <TiTick color="white text-16" size={"24px"} className="inline-block"/>
                        <p>Extra member benefits</p>
                    </span>
                </div>
            </div>
        </div>
        <div className="pricing-container box-container mb-8 p-0 border-[#324154] border-[13px] md:ml-5">
            <div className="head-container p-10 border-b border-[#324154]">
                <div className="mb-5 title-container text-20 ">
                    <span className="text-title ">PREMIUM</span>
                </div>
                <div className="flex flex-col deal-container">
                    <span className="text-memory text-48">2 TB</span>
                    <span className="text-deal text-20"> $8.99/Month</span>
                </div>
                <div className="mt-8 purchase-container">
                    <a href="" className="w-3/4 border purchase-btn btn-primary mb-9 h-14 border-violet-600 ">Purchase</a>
                </div>
            </div>
            <div className="p-8 bot-container">
                <div className="details-deal-container">
                    <span className="flex justify-center details-deal">
                        <TiTick color="white" size={"24px"} className="inline-block"/>
                        <p className="mb-4 text-16">2 TB of storage</p>
                    </span>
                </div>
                <div className="details-deal-container">
                    <span className="flex justify-center details-deal">
                        <TiTick color="white" size={"24px"} className="inline-block"/>
                        <p className="mb-4 text-16">Option to add members</p>
                    </span>
                </div>
                <div className="details-deal-container">
                    <span className="flex justify-center details-deal">
                        <TiTick color="white text-16" size={"24px"} className="inline-block"/>
                        <p>Extra member benefits</p>
                    </span>
                </div>
            </div>
        </div>
    </section>
        
     );
}
 
export default Pricing;