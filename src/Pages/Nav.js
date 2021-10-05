import React from 'react';
import 'react-slideshow-image/dist/styles.css';

const Nav = ({ handleLogout, openMenu, closeMenu }, props) => {
  const { email, setEmail } = props;
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
          
                    {/* <button onClick={handleLogout}>Logout</button> */}

              </ul>
            </li>
            <li class="nav-item">
              {/* <button onClick={handleLogout}>Logout</button> */}
              <a onClick={handleLogout}
                class="nav-link"
                href={handleLogout}
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
              {/* <nav>
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
          </div>
          <aside className="sidebar">
            {
              //<h1 value={email} onChange={e=> setEmail(e.target.value)}>User: </h1>
              //<input type="text" value={email} onChange={e=> setEmail(e.target.value)} />
            }
            <h3>Extra Functions</h3>

            <button className="sidebar-close-button" onClick={closeMenu}>
              X
            </button>
            <BrowserRouter>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/profile">Profile</a>
                </li>
                <li>
                  <a href="/settings">Settings</a>
                </li>
                <li>
                  <a href="/products">Products</a>
                </li>
                <li>
                  <a href="/report">Report</a>
                </li>
                <li>
                  <a href="/contactUs">Contact Us</a>
                </li>
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/services">Services</a>
                </li>
                <li>
                  <a href="/covid-19">Covid-19</a>
                </li>
                <li>
                  <a href="/investors">Investors</a>
                </li>
                <li>
                  <a href="/admin">Admin</a>
                </li>
              </ul>
            </BrowserRouter>
          </aside>
          <h2>SMART TRACE</h2>
          <button onClick={handleLogout}>Login</button>
          <button onClick={handleLogout}>Logout</button>
        </nav> */}
    </nav>
  );
};
export default Nav;
