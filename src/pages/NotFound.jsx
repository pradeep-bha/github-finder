import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="max-w-lg">
          <h1 className="text-8xl font-arvo font-bold mb-8 text-white">
            Oops!
          </h1>
          <p className="text-4xl mb-8 font-nunito">404 - Page Not Found</p>
          <Link to="/" className="btn btn-primary btn-xl">
            <FaHome className="mr-2" />
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
