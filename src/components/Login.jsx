import { Checkbox, Form, Input, Modal } from "antd";
import { useNavigate } from "react-router-dom";
// import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useUserLoginMutation } from "../services/loginSlice";
import { login } from "../features/authSlice";
import { AntdInput, ValidationBtn } from "./common/utilities";
import ForgotPassword from "./ForgotPassword";
import { useState, useContext } from "react";
import { LayoutContext } from "../layout/UserLayout";

const Login = () => {
  const { onCloseb, handleLoginSuccess, switchToSignUp } =
    useContext(LayoutContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userLogin] = useUserLoginMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = async (values) => {
    try {
      const response = await userLogin(values).unwrap();

      if (response) {
        localStorage.setItem("accesstoken", response.token.access);
        alert("Login successful!");
        navigate("/");
        handleLoginSuccess();
        dispatch(login());
        onCloseb();
      } else {
        alert("Login failed. Please check your username and password.");
      }
    } catch (error) {
      alert("Internal server error", error);
    }
  };

  return (
    <>
      <h1 className="font-bold text-2xl text-center mb-5">LOGIN</h1>
      <Form layout="vertical" onFinish={onFinish} requiredMark={false}>
        <AntdInput
          label=<h1 className=" font-poppins font-medium text-sm lg:text-[16px]">
            Email
          </h1>
          name="email"
          type="email"
        />

        <Form.Item
          label=<h1 className=" font-poppins font-medium text-sm lg:text-[16px]">
            Password
          </h1>
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
            placeholder="Password"
            name="password"
            className=" bg-zinc-300 border-none py-0 md:py-3"
          />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <div className="flex justify-between items-center">
            <Checkbox>Remember me</Checkbox>

            <span
              className=" text-green-700 text-lg cursor-pointer"
              onClick={showModal}
            >
              Forgot Password?
            </span>
          </div>
        </Form.Item>

        <Form.Item className="text-center ">
          <ValidationBtn name="Login" htmlType="submit" />
          <div className="mt-2 font-poppins">
            <p> Are you Registered? If not..</p>
            <span
              className="text-red-600 cursor-pointer font-semibold"
              onClick={switchToSignUp}
            >
              Sign Up
            </span>
          </div>
        </Form.Item>
      </Form>

      <h3
        className=" text-orange-400 font-semibold text-sm lg:text-lg"
        onClick={() => navigate("/admin")}
      >
        Admin?
      </h3>

      <Modal
        title="Forgot Password?"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ForgotPassword />
      </Modal>
    </>
  );
};

export default Login;
