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
                <img src={`/Wedding/images/${item.id}.jpg`} alt="wedding" />
              </div>
            ) : (
              <div className="right-group">
                {item.subIds.map((subId) => (
                  <div key={subId} className="img-box horizontal" data-aos="fade-left">
                    <img src={`/Wedding/images/${subId}.jpg`} alt="wedding" />
                  </div>
                ))}
              </div>
            )}
          </Col>
        ))}

        {/* --- KHỐI "THANK YOU" TO DỌC CUỐI CÙNG (Sửa cấu trúc mới) --- */}
        <Col span={24}>
            {/* Vẫn dùng thankyou-box làm container chính */}
            <div className="thankyou-box" data-aos="fade-up">
              {/* Ảnh nền phủ kín, VẪN SÁNG VÀ RÕ NÉT */}
              <img src="/Wedding/images/anh12.jpg" alt="wedding background" className="background-img" />
              
              {/* Lớp phủ sương mờ ảo (Smoky Blur Overlay) - Chỉ mờ ở vùng chứa chữ */}
              <div className="shadow-overlay"></div>
              
              {/* Chỉ để chữ đè lên ảnh nền, KHÔNG DÙNG BOX TRẮNG NỮA */}
              <div className="content">
                <p className="script-text">Thank you!</p>
                <p className="main-text">
                    "Cảm ơn bạn đã dành tình cảm cho chúng mình!
                    Sự hiện diện của bạn là món quà ý nghĩa nhất."
                </p>
              </div>
            </div>
        </Col>
      </Row>
    </section>
  );
}