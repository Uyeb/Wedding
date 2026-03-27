import { Row, Col } from "antd"

export default function Info() {
  return (
    <section className="section">
      <h2 data-aos="fade-up">
        “Hôn nhân là chuyện cả đời,<br/>
        Yêu người vừa ý, cưới người mình thương”
      </h2>

      <Row gutter={[20,20]}>
        <Col xs={24} md={12} data-aos="fade-left">
          <h3>Nhà trai</h3>
          <p>Ông: Phạm Văn Quân</p>
          <p>Bà: Nguyễn Thị Dịu</p>
          <p>Kê Sơn - Vĩnh Hải</p>
          <p>Hải Phòng</p>

          <h4>Chú Rể</h4>
          <p className="name">Sơn Hà</p>
        </Col>

        <Col xs={24} md={12}>
          <h3>Nhà gái</h3>
          <p>Ôn:g Nguyễn Duy Bình</p>
          <p>Bà: Bùi Thị Lan</p>
          <p>Đông Hòa - Đông Thụy Anh</p>
          <p>Hưng Yên</p>

          <h4>Cô Dâu</h4>
          <p className="name">Thảo Uyên</p>
        </Col>
      </Row>

      <div className="img-box-pink" data-aos="zoom-in">
        <div className="img-inner">
          <img src="/Wedding/images/ha.jpg" />
          <img src="/Wedding/images/cd1.jpg" />
        </div>
      </div>
    </section>
  )
}