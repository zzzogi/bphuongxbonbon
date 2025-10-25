import React, { useState, useEffect, useRef } from "react";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const scrollPositionRef = useRef(0);

  const memories = [
    {
      id: 1,
      title: "Trên mọi nẻo đường",
      image: "/bphuongxbonbon/assets/images/gallery/gallery-1.jpg",
      date: "Tháng 10, 2024",
      description: "Những chuyến đi cùng nhau khắp mọi nẻo đường",
    },
    {
      id: 2,
      title: "Chuyến du lịch",
      image: "/bphuongxbonbon/assets/images/gallery/gallery-2.jpg",
      date: "Tháng 7, 2025",
      description: "Cùng nhau khám phá những nơi mới",
    },
    {
      id: 3,
      title: "Bphuong kết nạp Đảng",
      image: "/bphuongxbonbon/assets/images/gallery/gallery-3.jpg",
      date: "Tháng 7, 2024",
      description: "Khoảnh khắc tự hào và ý nghĩa trong cuộc đời Bphuong",
    },
    {
      id: 4,
      title: "Kỉ niệm 500 days",
      image: "/bphuongxbonbon/assets/images/gallery/gallery-4.jpg",
      date: "Tháng 9, 2025",
      description: "Những khoảnh khắc lãng mạn dưới ánh đèn",
    },
    {
      id: 5,
      title: "Double Date với bạn bè",
      image: "/bphuongxbonbon/assets/images/gallery/gallery-5.jpg",
      date: "Tháng 9, 2025",
      description: "Những buổi hẹn hò vui vẻ cùng hội bạn thân",
    },
    {
      id: 6,
      title: "Mùa thu nhẹ nhàng",
      image: "/bphuongxbonbon/assets/images/gallery/gallery-6.jpg",
      date: "Tháng 8, 2024",
      description: "Bên cạnh anh, mùa thu trở nên ấm áp hơn",
    },
    {
      id: 7,
      title: "Quốc Khánh 2024",
      image: "/bphuongxbonbon/assets/images/gallery/gallery-7.jpg",
      date: "Tháng 9, 2024",
      description: "Kỷ niệm ngày đặc biệt bên nhau",
    },
    {
      id: 8,
      title: "Năng lượng tích cực",
      image: "/bphuongxbonbon/assets/images/gallery/gallery-8.jpg",
      date: "Tháng 8, 2025",
      description: "Vibe giống nhau thì sẽ đến với nhau",
    },
    {
      id: 9,
      title: "Cùng nhau",
      image: "/bphuongxbonbon/assets/images/gallery/gallery-9.jpg",
      date: "Tháng 4, 2025",
      description: "Hạnh phúc đơn giản khi có nhau",
    },
    {
      id: 10,
      title: "Ăn uống vui vẻ",
      image: "/bphuongxbonbon/assets/images/gallery/gallery-10.jpg",
      date: "Tháng 4, 2025",
      description: "Bon ăn gì Bphuong cũng ăn nấy",
    },
  ];

  const openLightbox = (image) => {
    // Save current scroll position
    scrollPositionRef.current = window.scrollY;
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    // Restore scroll position after a small delay
    setTimeout(() => {
      window.scrollTo(0, scrollPositionRef.current);
    }, 0);
  };

  const navigateImage = (direction) => {
    const currentIndex = memories.findIndex((m) => m.id === selectedImage.id);
    let newIndex;

    if (direction === "next") {
      newIndex = (currentIndex + 1) % memories.length;
    } else {
      newIndex = (currentIndex - 1 + memories.length) % memories.length;
    }

    setSelectedImage(memories[newIndex]);
  };

  // Handle body scroll lock
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "15px"; // Prevent layout shift
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [selectedImage]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedImage) return;

      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowRight") {
        navigateImage("next");
      } else if (e.key === "ArrowLeft") {
        navigateImage("prev");
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [selectedImage]);

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
            <div
              key={memory.id}
              className="gallery-item"
              onClick={() => openLightbox(memory)}
            >
              <div className="gallery-image-wrapper">
                <img
                  src={memory.image}
                  alt={memory.title}
                  className="gallery-img"
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <div className="overlay-content">
                    <h3>{memory.title}</h3>
                    <p className="gallery-date">{memory.date}</p>
                    <span className="view-icon">👁️</span>
                  </div>
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

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            ✕
          </button>

          <button
            className="lightbox-nav lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("prev");
            }}
            aria-label="Previous image"
          >
            ‹
          </button>

          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="lightbox-img"
            />
            <div className="lightbox-info">
              <h3>{selectedImage.title}</h3>
              <p className="lightbox-date">{selectedImage.date}</p>
              <p className="lightbox-description">
                {selectedImage.description}
              </p>
            </div>
          </div>

          <button
            className="lightbox-nav lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("next");
            }}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}

export default Gallery;
