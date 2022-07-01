import { Outlet, Link } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <nav hidden>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
