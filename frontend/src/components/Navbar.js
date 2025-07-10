import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Search,
  Bell,
  User,
  Sun,
  Moon,
  ShoppingCart,
  Heart,
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [cartCount, setCartCount] = useState(3);
  const [notifications, setNotifications] = useState(2);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setActiveDropdown(null);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const handleDropdownClick = (dropdown, e) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const menuItems = [
    { name: "Home", href: "#" },
    {
      name: "Products",
      href: "#",
      hasDropdown: true,
      dropdownItems: [
        { name: "Electronics", href: "#" },
        { name: "Clothing", href: "#" },
        { name: "Books", href: "#" },
        { name: "Home & Garden", href: "#" },
      ],
    },
    {
      name: "Services",
      href: "#",
      hasDropdown: true,
      dropdownItems: [
        { name: "Consulting", href: "#" },
        { name: "Design", href: "#" },
        { name: "Development", href: "#" },
        { name: "Support", href: "#" },
      ],
    },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
  ];

  const styles = {
    navbar: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      transition: "all 0.3s ease",
      backgroundColor: isScrolled
        ? isDarkMode
          ? "rgba(17, 24, 39, 0.95)"
          : "rgba(255, 255, 255, 0.95)"
        : isDarkMode
        ? "#111827"
        : "#ffffff",
      backdropFilter: isScrolled ? "blur(10px)" : "none",
      boxShadow: isScrolled ? "0 10px 25px rgba(0, 0, 0, 0.1)" : "none",
      borderBottom: isScrolled ? "1px solid rgba(229, 231, 235, 0.2)" : "none",
    },
    container: {
      maxWidth: "1280px",
      margin: "0 auto",
      padding: "0 1rem",
    },
    navContent: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: "64px",
    },
    logo: {
      display: "flex",
      alignItems: "center",
    },
    logoIcon: {
      width: "32px",
      height: "32px",
      background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontWeight: "bold",
      fontSize: "14px",
    },
    logoText: {
      marginLeft: "8px",
      fontSize: "20px",
      fontWeight: "bold",
      color: isDarkMode ? "#ffffff" : "#111827",
    },
    desktopMenu: {
      display: "none",
      "@media (min-width: 768px)": {
        display: "flex",
      },
    },
    menuList: {
      display: "flex",
      alignItems: "center",
      gap: "32px",
      marginLeft: "40px",
    },
    menuItem: {
      position: "relative",
    },
    menuButton: {
      display: "flex",
      alignItems: "center",
      color: isDarkMode ? "#d1d5db" : "#374151",
      padding: "8px 12px",
      fontSize: "14px",
      fontWeight: "500",
      transition: "color 0.2s",
      backgroundColor: "transparent",
      border: "none",
      cursor: "pointer",
    },
    searchContainer: {
      display: "none",
      "@media (min-width: 1024px)": {
        display: "flex",
      },
      alignItems: "center",
    },
    searchWrapper: {
      position: "relative",
    },
    searchIcon: {
      position: "absolute",
      left: "12px",
      top: "50%",
      transform: "translateY(-50%)",
      color: "#9ca3af",
      pointerEvents: "none",
    },
    searchInput: {
      width: "256px",
      paddingLeft: "40px",
      paddingRight: "16px",
      paddingTop: "8px",
      paddingBottom: "8px",
      border: `1px solid ${isDarkMode ? "#4b5563" : "#d1d5db"}`,
      borderRadius: "8px",
      backgroundColor: isDarkMode ? "#1f2937" : "#ffffff",
      color: isDarkMode ? "#ffffff" : "#111827",
      fontSize: "14px",
      outline: "none",
      transition: "all 0.2s",
    },
    rightIcons: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
    },
    iconButton: {
      position: "relative",
      padding: "8px",
      color: isDarkMode ? "#d1d5db" : "#374151",
      backgroundColor: "transparent",
      border: "none",
      cursor: "pointer",
      transition: "color 0.2s",
    },
    badge: {
      position: "absolute",
      top: "-4px",
      right: "-4px",
      backgroundColor: "#ef4444",
      color: "white",
      fontSize: "12px",
      borderRadius: "50%",
      width: "20px",
      height: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    profileButton: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      padding: "8px",
      color: isDarkMode ? "#d1d5db" : "#374151",
      backgroundColor: "transparent",
      border: "none",
      cursor: "pointer",
      transition: "color 0.2s",
    },
    profileAvatar: {
      width: "32px",
      height: "32px",
      background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    profileName: {
      fontSize: "14px",
      fontWeight: "500",
      display: "none",
      "@media (min-width: 640px)": {
        display: "block",
      },
    },
    mobileMenuButton: {
      display: "block",
      "@media (min-width: 768px)": {
        display: "none",
      },
      padding: "8px",
      color: isDarkMode ? "#d1d5db" : "#374151",
      backgroundColor: "transparent",
      border: "none",
      cursor: "pointer",
    },
    mobileMenu: {
      display: "block",
      "@media (min-width: 768px)": {
        display: "none",
      },
      maxHeight: isMenuOpen ? "400px" : "0",
      opacity: isMenuOpen ? 1 : 0,
      overflow: "hidden",
      transition: "all 0.3s ease",
      backgroundColor: isDarkMode ? "#111827" : "#ffffff",
      borderTop: `1px solid ${isDarkMode ? "#374151" : "#e5e7eb"}`,
    },
    mobileMenuContent: {
      padding: "8px",
    },
    mobileSearchWrapper: {
      position: "relative",
      marginBottom: "8px",
    },
    mobileSearchIcon: {
      position: "absolute",
      left: "12px",
      top: "50%",
      transform: "translateY(-50%)",
      color: "#9ca3af",
      pointerEvents: "none",
    },
    mobileSearchInput: {
      width: "100%",
      paddingLeft: "40px",
      paddingRight: "16px",
      paddingTop: "8px",
      paddingBottom: "8px",
      border: `1px solid ${isDarkMode ? "#4b5563" : "#d1d5db"}`,
      borderRadius: "8px",
      backgroundColor: isDarkMode ? "#1f2937" : "#ffffff",
      color: isDarkMode ? "#ffffff" : "#111827",
      fontSize: "14px",
      outline: "none",
    },
    mobileMenuItem: {
      width: "100%",
      textAlign: "left",
      padding: "12px",
      color: isDarkMode ? "#d1d5db" : "#374151",
      backgroundColor: "transparent",
      border: "none",
      cursor: "pointer",
      fontSize: "16px",
      fontWeight: "500",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      transition: "all 0.2s",
    },
    dropdown: {
      position: "absolute",
      top: "100%",
      left: "0",
      marginTop: "8px",
      width: "192px",
      backgroundColor: isDarkMode ? "#1f2937" : "#ffffff",
      borderRadius: "8px",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      border: `1px solid ${isDarkMode ? "#374151" : "#e5e7eb"}`,
      padding: "8px 0",
      zIndex: 1001,
    },
    dropdownItem: {
      display: "block",
      width: "100%",
      padding: "8px 16px",
      fontSize: "14px",
      color: isDarkMode ? "#d1d5db" : "#374151",
      textDecoration: "none",
      transition: "all 0.2s",
      backgroundColor: "transparent",
      border: "none",
      textAlign: "left",
      cursor: "pointer",
    },
    content: {
      paddingTop: "64px",
      backgroundColor: isDarkMode ? "#111827" : "#ffffff",
      minHeight: "100vh",
    },
    demoContent: {
      maxWidth: "1280px",
      margin: "0 auto",
      padding: "48px 1rem",
      textAlign: "center",
    },
    title: {
      fontSize: "36px",
      fontWeight: "bold",
      color: isDarkMode ? "#ffffff" : "#111827",
      marginBottom: "16px",
    },
    subtitle: {
      fontSize: "20px",
      color: isDarkMode ? "#9ca3af" : "#6b7280",
      marginBottom: "32px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "32px",
      marginTop: "48px",
    },
    card: {
      backgroundColor: isDarkMode ? "#1f2937" : "#f9fafb",
      padding: "24px",
      borderRadius: "8px",
    },
    cardTitle: {
      fontSize: "18px",
      fontWeight: "600",
      color: isDarkMode ? "#ffffff" : "#111827",
      marginBottom: "8px",
    },
    cardText: {
      color: isDarkMode ? "#9ca3af" : "#6b7280",
    },
  };

  // Add hover effects
  const handleMouseEnter = (e) => {
    e.target.style.color = isDarkMode ? "#60a5fa" : "#2563eb";
    if (e.target.classList && e.target.classList.contains("dropdown-item")) {
      e.target.style.backgroundColor = isDarkMode ? "#374151" : "#f3f4f6";
    }
  };

  const handleMouseLeave = (e) => {
    e.target.style.color = isDarkMode ? "#d1d5db" : "#374151";
    if (e.target.classList && e.target.classList.contains("dropdown-item")) {
      e.target.style.backgroundColor = "transparent";
    }
  };

  return (
    <div>
      <nav style={styles.navbar}>
        <div style={styles.container}>
          <div style={styles.navContent}>
            {/* Logo */}
            <div style={styles.logo}>
              <div style={styles.logoIcon}>N</div>
              <span style={styles.logoText}>BLOww..</span>
            </div>

            {/* Desktop Menu */}
            <div
              style={{ display: window.innerWidth >= 768 ? "block" : "none" }}
            >
              <div style={styles.menuList}>
                {menuItems.map((item) => (
                  <div key={item.name} style={styles.menuItem}>
                    <button
                      onClick={(e) =>
                        item.hasDropdown && handleDropdownClick(item.name, e)
                      }
                      style={styles.menuButton}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      {item.name}
                      {item.hasDropdown && (
                        <ChevronDown
                          style={{
                            marginLeft: "4px",
                            width: "16px",
                            height: "16px",
                            transition: "transform 0.2s",
                            transform:
                              activeDropdown === item.name
                                ? "rotate(180deg)"
                                : "rotate(0deg)",
                          }}
                        />
                      )}
                    </button>

                    {/* Dropdown Menu */}
                    {item.hasDropdown && activeDropdown === item.name && (
                      <div style={styles.dropdown}>
                        {item.dropdownItems.map((dropItem) => (
                          <button
                            key={dropItem.name}
                            style={styles.dropdownItem}
                            className="dropdown-item"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                          >
                            {dropItem.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Search Bar */}
            <div
              style={{
                display: window.innerWidth >= 1024 ? "flex" : "none",
                alignItems: "center",
              }}
            >
              <div style={styles.searchWrapper}>
                <div style={styles.searchIcon}>
                  <Search style={{ width: "16px", height: "16px" }} />
                </div>
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={styles.searchInput}
                />
              </div>
            </div>

            {/* Right Side Icons */}
            <div style={styles.rightIcons}>
              {/* Theme Toggle */}
              <button
                onClick={toggleDarkMode}
                style={styles.iconButton}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {isDarkMode ? (
                  <Sun style={{ width: "20px", height: "20px" }} />
                ) : (
                  <Moon style={{ width: "20px", height: "20px" }} />
                )}
              </button>

              {/* Notifications */}
              <button
                style={styles.iconButton}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Bell style={{ width: "20px", height: "20px" }} />
                {notifications > 0 && (
                  <span style={{ ...styles.badge, backgroundColor: "#ef4444" }}>
                    {notifications}
                  </span>
                )}
              </button>

              {/* Favorites */}
              <button
                style={{
                  ...styles.iconButton,
                  display: window.innerWidth >= 640 ? "block" : "none",
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Heart style={{ width: "20px", height: "20px" }} />
              </button>

              {/* Cart */}
              <button
                style={styles.iconButton}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <ShoppingCart style={{ width: "20px", height: "20px" }} />
                {cartCount > 0 && (
                  <span style={{ ...styles.badge, backgroundColor: "#3b82f6" }}>
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Profile */}
              <button
                style={styles.profileButton}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div style={styles.profileAvatar}>
                  <User
                    style={{ width: "16px", height: "16px", color: "white" }}
                  />
                </div>
                <span
                  style={{
                    ...styles.profileName,
                    display: window.innerWidth >= 640 ? "block" : "none",
                  }}
                >
                  John Doe
                </span>
              </button>

              {/* Mobile menu button */}
              <button
                onClick={toggleMenu}
                style={{
                  ...styles.mobileMenuButton,
                  display: window.innerWidth < 768 ? "block" : "none",
                }}
              >
                {isMenuOpen ? (
                  <X style={{ width: "24px", height: "24px" }} />
                ) : (
                  <Menu style={{ width: "24px", height: "24px" }} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div style={styles.mobileMenu}>
          <div style={styles.mobileMenuContent}>
            {/* Mobile Search */}
            <div style={styles.mobileSearchWrapper}>
              <div style={styles.mobileSearchIcon}>
                <Search style={{ width: "16px", height: "16px" }} />
              </div>
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={styles.mobileSearchInput}
              />
            </div>

            {/* Mobile Menu Items */}
            {menuItems.map((item) => (
              <div key={item.name}>
                <button
                  onClick={(e) =>
                    item.hasDropdown &&
                    handleDropdownClick(`mobile-${item.name}`, e)
                  }
                  style={styles.mobileMenuItem}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown
                      style={{
                        width: "16px",
                        height: "16px",
                        transition: "transform 0.2s",
                        transform:
                          activeDropdown === `mobile-${item.name}`
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                      }}
                    />
                  )}
                </button>

                {/* Mobile Dropdown */}
                {item.hasDropdown &&
                  activeDropdown === `mobile-${item.name}` && (
                    <div style={{ paddingLeft: "24px" }}>
                      {item.dropdownItems.map((dropItem) => (
                        <button
                          key={dropItem.name}
                          style={{
                            ...styles.mobileMenuItem,
                            fontSize: "14px",
                            color: isDarkMode ? "#9ca3af" : "#6b7280",
                          }}
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                        >
                          {dropItem.name}
                        </button>
                      ))}
                    </div>
                  )}
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* Demo Content */}
      <div style={styles.content}>
        <div style={styles.demoContent}>
          <h1 style={styles.title}>WELCOME TO MY B:LOGGG</h1>
          <p style={styles.subtitle}>A fully responsive Bkacodi</p>

          <div style={styles.grid}>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Responsive Design</h3>
              <p style={styles.cardText}>Adapts perfectly</p>
            </div>

            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Dark Support</h3>
              <p style={styles.cardText}>
                Toggle between light and dark themes with smooth transitions
              </p>
            </div>

            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Rich Features</h3>
              <p style={styles.cardText}>
                Search bar, notifications, dropdowns, and user profile
                integration
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
