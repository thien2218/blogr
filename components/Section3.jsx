import Image from 'next/image';
import laptopIllus from '../images/illustration-laptop-desktop.svg';

const Section3 = () => {
   return (
      <div className='section3'>
         <div className="desktop">
         </div>

         <div className="content-section justify-start">
            <div className="content1">
               <div className="head2">
                  Free, open, simple
               </div>

               <div className="section-text">
                  Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
               </div>
            </div>
            
            <div className="content2">
               <div className="head2">
                  Powerful tooling
               </div>

               <div className="section-text">
                  Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.
               </div>
            </div>
            
         </div>
      </div>
   )
}

export default Section3