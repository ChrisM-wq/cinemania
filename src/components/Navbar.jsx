import Logo from '../assets/logo.png';

const Navbar = () => {
    return (
        <>
            <div className="h-20 bg-black flex justify-between px-16 sticky top-0">
                <div className='flex items-center gap-8'>
                    <img src={Logo} className='h-10 cursor-pointer'/>
                    <div className="hover-underline-animation text-white hover:text-primary font-semibold transition-all duration-200 cursor-pointer">Movies</div>
                </div>
                <div className='flex items-center'>
                    <div className="bg-primary font-semibold transition-all duration-200 cursor-pointer flex items-center px-6 py-1 rounded-md hover:bg-[#fff]">Sign In</div>
                </div>
                
                
            </div>
        </>
    )
};

export default Navbar;