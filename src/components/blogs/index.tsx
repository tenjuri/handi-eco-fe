import React from "react";
import axiosInstance from "@/utils/axiosConfig";

type BlogProps = {
  slug: string;
};
const Blogs: React.FC<BlogProps> = async (props) => {
  const { slug } = props;
  const { data } = await axiosInstance.get(`/blogs/${slug}`);
  return (
    <div>
      <h1>{data.title}</h1>
    </div>
  );
};

export default Blogs;
