import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:8080/api/v1/users/register", values);
      setLoading(false);
      if (res.data.success) {
        message.success("Registration successful!");
        navigate("/login"); // Redirect to login page
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      setLoading(false);
      console.error("❌ Registration Error:", error.response ? error.response.data : error.message);
      message.error("Registration failed!");
    }
  };

  return (
    <div className="register-page">
      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item label="Name" name="name" rules={[{ required: true, message: "Please input your name!" }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Email" name="email" rules={[{ required: true, message: "Please input your email!" }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password" rules={[{ required: true, message: "Please input your password!" }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegisterPage;
