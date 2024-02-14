import SectionHeader from "./SectionHeader.jsx";

export default function ClientTestimonials() {
    const testimonials = [
        {
            name: 'Wade Warren',
            location: 'USA, California',
            title: 'Exceptional Service!',
            description: 'Our experience with Estatein was outstanding. Their team\'s dedication and professionalism made finding our dream home a breeze. Highly recommended!',
            avatar: '/testimonials/Wade Warren.png'
        },
        {
            name: 'Emelie Thomson',
            location: 'USA, New York',
            title: 'Highly Recommended!',
            description: 'We are very happy with the service we received from Estatein. The team was very professional and made the process of finding our dream home a breeze.',
            avatar: '/testimonials/Emelie Thomson.png'
        },
        {
            name: 'John Mans',
            location: 'USA, Florida',
            title: 'Great Experience!',
            description: 'We had a great experience with Estatein. Their team was very professional and made the process of finding our dream home a breeze.',
            avatar: '/testimonials/John Mans.png'
        },
    ]
    return (
        <div className='px-4 py-12 container mx-auto space-y-8'>
            <SectionHeader title='What Our Clients Say' description='Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.'/>
            <div className='grid xl:grid-cols-3 gap-4'>
                {testimonials.map((testimonial, index) => {
                    return (
                        <div key={testimonial.title + '-' + index + 1} className='p-10 rounded-lg border border-grey-15'>
                            <div className='flex flex-col gap-6'>
                                <div className='flex items-center gap-2'>
                                    {Array.from({length:5}).map((_, index) => {
                                        return (
                                            <div key={`star-${index+1}`} className='2xl:w-12 2xl:h-12 xl:w-10 xl:h-10 w-8 h-8 border border-grey-15 rounded-full flex items-center justify-center'>
                                                <svg className='2xl:w-6 2xl:h-6 xl:w-5 xl:h-5 w-4 h-4' viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.1586 1.30996C10.5522 0.697195 11.4478 0.697195 11.8414 1.30996L14.8804 6.04141C15.0158 6.25225 15.2255 6.40456 15.4678 6.4682L20.9068 7.89639C21.6112 8.08135 21.888 8.93313 21.4268 9.49681L17.8661 13.8492C17.7074 14.0431 17.6273 14.2896 17.6417 14.5397L17.9641 20.1539C18.0059 20.8809 17.2813 21.4074 16.6028 21.143L11.363 19.1014C11.1296 19.0105 10.8704 19.0105 10.637 19.1014L5.39725 21.143C4.71867 21.4074 3.99409 20.8809 4.03585 20.1539L4.3583 14.5397C4.37267 14.2896 4.2926 14.0431 4.13393 13.8492L0.573162 9.49681C0.112013 8.93313 0.388775 8.08135 1.09317 7.89639L6.53216 6.4682C6.77452 6.40456 6.98416 6.25225 7.11958 6.04141L10.1586 1.30996Z" fill="#FFE600"/>
                                                </svg>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className='flex flex-col space-y-3'>
                                    <span className='font-semibold 2xl:text-2xl xl:text-xl text-lg'>{testimonial.title}</span>
                                    <span className='font-medium 2xl:text-lg xl:text-base text-sm'>{testimonial.description}</span>
                                </div>
                                <div className='flex gap-3'>
                                    <img src={testimonial.avatar} alt={testimonial.name} className='2xl:w-16 2xl:h-16 w-12 h-12  rounded-full'/>
                                    <div className='flex flex-col'>
                                        <span className='font-semibold 2xl:text-xl xl:text-lg text-base'>{testimonial.name}</span>
                                        <span className='font-medium 2xl:text-lg xl:text-base text-sm text-grey-60'>{testimonial.location}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}