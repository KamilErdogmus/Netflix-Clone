import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="w-fit">
        <Link to={"/"}>
          <img
            className="max-w-[150px]"
            src="src/assets/netflix_logo.svg"
            alt="netflix"
          />
        </Link>
      </header>
    </div>
  );
};

export default Header;
