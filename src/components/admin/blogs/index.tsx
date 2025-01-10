import React, { useEffect } from "react";
import Editor from "./editor";
import { useUserStore } from "@/store/user.store";
import { useRouter } from "next/navigation";

const Blogs: React.FC = () => {
  const router = useRouter();
  const isLoggedIn = useUserStore((state) => state.getIsLoggedIn());
  const isRootAdmin = useUserStore((state) => state.getIsRootAdmin());
  const refreshUserToken = useUserStore((state) => state.refreshUserToken);

  useEffect(() => {
    refreshUserToken();
  }, [refreshUserToken]);

  useEffect(() => {
    if (!isLoggedIn || !isRootAdmin) {
      router.push("/admin");
    }
  }, [isLoggedIn, isRootAdmin]);

  return (
    <div className="w-full h-full flex flex-col flex-grow">
      <div className="w-full max-w-[1440px] mx-auto mt-10">
        <Editor />
      </div>
    </div>
  );
};

export default Blogs;
