import React from "react";
import Editor from "./editor";

const Blogs: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col flex-grow">
      <div className="w-full max-w-[1440px] mx-auto mt-10">
        <Editor />
      </div>
    </div>
  );
};

export default Blogs;
