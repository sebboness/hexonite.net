import Image from "next/image";
import Link from "next/link";
import Seo from "../components/Seo";
import Sidebar from "../components/sidebar/Sidebar";

const NotFound = () => {
  return (
    <>
      <Seo pageTitle="404" />

      <div className="not-found-wrapper">
        <div className="leftpart">
          <div className="leftpart_inner">
            <div className="logo">
              <Link className="navbar-brand" href="/">
                <Image
                  width={126}
                  height={22}
                  src="/img/logo/dark.png"
                  alt="brand"
                />
              </Link>
            </div>
            <div className="copyright">
              <p>
                &copy; 2024 Hexonite Software Services
              </p>
            </div>
          </div>
        </div>

        <Sidebar />

        <div className="rightpart">
          <div className="rightpart_in">
            <div className="section">
              <div className="container">
                <div className="error">
                  <div className="error_inner">
                    <h1>404!</h1>
                    <h3>Page not found</h3>
                    <p>The page you were looking for could not be found.</p>
                    <Link href="/" className="ib-button">
                      Go to Home
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* END RIGHT PART */}

        <footer className="footer-wrapper">
          <div className="copyright">
            <p>
              &copy; 2024 Hexonite Software Services
            </p>
          </div>
          {/* END COPYRIGHT */}
        </footer>
      </div>
    </>
  );
};

export default NotFound;
