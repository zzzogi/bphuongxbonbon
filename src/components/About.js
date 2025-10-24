function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Giới thiệu</span>
          <h2 className="section-title">Về Chúng Mình</h2>
          <div className="section-divider"></div>
        </div>

        <div className="about-grid">
          {/* Card của Bon */}
          <div className="about-card bon-card">
            <div className="card-image">
              <img
                src={"/bphuongxbonbon/assets/images/about/bon.jpg"}
                alt="Nguyễn Hữu Đức Anh - Bon"
                className="about-img"
              />
              <div className="card-badge bon-badge">Bon</div>
            </div>
            <div className="card-content">
              <h3>Nguyễn Hữu Đức Anh</h3>
              <p className="card-subtitle">Học viện An Ninh Nhân Dân</p>
              <div className="card-divider"></div>
              <p className="card-description">
                Một chàng trai với khát vọng phục vụ đất nước, đang theo học tại
                Học viện An Ninh Nhân Dân. Với sự vững chắc và bảo vệ được tượng
                trưng bởi màu xanh, Đức Anh luôn là chỗ dựa tin cậy, người bảo
                vệ và che chở cho Bphuong trong mọi hành trình.
              </p>
              <div className="card-traits">
                <span className="trait">🎯 Mục tiêu rõ ràng</span>
                <span className="trait">💪 Vững vàng</span>
                <span className="trait">🛡️ Bảo vệ</span>
              </div>
            </div>
          </div>

          {/* Card của Bphuong */}
          <div className="about-card bphuong-card">
            <div className="card-image">
              <img
                src={"/bphuongxbonbon/assets/images/about/bphuong.jpg"}
                alt="Nguyễn Hà Bảo Phương - Bphuong"
                className="about-img"
              />
              <div className="card-badge bphuong-badge">Bphuong</div>
            </div>
            <div className="card-content">
              <h3>Nguyễn Hà Bảo Phương</h3>
              <p className="card-subtitle">Đại học Ngoại thương - Năm 2</p>
              <div className="card-divider"></div>
              <p className="card-description">
                Một cô gái năm hai đầy triển vọng tại Đại học Ngoại thương, với
                nét dịu dàng và tinh tế được biểu hiện qua màu be ấm áp. Bảo
                Phương mang đến những khoảnh khắc ngọt ngào, sự ấm áp và niềm
                vui trong từng ngày bên Bon.
              </p>
              <div className="card-traits">
                <span className="trait">🌸 Dịu dàng</span>
                <span className="trait">✨ Tinh tế</span>
                <span className="trait">💖 Ấm áp</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
