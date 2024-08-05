import { useNavigate } from "react-router-dom";
import { Form, Input, notification } from "antd";
import { AntdInput, ValidationBtn } from "./common/utilities";
import {
  useAddUserMutation,
  useCheckEmailMutation,
} from "../services/registerSlice";
import { LayoutContext } from "../layout/UserLayout";
import { useContext } from "react";

const SignUp = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const { handleSignUpSuccess, switchToLogin } = useContext(LayoutContext);
  const [addUser] = useAddUserMutation();
  // const [checkEmail]=useCheckEmailMutation();

  const handleFinish = async (values) => {
    console.log("user:", values);
    try {
      await addUser(values).unwrap();
      notification.success({
        message: "Success",
        description: "Registration sussessfull!",
        duration: 1.5,
      });
      form.resetFields();
      navigate("/");
      handleSignUpSuccess();
    } catch (error) {
      notification.error({
        message: "Error",
        description: error.message,
      });
    }
  };

  return (
    <div className="container mx-auto my-5">
      <h1 className="font-bold text-2xl text-center mb-5">REGISTRATION FORM</h1>

      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
        className="px-4"
        requiredMark={false}
      >
        <AntdInput label="First Name" name="firstname" required />
        <AntdInput label="Last Name" name="lastname" required />
        <AntdInput label="Username" name="username" required />
        <AntdInput label="Email" name="email" type="email" required />
        <AntdInput label="Address" name="address" type="text" required />

        <Form.Item
          label="Contact Number"
          name="contactnumber"
          rules={[
            { required: true, message: "Contact Number is required" },
            { pattern: /^\d{10}$/, message: "Contact Number is invalid" },
          ]}
        >
          <Input className=" bg-zinc-300 border-none py-0 md:py-3" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Password is required" }]}
        >
          <Input.Password className=" bg-zinc-300 border-none py-0 md:py-3" />
        </Form.Item>

        <Form.Item
          label="Confirm Password"
          name="password2"
          rules={[{ required: true, message: "Password is required" }]}
        >
          <Input.Password className=" bg-zinc-300 border-none py-0 md:py-3" />
        </Form.Item>

        <ValidationBtn htmlType="submit" name="SignUp" />
        <div className="mt-2 text-center">
          Already have an account?{" "}
          <ValidationBtn name="Login" onClick={switchToLogin} />
        </div>
      </Form>
    </div>
  );
};

export default SignUp;
