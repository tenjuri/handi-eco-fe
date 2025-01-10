import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "antd";
import { useUserStore } from "@/store/user.store";
import LogoutBtn from "./logout-btn";

const Admin: React.FC = () => {
  const isRootAdmin = useUserStore((state) => state.getIsRootAdmin());
  const isAdmin = useUserStore((state) => state.getIsAdmin());
  const isLoggedIn = useUserStore((state) => state.getIsLoggedIn());
  const refreshUserToken = useUserStore((state) => state.refreshUserToken);
  const router = useRouter();
  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/admin/login");
    }
  }, [isLoggedIn]);

  useEffect(() => {
    refreshUserToken();
  }, [refreshUserToken]);

  return (
    <div className="w-full max-w-[1400px] mx-auto mt-10">
      <p>Admin</p>
      <LogoutBtn />
      {isRootAdmin && (
        <>
          <Button onClick={() => router.push("/admin/users")}>
            Go to Users
          </Button>
          <Button onClick={() => router.push("/admin/blogs")}>
            Go to Add News
          </Button>
        </>
      )}
      {isAdmin && (
        <Button onClick={() => router.push("/admin/news")}>Go to News</Button>
      )}
    </div>
  );
};

export default Admin;
