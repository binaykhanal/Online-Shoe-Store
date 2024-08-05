import React, { useState } from "react";
import { Form, Input, Button, Alert } from "antd";
import { useResetPasswordMutation } from "../services/loginSlice";
import FormItemLabel from "antd/es/form/FormItemLabel";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [resetPassword, { isLoading, isSuccess, isError }] =
    useResetPasswordMutation();
  const [errormsg, setErrormsg] = useState("");

  const handleSubmit = async (values) => {
    try {
      const response = await resetPassword(values.email).unwrap();
      console.log(response);
    } catch (err) {
      setErrormsg("Internal Server Error ");
    }
  };

  return (
    <div>
      <Form
        name="forgot_password"
        initialValues={{ email }}
        onFinish={handleSubmit}
      >
        <Form.Item
          label="Enter your Email:"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            {isLoading ? "Sending..." : "Send Reset Link"}
          </Button>
        </Form.Item>
      </Form>
      {isSuccess && (
        <Alert message="Password reset link sent!" type="success" showIcon />
      )}
      {isError && <Alert message={errormsg} type="error" showIcon />}
    </div>
  );
};

export default ForgotPassword;
