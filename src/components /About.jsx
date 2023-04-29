import logo from '../assets/M logo.jpeg';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';



const About = ({ showpic , onHidePic }) => {


  
        const location = useLocation();
        const [isAboutPage, setIsAboutPage] = useState(false);
      
        useEffect(() => {
          setIsAboutPage(location.pathname === '/about');
        }, [location]);
      
    
    return ( 
        <div className={ isAboutPage ?"about-myself" :  "home" }>
            <section>
                <h1>
                <span className='bouncy-text'>H</span>
                <span className='bouncy-text'>i</span>
                <span className='bouncy-text'>,</span>
                <br></br>
                <span className='bouncy-text'>I</span>
                <span className='bouncy-text'>'</span>
                <span className='bouncy-text space' >m</span>
                <span className='bouncy-text'>  </span>
                <span className='bouncy-text  m'>M</span>
                <span className='bouncy-text'>a</span>
                <span className='bouncy-text'>n</span>
                <span className='bouncy-text'>i</span>
                <span className='bouncy-text'>s</span>
                <span className='bouncy-text'>h</span>
                <span className='bouncy-text'>,</span>
                <br></br>
                <span className='bouncy-text'>W</span>
                <span className='bouncy-text'>e</span>
                <span className='bouncy-text space'>b</span>
                <span className='bouncy-text'>d</span>
                <span className='bouncy-text'>e</span>
                <span className='bouncy-text'>v</span>
                <span className='bouncy-text'>l</span>
                <span className='bouncy-text'>o</span>
                <span className='bouncy-text'>p</span>
                <span className='bouncy-text'>e</span>
                <span className='bouncy-text'>r</span>
                </h1>
                <p>Front End Developer/ Full Stack Web Developer</p>
                <div className='button'> 
                <input type='submit' class='contact-me'  value="Contact Me!" />
                </div>
            </section>
            {  showpic && (<div className='user-image'><img src={logo} onClick={onHidePic} /></div>) }
           
        </div>
     );
}
 
export default About;