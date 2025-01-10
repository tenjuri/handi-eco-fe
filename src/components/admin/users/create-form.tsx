import { User } from "@/model/user.model";
import axiosInstance from "@/utils/axiosConfig";
import { message, Checkbox, Form, Input, Modal } from "antd";

type CreateUserFormProps = {
  open: boolean;
  onClose: () => void;
};
const CreateUserForm: React.FC<CreateUserFormProps> = ({ open, onClose }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm<User>();

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      await axiosInstance.post("/users/create", values);
      messageApi.success("User created successfully");
      onClose();
    } catch (error) {
      console.log(error);
      messageApi.error("Failed to create user");
    }
  };

  return (
    <Modal open={open} onOk={handleSubmit} onCancel={onClose}>
      {contextHolder}
      <Form form={form} layout="vertical">
        <Form.Item label="Name" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="Username" name="userName">
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input />
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
