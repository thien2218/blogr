import Image from 'next/image';
import logo from '../../images/logo.svg';
import arrow from '../../images/icon-arrow-light.svg';

const Nav = () => {
   return (
      <div className="nav">
         <div className="logo-and-nav-links">
            <div className="header-logo">
               <Image src={logo} />
            </div>

            <ul className="nav-links">
               <li className='hover-links'><span>Product</span><Image src={arrow} /></li>
               <li className='hover-links'><span>Company</span><Image src={arrow} /></li>
               <li className='hover-links'><span>Connect</span><Image src={arrow} /></li>
            </ul>
         </div>
         
         <div className="signup-and-login">
            <button className='login'>Login</button>
            <button className='signup main-btn'>Sign Up</button>
         </div>
      </div>
   )
}

export default Nav