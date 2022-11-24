import Headphone from '../../assets/headphone.png';
import { GiScales } from "react-icons/gi";
import {AiOutlineHeart} from "react-icons/ai"; 


const Product = () => {
    return ( 
        <div>
    <div
        className="box-container max-w-[28rem] p-5 pt-1 bg-white shadow-3d text-black md:flex md:max-w-4xl md:pt-14 md:pl-0 ">
        <div className="pt-5 pr-image-container p-11 md:self-start md:p-0">
            <img className="w-[85%] m-auto duration-700
             md:m-0 md:inline-block md:w-4/6 md:hover:scale-110 md:hover:duration-700" src={Headphone} alt=""/>
        </div>
        <div className="product-info-container md:items-start md:flex md:flex-col">
        <span className="p-3 pt-1 pb-1 text-white bg-black rounded-full shipping-tag">Free Shipping</span>
        <h1 className="mt-5 font-medium product-title text-24 md:mt-3 md:text-26 md:text-left">Razer Kraken Kitty Edt Gaming Headset Quartz</h1>
        <p className="mt-4 line-through product-price discount md:mt-2 md:text-16">$799</p>
        <p className="font-bold product-price text-48">$599</p>
        <p className="text-gray-400 offer-detail text-14">This offer is valid until April 3rd or as long as the stock
            last</p>
        <div className="m-3 cart-btn-container md:block md:w-full w-md:ml-0 md:mb-1">
            <a href=""
               className="btn-primary p-7 border-b-8 border-blue-700 bg-blue-500 text-white hover:pb-9 hover:border-b-0 md:ml-0 md:w-[87%] ">Add
                to cart</a>
        </div>
        <div className="flex flex-row items-center gap-4 m-3 stock-detail-container md:m-2">
            <div className="signal-dot bg-green-400 h-3 w-3 rounded-lg md:hover:scale-[2] md:hover:duration-300 md:hover:opacity-0"></div>
            <div className="text-left stock-detail"> 50+ pcs. in stock</div>
        </div>
        <div className="mb-5 cart-btn-container md:flex md:gap-4">
            <a href=""
               className="btn-secondary btn-primary">
                <GiScales size={30}/>
                <p className='ml-3 '>Add to cart</p></a>
            <a href="" className="btn-secondary btn-primary">
                <AiOutlineHeart size={30}/><p className='ml-3'>Add to wishlist</p>
            </a></div>
    </div></div>
</div>
    );
}
 
export default Product;