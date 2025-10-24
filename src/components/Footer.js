function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <h2>Bon & Bphuong</h2>
          <p>Vinh danh tình yêu chân thành</p>
          <div className="footer-divider"></div>
        </div>

        <div className="footer-quote">
          <p>
            "Trong cuộc đời này, điều quan trọng nhất không phải là những gì ta
            có, mà là những ai ta có bên cạnh"
          </p>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Bon & Bphuong • Được tạo với tất cả
            tình yêu thương ♥
          </p>
          <div className="footer-hearts">♥ ♥ ♥</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
