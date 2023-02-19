import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";

const images = [
  {
    id: 1,
    image: require("../assets/carousel1.png"),
  },
  {
    id: 2,
    image: require("../assets/carousel2.png"),
  },
  {
    id: 3,
    image: require("../assets/carousel3.png"),
  },
  {
    id: 4,
    image: require("../assets/carousel4.png"),
  },
];

export default function CarouselComponent() {
  return (
    <Carousel fade controls={false} indicators>
      <Carousel.Item className="h-full">
        <Image
          className="block w-full h-full"
          src={images[0].image}
          alt="First Slide"
        />
      </Carousel.Item>
      <Carousel.Item className="h-full">
        <Image
          className="block w-full h-full"
          src={images[1].image}
          alt="Second Slide"
        />
      </Carousel.Item>
      <Carousel.Item className="h-full">
        <Image
          className="block w-full h-full"
          src={images[2].image}
          alt="Third Slide"
        />
      </Carousel.Item>
      <Carousel.Item className="h-full">
        <Image
          className="block w-full h-full"
          src={images[3].image}
          alt="Fourth Slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
