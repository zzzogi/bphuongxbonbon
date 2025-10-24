function Gallery() {
  const memories = [
    { id: 1, title: "Buổi hẹn đầu tiên", emoji: "☕" },
    { id: 2, title: "Chuyến du lịch", emoji: "🏖️" },
    { id: 3, title: "Sinh nhật Bphuong", emoji: "🎂" },
    { id: 4, title: "Lễ hội mùa thu", emoji: "🍁" },
    { id: 5, title: "Đêm Giáng Sinh", emoji: "🎄" },
    { id: 6, title: "Picnic cuối tuần", emoji: "🧺" },
  ];

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Kỷ niệm đẹp</span>
          <h2 className="section-title">Những Khoảnh Khắc Đáng Nhớ</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Mỗi bức ảnh là một câu chuyện, mỗi khoảnh khắc là một kỷ niệm đẹp
            trong hành trình yêu thương của chúng mình
          </p>
        </div>

        <div className="gallery-grid">
          {memories.map((memory) => (
            <div key={memory.id} className="gallery-item">
              <div className="gallery-image">
                <div className="gallery-placeholder">
                  <span className="gallery-emoji">{memory.emoji}</span>
                </div>
                <div className="gallery-overlay">
                  <p>{memory.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-note">
          <p>
            💝 Những khoảnh khắc này chỉ là một phần nhỏ trong vô vàn kỷ niệm
            đẹp mà chúng mình đã và đang tạo ra mỗi ngày
          </p>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
