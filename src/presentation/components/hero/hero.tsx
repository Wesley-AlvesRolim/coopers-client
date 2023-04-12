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
        <img src="/house-image.svg" alt="Image inside house" />
      </div>

      <div id="scroll-down">
        <a href="#todo-list">
          <img src="/icon-scroll.svg" alt="scroll down icon" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
