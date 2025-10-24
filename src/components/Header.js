import { useEffect, useState } from "react";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-content">
        <div className={`${scrolled ? "logo-bon" : "logo"}`}>Bon & Bphuong</div>
        <nav className="nav">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
          >
            Trang chủ
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}
          >
            Về chúng mình
          </a>
          <a
            href="#story"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("story");
            }}
          >
            Câu chuyện
          </a>
          <a
            href="#timeline"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("timeline");
            }}
          >
            Hành trình
          </a>
          <a
            href="#gallery"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("gallery");
            }}
          >
            Kỷ niệm
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
