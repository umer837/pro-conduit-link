import { Link } from "react-router-dom";

const StaticNavbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Login", path: "/login" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact Us", path: "/contact" },
    { name: "Admin", path: "/admin/login" },
  ];

  return (
    <nav className="bg-primary text-primary-foreground shadow-blue-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <h1 className="text-xl font-bold text-primary-foreground">Connect Pro</h1>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-primary-foreground hover:text-primary-light hover:bg-primary-dark px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-primary-foreground hover:text-primary-light hover:bg-primary-dark inline-flex items-center justify-center p-2 rounded-md transition-all duration-200"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-primary-foreground hover:text-primary-light hover:bg-primary-dark block px-3 py-2 rounded-md text-base font-medium transition-all duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default StaticNavbar;