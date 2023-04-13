import Link from 'next/link';
import { useRouter } from 'next/router';

export default function DefaultLayout(props: any) {
  const { children } = props;
  const router = useRouter();
  const isActive = (pathname: string) => router.pathname === pathname;

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            <img
              src="/images/navbar.png"
              width="100"
              height="50"
              className="d-inline-block align-top me-2 rounded"
              alt="Logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/') ? 'active' : ''}`} href="/">
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/about') ? 'active' : ''}`} href="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive('/contact') ? 'active' : ''}`} href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <main className="col-12 ms-sm-auto px-md-4 main" style={{ marginTop: 86 }}>
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
