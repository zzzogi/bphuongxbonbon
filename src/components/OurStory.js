function OurStory() {
  const memories = [
    {
      id: 1,
      image: "/bphuongxbonbon/assets/images/carousel/carousel-1.jpg",
      month: "❄️",
    },
    {
      id: 2,
      image: "/bphuongxbonbon/assets/images/carousel/carousel-2.jpg",
      month: "💝",
    },
    {
      id: 3,
      image: "/bphuongxbonbon/assets/images/carousel/carousel-3.jpg",
      month: "🌸",
    },
    {
      id: 4,
      image: "/bphuongxbonbon/assets/images/carousel/carousel-4.jpg",
      month: "🌼",
    },
    {
      id: 5,
      image: "/bphuongxbonbon/assets/images/carousel/carousel-5.jpg",
      month: "🌺",
    },
  ];

  return (
    <section className="our-story" id="story">
      <div className="story-background"></div>
      <div className="container">
        <div className="section-header light">
          <span className="section-subtitle">Kỷ niệm 1 năm yêu nhau</span>
          <h2 className="section-title">Chuỗi 12 Ảnh Phô Tô Bút</h2>
          <div className="section-divider"></div>
        </div>

        <div className="infinite-scroll-container">
          <div className="scroll-track">
            {/* First set of images */}
            {memories.map((memory) => (
              <div key={`first-${memory.id}`} className="scroll-item">
                <img src={memory.image} alt={`Kỷ niệm ${memory.month}`} />
                <div className="scroll-item-overlay">
                  <span className="item-emoji">{memory.emoji}</span>
                  <span className="item-month">{memory.month}</span>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless infinite scroll */}
            {memories.map((memory) => (
              <div key={`second-${memory.id}`} className="scroll-item">
                <img src={memory.image} alt={`Kỷ niệm ${memory.month}`} />
                <div className="scroll-item-overlay">
                  <span className="item-emoji">{memory.emoji}</span>
                  <span className="item-month">{memory.month}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="story-caption">
          <div className="caption-icon">🎨</div>
          <h3 className="caption-title">
            Cuối cùng cũng hoàn thành chuỗi 12 ảnh phô tô bút không thiếu tháng
            nào 🔛🔝
          </h3>
          <p className="caption-text">
            "Dù qua ngày mới được 50 phút rồi nhưng mà vẫn cứ là iu iu thôi, nổi
            thổi nến happy birthday. Mọi người kéo hoặc chụm hai ảnh lại với
            nhau để xem cho mượt nha! Edit sụn cả lưng, tính ngựa bà phải chọn
            từng element một dù biết có thể kiếm template sẵn..."
            <br />
            <strong>Nhưng mà cưng cưng 💝</strong>
          </p>
          <a
            href="https://www.threads.com/@habphuo.ng/post/DI_9qiRSUs6?xmt=AQF0NIE4pJ7HOKA6RYjiCx6dwrTDiLLNhYqLNuh4YZ3u3iY"
            target="_blank"
            rel="noopener noreferrer"
            className="threads-link"
          >
            <span className="threads-icon">📱</span>
            Xem trên Threads
          </a>
        </div>

        <div className="story-quote">
          <div className="quote-mark">"</div>
          <p className="quote-text">
            Mỗi tháng trôi qua là một khoảnh khắc đẹp được ghi lại, mỗi bức ảnh
            là một câu chuyện tình yêu được kể
          </p>
          <div className="quote-author">— Bon & Bphuong</div>
        </div>
      </div>
    </section>
  );
}

export default OurStory;
