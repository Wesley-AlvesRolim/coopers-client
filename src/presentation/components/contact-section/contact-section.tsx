import Image from 'next/image';
import {
  Button,
  InputWithLabel,
  TextareaWithLabel,
} from '@/presentation/components';
import './contact-section.css';

const ContactSection = (): JSX.Element => {
  return (
    <section id="contact" className="center">
      <div id="contact-section-image">
        <Image
          src="https://source.unsplash.com/random/?people,working"
          width={191}
          height={191}
          alt="Random generated image from unsplash"
        />
      </div>
      <div id="contact-section-title">
        <Image
          src="/email-icon.svg"
          width={60}
          height={60}
          alt="Letter icon that represent email"
        />
        <h2>
          <span>Get in</span> touch
        </h2>
      </div>
      <form>
        <InputWithLabel
          label="Your name"
          placeholder="type your name here..."
        />
        <InputWithLabel
          required
          label="Email"
          type="email"
          placeholder="example@example.com"
        />
        <InputWithLabel
          required
          label="Telephone"
          placeholder="(  ) ____-____"
        />
        <TextareaWithLabel
          required
          label="Message"
          placeholder="Type what you want to say to us"
        />
        <Button>Send Now</Button>
      </form>
    </section>
  );
};

export default ContactSection;
