import Image from 'next/image';
import { Link } from '@/presentation/components';
import './hero.css';

const Hero = (): JSX.Element => {
  return (
    <section id="hero" className="center">
      <div id="hero-content">
        <h1>
          Organize <span>your daily jobs</span>
        </h1>

        <p>The only way to get things done</p>
        <Link href="#todo-list" size="large">
          Go to To-do list
        </Link>
      </div>

      <div id="hero-image">
        <Image
          src="/house-image.svg"
          alt="Image inside house"
          width={443}
          height={481.52}
          priority
        />
      </div>

      <div id="scroll-down">
        <a href="#todo-list">
          <Image
            src="/icon-scroll.svg"
            alt="scroll down icon"
            width={24}
            height={40}
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
