export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-wrapper" style={{ position: 'relative' }}>
        <img 
          src="/Wedding/images/anh1.jpg" 
          alt="wedding" 
          className="hero-img"
        />
        <div data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-duration="1500"  className="hero-content">
          <p  className="names">Sơn Hà & Thảo Uyên</p>
          <p className="sub-text">we are getting married</p>
        </div>
      </div>
    </section>
  )
}