import { useEffect, useRef, useState } from "react";

function OptimizedVideo({
  src,
  poster,
  className = "",
  autoplay = false,
  loop = false,
  muted = true,
}) {
  const videoRef = useRef(null);
  const [, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    // Intersection Observer cho video
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);

            // Autoplay nếu cần
            if (autoplay) {
              videoElement.play().catch((err) => {
                console.log("Autoplay prevented:", err);
              });
            }
          } else {
            // Pause khi ra khỏi viewport để tiết kiệm bandwidth
            videoElement.pause();
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(videoElement);

    return () => {
      observer.disconnect();
    };
  }, [autoplay]);

  return (
    <div className="optimized-video-wrapper">
      {/* Loading spinner */}
      {!isLoaded && (
        <div className="video-loading">
          <div className="spinner"></div>
          <p>Đang tải video...</p>
        </div>
      )}

      <video
        ref={videoRef}
        className={className}
        loop={loop}
        muted={muted}
        playsInline
        preload="metadata" // Chỉ load metadata trước
        poster={poster}
        onLoadedData={() => setIsLoaded(true)}
      >
        <source src={src} type="video/mp4" />
        Trình duyệt của bạn không hỗ trợ video.
      </video>
    </div>
  );
}

export default OptimizedVideo;
