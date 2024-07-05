import { useClerk } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

export const DashboardPage = () => {
  const { user } = useClerk();
  return (
    <>
      <h1>Dashboard page</h1>
      <p>This is a protected page, Hi {user?.fullName}</p>

      <ul>
        <li>
          <Link to="/dashboard/invoices">Invoices</Link>
        </li>
        <li>
          <Link to="/">Return to index</Link>
        </li>
      </ul>
    </>
  );
};
