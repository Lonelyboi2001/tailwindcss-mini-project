import { useState } from "react";
import {HiOutlineSun} from "react-icons/hi";
import { HiOutlineMenu } from "react-icons/hi";
import {MdOutlineClose} from "react-icons/md"



const Navbar = (props) => {
    const {isMobile} = props;
    const [openMenu, setOpenMenu] = useState(false);
    const handleMenu = () =>{
        setOpenMenu(!openMenu);
    }
    return (  
        <nav className="flex items-center mb-8">
            <div className="flex items-center">
                <div className="text-20 font-bold mr-2 text-white">Tailwind Learn</div>
                <HiOutlineSun size={"21px"} 
                color="#e9c46a" 
                className="cursor-pointer"/>
            </div>
            <ul className="ml-auto text-16 font-semibold">
                {openMenu && isMobile ? (
                    <MdOutlineClose size={"24px"} 
                    color={"white"} 
                    className="cursor-pointer" 
                    onClick={handleMenu}
                    />
                    ) : !openMenu && isMobile ? (
                <HiOutlineMenu size="24px" 
                color="white" className="cursor-pointer" 
                onClick={handleMenu} />
                ):(
                    <div className="absolute right-8 bg-gray-600 p-8 text-center text-white text-13">
                        <li>Feeee</li>
                        <li>Menu</li>
                        <li>aaaaaaa</li>
                        <li>meow meow</li>
                    </div>
                )} 
                {openMenu && (
                    <div className="absolute right-8 bg-gray-600 p-8 text-center text-white text-13">
                        <li>Feeee</li>
                        <li>Menu</li>
                        <li>aaaaaaa</li>
                        <li>meow meow</li>
                    </div>
                )}
            </ul>
        </nav>
    );
}
 
export default Navbar;