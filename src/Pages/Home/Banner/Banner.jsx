import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


import img1 from '../../../assets/home/01.jpg'
import img2 from '../../../assets/home/02.jpg'
import img3 from '../../../assets/home/03.jpg'
import img4 from '../../../assets/home/04.jpg'
import img5 from '../../../assets/home/05.jpg'




export default function Banner() {
  return (
    <Carousel>
    <div>
        <img src={img1} />
        
    </div>
    <div>
        <img src={img2} />
        
    </div>
    <div>
        <img src={img3}/>
       
    </div> 
    <div>
        <img src={img4} />
        
    </div>
    <div>
        <img src={img5} />
        
    </div>
    
    
   </Carousel>
  )
}
