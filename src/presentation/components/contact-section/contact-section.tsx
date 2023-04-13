import { Button, InputWithLabel } from '@/presentation/components';
import './contact-section.css';

const ContactSection = (): JSX.Element => {
  return (
    <section id="contact" className="center">
      <div id="contact-section-image">
        <img
          src="https://source.unsplash.com/random/?people,working"
          alt="Random generated image from unsplash"
        />
      </div>
      <div id="contact-section-title">
        <img src="/email-icon.svg" alt="Letter icon that represent email" />
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
        <InputWithLabel
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
