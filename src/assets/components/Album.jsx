import React, { useEffect } from 'react';
import { Row, Col } from "antd";



export default function Album() {
 

  // Cấu trúc dữ liệu ảnh: 1, 2, 3 là ảnh dọc. 4, 5 là cặp ảnh ngang.
  const albumData = [
    { id: 'anh5', type: 'vertical' },
    { id: 'anh61', type: 'vertical' },
    { id: 'anh8', type: 'vertical' },
    { id: 'anh7', type: 'vertical' }, 
    { id: 'anh9', type: 'vertical' },
    { id: 'anh10', type: 'vertical' },
  ];

  return (
    <section className="album-section">
      <div className="album-header" data-aos="fade-up">
        <h2 className="album-title">Album hình cưới</h2>
        <div className="title-divider">
          <span className="line"></span>
          <span className="heart">♥</span>
          <span className="line"></span>
        </div>
      </div>

      <Row gutter={[12, 12]}>
        {albumData.map((item, index) => (
          <Col span={12} key={index}>
            {item.type === 'vertical' ? (
              <div className="img-box vertical" data-aos="zoom-in">
                <img src={`/images/${item.id}.jpg`} alt="wedding" />
              </div>
            ) : (
              <div className="right-group">
                {item.subIds.map((subId) => (
                  <div key={subId} className="img-box horizontal" data-aos="fade-left">
                    <img src={`/images/${subId}.jpg`} alt="wedding" />
                  </div>
                ))}
              </div>
            )}
          </Col>
        ))}

        {/* Ảnh to dọc cuối cùng theo ý bạn */}
        <Col span={24}>
           <div className="img-box full-vertical" data-aos="fade-up">
              <img src="/images/anh1.jpg" alt="wedding large" />
           </div>
        </Col>
      </Row>
    </section>
  );
}