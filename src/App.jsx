import { Layout } from 'antd'
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Đừng quên import css của AOS
import Hero from './assets/components/Hero'
import Info from './assets/components/Info'
import EventIntro from './assets/components/EventIntro'
import CalendarMap from './assets/components/CalendarMap'
import Album from './assets/components/Album'
import './animation.css'

const { Content } = Layout;

function App() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // 1. Kích hoạt hiệu ứng Hero ngay lập tức
    setIsActive(true);

    // 2. ÉP TRÌNH DUYỆT VỀ ĐẦU TRANG NGAY KHI LOAD (CỰC KỲ QUAN TRỌNG)
    window.scrollTo(0, 0);

    // 3. TRÌ HOÃN KHỞI TẠO AOS ĐỂ TRÁNH TỰ ĐỘNG CUỘN (Auto-scroll bug)
    const timer = setTimeout(() => {
      AOS.init({
        duration: 2000,
        once: true,
        offset: 50, // Giảm offset xuống một chút cho mượt trên mobile
        delay: 0,
      });
      
      // Một lần nữa Double-check ép về đầu trang
      window.scrollTo(0, 0);
    }, 300); // Chờ 300ms sau khi web sẵn sàng

    // Cleanup function để tránh lỗi bộ nhớ
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout className="app-bg">
      <Content className="mobile-wrapper">
        {/* Phần đầu tiên (Hero) hiện ngay khi mở web */}
        <div data-aos-duration="2000" className={`first-load ${isActive ? 'active' : ''}`}>
          <Hero />
        </div>

        {/* Các phần còn lại hiện dần khi cuộn đến */}
        <div data-aos="fade-up"><Info /></div>
        <div data-aos="fade-up"><EventIntro /></div>
        <div data-aos="fade-up"><CalendarMap /></div>
        <div data-aos="fade-up"><Album /></div>
      </Content>
    </Layout>
  );
}

export default App;