import { useEffect, useRef } from "react";
import OptimizedImage from "./OptimizedImage";
import OptimizedVideo from "./OptimizedVideo";

function Timeline() {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Video vào viewport -> play
            videoElement.play().catch((err) => {
              console.log("Autoplay prevented:", err);
            });
          } else {
            // Video ra khỏi viewport -> pause
            videoElement.pause();
          }
        });
      },
      {
        threshold: 0.5, // Play khi 50% video hiển thị
      }
    );

    observer.observe(videoElement);

    return () => {
      observer.disconnect();
    };
  }, []);
  const journeyEvents = [
    {
      date: "Ngày 29 tháng 4, 2024",
      title: "Khởi Đầu Của Tình Yêu",
      description:
        "Hai trái tim từ hai thế giới khác nhau đã tìm thấy nhau. Bon, một sinh viên tâm huyết tại Học viện An Ninh Nhân Dân, và Bphuong, một cô gái thông minh tại Đại học Ngoại thương.",
      icon: "💫",
      side: "left",
      image: "/assets/images/timeline/timeline-1.jpg",
      type: "image",
    },
    {
      date: "Tháng 9, 2024",
      title: "Tiếng Gọi Của Tổ Quốc",
      description:
        "Bon nhận được lệnh tập huấn chuyên sâu. Là người bảo vệ tương lai của đất nước, anh phải trả lời tiếng gọi này. Đây là khởi đầu của thử thách lớn nhất trong tình yêu của họ.",
      icon: "🎖️",
      side: "right",
      image: "/assets/images/timeline/timeline-2.jpg",
      type: "image",
      highlight: true,
    },
    {
      date: "21.09.2024 - Hà Nội",
      title: "Năm Tháng Xa Cách",
      description:
        '"Lúc nào thấy nhớ thì gọi cho em, hãy gọi cho em cả khi không nhớ… Tụi mình nhất định làm được." — Lời hứa của Bphuong khi Bon lên đường đi tập huấn 5 tháng.',
      icon: "💔",
      side: "left",
      video: "/assets/images/timeline/bonxbp.mp4",
      type: "video",
      special: true,
    },
    {
      date: "Trong Thời Gian Xa Nhau",
      title: "Tình Yêu Qua Khoảng Cách",
      description:
        "Những cuộc gọi lúc nửa đêm, những bức thư viết tay, và đếm từng ngày chờ đợi. Bphuong chờ với niềm tin vững chắc. Bon tập luyện chăm chỉ, mang tình yêu của em làm sức mạnh.",
      icon: "📱",
      side: "right",
      image: "/assets/images/timeline/timeline-4.jpg",
      type: "image",
    },
    {
      date: "Những Ngày Huấn Luyện",
      title: "Hy Sinh & Vinh Quang",
      description:
        "Trong khi Bon cống hiến bản thân để phục vụ đất nước, Bphuong hy sinh thời gian của mình, một mình đối mặt với mọi thứ. Em hiểu rằng yêu một chiến sĩ công an nghĩa là phải đón nhận cả niềm tự hào lẫn sự hy sinh.",
      icon: "🛡️",
      side: "left",
      image: "/assets/images/timeline/timeline-5.jpg",
      type: "image",
      highlight: true,
    },
    {
      date: "Ngày Đoàn Tụ",
      title: "Tụi Mình Làm Được",
      description:
        "Sau 5 tháng xa cách, họ đã chứng minh rằng tình yêu đích thực có thể vượt qua mọi khoảng cách. Tình cảm của họ càng thêm bền chặt, cam kết càng sâu sắc hơn. Họ đã làm được.",
      icon: "🎉",
      side: "right",
      image: "/assets/images/timeline/timeline-6.jpg",
      type: "image",
    },
  ];

  return (
    <section className="timeline-journey" id="timeline">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">
            Hành Trình Tình Yêu & Hy Sinh
          </span>
          <h2 className="section-title">
            Tôn Vinh Nghĩa Vụ, Trân Trọng Tình Yêu
          </h2>
          <div className="section-divider"></div>
          <p className="timeline-intro">
            Đây là câu chuyện về một chàng trai trẻ, chiến sĩ công an phục vụ
            đất nước với vinh dự, và người phụ nữ kiên cường bên anh qua mọi thử
            thách. Tình yêu của họ được xây dựng trên hy sinh, lòng tin và một
            lời hứa không bao giờ lay chuyển:
            <strong> "Tụi mình nhất định làm được."</strong>
          </p>
        </div>

        <div className="journey-container">
          <div className="journey-line"></div>
          {journeyEvents.map((event, index) => (
            <div
              key={index}
              className={`journey-item ${event.side} ${
                event.highlight ? "highlight" : ""
              } ${event.special ? "special" : ""}`}
            >
              <div className="journey-content">
                <div className="journey-media-wrapper">
                  {event.type === "video" ? (
                    <OptimizedVideo
                      src={event.video}
                      ref={videoRef}
                      className="journey-video"
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      autoplay
                    />
                  ) : (
                    <OptimizedImage
                      src={event.image}
                      alt={event.title}
                      className="journey-image"
                    />
                  )}
                  <div className="image-overlay"></div>
                  {event.type === "video" && (
                    <div className="video-indicator">
                      <span className="play-icon">▶</span>
                      <span className="video-text">Video tự động phát</span>
                    </div>
                  )}
                </div>
                <div className="journey-text">
                  <div className="journey-date">{event.date}</div>
                  <div className="journey-card">
                    <div className="journey-icon">{event.icon}</div>
                    <h3>{event.title}</h3>
                    <p>{event.description}</p>
                  </div>
                </div>
              </div>
              <div
                className={`journey-dot ${
                  event.highlight ? "highlight-dot" : ""
                }`}
              >
                <div className="dot-pulse"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="dedication-box">
          <div className="dedication-header">
            <span className="dedication-icon">🎖️</span>
            <h3>Dành Riêng Cho Bon</h3>
          </div>
          <p className="dedication-text">
            Bon, sinh viên Học viện An Ninh Nhân Dân, đại diện cho danh dự và sự
            hy sinh của những người cống hiến cả cuộc đời để bảo vệ Việt Nam. Sự
            cam kết với nhiệm vụ của anh, ngay cả khi phải xa người mình yêu
            hàng tháng trời, thể hiện tinh thần của một người bảo vệ đích thực.
            Bộ đồng phục anh mặc không chỉ là biểu tượng quyền lực, mà còn là
            huy hiệu của danh dự, trách nhiệm và sự phục vụ không vị kỷ cho đất
            nước.
          </p>
        </div>

        <div className="bphuong-tribute">
          <div className="tribute-quote">
            <div className="quote-decoration">"</div>
            <p className="quote-vietnamese">
              Lúc nào thấy nhớ
              <br />
              thì gọi cho em
              <br />
              hãy gọi cho em
              <br />
              cả khi không nhớ…
            </p>
            <div className="quote-meta">
              <span className="quote-location">Hà Nội, 21.09.2024</span>
              <span className="quote-promise">Tụi mình nhất định làm được</span>
            </div>
          </div>
          <div className="tribute-text">
            <h4>Dành Cho Bphuong</h4>
            <p>
              Đằng sau mỗi chiến sĩ tận tụy là một người phụ nữ mạnh mẽ, người
              gánh vác sự xa cách bằng sự dịu dàng và tình yêu thương. Sự hy
              sinh của Bphuong—chờ đợi qua bao đêm dài, tự mình vượt qua cuộc
              sống, giữ vững niềm tin suốt 5 tháng huấn luyện—là minh chứng cho
              sức mạnh và lòng tận tụy của em. Tình yêu của em không chỉ là chỗ
              dựa cho Bon; nó giúp anh có thể phục vụ với tâm trí thanh thản,
              biết rằng em tin tưởng anh hoàn toàn.
            </p>
          </div>
        </div>

        <div className="final-message">
          <div className="message-icon">💝</div>
          <h3>Tình Yêu Vượt Qua Tất Cả</h3>
          <p>
            Trong một thế giới mà nhiệm vụ gọi tên và khoảng cách chia lìa, Bon
            và Bphuong đã chứng minh rằng tình yêu đích thực không phải là ở bên
            nhau mọi khoảnh khắc—mà là giữ vững cam kết qua mọi thử thách. Câu
            chuyện của họ là về danh dự, hy sinh, và niềm tin không lay chuyển
            rằng cùng nhau, họ có thể vượt qua mọi điều.
          </p>
          <div className="message-signature">
            <strong>Tụi mình nhất định làm được</strong> ✨
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
