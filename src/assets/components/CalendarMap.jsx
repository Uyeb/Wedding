import React from 'react';
import { Card, Button } from 'antd';
import { HeartFilled } from '@ant-design/icons';


export default function CalendarMap() {
  // Mảng ngày cho Tháng 4/2026 (Bắt đầu từ Thứ 4 nên có 2 ô null)
  const days = [
    null, null, 1, 2, 3, 4, 5,
    6, 7, 8, 9, 10, 11, 12,
    13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26,
    27, 28, 29, 30
  ];

  return (
    <div className="wedding-wrapper">
      {/* Header */}
      <div className="header-flex">
        <span className="month-title">Tháng 4</span>
        <span className="year-title">2026</span>
      </div>

      {/* Lịch */}
      <div className="calendar-grid">
        <div className="weekdays">
          {['THỨ 2', 'THỨ 3', 'THỨ 4', 'THỨ 5', 'THỨ 6', 'THỨ 7', 'CHỦ NHẬT'].map(d => (
            <div key={d} className={d === 'CHỦ NHẬT' ? 'sun-label' : ''}>{d}</div>
          ))}
        </div>
        <div className="days">
          {days.map((day, index) => (
            <div key={index} className="day-cell">
              {/* Sửa logic: Nếu là ngày 12 thì hiện trái tim */}
              {day === 12 ? (
                <div className="heart-wrapper">
                  <HeartFilled className="heart-icon blinking" />
                  <span className="day-number">{day}</span>
                </div>
              ) : (
                <span className={(index + 1) % 7 === 0 ? 'sunday-text' : ''}>
                  {day}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Địa điểm - Sửa lỗi bordered thành variant */}
      <div className="location-box">
        <h3 className="script-font">Địa điểm tổ chức</h3>
        <Card className="address-card" variant="none"> {/* Đã sửa lỗi antd ở đây */}
          <h4 className="title-home">TƯ GIA</h4>
          <p className="address-text">Đông Hoà - Hồng Dũng <br/> Thái Thụy - Thái Bình</p>
          
          <div className="map-frame">
             <iframe 
                src="https://www.google.com/maps/embed?..." 
                width="100%" 
                height="200" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy">
             </iframe>
          </div>

          <Button type="primary" className="btn-google">
            XEM TRÊN GOOGLE MAP
          </Button>
        </Card>
      </div>
    </div>
  );
}