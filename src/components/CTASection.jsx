import Button from "./Button.jsx";

export function CtaSection() {
    return (
        <div className='2xl:py-24 2xl:px-40 xl:py-16 xl:px-20 py-12 px-4 border-y border-grey-15 relative'>
            <div className='absolute left-0 bottom-0'>
                <img src='/assets/cta-left.png'/>
            </div>
            <div className='flex xl:flex-row flex-col items-center 2xl:gap-24 xl:gap-16 gap-8'>
                <div className='relative z-10 flex flex-col 2xl:gap-3 gap-2'>
                    <span className='2xl:text-5xl xl:text-4xl text-3xl font-semibold'>Start Your Real Estate Journey Today</span>
                    <span className='2xl:text-lg xl:text-base text-sm block text-grey-60'>Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.</span>
                </div>
                <div className='2xl:w-64 xl:w-36 xl:block hidden'></div>
                <Button className='w-full flex-1 whitespace-nowrap relative z-10 bg-purple-60 border-none 2xl:text-lg font-medium text-sm'>Explore Properties</Button>
            </div>
            <div className='absolute right-0 bottom-0'>
                <img src='/assets/cta-right.png'/>
            </div>
        </div>
    );
}