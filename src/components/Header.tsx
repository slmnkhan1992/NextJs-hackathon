import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Link from 'next/link';


function Header() {
  return (
    <nav>
        <div className="flex justify-evenly bg-purple-700 text-white w-full h-6 items-center">
            <ul className="flex gap-6">
                <li className='text-xs'> <span><EmailOutlinedIcon /></span> slmnkhan2050@gmail.com</li>
                <li className='text-xs'><span><LocalPhoneOutlinedIcon /></span>96879478-434</li>
            </ul>

            <ul className="flex gap-6 hidden md:flex">
                <li className='text-xs'>English<span className='text-sm'><ExpandMoreOutlinedIcon /></span></li>
                <li className='text-xs'>USD<span><ExpandMoreOutlinedIcon /></span></li>
                <li className='text-xs'>Login<span><PersonOutlineOutlinedIcon /></span></li>
                <li className='text-xs'>Wishlist<span className=''><FavoriteBorderIcon /></span></li>
                <li className='text-xs'><RemoveShoppingCartOutlinedIcon /></li>
            </ul>
        </div>

        <div className='flex justify-evenly items-center h-11'>
            <Link href={'/'}><h1 className='text-3xl'>Hekto</h1></Link>

            <ul className='flex gap-6 hidden md:flex'>
                <Link href={'/'}><li className='text-[#fb2e86] cursor-pointer'>Home</li></Link>
                <Link href={'/page1'}><li className='cursor-pointer'>Page1</li></Link>
                <Link href={'/page2'}><li className='cursor-pointer'>Page2</li></Link>
                <Link href={'/page3'}><li className='cursor-pointer'>Login</li></Link>
                <li className='cursor-pointer'>Products</li>
                <li className='cursor-pointer'>Blog</li>   
                <li className='cursor-pointer'>Shop</li>
                <li className='cursor-pointer'>Contact</li>
            </ul>

            <div>
                <input type="text" className='border-2 h-7'/>
                <button className='bg-[#fb2e86] px-2 h-7'><SearchOutlinedIcon /></button>
            </div>

        </div>
    </nav>
  )
}

export default Header