function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-subtitle">Vinh danh tình yêu chân thành</div>
        <h1 className="hero-title">Bon & Bphuong</h1>
        <div className="hero-names">
          <span className="name">Nguyễn Hữu Đức Anh</span>
          <span className="divider">♥</span>
          <span className="name">Nguyễn Hà Bảo Phương</span>
        </div>
        <p className="hero-description">
          Từ Học viện An Ninh đến Đại học Ngoại thương
          <br />
          Hai con đường khác nhau, một tình yêu duy nhất
        </p>
        <button
          className="hero-btn"
          onClick={() => {
            document
              .getElementById("story")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          Khám phá câu chuyện
        </button>
      </div>
      <div className="hero-scroll">
        <span>Cuộn xuống</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}

export default Hero;
