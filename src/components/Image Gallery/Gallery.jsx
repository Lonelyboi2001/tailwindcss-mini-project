import { useState } from 'react';
import {BsBookmark, BsSearch} from 'react-icons/bs';
import ImageDetail from '../../Details/imageDetails';




const ImageGallery = () => {
    const[detail, setDetail] = useState(ImageDetail)
    return ( 
    <div className="max-w-md m-auto img-gallery md:max-w-screen-2xl md:mb-12">
        <section className="flex justify-center my-10 text-center nav-bar md:justify-end md:pr-4 "> 
            <nav class="navbar">
                    <ul class="nav-menu list-none flex flex-col gap-4 md:flex-row ">
                        <li ><a className='px-3 py-2 ' href="">Vectors</a></li>
                        <li ><a className='px-3 py-2' href="">Illustration</a></li>
                        <li ><a className='px-3 py-2' href="">Images</a></li>
                        <li ><a className='px-3 py-2' href="">Icons</a></li>
                    </ul>
            </nav>
        </section>
        <section className="mb-5 upload-and-search">
            <div class='flex flex-col justify-center items-center px-6 md:flex-row md:justify-between'>
                <div class="relative flex mb-4 items-center h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                    <input
                    class="peer outline-none text-sm text-gray-700 pr-2"
                    type="text"
                    id="search"
                    placeholder="Search something.." /> 
                    <div class="grid place-items-center w-12 text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>
                <div className="upload-container">
                    <a className="upload-button text-white btn-primary px-36 bg-black p-7 duration-150  md:px-10 md:py-6 md:mr-0 md:w-[87%] hover:bg-white hover:text-black hover:border hover:border-gray-900 hover:duration-150"> Upload</a>
                </div>
            </div>
        </section>
        <section className="grid gap-5 px-6 m-auto image-gallery max-w-screen-2xl">
        {
            detail.map((detail) => {
                return(
                        <div className="relative flex items-end image-container ">
                        <img className='w-full' src={detail.image}/>
                            <div className="flex image-detail md:hidden ">
                                <div className='image-info'>
                                    <span> {detail.name}</span>
                                    <div>
                                        <span> {detail.like} likes</span>
                                        <span> {detail.share} shares</span>
                                    </div>
                                </div>
                                <BsBookmark size={"23px"} color={"white"}/>
                            </div>
                        </div>
                    
                )
            })
        }
        </section> 
    </div>   
        );
}
 
export default ImageGallery;