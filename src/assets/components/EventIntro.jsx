import { Row, Col } from "antd"
import { EnvironmentOutlined } from '@ant-design/icons';

export default function EventIntro() {
  
  const addressGai = "20°36'53.1\"N 106°33'22.2\"E";
  const addressTrai = "20°39'57.7\"N 106°27'08.3\"E";
  const animatedGifUrl = "/Wedding/images/anhchibi.gif"; 

  const googleMapsUrl = (address) => `https://www.google.com/maps?q=${encodeURIComponent(address)}`;

  // --- STYLE CHO PHẦN NGÀY THÁNG ---
  const dayNumberStyle = {
    fontSize: '3.2rem',
    color: '#d32f2f',
    fontWeight: '450',
    lineHeight: '1',
    margin: '0 10px'
  };

  const separatorStyle = {
    borderLeft: '1px solid #ccc',
    height: '40px',
    margin: '0 12px',
    alignSelf: 'center'
  };

  const eventBoxStyle = {
    background: '#fff', 
    padding: '30px 15px', 
    borderRadius: '15px', 
    boxShadow: '0px 2px 10px rgba(84, 81, 81, 0.3)', 
    maxWidth: '380px', 
    margin: '20px auto', 
    textAlign: 'center',
    border: '1px solid #eee'
  };

  const mapBtnStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ed5757',
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
      
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2  data-aos="zoom-in" style={{ fontWeight: '550', fontSize: '34px', marginBottom: '0px'}}>Thư mời</h2>
        <p data-aos="fade-up" style={{ fontWeight: '300' }}>Tham dự lễ cưới Sơn Hà & Thảo Uyên</p>
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

      <div style={{ textAlign: 'center'}}>
        <h4 data-aos="zoom-in" style={{ 
          color: '#000', 
          marginBottom: '15px', 
          fontSize: '1.8rem', 
          fontWeight: '500',
          letterSpacing: '2px' 
        }}>
          BỮA CƠM THÂN MẬT
        </h4>
        
        <p data-aos="zoom-in" style={{ 
          fontSize: '1.2rem', 
          fontWeight: '400', 
          marginBottom: '5px',
          color: '#333'
        }}>
          CHỦ NHẬT | 08H30
        </p>

        {/* Số ngày tháng to, đậm chuẩn theo mẫu */}
        <div data-aos="zoom-in" style={{ 
          fontSize: '2.0rem', 
          fontWeight: '600', 
          letterSpacing: '5px',
          margin: '10px 0',
          color: '#000'
        }}>
          12.04.2026
        </div>

        <p data-aos="fade-up" style={{ 
          fontStyle: 'italic', 
          color: '#666', 
          fontSize: '1rem',
          marginBottom: '10px'
        }}>
          (Tức Ngày 25 Tháng 02 Năm Bính Ngọ)
        </p>

        <p data-aos="fade-up" style={{ 
          fontSize: '1.1rem', 
          fontWeight: '500',
          color: '#333'
        }}>
          Tại Tư Gia Nhà Gái
        </p>
      </div>

      {/* --- BOX LỄ VU QUY --- */}
      <div style={eventBoxStyle}>
        <h2 data-aos="zoom-in" style={{ color: '#d32f2f', marginBottom: '5px', fontSize: '2.5rem' }}>LỄ VU QUY</h2>
        <p data-aos="zoom-in" style={{ color: '#888', fontSize: '0.95rem' }}>Tại Tư Gia Nhà Gái</p>
        <p data-aos="zoom-in" style={{ fontSize: '1.1rem', fontWeight: '400' }}>Vào lúc 11h30 | Chủ Nhật</p>

        <div data-aos="zoom-in" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
          <div>
            <div style={{ color: '#666', fontSize: '0.9rem' }}>Tháng</div>
            <div style={{ fontSize: '1.5rem', fontWeight: '450' }}>04</div>
          </div>
          <div style={separatorStyle}></div>
          <div style={dayNumberStyle}>12</div>
          <div style={separatorStyle}></div>
          <div>
            <div style={{ color: '#666', fontSize: '0.9rem' }}>Năm</div>
            <div style={{ fontSize: '1.5rem', fontWeight: '450' }}>2026</div>
          </div>
        </div>
        
        <p data-aos="fade-up" style={{ fontStyle: 'italic', color: '#999', fontSize: '0.85rem' }}>(Tức Ngày 25 Tháng 02 Năm Bính Ngọ)</p>

        <a data-aos="fade-up" href={googleMapsUrl(addressGai)} target="_blank" rel="noreferrer" style={mapBtnStyle}>
          <EnvironmentOutlined style={{ fontSize: '1.2rem', marginRight: '5px' }} />
          <span  style={{ borderBottom: '1px solid #d32f2f' }}>CHỈ ĐƯỜNG</span>
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


      <div style={{ textAlign: 'center'}}>
        <h4 data-aos="zoom-in" style={{ 
          color: '#000', 
          marginBottom: '15px', 
          fontSize: '1.8rem', 
          fontWeight: '500',
          letterSpacing: '2px' 
        }}>
          BỮA CƠM THÂN MẬT
        </h4>
        
        <p data-aos="zoom-in" style={{ 
          fontSize: '1.2rem', 
          fontWeight: '400', 
          marginBottom: '5px',
          color: '#333'
        }}>
          CHỦ NHẬT | 08H30
        </p>

        {/* Số ngày tháng to, đậm chuẩn theo mẫu */}
        <div data-aos="zoom-in" style={{ 
          fontSize: '2.0rem', 
          fontWeight: '600', 
          letterSpacing: '5px',
          margin: '10px 0',
          color: '#000'
        }}>
          12.04.2026
        </div>

        <p data-aos="fade-up" style={{ 
          fontStyle: 'italic', 
          color: '#666', 
          fontSize: '1rem',
          marginBottom: '10px'
        }}>
          (Tức Ngày 25 Tháng 02 Năm Bính Ngọ)
        </p>

        <p data-aos="fade-up" style={{ 
          fontSize: '1.1rem', 
          fontWeight: '500',
          color: '#333'
        }}>
          Tại Tư Gia Nhà Trai
        </p>
      </div>

      {/* --- BOX LỄ THÀNH HÔN --- */}
      <div style={eventBoxStyle}>
        <h2 data-aos="zoom-in" style={{ color: '#d32f2f', marginBottom: '5px', fontSize: '2.5rem' }}>LỄ THÀNH HÔN</h2>
        <p data-aos="zoom-in" style={{ color: '#888', fontSize: '0.95rem' }}>Tại Tư Gia Nhà Trai</p>
        <p data-aos="zoom-in" style={{ fontSize: '1.1rem', fontWeight: '400' }}>Vào lúc 09h00 | Chủ Nhật</p>

        <div data-aos="zoom-in" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
          <div>
            <div style={{ color: '#666', fontSize: '0.9rem' }}>Tháng</div>
            <div style={{ fontSize: '1.5rem', fontWeight: '450' }}>04</div>
          </div>
          <div style={separatorStyle}></div>
          <div style={dayNumberStyle}>12</div>
          <div style={separatorStyle}></div>
          <div>
            <div style={{ color: '#666', fontSize: '0.9rem' }}>Năm</div>
            <div style={{ fontSize: '1.5rem', fontWeight: '450' }}>2026</div>
          </div>
        </div>

        <p data-aos="fade-up" style={{ fontStyle: 'italic', color: '#999', fontSize: '0.85rem' }}>(Tức Ngày 25 Tháng 02 Năm Bính Ngọ)</p>

        <a data-aos="fade-up" href={googleMapsUrl(addressTrai)} target="_blank" rel="noreferrer" style={mapBtnStyle}>
          <EnvironmentOutlined style={{ fontSize: '1.2rem', marginRight: '5px' }} />
          <span style={{ borderBottom: '1px solid #d32f2f' }}>CHỈ ĐƯỜNG</span>
        </a>
      </div>

    </section>
  )
}