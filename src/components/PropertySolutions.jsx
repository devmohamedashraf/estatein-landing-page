
import FindYourDreamHome from '../assets/images/fydh.png';
import UnlockProperty from '../assets/images/upv.png';
import EffortlessProperty from '../assets/images/epm.png';
import SmartInvestments from '../assets/images/siid.png';

export default function PropertySolutions() {
    const solutions = [
        {
            title: 'Find Your Dream Home',
            image: FindYourDreamHome
        },
        {
            title: 'Unlock Property Value',
            image: UnlockProperty
        },
        {
            title: 'Effortless Property Management',
            image: EffortlessProperty
        },
        {
            title: 'Smart Investments, Informed Decisions',
            image: SmartInvestments
        },
    ]
    return (
        <div className='bg-grey-10 p-2 lg:mx-0 xl:mx-2 mx-4'>
            <div className='flex-1 bg-grey-8 border border-grey-15 p-4'>
                <div className='grid xl:grid-cols-4 grid-cols-2 gap-4'>
                    {solutions.map(solution => {
                        return (
                            <div key={solution.title} className='bg-grey-10 border border-grey-15 rounded-xl pb-8 p-4 flex flex-col '>
                                <button className='' dir={'rtl'}>
                                    <svg width="30" height="30" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.375 27.625L27.625 6.375M27.625 6.375L11.6875 6.375M27.625 6.375V22.3125" stroke="#4D4D4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </button>
                                <div className='flex items-center justify-center flex-col gap-4'>
                                    <img src={solution.image} width={82} height={82}/>
                                    <span className='xl:text-xl lg:text-lg md:text-base text-sm font-semibold text-center'>{solution.title}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};