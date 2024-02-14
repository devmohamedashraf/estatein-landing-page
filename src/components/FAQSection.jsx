import SectionHeader from "./SectionHeader.jsx";
import Button from "./Button.jsx";

export default function FaqSection() {
    const questions = [
        {
            title: 'How do I search for properties on Estatein?',
            description: 'Learn how to use our user-friendly search tools to find properties that match your criteria.'
        },
        {
            title: 'What documents do I need to sell my property through Estatein?',
            description: 'Find out about the necessary documentation for listing your property with us.'
        },
        {
            title: 'How can I contact an Estatein agent? ',
            description: 'Discover the different ways you can get in touch with our experienced agents.'
        },
    ]
    return (
        <div className='px-4 py-12 container mx-auto space-y-8'>
            <SectionHeader title='Frequently Asked Questions' description={`Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.`}/>
            <div className='grid grid-cols-1 xl:grid-cols-3 gap-4'>
                {questions.map((question, index) => {
                    return (
                        <div key={question.title + '-' + index + 1} className='p-10 rounded-lg border border-grey-15 space-y-6'>
                            <div className='flex flex-col space-y-6'>
                                <span className='font-semibold 2xl:text-2xl xl:text-xl text-lg'>{question.title}</span>
                                <span className='font-medium 2xl:text-lg xl:text-base text-sm text-grey-60'>{question.description}</span>
                            </div>
                            <Button className='!bg-grey-10 text-sm'>Read More</Button>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}