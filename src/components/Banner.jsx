import abstractDesign from '../assets/abstract-design.png';

export default function Banner() {
    return (
        <div className='relative bg-grey-10 2xl:h-16 xl:h-12 h-20 p-4 '>
           <div className='absolute w-full h-full top-0 left-0 '>
               <img src={abstractDesign} className='h-full w-full object-cover' alt='Banner' />
           </div>
            <div className='h-full relative flex items-center'>
                <div className='flex-1 flex justify-center'>
                    <span className='text-white 2xl:text-lg xl:text-sm font-medium text-xs'>✨Discover Your Dream Property with Estatein <a className='cursor-pointer mx-2 underline'>Learn More</a></span>
                </div>
                <button className='flex items-center justify-center 2xl:w-8 2xl:h-8 w-6 h-6 rounded-full bg-white/10 hover:bg-grey-30 transition'>
                    <svg className='2xl:w-6 2x:h-6 w-5 h-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 18L18 6M6 6L18 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
        </div>
    );
};