import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import isHotkey from "is-hotkey";
import {
  Editable,
  withReact,
  Slate,
  RenderLeafProps,
  RenderElementProps,
} from "slate-react";
import { Transforms, createEditor, Descendant } from "slate";
import { withHistory } from "slate-history";
import {
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  MessageSquareCode,
  ListIcon,
  AlignCenter,
  AlignLeft,
  AlignRight,
  PaletteIcon,
} from "lucide-react";
import { message, Button as AntdButton } from "antd";

import axiosInstance from "@/utils/axiosConfig";

import { getAxiosErrorMessage, withInlines, withImages } from "@/lib/utils";

import AddLinkButton from "./components/add-link-button";
import RemoveLinkButton from "./components/remove-link-button";
import Leaf from "./components/leaf";
import BlockButton from "./components/block-button";
import MarkButton from "./components/mark-button";
import InsertImageButton from "./components/insert-image-button";
import Element from "./components/element";
import { AxiosError } from "axios";

const RichTextExample = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const slugName = searchParams.get("slug");
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(false);
  const renderElement = useCallback(
    (props: RenderElementProps) => <Element {...props} />,
    []
  );
  const renderLeaf = useCallback(
    (props: RenderLeafProps) => <Leaf {...props} />,
    []
  );
  const editor = useMemo(
    () => withInlines(withImages(withHistory(withReact(createEditor())))),
    []
  );

  const initialValue: Descendant[] = [];

  const [value, setValue] = React.useState<Descendant[]>(initialValue);
  const [title, setTitle] = React.useState("");
  const [banner, setBanner] = React.useState("");

  const handleSave = async () => {
    if (!title || !value) {
      messageApi.error("Please enter a title and content");
      return;
    }
    setLoading(true);
    try {
      await axiosInstance.post("/blogs/new", {
        title,
        content: JSON.stringify(value),
        banner: banner,
      });
      messageApi.success("Save success");
      setTimeout(() => {
        router.push(`/en/admin/news`);
      }, 700);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        const errorMessage = getAxiosErrorMessage(error);
        messageApi.error(errorMessage);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = async () => {
    if (!slugName || !value) {
      messageApi.error("Please enter a slug and content");
      return;
    }
    setLoading(true);
    try {
      await axiosInstance.post(`/blogs/update/${slugName}`, {
        content: JSON.stringify(value),
        banner,
        title,
      });
      messageApi.success("Edit success");
      setTimeout(() => {
        router.push(`/en/admin/news`);
      }, 700);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        const errorMessage = getAxiosErrorMessage(error);
        messageApi.error(errorMessage);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (slugName) {
      getPost(slugName);
    } else {
      setValue([
        {
          type: "paragraph",
          children: [{ text: "" }],
        },
      ]);
    }
  }, [slugName]);

  const getPost = async (slug: string) => {
    setLoading(true);
    try {
      const { data } = await axiosInstance.get(`/blogs/${slug}`);
      const parsedContent = JSON.parse(data.content);
      setBanner(data.banner);
      setTitle(data.title);
      if (Array.isArray(parsedContent) && parsedContent.length > 0) {
        setValue(parsedContent);
      }
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        const errorMessage = getAxiosErrorMessage(error);
        messageApi.error(errorMessage);
      }
    } finally {
      setLoading(false);
    }
  };
  const onSave = () => {
    if (!title || !value) {
      messageApi.error("Please enter a title and content");
      return;
    }
    if (slugName) {
      handleEdit();
    } else {
      handleSave();
    }
  };

  return (
    <div>
      {contextHolder}
      <div>
        <p className="text-gray-500">Banner</p>
        <input
          type="text"
          value={banner}
          placeholder="Enter banner"
          className="w-full border border-gray-300 rounded-md p-2 focus-visible:outline-none"
          onChange={(e) => setBanner(e.target.value)}
        />
        <p className=" text-gray-500 mt-4">Title</p>
        <input
          type="text"
          value={title}
          className="w-full border border-gray-300 rounded-md p-2 focus-visible:outline-none"
          onChange={(e) => setTitle(e.target.value)}
        />
        <AntdButton
          className="bg-blue-500 text-white mt-2"
          onClick={onSave}
          loading={loading}
          disabled={loading}
        >
          Save
        </AntdButton>
      </div>
      {value.length > 0 && (
        <Slate editor={editor} initialValue={value} onChange={setValue}>
          <div className="fixed top-10 right-3  flex flex-col items-center gap-2 mt-10">
            <InsertImageButton />
            <MarkButton format="bold" icon={<BoldIcon className="w-5 h-5" />} />
            <MarkButton
              format="italic"
              icon={<ItalicIcon className="w-5 h-5" />}
            />
            <MarkButton
              format="underline"
              icon={<UnderlineIcon className="w-5 h-5" />}
            />
            <AddLinkButton />
            <RemoveLinkButton />
            <MarkButton format="color" icon={<PaletteIcon />} />
            <BlockButton format="heading" icon={<Heading1 />} />
            <BlockButton format="heading-two" icon={<Heading2 />} />
            <BlockButton format="heading-three" icon={<Heading3 />} />
            <BlockButton format="heading-four" icon={<Heading4 />} />
            <BlockButton format="block-quote" icon={<MessageSquareCode />} />
            <BlockButton format="check-list-item" icon={<ListIcon />} />
            <BlockButton format="left" icon={<AlignLeft />} />
            <BlockButton format="center" icon={<AlignCenter />} />
            <BlockButton format="right" icon={<AlignRight />} />
          </div>
          <Editable
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            autoFocus
            spellCheck={false}
            onKeyDown={(event) => {
              if (isHotkey("mod+a", event)) {
                event.preventDefault();
                Transforms.select(editor, []);
              }
            }}
            className="border border-gray-300 rounded-md p-2 unset-height mt-10 focus-visible:outline-none"
          />
        </Slate>
      )}
    </div>
  );
};

export default RichTextExample;
