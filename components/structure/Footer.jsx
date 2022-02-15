import Image from 'next/image';
import logo from '../../images/logo.svg';

const Footer = () => {
   return (
      <div className="footer">
         <div className="footer-logo">
            <Image src={logo} />
         </div>
         
         <div>
            <div className="section">Product</div>
            
            <ul className='footer-links'>
               <li>Overview</li>
               <li>Pricing</li>
               <li>Marketplace</li>
               <li>Features</li>
               <li>Integrations</li>
            </ul>
         </div>

         <div>
            <div className="section">Company</div>
            
            <ul className='footer-links'>
               <li>About</li>
               <li>Team</li>
               <li>Blog</li>
               <li>Careers</li>
            </ul>
         </div>

         <div>
            <div className="section">Connect</div>
            
            <ul className='footer-links'>
               <li>Contact</li>
               <li>Newsletter</li>
               <li>LinkedIn</li>
            </ul>
         </div>
      </div>
   )
}

export default Footer