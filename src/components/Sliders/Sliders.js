import Carousel from 'react-bootstrap/Carousel';
import slide from '../../Assets/Slide-1_1.jpg';

function Sliders() {
  return (
    <Carousel>
      <Carousel.Item>
        <img 
        text="First slide" 
        src={slide}
        alt='First slide'
        />
      </Carousel.Item>
      <Carousel.Item>
      <img 
        text="First slide" 
        src={slide}
        alt='First slide'
        />
      </Carousel.Item>
      <Carousel.Item>
      <img 
        text="First slide" 
        src={slide}
        alt='First slide'
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Sliders;