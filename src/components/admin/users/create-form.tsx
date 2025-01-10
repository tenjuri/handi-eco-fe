import { getAxiosErrorMessage } from "@/lib/utils";
import { CreateUser } from "@/model/user.model";
import axiosInstance from "@/utils/axiosConfig";
import { message, Checkbox, Form, Input, Modal } from "antd";
import { AxiosError } from "axios";
import { useState } from "react";

type CreateUserFormProps = {
  open: boolean;
  onClose: () => void;
};
const CreateUserForm: React.FC<CreateUserFormProps> = ({ open, onClose }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm<CreateUser>();

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const values = await form.validateFields();
      console.log(values);
      if (!values.name || !values.userName || !values.password) {
        messageApi.error("Please fill all fields");
        return;
      }
      await axiosInstance.post("/users/create", values);
      messageApi.success("User created successfully");
      onClose();
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMessage = getAxiosErrorMessage(error);
        messageApi.error(errorMessage);
      }
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    form.resetFields();
    onClose();
  };

  return (
    <Modal
      open={open}
      onOk={handleSubmit}
      onCancel={closeModal}
      confirmLoading={loading}
    >
      {contextHolder}
      <Form form={form} layout="vertical">
        <Form.Item label="Name" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="Username" name="userName">
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input type="password" />
        </Form.Item>
        <Form.Item label="Is Admin" name="isAdmin" valuePropName="checked">
          <Checkbox />
        </Form.Item>
        <Form.Item
          label="Is Root Admin"
          name="isRootAdmin"
          valuePropName="checked"
        >
          <Checkbox />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateUserForm;
