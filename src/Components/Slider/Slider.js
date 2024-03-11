
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../ExampleCarouselImage';

export default function Slider(){


    return(
        <>
       <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" src="https://entail.mayple.com/en-assets/mayple/6179a579f91da881be2c758b_morningbrewShVipPImS6kunsplash_5c8728bacb20daf02414ecbdf89e0418_2000-1699777146680.png" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" src="https://www.yasour.org/2022/uploads/news/700x440/23/11/%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%AF-%D8%A7%D9%84%D8%BA%D8%B0%D8%A7%D8%A6%D9%8A%D8%A9.jpg" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" src="https://www.visitphilly.com/wp-content/uploads/2023/02/king-of-prussia-shoppers-hero-crtsy-simon-malls-2200x1237px.jpg" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </>
    )
};