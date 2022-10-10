import React, {useState} from 'react';
import { Button } from 'react-bootstrap';


const BackToTop = () =>{
  
    const [visible, setVisible] = useState(false)
    
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false)
      }
    };
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
        /* you can also use 'auto' behaviour
           in place of 'smooth' */
      });
    };
    
    window.addEventListener('scroll', toggleVisible);
    
    return (
        <Button className="back-to-top glow-on-hover">
            <i className="fa-xl fa-solid fa-circle-arrow-up" onClick={scrollToTop} />
        </Button>
    );
  }
    
  export default BackToTop;