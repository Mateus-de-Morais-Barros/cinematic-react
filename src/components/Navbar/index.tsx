import "../../App.css";
import "./styles.css";

const Navbar = () => {
  return (
    <nav>
      <img src="/images/logo.svg" alt="Logo" />
      <div className="navLinks">
        <a className="bold" href="">
          Home
        </a>
        <a href="">Discover</a>
        <a href="">About</a>
        <a href="">Help</a>
      </div>
      <div className="navButtons">
        <button>
          <img src="/images/search.svg" alt="search" />
        </button>
        <button>
          <img src="/images/bell.svg" alt="bell" />
        </button>
        <button className="userProfile">
          <img src="/images/userProfile.svg" alt="userProfile" />
          <img src="/images/Arrow - Down 2.svg" alt="arrowDown" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
