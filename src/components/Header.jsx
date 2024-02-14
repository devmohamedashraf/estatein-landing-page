import Banner from "./Banner.jsx";
import DesktopLogo from '../assets/logo-desktop.png';
import LaptopLogo from '../assets/logo-laptop.png';
import MobileLogo from '../assets/logo-mobile.png';

import Button from "./Button.jsx";

function NavigationBar(){
    const links = [
        {name: 'Home', href: '#', active: true},
        {name: 'About Us', href: '#'},
        {name: 'Properties', href: '#'},
        {name: 'Services', href: '#'},
    ]
    return (
        <nav className='hidden xl:block'>
            <ul className='flex items-center gap-6 2xl:text-lg xl:text-sm font-medium'>
                {links.map((link, index) => {
                    return (
                        <li key={link.name + '-' + index} className={`transition p-2 px-4 hover:bg-grey-8 border border-white/0 hover:border-grey-15 rounded-lg ${link.active ? `nav active` : ''}`}>
                            <a href={link.href} className=''>{link.name}</a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default function Header() {

    return (
        <header>
            <Banner />
            <div className='bg-grey-10 2xl:h-24 xl:h-20 h-16 flex items-center border-y border-grey-15'>
                <div className='container mx-auto p-4'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <img className='2xl:block hidden' src={DesktopLogo} alt='Estatein' />
                            <img className='2xl:hidden xl:block hidden' src={LaptopLogo} alt='Estatein' />
                            <img className='xl:hidden block' src={MobileLogo} alt='Estatein' />
                        </div>
                        <NavigationBar />
                        <Button className='hidden xl:block 2xl:text-lg xl:text-sm'>Contact Us</Button>
                        <button className='xl:hidden block'>
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M3.5 7.875C3.5 7.39175 3.89175 7 4.375 7H23.625C24.1082 7 24.5 7.39175 24.5 7.875C24.5 8.35825 24.1082 8.75 23.625 8.75H4.375C3.89175 8.75 3.5 8.35825 3.5 7.875ZM3.5 14C3.5 13.5168 3.89175 13.125 4.375 13.125H23.625C24.1082 13.125 24.5 13.5168 24.5 14C24.5 14.4832 24.1082 14.875 23.625 14.875H4.375C3.89175 14.875 3.5 14.4832 3.5 14ZM13.125 20.125C13.125 19.6418 13.5168 19.25 14 19.25H23.625C24.1082 19.25 24.5 19.6418 24.5 20.125C24.5 20.6082 24.1082 21 23.625 21H14C13.5168 21 13.125 20.6082 13.125 20.125Z" fill="white"/>
                            </svg>
                        </button>
                    </div>
                </div>

            </div>
        </header>
    );
};