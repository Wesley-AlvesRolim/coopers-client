'use client';
import Slider from 'react-slick';
import { Card } from '@/presentation/components';
import { settings } from './cards-slick-settings';
import './cards-section.css';

const CardsSection = (): JSX.Element => {
  return (
    <section id="cards-section" className="center">
      <h2>good things</h2>
      <Slider className="slider" {...settings}>
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index}>
            <Card
              thumbnail={{
                url: 'https://source.unsplash.com/random/?people,working',
                alt: 'Random generated image from unsplash',
              }}
              description="Organize your daily job enhance your life performance"
              labels={['function', 'funtion' + index]}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default CardsSection;
