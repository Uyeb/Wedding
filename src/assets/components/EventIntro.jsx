import { Row, Col } from "antd"

export default function EventIntro() {
  return (
    <section className="section">
      
      <h2 data-aos="fade-up">Thư mời</h2>
      <p data-aos="fade-up">Tham dự lễ cưới Sơn Hà & Thảo Uyên</p>

      <Row gutter={[16,16]} style={{ marginTop: 40 }}>
        <Col span={8} data-aos="zoom-in">
          <img src="/images/anh2.jpg" />
        </Col>
        <Col span={8} data-aos="zoom-in">
          <img src="/images/anh3.jpg" />
        </Col>
        <Col span={8} data-aos="zoom-in">
          <img src="/images/anh4.jpg" />
        </Col>
      </Row>
      <h2>  LỄ THÀNH HÔN</h2>
      <p>Vào lúc 09h00 | Chủ Nhật</p>
      <p>Tháng 04 | 12 | 2026</p>
      <p>(Tức Ngày 25 Tháng 02 Năm Ngọ)</p>
      <p>Tại Tư Gia Nhà Trai</p>
    </section>
  )
}