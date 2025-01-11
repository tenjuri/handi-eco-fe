import React, { useEffect, useState } from "react";
import { useUserStore } from "@/store/user.store";
import UsersList from "./list";
import CreateUserForm from "./create-form";
import { Button } from "antd";
const Users: React.FC = () => {
  const isRootAdmin = useUserStore((state) => state.getIsRootAdmin());
  const refreshUserToken = useUserStore((state) => state.refreshUserToken);

  useEffect(() => {
    refreshUserToken();
  }, [refreshUserToken]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="w-full max-w-[1400px] mx-auto mt-10">
      <p>Users</p>
      {isRootAdmin && (
        <Button
          type="primary"
          onClick={() => setIsModalOpen(true)}
          className="mt-5"
        >
          Create User
        </Button>
      )}
      <UsersList />
      <CreateUserForm
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Users;
