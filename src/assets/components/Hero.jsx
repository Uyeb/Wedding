export default function Hero() {
  return (
    <section className="hero">
      <img src="/images/anh1.jpg" alt="wedding" className="hero-img"/>

      {/* TÊN ĐẨY LÊN TRÊN */}
      <h1 className="names top">Sơn Hà & Thảo Uyên</h1>

      {/* BOX GIỮ Ở DƯỚI */}
      <div className="hero-content">
        <div className="invite">
          <h3>THƯ MỜI TIỆC CƯỚI</h3>

          <div className="line"></div>

          <p>CHỦ NHẬT | 08H30</p>

          <h2>12 . 04 . 2026</h2>

          <div className="line"></div>
        </div>
      </div>
    </section>
  )
}