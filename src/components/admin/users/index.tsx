import React, { useEffect, useState } from "react";
import { useUserStore } from "@/store/user.store";
import { useRouter } from "next/navigation";
import UsersList from "./list";
import CreateUserForm from "./create-form";
import { Button } from "antd";
import LogoutBtn from "../logout-btn";
const Users: React.FC = () => {
  const isRootAdmin = useUserStore((state) => state.getIsRootAdmin());
  const refreshUserToken = useUserStore((state) => state.refreshUserToken);
  const router = useRouter();
  useEffect(() => {
    if (!isRootAdmin) {
      router.push("/admin");
    }
  }, [isRootAdmin]);

  useEffect(() => {
    refreshUserToken();
  }, [refreshUserToken]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="w-full max-w-[1400px] mx-auto mt-10">
      <p>Users</p>
      <LogoutBtn />
      <Button onClick={() => router.push("/en/admin")} className="mt-4">
        Go to Admin Page
      </Button>
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
