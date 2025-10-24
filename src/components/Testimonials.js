function Testimonials() {
  const testimonials = [
    {
      quote:
        "Nhìn hai em bên nhau, chúng tôi thấy tình yêu chân thành và sự quan tâm lẫn nhau. Chúc hai em luôn hạnh phúc!",
      author: "Bạn thân của Bon",
      relation: "Bạn học cùng Học viện",
    },
    {
      quote:
        "Bphuong và Bon là cặp đôi đáng yêu nhất mà tôi từng biết. Hai người thật sự dành cho nhau!",
      author: "Bạn thân của Bphuong",
      relation: "Bạn học cùng lớp",
    },
    {
      quote:
        "Từ những ngày đầu, chúng tôi đã thấy tình yêu đặc biệt của hai con. Chúc hai con mãi bên nhau!",
      author: "Gia đình",
      relation: "Người thân",
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
              <div className="testimonial-author">
                <strong>{testimonial.author}</strong>
                <span>{testimonial.relation}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
