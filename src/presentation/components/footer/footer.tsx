import './footer.css';

const Footer = (): JSX.Element => {
  return (
    <footer className="footer">
      <div>
        <h5>Need help?</h5>
        <address>
          <a href="mailto:coopers@coopers.pro">coopers@coopers.pro</a>
        </address>
        <small>
          &copy; {new Date().getFullYear()} Coopers. All rights reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
