import "../../App.css";
import "./styles.css";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src="/images/logo.svg" alt="" />
        <div>
          <p>Privacy policy</p>
          <p>Term of service</p>
          <p>Language</p>
        </div>
        <div>
          <img src="/images/facebookIcon.svg" alt="" />
          <img src="/images/twitterIcon.svg" alt="" />
          <img src="/images/gmailIcon.svg" alt="" />
        </div>
      </div>
      <p>© 2023 - Copyright cinematic.com - All the rights reserved.</p>
    </footer>
  );
};

export default Footer;
