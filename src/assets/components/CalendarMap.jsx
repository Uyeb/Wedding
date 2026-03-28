import React, { useState, useEffect, useRef } from "react";
import { Button, Input, Radio, Form } from "antd";
import { HeartFilled } from "@ant-design/icons";
import Confetti from "react-confetti";
import { db } from "../../firebase";
import { ref, push, set } from "firebase/database";

export default function CalendarMap() {
  const [form] = Form.useForm();
  const formBoxRef = useRef(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [formBoxSize, setFormBoxSize] = useState({ width: 0, height: 0 });

  // Cập nhật kích thước khung hình để pháo hoa rơi chuẩn
  useEffect(() => {
    const updateSize = () => {
      if (formBoxRef.current) {
        setFormBoxSize({
          width: formBoxRef.current.offsetWidth,
          height: formBoxRef.current.offsetHeight,
        });
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const days = [
    null,
    null,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
  ];

  const onFinish = async (values) => {
    try {
      // 1. Chỉ định nơi lưu dữ liệu là thư mục 'responses' trên Firebase
      const attendanceRef = ref(db, "responses");
      const newGuestRef = push(attendanceRef);

      // 2. Đẩy dữ liệu khách nhập
      await set(newGuestRef, {
        name: values.name,
        message: values.message || "",
        attendance: values.attendance,
        createdAt: new Date().toLocaleString("vi-VN"), // Lưu ngày giờ gửi
      });

      //Hiệu ứng ơi pháo 
      setShowConfetti(false);
      setTimeout(() => setShowConfetti(true), 50);
      form.resetFields();

      console.log("Đã gửi lời chúc thành công!");
    } catch (error) {
      console.error("Lỗi gửi dữ liệu:", error);
      alert("Có lỗi xảy ra, Uyên kiểm tra lại kết nối mạng nhé!");
    }

    // Tự động tắt pháo hoa sau 8 giây cho nhẹ máy
    setTimeout(() => setShowConfetti(false), 8000);
  };

  return (
    <div className="wedding-wrapper">
      {/* --- PHẦN LỊCH --- */}
      <div className="header-artistic">
        <span className="month-title">Tháng 4</span>
        <span className="year-title">2026</span>
      </div>

      <div className="calendar-grid">
        <div className="weekdays">
          {["T2", "T3", "T4", "T5", "T6", "T7", "CN"].map((d) => (
            <div key={d}>{d}</div>
          ))}
        </div>
        <div className="days">
          {days.map((day, index) => (
            <div key={index} className="day-cell">
              {day === 12 ? (
                <div className="heart-wrapper">
                  <HeartFilled className="heart-icon blinking" />
                  <span className="day-number">{day}</span>
                </div>
              ) : (
                <span className={(index + 1) % 7 === 0 ? "sunday-text" : ""}>
                  {day}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* --- PHẦN FORM XÁC NHẬN -- */}
      <div className="confirm-section">
        <p data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-duration="1500" className="confirm-text">
          Mỗi lời chúc, mỗi sự hiện diện đều là điều đáng quý mà chúng tôi luôn
          trân trọng. Cảm ơn vì bạn đã là một phần trong ngày đặc biệt này 💌
        </p>

        <div
          className="form-container-box"
          ref={formBoxRef}
          style={{ position: "relative", overflow: "hidden" }}
        >
          {showConfetti && (
            <Confetti
              width={formBoxSize.width}
              height={formBoxSize.height}
              numberOfPieces={200}
              recycle={false}
              gravity={0.12}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 1,
                pointerEvents: "none",
              }}
            />
          )}

          <Form
            form={form}
            onFinish={onFinish}
            layout="vertical"
            style={{ position: "relative", zIndex: 2 }}
          >
            <Form.Item
              name="name"
              rules={[{ required: true, message: "Vui lòng nhập tên" }]}
            >
              <Input placeholder="Tên của bạn" className="custom-input" />
            </Form.Item>

            <Form.Item name="message">
              <Input placeholder="Lời nhắn của bạn" className="custom-input" />
            </Form.Item>

            <Form.Item
              name="attendance"
              rules={[{ required: true, message: "Vui lòng chọn trạng thái" }]}
            >
              <Radio.Group className="custom-radio-group">
                <Radio value="yes">Mình sẽ tham dự</Radio>
                <Radio value="no">Thật tiếc mình bận mất rồi</Radio>
                <Radio value="maybe">Mình đang cân nhắc</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item style={{ marginBottom: 0 }}>
              <Button
                type="default"
                htmlType="submit"
                className="custom-submit-btn"
              >
                GỬI LỜI NHẮN VÀ XÁC NHẬN
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
