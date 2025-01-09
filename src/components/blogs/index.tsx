import React from "react";
import axiosInstance from "@/utils/axiosConfig";

type BlogProps = {
  slug: string;
};

type Child = {
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  code?: boolean;
  url?: string;
  color?: string;
  type?: string;
  children?: Child[];
};

type Content = {
  children: Child[];
  type: string;
  url?: string;
  color?: string;
};
const Blogs: React.FC<BlogProps> = async (props) => {
  const { slug } = props;
  const { data } = await axiosInstance.get(`/blogs/${slug}`);
  const parsedContent = JSON.parse(data.content);
  console.log(parsedContent);

  const renderContent = () => {
    return parsedContent.map((item: Content, index: number) => {
      switch (item.type) {
        case "heading":
          return (
            <h1
              key={index}
              className="font-bold text-4xl"
              style={{ color: item.color }}
            >
              {item.children[0].text ? (
                <span>{item.children[0].text}</span>
              ) : (
                <br />
              )}
            </h1>
          );
        case "heading-two":
          return (
            <h2
              key={index}
              className="font-bold text-3xl"
              style={{ color: item.color }}
            >
              {item.children[0].text ? (
                <span>{item.children[0].text}</span>
              ) : (
                <br />
              )}
            </h2>
          );
        case "heading-three":
          return (
            <h3
              key={index}
              className="font-bold text-2xl"
              style={{ color: item.color }}
            >
              {item.children[0].text ? (
                <span>{item.children[0].text}</span>
              ) : (
                <br />
              )}
            </h3>
          );
        case "heading-four":
          return (
            <h4
              key={index}
              className="font-bold text-xl"
              style={{ color: item.color }}
            >
              {item.children[0].text ? (
                <span>{item.children[0].text}</span>
              ) : (
                <br />
              )}
            </h4>
          );
        case "block-quote":
          return (
            <blockquote key={index} style={{ color: item.color }}>
              {item.children[0].text ? (
                <span>{item.children[0].text}</span>
              ) : (
                <br />
              )}
            </blockquote>
          );
        case "paragraph":
          return (
            <p key={index}>
              {item.children.map((child: Child, index: number) => {
                return (
                  <span
                    key={index}
                    className={`${child.bold ? "font-bold" : ""} ${
                      child.italic ? "italic" : ""
                    } ${child.underline ? "underline" : ""}`}
                    style={{ color: child?.color }}
                  >
                    {child.type === "link" ? (
                      <a
                        href={child.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline cursor-pointer"
                      >
                        {child.children?.[0]?.text}
                      </a>
                    ) : child.text ? (
                      <span>{child.text}</span>
                    ) : (
                      <br />
                    )}
                  </span>
                );
              })}
            </p>
          );
        case "check-list-item":
          return (
            <ul key={index} className="ml-6">
              {item.children.map((child: Child, index: number) => {
                return (
                  <li
                    key={index}
                    className="list-disc"
                    style={{ color: item.color }}
                  >
                    {child.children?.[0]?.text}
                  </li>
                );
              })}
            </ul>
          );
        case "image":
          return <img key={index} src={item.url} alt="image" />;
        default:
          return <div key={index}>{item.type}</div>;
      }
    });
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto mt-10">{renderContent()}</div>
  );
};

export default Blogs;
