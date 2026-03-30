import { Layout } from 'antd'
import React, { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './assets/components/Hero'
import Info from './assets/components/Info'
import EventIntro from './assets/components/EventIntro'
import CalendarMap from './assets/components/CalendarMap'
import Album from './assets/components/Album'
import './animation.css'
import { CustomerServiceOutlined } from '@ant-design/icons';

const { Content } = Layout;

function App() {
  const [isActive, setIsActive] = useState(false);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // 1. Khởi tạo trang
    setIsActive(true);
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      AOS.init({ duration: 2000, once: true, offset: 50 });
    }, 300);

    // 2. Hàm kích hoạt nhạc
    const startMusic = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            console.log("Trình duyệt đang chờ bạn tương tác...");
          });
      }
    };

    // Lắng nghe mọi hành động: cuộn, chạm màn hình, click
    window.addEventListener('scroll', startMusic, { once: true });
    window.addEventListener('click', startMusic, { once: true });
    window.addEventListener('touchstart', startMusic, { once: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', startMusic);
      window.removeEventListener('click', startMusic);
      window.removeEventListener('touchstart', startMusic);
    };
  }, [isPlaying]);

  return (
    <Layout className="app-bg" style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center' }}>
      {/* Quan trọng: preload="auto" để nhạc tải sẵn */}
      <audio ref={audioRef} src="/Wedding/images/ido.mp3" loop preload="auto" />

      <div className="mobile-wrapper" style={{ 
        position: 'relative', width: '100%', maxWidth: '500px', background: '#fff', minHeight: '100vh' 
      }}>
        
        {/* NÚT LOA: Luôn hiện để không bị trống trải */}
        <div 
          className={`music-control-btn ${isPlaying ? 'playing' : 'paused'}`}
          style={{
            position: 'fixed',
            bottom: '30px',
            left: 'calc(50% + 200px)', // Chỉnh số này để nó nằm trong khung trắng
            transform: 'translateX(-100%)', 
            zIndex: 1000,
            pointerEvents: 'none' 
          }}
        >
          <CustomerServiceOutlined style={{ fontSize: '20px' }} />
        </div>

        <div className={`first-load ${isActive ? 'active' : ''}`}>
          <Hero />
        </div>
        <div data-aos="fade-up"><Info /></div>
        <div data-aos="fade-up"><EventIntro /></div>
        <div data-aos="fade-up"><CalendarMap /></div>
        <div data-aos="fade-up"><Album /></div>
      </div>
    </Layout>
  );
}

export default App;