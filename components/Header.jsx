import Nav from "./Nav";
import Image from 'next/image';
import intro from '../images/bg-pattern-intro-desktop.svg';

const Header = () => {
   return (
      <div className="header">
         <div className="intro-icon">
            <Image src={intro} />
         </div>

         <Nav />

         <div className="intro">
            <div className="intro-h1">
               A modern publishing platform
            </div>

            <div className="intro-text">
               Grow your audience and build your online brand
            </div>

            <div className="intro-btns">
               <button className="start-free main-btn">
                  Start for Free
               </button>

               <button className="learn-more secondary-btn">
                  Learn More
               </button>
            </div>
         </div>
      </div>
   )
}

export default Header