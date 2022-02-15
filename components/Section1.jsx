import Image from 'next/image';
import editorIllus from '../images/illustration-editor-desktop.svg';

const Section1 = () => {
   return (
      <div className="section1">
         <div className="section1-content">
            <div className="section1-head1">
               <span>
                  Designed for the future
               </span>
            </div>

            <div className="content1">
               <div className="section1-head2">Introducing an extensible editor</div>

               <div className="section1-text">
                  Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.
               </div>
            </div>

            <div className="content2">
               <div className="section1-head2">Robust content management</div>

               <div className="section1-text">
                  Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you're in full control.
               </div>
            </div>
         </div>

         <div className="editor-illustration no-cursor">
            <Image src={editorIllus} />
         </div>
      </div>
   )
}

export default Section1