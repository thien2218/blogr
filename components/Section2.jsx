import Image from 'next/image';
import phoneIllus from '../images/illustration-phones.svg';

const Section2 = () => {
   return (
      <div className="section2-wrapper">
         <div className="section2">
            <div className="phone no-cursor">
               <Image src={phoneIllus} />
            </div>

            <div className="section-content justify-start">
               <div className="section2-head1 head1">
                  State of the Art Infrastructure
               </div>

               <div className="section-text">
                  With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive
               </div>
            </div>
         </div>
      </div>
   )
}

export default Section2