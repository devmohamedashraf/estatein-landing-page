import HeroImage from '../assets/hero.png';
import Button from "./Button.jsx";
import Badge from "../assets/badge.png";
export default function Hero() {
    const badges = [
        {
            title: 'Happy Customers',
            value: '200+'
        },
        {
            title: 'Properties For Clients',
            value: '10k+'
        },
        {
            title: 'Years of Experience',
            value: '16+'
        },
    ]
    return (
        <div className=''>
            <div className='relative flex flex-col-reverse xl:grid xl:grid-cols-2 xl:items-center xl:justify-between '>
                <div className='flex flex-col xl:gap-12 gap-6 px-4 2xl:pl-40 2xl:pr-20 xl:pl-20 xl:pr-16'>
                    <div className='space-y-4'>
                        <span className='block text-white font-semibold 2xl:text-6xl xl:text-5xl lg:text-4xl text-3xl'>Discover Your Dream  Property with Estatein</span>
                        <span className='block 2xl:text-lg xl:text-base text-sm text-grey-60 font-medium'>Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</span>
                    </div>
                    <div className='flex items-center gap-4'>
                        <Button>Learn More</Button>
                        <Button className='bg-purple-60 border-none'>Browse Properties</Button>
                    </div>
                    <div className='grid xl:grid-cols-3 grid-cols-2 gap-2 xl:text-left text-center'>
                        {badges.map((badge,index) => (
                            <div key={badge.title} className={`bg-grey-10 rounded-xl border border-grey-15 xl:col-span-1 ${badges.length === index + 1 ? 'col-span-2' : ''}`}>
                                <div className='flex flex-col p-6 justify-center h-full'>
                                    <span className='2xl:text-4xl xl:text-2xl text-xl font-bold'>{badge.value}</span>
                                    <span className='text-grey-60 2xl:text-lg xl:text-base text-sm font-medium'>{badge.title}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='xl:absolute relative xl:left-1/2 left-0 xl:-translate-x-1/2 xl:top-36 xl:mb-0 xl:mt-0 -mt-16 mb-6 xl:mx-0 mx-4'>
                    <img src={Badge} alt='react logo' className='2xl:w-44 xl:w-32 w-28'/>
                </div>
                <div className='hero-image xl:mx-0 mx-4 xl:border-none border border-grey-15 xl:rounded-none rounded-xl'>
                    <img src={HeroImage} className='w-full h-full xl:rounded-none rounded-xl' />
                </div>
            </div>
        </div>
    );
};