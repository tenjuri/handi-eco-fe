import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/store/user.store";

const Admin: React.FC = () => {
  const isLoggedIn = useUserStore((state) => state.getIsLoggedIn());
  const refreshUserToken = useUserStore((state) => state.refreshUserToken);
  const router = useRouter();
  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/admin/login");
    }
  }, [isLoggedIn, router]);

  useEffect(() => {
    refreshUserToken();
  }, [refreshUserToken]);

  return (
    <div className="w-full max-w-[1400px] mx-auto mt-10">
      <p>Admin</p>
      <p>
        Welcome to the admin page. Here you can manage the website.
        <br />
        Please use the navigation bar to navigate to the different sections.
      </p>
    </div>
  );
};

export default Admin;
