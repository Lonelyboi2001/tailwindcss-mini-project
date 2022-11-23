import Headphone from '../../assets/headphone.png';
import { GiScales } from "react-icons/gi";
import {AiOutlineHeart} from "react-icons/ai"; 


const Product = () => {
    return ( 
        <div>
    <div
        className="card-container box-container max-w-[28rem] p-5 pt-1 bg-white shadow-3d text-black md:flex md:max-w-4xl md:pt-14 md:pl-0 ">
        <div className="pr-image-container p-11 pt-5 md:self-start md:p-0">
            <img className="w-[85%] m-auto duration-700
             md:m-0 md:inline-block md:w-4/6 md:hover:scale-110 md:hover:duration-700" src={Headphone} alt=""/>
        </div>
        <div className="product-info-container md:items-start md:flex md:flex-col">
        <span className="shipping-tag text-white p-3 pt-1 pb-1 rounded-full bg-black">Free Shipping</span>
        <h1 className="product-title mt-5 text-24 font-medium md:mt-3 md:text-26 md:text-left">Razer Kraken Kitty Edt Gaming Headset Quartz</h1>
        <p className="product-price discount mt-4 line-through md:mt-2 md:text-16">$799</p>
        <p className="product-price text-48 font-bold">$599</p>
        <p className="offer-detail text-gray-400 text-14">This offer is valid until April 3rd or as long as the stock
            last</p>
        <div className="cart-btn-container m-3 md:block md:w-full w-md:ml-0 md:mb-1">
            <a href=""
               className="btn-primary cart-btn p-7 border-b-8 border-blue-700 bg-blue-500 text-white hover:pb-8 hover:border-b-0 md:ml-0 md:w-[87%] ">Add
                to cart</a>
        </div>
        <div className="stock-detail-container flex flex-row gap-4 m-3 items-center md:m-2">
            <div className="signal-dot bg-green-400 h-3 w-3 rounded-lg md:hover:scale-[2] md:hover:duration-300 md:hover:opacity-0"></div>
            <div className="stock-detail text-left"> 50+ pcs. in stock</div>
        </div>
        <div className="cart-btn-container mb-5 md:flex md:gap-4">
            <a href=""
               className="btn-primary card-btn mt-4 mb-4 border-2 p-7 border-gray-300 hover:border-b-8 hover:p-6 md:mt-1">
                <GiScales size={30}/>
                <p className='ml-3 '>Add to cart</p></a>
            <a href="" className="btn-primary wishlist-btn border-2 p-7 border-gray-300 hover:border-b-8 hover:p-6 md:mt-1">
                <AiOutlineHeart size={30}/><p className='ml-3'>Add to wishlist</p>
            </a></div>
    </div></div>
</div>
    );
}
 
export default Product;