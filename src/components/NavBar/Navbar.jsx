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
                <div className="mr-2 font-bold text-white text-20">Tailwind Learn</div>
                <HiOutlineSun size={"21px"} 
                color="#e9c46a" 
                className="cursor-pointer"/>
            </div>
            <ul className="ml-auto font-semibold text-16">
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
                    <div className="absolute p-8 text-center text-white bg-gray-600 right-8 text-13">
                        <li>Feeee</li>
                        <li>Menu</li>
                        <li>aaaaaaa</li>
                        <li>meow meow</li>
                    </div>
                )} 
                {openMenu && (
                    <div className="absolute p-8 text-center text-white bg-gray-600 right-8 text-13">
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