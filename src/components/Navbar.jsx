function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="airbnb-logo">airbnb</div>
      </div>

      <div className="navbar-search">
        <button type="button">
          Anywhere
        </button>

        <span className="divider"></span>

        <button type="button">
          Any week
        </button>

        <span className="divider"></span>

        <button type="button">
          Add guests
        </button>

        <button
          type="button"
          className="search-icon"
          aria-label="Search"
        >
          🔍
        </button>
      </div>

      <div className="navbar-right">
        <button
          type="button"
          className="host-button"
        >
          Airbnb your home
        </button>

        <button
          type="button"
          className="globe-button"
          aria-label="Choose language"
        >
          🌐
        </button>

        <button
          type="button"
          className="menu-button"
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>
    </nav>
  );
}

export default Navbar;