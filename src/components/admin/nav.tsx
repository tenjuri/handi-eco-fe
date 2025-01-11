import React from "react";
import Link from "next/link";
import LogoutBtn from "./logout-btn";
import { useUserStore } from "@/store/user.store";

const AdminNav: React.FC = () => {
  const isRootAdmin = useUserStore((state) => state.getIsRootAdmin());

  return (
    <div className="flex justify-center items-center gap-4 mt-4">
      <Link href="/admin" className="cursor-pointer">
        Admin
      </Link>
      {isRootAdmin && (
        <Link href="/admin/blogs" className="cursor-pointer">
          Create Blog
        </Link>
      )}
      <Link href="/admin/news" className="cursor-pointer">
        News
      </Link>
      {isRootAdmin && (
        <Link href="/admin/users" className="cursor-pointer">
          Users
        </Link>
      )}
      <LogoutBtn />
    </div>
  );
};

export default AdminNav;
