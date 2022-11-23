import { useState } from 'react';
import Avatar from '../../Details/GridDetail';
import quotes from '../../assets/bg-pattern-quotation.svg';


const TestGrid = () => {
    const[detail, setDetail] = useState(Avatar)
    return ( 
        <div className='grid mt-9 mx-4 font-barlow md:grid-cols-4 md:gap-4 md:max-w-screen-2xl md:m-auto  '>
            {
            detail.map((detail) => {
                return(
                <div className="person-container mb-9 p-9 rounded-xl md:mb-0">
                    <div className="personal-info text-14 flex items-center ">
                        <div className="avatar inline-block">
                            <img className='w-9/12 rounded-full border-white border-2' src={detail.avatar} alt="" />
                        </div>
                        <div className="personal-name text-13"><p>{detail.name}</p>
                        <p className='opacity-40'>{detail.situation}</p></div>
                    </div>
                    <div className="personal-qoutes mt-5 font-medium"><p>{detail.quoutes}</p></div>
                    <div className="expermiments mt-4 line-clamp-6 text-14 opacity-6 md:line-clamp-none"><q>{detail.experiment}</q></div>
                </div>
                )
            })
        }
        </div>
     );
}
 
export default TestGrid;