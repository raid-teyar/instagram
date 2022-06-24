
import Image from 'next/dist/client/image'
import {
    SearchIcon,
    PlusCircleIcon,
    UseGroupIcon,
    HeartIcon,
    PaperAireplaneIcon,
    MenuIcon,
    HomeIcon,
    PaperAirplaneIcon,
    UserGroupIcon,
} from "@heroicons/react/outline";




export default function Header() {
  return (
    <div className=" shadow-sm border-b sticky top-0 z-50 bg-white">
        <div className='flex justify-between max-w-6xl mx-5 lg:mx-auto'>
            {/* Left */}
            <div className='relative hidden lg:inline-grid w-24 cursor-pointer'>
                <Image
                    objectFit='contain'
                    src="https://links.papareact.com/ocw"
                    layout='fill'
                />
            </div>
            <div className='relative lg:hidden flex-shrink-0 w-10  cursor-pointer'>
                <Image
                    objectFit='contain'
                    src="https://links.papareact.com/jjm"
                    layout='fill'
                />
            </div>
            {/* Middle - Search  */}
            <div className='max-w-xs'>
                <div className='mt-1 relative p-3 rounded-md'>
                    <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
                        <SearchIcon className='h-5 w-5 text-gray-500'/>
                    </div>
                    <input
                    className='bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md
                    focus:ring-black focus:border-black'
                    type="text" 
                    placeholder='Search'/>
                </div>
            </div>
    

            {/* Right */}
            <div className="flex items-center justify-end space-x-4" >   
            <HomeIcon className='navBtn'/>     
            <MenuIcon className='h-6 md:hidden cursor-pointer'/>   
            <div className="relative navBtn ">
                <PaperAirplaneIcon className="navBtn rotate-45"/>
                <div className="absolute -top-1 -right-2 text-xs  w-5 h-5 bg-red-500 rounded-full flex justify-center items-center animate-pulse text-white">3</div>
            </div>     
            <PlusCircleIcon className="navBtn"/>
            <UserGroupIcon className="navBtn"/>
            <HeartIcon className="navBtn" />

            <img className="h-10 rounded-full cursor-pointer"
            src="https://scontent.fczl2-2.fna.fbcdn.net/v/t39.30808-6/284939846_557737129302625_3039993465190530578_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGYpuFBY2ce9klICtfoyOHWOn5pMiFvv146fmkyIW-_XleY8uVy5j5wrU0h5Gz23G3mEq5uvQ_fQ-wrUhksMwOV&_nc_ohc=KqqVITTqr_gAX-PcXOw&_nc_ht=scontent.fczl2-2.fna&oh=00_AT-31agWbOc5e-Q8SyBqoFOECZbkgBgQIBMd_sUZzEnkrw&oe=62B959C9" alt="profile pic"/>
            </div>

        </div>
    </div>
  )
}