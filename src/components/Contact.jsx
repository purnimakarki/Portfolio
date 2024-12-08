import { RiGithubFill, RiLinkedinBoxFill } from '@remixicon/react';
import  {useRef} from 'react';

const Contact = () => {
  const contactRef = useRef(null);
  return(
    <section className='py-16' id="contact" ref={contactRef}>
      <div className='px-4 text-center'>
        <h2 className='mb-8 text-3xl font-medium lg:text-4xl'>Contact</h2>
        <p className='mb-4 text-lg lg:text-xl'>
          feel free to reach  out to me via email:{""}
          <a href='mailto:purnimakarki44@gmail.com' className= "border-b">
            purnimakarki44@gmail.com
          </a>
        </p>
        <div className='mt-8 flex justify-center space-x-6'>
          <a href="https://www.linkedin.com/in/purnima-karki-210578324/" target='_blank'
          rel="noopener noreferrer" className='contact-icon' 
          aria-label='Visit my LinkedIn Profile'>
            <RiLinkedinBoxFill className='text-3xl'/>
          </a>
          <a href="https://github.com/purnimakarki" target='_blank'
          rel="noopener noreferrer" className='contact-icon' 
          aria-label='Visit my GitHub Profile'>
            <RiGithubFill className='text-3xl'/>
          </a>
          
        </div>
      </div>
    </section>
  )
}
export default Contact;