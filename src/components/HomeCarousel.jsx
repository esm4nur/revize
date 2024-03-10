import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function HomeCarousel({ data }) {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container mt-2 shadow p-0 rounded">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {data.map((slide) => {
          return (
            <Carousel.Item key={slide.id}>
              <img
                className="object-fit-cover w-100 rounded"
                src="https://scontent.fyei6-5.fna.fbcdn.net/v/t39.30808-6/292222048_523160169522748_6966818887214895726_n.jpg?stp=dst-jpg_s960x960&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=a1h4S_oRGlIAX-h-li1&_nc_ht=scontent.fyei6-5.fna&oh=00_AfDJlM18S8GLxvcSQ7LhFxT_rwnEYGiAsNObxe0GRRNX_w&oe=65F38CB2"
                alt="slider image"
                style={{ height: 600 }}
              />
              {/* <Carousel.Caption className="bg-dark bg-opacity-25 rounded-pill m-4 p-1 fw-medium">
                <h5 className="p-0 m-0">{slide.ADI}</h5>
                <p className="p-0 m-0">
                  {slide.MAHALLE}-{slide.ILCE}
                </p>
              </Carousel.Caption> */}
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
export default HomeCarousel;
