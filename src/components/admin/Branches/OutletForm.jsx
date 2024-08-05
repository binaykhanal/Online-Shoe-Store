import React, { useState } from "react";
import { Button, Modal, Form, Input, notification } from "antd";
import { useAddBranchMutation } from "../../../services/outletSlice";

const OutletForm = () => {
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [addBranch] = useAddBranchMutation();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const onFinish = async (values) => {
    let formData = new FormData();
    formData.append("name", values.name);
    formData.append("address", values.address);
    formData.append("phone_number", values.phone_number);
    if (selectedImage) {
      formData.append("image", selectedImage);
    }

    try {
      await addBranch(formData).unwrap();
      notification.success({
        message: "Success",
        description: "Branch added successfully!",
        duration: 1.5,
      });
      form.resetFields();
      setSelectedImage(null);

      setTimeout(() => {
        setIsModalOpen(false);
      }, 1500);
    } catch (error) {
      console.error("Error adding branch:", error);
      notification.error({
        message: "Error",
        description: "An error occurred while adding the branch.",
      });
    }
  };

  return (
    <div>
      <Button type="primary" onClick={showModal} className="mb-4 ">
        Add New Branch
      </Button>
      <Modal
        className="text-center"
        title="Add New Branch"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          style={{
            maxWidth: 600,
          }}
          onFinish={onFinish}
          form={form}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter name!" }]}
          >
            <Input className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </Form.Item>
          <Form.Item
            label="address"
            name="address"
            rules={[{ required: true, message: "Please enter address!" }]}
          >
            <Input className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </Form.Item>
          <Form.Item
            label="Phone Number"
            name="phone_number"
            rules={[
              {
                required: true,
                message: "Please enter phone Number!",
              },
            ]}
          >
            <Input className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </Form.Item>
          <Form.Item label="Image" name="image">
            <div className="flex items-center">
              <Input
                type="file"
                accept="image/*"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                onChange={handleImageChange}
              />
              {selectedImage && (
                <img
                  src={URL.createObjectURL(selectedImage)}
                  alt="Selected"
                  className="ml-2 h-8"
                />
              )}
            </div>
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 6,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default OutletForm;
