import Image from 'next/image';
import { LogoIcon } from '@/presentation/components';
import CardLabel from './card-label/card-label';
import './card.css';

interface Thumbnail {
  url: string;
  alt: string;
}

interface CardProps {
  thumbnail: Thumbnail;
  labels: string[];
  description: string;
}

const Card = ({ thumbnail, labels, description }: CardProps): JSX.Element => {
  return (
    <div className="card">
      <LogoIcon />
      <Image
        className="thumbnail"
        width={200}
        height={200}
        src={thumbnail.url}
        alt={thumbnail.alt}
      />
      <div className="content">
        <ul>
          {labels.map((label) => (
            <CardLabel label={label} key={label} />
          ))}
        </ul>
        <p className="description">{description}</p>
        <a href="/">read more</a>
      </div>
    </div>
  );
};

export default Card;
