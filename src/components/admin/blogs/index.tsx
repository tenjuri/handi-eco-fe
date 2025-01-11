import React, { useEffect } from "react";
import Editor from "./editor";
import { useUserStore } from "@/store/user.store";

const Blogs: React.FC = () => {
  const refreshUserToken = useUserStore((state) => state.refreshUserToken);

  useEffect(() => {
    refreshUserToken();
  }, [refreshUserToken]);

  return (
    <div className="w-full h-full flex flex-col flex-grow">
      <div className="w-full max-w-[1440px] mx-auto mt-10">
        <Editor />
      </div>
    </div>
  );
};

export default Blogs;
