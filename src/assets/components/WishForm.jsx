import { Form, Input, Button } from "antd"

export default function WishForm() {
  return (
    <section className="section">
      <h2>Gửi lời chúc 💌</h2>

      <Form>
        <Form.Item>
          <Input placeholder="Tên của bạn" />
        </Form.Item>

        <Form.Item>
          <Input.TextArea placeholder="Lời chúc" />
        </Form.Item>

        <Button type="primary" block>
          Gửi
        </Button>
      </Form>
    </section>
  )
}