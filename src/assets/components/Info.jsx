import { Row, Col } from "antd"
import { HeartFilled } from '@ant-design/icons'; // Import icon trái tim

export default function Info() {
  return (
    <section className="section info-container">
      <h2 data-aos="fade-up">
        “Hôn nhân là chuyện cả đời,<br/>
        Yêu người vừa ý, cưới người mình thương”
      </h2>

      <Row justify="center" align="top" className="info-row">
        {/* NHÀ TRAI */}
        <Col xs={11} md={10} data-aos="fade-right">
          <h3>Nhà trai</h3>
          <p className="parent">Ông: Phạm Văn Quân</p>
          <p className="parent">Bà: Nguyễn Thị Dịu</p>
          <p className="address">Kê Sơn - Vĩnh Hải</p>
          <p className="address">Hải Phòng</p>

          <h4>Chú Rể</h4>
          <p className="name">Sơn Hà</p>
        </Col>

        {/* ICON TRÁI TIM Ở GIỮA */}
        <Col xs={2} md={4} className="heart-col">
           <HeartFilled className="heart-beat-icon" />
        </Col>

        {/* NHÀ GÁI */}
        <Col xs={11} md={10} data-aos="fade-left">
          <h3>Nhà gái</h3>
          <p className="parent">Ông: Nguyễn Duy Bình</p>
          <p className="parent">Bà: Bùi Thị Lan</p>
          <p className="address">Đông Hòa - Đông Thụy Anh</p>
          <p className="address">Hưng Yên</p>

          <h4>Cô Dâu</h4>
          <p className="name">Thảo Uyên</p>
        </Col>
      </Row>

      {/* BOX ẢNH DƯỚI */}
      <div className="img-box-pink" data-aos="zoom-in">
        <div className="img-inner">
          <img src="/Wedding/images/ha.jpg" alt="Sơn Hà" />
          <img src="/Wedding/images/cd1.jpg" alt="Thảo Uyên" />
        </div>
      </div>
    </section>
  )
}