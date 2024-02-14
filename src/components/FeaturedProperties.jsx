
import SectionHeader from "./SectionHeader.jsx";
import Button from "./Button.jsx";


const Badge = ({ children, type }) => {
    const BedroomIcon = (
        <svg width="20" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_139_6526)">
                <g clipPath="url(#clip1_139_6526)">
                    <path d="M10.0119 17.9597C7.01369 17.9597 4.01627 17.9597 1.01806 17.9597C0.714934 17.9597 0.574786 18.0984 0.574786 18.3977C0.574786 18.4752 0.578723 18.5527 0.573999 18.6295C0.5677 18.7225 0.558252 18.8155 0.54093 18.9062C0.476368 19.2372 0.159068 19.5023 -0.220432 19.4984C-0.601507 19.4946 -0.917233 19.2116 -0.974709 18.8481C-0.988094 18.7628 -0.99518 18.6752 -0.99518 18.5891C-0.995967 16.8279 -1.00778 15.0659 -0.991243 13.3046C-0.981795 12.2783 -0.602295 11.3853 0.125212 10.6419C0.566913 10.1907 1.09207 9.86976 1.69282 9.66511C2.16522 9.50465 2.65338 9.45581 3.15098 9.45581C7.76246 9.45736 12.3739 9.45348 16.9854 9.45891C18.3365 9.46046 19.4309 9.9969 20.2419 11.0636C20.6403 11.5884 20.8781 12.1845 20.9592 12.8357C20.9867 13.055 20.9985 13.2783 20.9993 13.5C21.0025 15.2101 21.0017 16.9202 21.0009 18.6302C21.0009 18.8977 20.934 19.1411 20.7104 19.3178C20.4741 19.5046 20.2104 19.5535 19.9293 19.4395C19.66 19.3295 19.49 19.1271 19.4514 18.838C19.4317 18.6922 19.4341 18.5426 19.4301 18.3953C19.4238 18.1574 19.3238 18.0139 19.1239 17.9698C19.0798 17.9597 19.0333 17.9605 18.9876 17.9605C15.9965 17.9605 13.0054 17.9605 10.0135 17.9605L10.0119 17.9597Z" fill="white"/>
                    <path d="M9.90246 2.5C11.8472 2.5 13.7912 2.5 15.7351 2.5C16.3862 2.5 16.9949 2.64341 17.52 3.03953C18.1956 3.54884 18.59 4.21938 18.6231 5.06124C18.6514 5.77519 18.6388 6.4907 18.642 7.20543C18.6444 7.66589 18.642 8.12636 18.642 8.58682C18.642 8.62791 18.6396 8.67132 18.6286 8.71085C18.5948 8.83566 18.5263 8.88527 18.3971 8.86124C18.2562 8.83488 18.12 8.77829 17.979 8.76279C17.6476 8.72713 17.3153 8.70233 16.9823 8.68527C16.7602 8.67364 16.6917 8.63411 16.6602 8.41938C16.5595 7.73876 15.9194 7.12636 15.1005 7.13566C14.1872 7.14574 13.2739 7.13798 12.3613 7.13798C11.6819 7.13798 11.1016 7.53643 10.8709 8.16434C10.8378 8.25426 10.8252 8.35194 10.8079 8.44651C10.7756 8.61628 10.7119 8.67984 10.5402 8.68217C10.1804 8.68605 9.81979 8.68605 9.45997 8.68217C9.29463 8.68062 9.22928 8.61628 9.19936 8.42791C9.15763 8.16357 9.0537 7.92791 8.88364 7.72093C8.57579 7.34574 8.17739 7.14186 7.68609 7.13953C6.74363 7.13488 5.80118 7.13721 4.85794 7.13876C4.06587 7.13953 3.44623 7.74884 3.34545 8.41783C3.31317 8.63411 3.24782 8.67209 3.02579 8.68605C2.6581 8.71008 2.29041 8.74419 1.92351 8.78295C1.81092 8.79457 1.70305 8.84264 1.59125 8.86124C1.47078 8.88062 1.41488 8.84031 1.38103 8.72403C1.36764 8.67829 1.36134 8.62946 1.36134 8.5814C1.36055 7.47674 1.3456 6.37209 1.36449 5.26744C1.38418 4.11163 1.92666 3.26202 2.988 2.74806C3.40844 2.54574 3.86431 2.5 4.3257 2.5C6.18462 2.5 8.04354 2.5 9.90246 2.5Z" fill="white"/>
                </g>
            </g>
            <defs>
                <clipPath id="clip0_139_6526">
                    <rect width="20" height="20" fill="white" transform="translate(0 0.5)"/>
                </clipPath>
                <clipPath id="clip1_139_6526">
                    <rect width="22" height="17" fill="white" transform="translate(-1 2.5)"/>
                </clipPath>
            </defs>
        </svg>
    )
    const BathroomIcon = (
        <svg width="20" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_139_6532)">
                <g clipPath="url(#clip1_139_6532)">
                    <path d="M0.269455 14.2616H10.11V16.0697H16.2615V14.2655H18.7054C18.8637 16.4158 18.8761 18.3304 16.6707 19.7897C16.6437 19.8075 16.6221 19.8318 16.5623 19.885C16.8335 20.1103 17.1009 20.3329 17.3655 20.5529C17.0082 20.8945 16.7212 21.169 16.3922 21.4842C16.1019 21.1848 15.7879 20.8373 15.4458 20.5207C15.3453 20.4275 15.1673 20.3894 15.0215 20.3802C14.7831 20.3657 14.5414 20.4045 14.301 20.4052C11.1057 20.4071 7.91048 20.4065 4.71457 20.4065C4.56154 20.4065 4.398 20.436 4.25679 20.3933C3.83054 20.2653 3.55994 20.4629 3.30642 20.7684C3.09034 21.0284 2.84405 21.2629 2.61877 21.5007C2.31468 21.1808 2.03949 20.8918 1.73474 20.5707C1.939 20.39 2.19843 20.1602 2.49004 19.9014C2.28906 19.7576 2.13866 19.6577 1.99614 19.5474C0.928209 18.7244 0.350896 17.6329 0.275366 16.2924C0.23793 15.6284 0.268798 14.9604 0.268798 14.2616H0.269455Z" fill="white"/>
                    <path d="M0.275543 9.28712C0.270288 9.16825 0.261093 9.06119 0.261093 8.95413C0.260437 7.21366 0.258466 5.47384 0.261093 3.73336C0.26372 1.82081 1.59108 0.486222 3.50101 0.500014C4.14203 0.504612 4.80275 0.491476 5.41882 0.636625C6.5117 0.894741 7.20001 1.65267 7.53235 2.7206C7.59671 2.92814 7.68012 3.02863 7.90803 3.09037C9.19401 3.43912 10.0964 4.64104 10.1128 5.98219C10.1155 6.19827 10.1128 6.41435 10.1128 6.64882H4.02578C3.73548 5.11392 4.56959 3.52976 6.31335 3.0352C6.15573 2.35017 5.48121 1.7722 4.7732 1.74725C4.23792 1.7282 3.70067 1.72623 3.16539 1.74725C2.24261 1.78337 1.50044 2.63062 1.4965 3.64666C1.48994 5.39765 1.49453 7.14929 1.49453 8.90028C1.49453 9.01981 1.49453 9.13935 1.49453 9.28647H0.274229L0.275543 9.28712Z" fill="white"/>
                    <path d="M10.0931 13.0327C9.96436 13.0327 9.86781 13.0327 9.77126 13.0327C6.64366 13.0327 3.5154 13.0334 0.387794 13.0321C-0.285409 13.0321 -0.769459 12.7135 -0.939566 12.1697C-1.19571 11.3514 -0.615771 10.5632 0.268259 10.5514C1.20877 10.5389 2.14929 10.5481 3.0898 10.5481C5.29922 10.5481 7.50799 10.5481 9.71741 10.5481C9.83563 10.5481 9.95385 10.5481 10.0931 10.5481V13.0321V13.0327Z" fill="white"/>
                    <path d="M15.0237 14.8711H11.3634C11.3575 14.7555 11.3477 14.6504 11.3477 14.5453C11.3464 13.2771 11.3464 12.0082 11.3477 10.7399C11.3483 9.82239 11.8494 9.31798 12.763 9.31404C13.1019 9.31272 13.4408 9.3055 13.7797 9.31601C14.5409 9.34031 15.0381 9.85194 15.0401 10.6151C15.044 11.9385 15.0414 13.2613 15.0401 14.5847C15.0401 14.6708 15.0309 14.7561 15.0237 14.8711Z" fill="white"/>
                    <path d="M16.2832 13.0209V10.5481C16.8782 10.5481 17.4648 10.5462 18.0506 10.5488C18.356 10.5501 18.668 10.5251 18.9668 10.5744C19.619 10.6821 20.0433 11.2161 20.0164 11.8394C19.9901 12.4508 19.5389 12.9756 18.8985 13.0091C18.0394 13.0544 17.1764 13.0203 16.2839 13.0203L16.2832 13.0209Z" fill="white"/>
                </g>
            </g>
            <defs>
                <clipPath id="clip0_139_6532">
                    <rect width="20" height="20" fill="white" transform="translate(0 0.5)"/>
                </clipPath>
                <clipPath id="clip1_139_6532">
                    <rect width="21.0171" height="21" fill="white" transform="translate(-1 0.5)"/>
                </clipPath>
            </defs>
        </svg>
    )
    const VillaIcon = (
        <svg width="20" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M4 17V4H3.75C3.33579 4 3 3.66421 3 3.25C3 2.83579 3.33579 2.5 3.75 2.5H16.25C16.6642 2.5 17 2.83579 17 3.25C17 3.66421 16.6642 4 16.25 4H16V17H16.25C16.6642 17 17 17.3358 17 17.75C17 18.1642 16.6642 18.5 16.25 18.5H12.75C12.3358 18.5 12 18.1642 12 17.75V15.25C12 14.8358 11.6642 14.5 11.25 14.5H8.75C8.33579 14.5 8 14.8358 8 15.25V17.75C8 18.1642 7.66421 18.5 7.25 18.5H3.75C3.33579 18.5 3 18.1642 3 17.75C3 17.3358 3.33579 17 3.75 17H4ZM7 6C7 5.72386 7.22386 5.5 7.5 5.5H8.5C8.77614 5.5 9 5.72386 9 6V7C9 7.27614 8.77614 7.5 8.5 7.5H7.5C7.22386 7.5 7 7.27614 7 7V6ZM7.5 9.5C7.22386 9.5 7 9.72386 7 10V11C7 11.2761 7.22386 11.5 7.5 11.5H8.5C8.77614 11.5 9 11.2761 9 11V10C9 9.72386 8.77614 9.5 8.5 9.5H7.5ZM11 6C11 5.72386 11.2239 5.5 11.5 5.5H12.5C12.7761 5.5 13 5.72386 13 6V7C13 7.27614 12.7761 7.5 12.5 7.5H11.5C11.2239 7.5 11 7.27614 11 7V6ZM11.5 9.5C11.2239 9.5 11 9.72386 11 10V11C11 11.2761 11.2239 11.5 11.5 11.5H12.5C12.7761 11.5 13 11.2761 13 11V10C13 9.72386 12.7761 9.5 12.5 9.5H11.5Z" fill="white"/>
        </svg>
    )
    const icons = {
        bedrooms: BedroomIcon,
        bathrooms: BathroomIcon,
        villa: VillaIcon,
    }
    return (
        <div className='flex items-center bg-grey-10 border border-grey-15 p-2 px-4 rounded-full gap-1'>
            <div>
                {icons[type]}
            </div>
            {children}
        </div>
    );
}
export default function FeaturedProperties() {
    const products = [
        {
            name: 'Seaside Serenity Villa',
            description: 'A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood',
            price: '$550,000',
            bedrooms: 4,
            bathrooms: 3,
            villa: true,
            image: '/assets/products/Seaside Serenity Villa.png',
        },
        {
            name: 'Metropolitan Haven',
            description: 'A chic and fully-furnished 2-bedroom apartment with panoramic city views',
            price: '$550,000',
            bedrooms: 4,
            bathrooms: 3,
            villa: true,
            image: '/assets/products/Metropolitan Haven.png',
        },
        {
            name: 'Rustic Retreat Cottage',
            description: 'An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community',
            price: '$550,000',
            bedrooms: 4,
            bathrooms: 3,
            villa: true,
            image: '/assets/products/Rustic Retreat Cottage.png',
        }
    ]
    return (
        <div className='px-4 py-12 container mx-auto space-y-8'>
            <SectionHeader title='Featured Properties' description='Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.'/>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 xl:grid-cols-3'>
                {products.map((product, index) => {
                    return (
                        <div key={product.name} className='border border-grey-15 p-6 flex flex-col gap-6 justify-center rounded-xl'>
                            <div>
                                <img src={product.image} alt={product.name} className='w-full object-cover'/>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <span className='font-semibold 2xl:text-2xl xl:text-xl text-lg'>{product.name}</span>
                                <span className='font-medium 2xl:text-lg xl:text-base text-sm text-grey-60'>{product.description}... <a className='cursor-pointer text-white underline'>Read More</a></span>
                            </div>
                            <div className='flex flex-wrap items-center gap-2'>
                                <Badge type='bedrooms'><span className='text-white font-medium 2xl:text-base text-sm'>{product.bedrooms}-Bedrooms</span></Badge>
                                <Badge type='bathrooms'><span className='text-white font-medium 2xl:text-base text-sm'>{product.bathrooms}-Bathrooms</span></Badge>
                                <Badge type='villa'><span className='text-white font-medium 2xl:text-base text-sm'>Villa</span></Badge>
                            </div>
                            <div className='flex flex-wrap items-start gap-6'>
                                <div className='space-y-1'>
                                    <span className='block font-medium 2xl:text-lg text-sm text-grey-60'>Price</span>
                                    <span className='block font-semibold 2xl:text-2xl xl:text-xl text-lg'>{product.price}</span>
                                </div>
                                <Button className='flex-1 h-full bg-purple-60 border-none 2xl:text-lg text-sm font-medium'>View Property Details</Button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}