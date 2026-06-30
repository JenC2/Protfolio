import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container relative flex items-center">
        <div className="socials mx-auto flex">
          {socialImgs.map((img) => (
            <a className="icon" target="_blank" href={img.url} key={img.url}>
              <img src={img.imgPath} alt="social icon" />
            </a>
          ))}
        </div>

        <div className="absolute right-0">
          <p className="text-end text-body">
            © {new Date().getFullYear()} Jenny Chen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
