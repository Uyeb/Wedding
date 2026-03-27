import React, { useState, useEffect, useRef } from 'react'; // Import thêm useRef
import { Button, Input, Radio, Form } from 'antd';
import { HeartFilled } from '@ant-design/icons';
import Confetti from 'react-confetti';

export default function CalendarMap() {
  const [form] = Form.useForm();
  
  // 1. Ref để lấy kích thước của cái hộp trắng
  const formBoxRef = useRef(null);
  
  // 2. State để kiểm soát hiệu ứng pháo hoa và kích thước hộp trắng
  const [showConfetti, setShowConfetti] = useState(false);
  const [formBoxSize, setFormBoxSize] = useState({ width: 0, height: 0 });

  // 3. Effect để lấy kích thước hộp trắng khi load hoặc resize
  useEffect(() => {
    if (formBoxRef.current) {
      setFormBoxSize({
        width: formBoxRef.current.offsetWidth,
        height: formBoxRef.current.offsetHeight,
      });
    }

    const handleResize = () => {
      if (formBoxRef.current) {
        setFormBoxSize({
          width: formBoxRef.current.offsetWidth,
          height: formBoxRef.current.offsetHeight,
        });
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const days = [
    null, null, 1, 2, 3, 4, 5,
    6, 7, 8, 9, 10, 11, 12,
    13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26,
    27, 28, 29, 30
  ];

  const onFinish = (values) => {
    console.log('Thông tin xác nhận:', values);
    setShowConfetti(false);
    setTimeout(() => {
      setShowConfetti(true);
    }, 10);
    setTimeout(() => {
      setShowConfetti(false);
    }, 8000); 
  };

  // --- STYLE ĐỂ PHÁO HOA NẰM GỌN TRONG HỘP TRẮNG ---
  const formBoxStyle = {
    background: '#fff',
    padding: '30px 20px',
    borderRadius: '25px',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.05)',
    border: '1px solid #f0f0f0',
    marginTop: '30px',
    textAlign: 'left',
    position: 'relative', // QUAN TRỌNG: Để định vị pháo hoa
    overflow: 'hidden'    // QUAN TRỌNG: Để pháo hoa không rơi ra ngoài viền
  };

  return (
    <div className="wedding-wrapper" style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      
      {/* --- PHẦN LỊCH VÀ HEADER (GIỮ NGUYÊN) --- */}
      <div className="header-artistic" style={{ textAlign: 'center', marginBottom: '20px' }}>
        <span className="month-title">Tháng 4 / </span>
        <span className="year-title">2026</span>
      </div>

      <div className="calendar-grid">
        {/* CSS grid này bạn nên để trong file .css để hiển thị chuẩn nhất */}
        <div className="weekdays" style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', textAlign: 'center', fontSize: '0.7rem', fontWeight: 'bold', marginBottom: '10px' }}>
          {['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'].map(d => (
            <div key={d} style={{ color: d === 'CN' ? '#d32f2f' : '#666' }}>{d}</div>
          ))}
        </div>
        <div className="days" style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', textAlign: 'center' }}>
          {days.map((day, index) => (
            <div key={index} className="day-cell" style={{ padding: '10px 0', position: 'relative' }}>
              {day === 12 ? (
                <div className="heart-wrapper" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <HeartFilled style={{ color: '#d32f2f', fontSize: '1.2rem' }} className="blinking" />
                  <span style={{ fontWeight: 'bold', color: '#d32f2f' }}>{day}</span>
                </div>
              ) : (
                <span style={{ color: (index + 1) % 7 === 0 ? '#d32f2f' : '#333' }}>
                  {day}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* --- PHẦN FORM XÁC NHẬN GIỐNG MẪU --- */}
      <div className="location-box" style={{ marginTop: '40px', textAlign: 'center' }}>
        <p style={{ fontStyle: 'italic', color: '#666', fontSize: '0.9rem', marginBottom: '25px', lineHeight: '1.6' }}>
          Hãy xác nhận sự có mặt của anh/ chị/ em để chúng mình chuẩn bị đón tiếp một cách chu đáo nhất. <br/>
          Trân trọng!
        </p>

        {/* 4. Gắn useRef vào cái hộp trắng và áp dụng overflow: hidden */}
        <div style={formBoxStyle} ref={formBoxRef}>
          
          {/* 5. Pháo hoa: Định vị 'absolute' và dùng kích thước của hộp trắng */}
          {showConfetti && (
            <Confetti
              width={formBoxSize.width}
              height={formBoxSize.height}
              numberOfPieces={250} // Giảm số lượng để không bị rối mắt trong khung nhỏ
              recycle={false}
              gravity={0.1} // Rơi chậm hơn một chút
              style={{
                position: 'absolute', // QUAN TRỌNG: Để pháo nằm trong khung
                top: 0,
                left: 0,
                zIndex: 1, // Chỉ cần trên input là được
                pointerEvents: 'none'
              }}
            />
          )}

          <Form form={form} onFinish={onFinish} layout="vertical" style={{ position: 'relative', zIndex: 2 }}>
            <Form.Item name="name" rules={[{ required: true, message: 'Vui lòng nhập tên' }]}>
              <Input placeholder="Tên của bạn" style={{ borderRadius: '20px', padding: '10px 15px', border: '1px solid #d9d9d9', marginBottom: '5px' }} />
            </Form.Item>

            <Form.Item name="message">
              <Input placeholder="Lời nhắn của bạn" style={{ borderRadius: '20px', padding: '10px 15px', border: '1px solid #d9d9d9', marginBottom: '5px' }} />
            </Form.Item>

            <Form.Item name="attendance" rules={[{ required: true, message: 'Vui lòng chọn trạng thái tham dự' }]}>
              <Radio.Group style={{ width: '100%', textAlign: 'left' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '10px 5px' }}>
                  <Radio value="yes">Mình sẽ tham dự</Radio>
                  <Radio value="no">Thật tiếc mình bận mất rồi</Radio>
                  <Radio value="maybe">Mình đang cân nhắc</Radio>
                </div>
              </Radio.Group>
            </Form.Item>

            <Form.Item style={{ marginBottom: 0 }}>
              <Button type="default" htmlType="submit" style={{ width: '100%', height: '45px', borderRadius: '25px', background: '#fff', color: '#333', border: '1px solid #333', fontWeight: 'bold', fontSize: '0.9rem', marginTop: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                GỬI LỜI NHẮN VÀ XÁC NHẬN
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}