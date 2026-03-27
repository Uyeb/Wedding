import { Row, Col } from "antd"
import { EnvironmentOutlined } from '@ant-design/icons';

export default function EventIntro() {
  
  const addressGai = "Số nhà..., Đường..., Quận..., Thành phố..."; 
  const addressTrai = "Số nhà..., Đường..., Quận..., Thành phố...";
  const animatedGifUrl = "/Wedding/images/anhchibi.gif"; 

  const googleMapsUrl = (address) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  // --- STYLE CHO PHẦN NGÀY THÁNG ---
  const dayNumberStyle = {
    fontSize: '4rem',
    color: '#d32f2f',
    fontWeight: 'bold',
    lineHeight: '1',
    margin: '0 10px'
  };

  const separatorStyle = {
    borderLeft: '1px solid #ccc',
    height: '50px',
    margin: '0 15px',
    alignSelf: 'center'
  };

  const eventBoxStyle = {
    background: '#fff', 
    padding: '35px 20px', 
    borderRadius: '15px', 
    boxShadow: '0px 2px 10px rgba(84, 81, 81, 0.3)', 
    maxWidth: '450px', 
    margin: '20px auto', 
    textAlign: 'center',
    border: '1px solid #eee'
  };

  const mapBtnStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#d32f2f',
    textDecoration: 'none',
    marginTop: '15px',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    cursor: 'pointer'
  };

  // --- STYLE MỚI CHO 3 ẢNH ĐỀU NHAU ---
  const imageContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '8px', // Thu hẹp khoảng cách giữa các ảnh
    maxWidth: '100%', 
    margin: '0 auto 40px auto',
    padding: '0 10px'
  };

  const photoColStyle = {
    flex: '1', // Chia đều 1:1:1 cho cả 3 ảnh
  };

  const middlePhotoColStyle = {
    flex: '1', 
    transform: 'translateY(-15px)', // Đẩy lên nhẹ để tạo điểm nhấn nhưng vẫn đều chiều ngang
  };

  const imgCommonStyle = {
    width: '100%',
    objectFit: 'cover',
    borderRadius: '0', // Không bo góc
  };

  return (
    <section className="section" style={{ background: '#fcfcfc', padding: '40px 10px' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h2 data-aos="fade-up">Trân trọng kính mời</h2>
        <p>....................................</p>
        <p data-aos="fade-up" style={{ fontWeight: '500' }}>Tham dự lễ cưới Sơn Hà & Thảo Uyên</p>
      </div>

      {/* --- PHẦN 3 ẢNH ĐÃ CÂN ĐỐI --- */}
      <div style={imageContainerStyle} className="wedding-photos">
        {/* Ảnh trái */}
        <div style={photoColStyle} data-aos="zoom-in">
          <img src="/Wedding/images/anh2.jpg" style={{ ...imgCommonStyle, height: '200px' }} alt="Left" />
        </div>

        {/* Ảnh giữa */}
        <div style={middlePhotoColStyle} data-aos="zoom-in">
          <img src="/Wedding/images/anh3.jpg" style={{ ...imgCommonStyle, height: '230px' }} alt="Middle" />
        </div>

        {/* Ảnh phải */}
        <div style={photoColStyle} data-aos="zoom-in">
          <img src="/Wedding/images/anh4.jpg" style={{ ...imgCommonStyle, height: '200px' }} alt="Right" />
        </div>
      </div>

      {/* --- BOX LỄ VU QUY --- */}
      <div style={eventBoxStyle}>
        <h2 style={{ color: '#d32f2f', marginBottom: '5px' }}>LỄ VU QUY</h2>
        <p style={{ color: '#888', fontSize: '0.85rem' }}>Tại Tư Gia Nhà Gái</p>
        <p style={{ fontSize: '1.1rem', fontWeight: '500' }}>Vào lúc 09h00 | Chủ Nhật</p>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
          <div>
            <div style={{ color: '#666', fontSize: '0.9rem' }}>Tháng</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>04</div>
          </div>
          <div style={separatorStyle}></div>
          <div style={dayNumberStyle}>12</div>
          <div style={separatorStyle}></div>
          <div>
            <div style={{ color: '#666', fontSize: '0.9rem' }}>Năm</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>2026</div>
          </div>
        </div>
        
        <p style={{ fontStyle: 'italic', color: '#999', fontSize: '0.85rem' }}>(Tức Ngày 25 Tháng 02 Năm Bính Ngọ)</p>

        <a href={googleMapsUrl(addressGai)} target="_blank" rel="noreferrer" style={mapBtnStyle}>
          <EnvironmentOutlined style={{ fontSize: '1.2rem', marginRight: '5px' }} />
          <span style={{ borderBottom: '1px solid #d32f2f' }}>CHỈ ĐƯỜNG</span>
        </a>
      </div>

      {/* --- ẢNH ĐỘNG GIF Ở GIỮA --- */}
      <div style={{ textAlign: 'center', margin: '30px 0' }}>
        <img 
          src={animatedGifUrl} 
          alt="Wedding Animation" 
          style={{ maxWidth: '120px', height: 'auto' }} 
        />
      </div>

      {/* --- BOX LỄ THÀNH HÔN --- */}
      <div style={eventBoxStyle}>
        <h2 style={{ color: '#d32f2f', marginBottom: '5px' }}>LỄ THÀNH HÔN</h2>
        <p style={{ color: '#888', fontSize: '0.85rem' }}>Tại Tư Gia Nhà Trai</p>
        <p style={{ fontSize: '1.1rem', fontWeight: '500' }}>Vào lúc 09h00 | Chủ Nhật</p>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
          <div>
            <div style={{ color: '#666', fontSize: '0.9rem' }}>Tháng</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>04</div>
          </div>
          <div style={separatorStyle}></div>
          <div style={dayNumberStyle}>12</div>
          <div style={separatorStyle}></div>
          <div>
            <div style={{ color: '#666', fontSize: '0.9rem' }}>Năm</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>2026</div>
          </div>
        </div>

        <p style={{ fontStyle: 'italic', color: '#999', fontSize: '0.85rem' }}>(Tức Ngày 25 Tháng 02 Năm Bính Ngọ)</p>

        <a href={googleMapsUrl(addressTrai)} target="_blank" rel="noreferrer" style={mapBtnStyle}>
          <EnvironmentOutlined style={{ fontSize: '1.2rem', marginRight: '5px' }} />
          <span style={{ borderBottom: '1px solid #d32f2f' }}>CHỈ ĐƯỜNG</span>
        </a>
      </div>

    </section>
  )
}