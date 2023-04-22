import { type Settings } from 'react-slick';

export const settings: Settings = {
  arrows: false,
  draggable: false,
  dots: true,
  infinite: false,
  centerMode: false,
  variableWidth: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  customPaging: (page) => (
    <button
      className="dot-page-navigator"
      aria-label={`Carousel page ${page + 1}`}
    />
  ),
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
