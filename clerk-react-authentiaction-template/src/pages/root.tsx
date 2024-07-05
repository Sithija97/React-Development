import { useAuth } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

export const RootPage = () => {
  const { userId, isLoaded } = useAuth();

  if (!isLoaded) return <div className="spinner">Loading</div>;

  return (
    <div>
      <h1>This is the index page</h1>
      <div>
        <ul>
          <li>
            <Link to="/sign-up">Sign Up</Link>
          </li>
          <li>
            <Link to="/sign-in">Sign In</Link>
          </li>
          {userId && isLoaded && (
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};
