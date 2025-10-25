function Testimonials() {
  const testimonials = [
    {
      quote:
        "Nhìn hai bạn bên nhau thật hạnh phúc, chúc hai bạn mãi mãi vui vẻ và bên nhau nhé!",
      author: "Binny",
      relation: "Đồng niên của 2 bạn",
      avatar: "/bphuongxbonbon/assets/images/avatar/binny.jpg",
    },
    {
      quote:
        "Cặp đôi hoàn hảo! Chúc hai iem luôn hạnh phúc và tràn đầy yêu thương.",
      author: "Chị Bông",
      avatar: "/bphuongxbonbon/assets/images/avatar/bong.jpg",
      relation: "Chị gái",
    },
    {
      quote:
        "Thật ngưỡng mộ tình yêu của hai bạn, chúc hai bạn luôn bên nhau và vượt qua mọi thử thách!",
      author: "Cộng đồng mạng",
      relation: "Random fan",
    },
    {
      quote: "Cặp đôi này hồi sinh niềm tin của tôi vào tình yêu đôi lứa",
      author: "Anh Quyền",
      relation: "Anh zai",
      avatar: "/bphuongxbonbon/assets/images/avatar/quyen.jpg",
    },
    {
      quote:
        "Quá đáng yêu, có thể nói là cặp đôi đáng yêu nhất mà tôi từng thấy!",
      author: "Chị Diệu",
      relation: "Chị gái",
      avatar: "/bphuongxbonbon/assets/images/avatar/dieu.jpg",
    },
    {
      quote:
        "CLB tự hào vì có cặp đôi trai tài gái giỏi nhứ Bon và Bphuong, cả nhà ủng hộ hai bạn mình lắmmmm",
      author: "Hội nghị Diên hồng",
      relation: "CLB",
    },
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Lời chúc phúc</span>
          <h2 className="section-title">Những Lời Yêu Thương</h2>
          <div className="section-divider"></div>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-quote-mark">"</div>
              <p className="testimonial-quote">{testimonial.quote}</p>
              <div className="testimonial-author-info">
                <img
                  src={
                    testimonial.avatar ||
                    "/bphuongxbonbon/assets/images/avatar/default-avatar.jpg"
                  }
                  alt={testimonial.author}
                  className="avatar"
                />
                <div className="testimonial-author">
                  <strong>{testimonial.author}</strong>
                  <span>{testimonial.relation}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
