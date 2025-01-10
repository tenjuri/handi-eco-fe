import React, { useCallback, useEffect, useMemo } from "react";
import axiosInstance from "@/utils/axiosConfig";
import imageExtensions from "image-extensions";
import isHotkey from "is-hotkey";
import isUrl from "is-url";
import {
  Editable,
  withReact,
  useSlate,
  Slate,
  useSlateStatic,
  ReactEditor,
  useFocused,
  useSelected,
  RenderLeafProps,
  RenderElementProps,
} from "slate-react";
import {
  Editor,
  Transforms,
  createEditor,
  Descendant,
  Element as SlateElement,
  Range,
} from "slate";
import { withHistory } from "slate-history";
import { css } from "@emotion/css";
import {
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
  ImageIcon,
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
  LinkIcon,
  UnlinkIcon,
} from "lucide-react";
import { message } from "antd";

import { Button } from "./components";

import {
  ImageElement,
  CustomElement,
  CustomText,
  LinkElement,
} from "./custom-types";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const LIST_TYPES = ["numbered-list", "bulleted-list", "check-list-item"];
const TEXT_ALIGN_TYPES = ["left", "center", "right", "justify"];

const RichTextExample = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const slugName = searchParams.get("slug");
  const [messageApi, contextHolder] = message.useMessage();
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
      alert("Please enter a title and content");
      return;
    }
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
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async () => {
    if (!slugName || !value) {
      alert("Please enter a slug and content");
      return;
    }
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
    } catch (error) {
      console.log(error);
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
    try {
      const { data } = await axiosInstance.get(`/blogs/${slug}`);
      const parsedContent = JSON.parse(data.content);
      setBanner(data.banner);
      setTitle(data.title);
      if (Array.isArray(parsedContent) && parsedContent.length > 0) {
        setValue(parsedContent);
      }
    } catch (error) {
      console.error("Error fetching post:", error);
    }
  };
  const onSave = () => {
    if (!title || !value) {
      alert("Please enter a title and content");
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
      <div
        onClick={() => router.push("/en/admin")}
        className="rounded border w-max px-2 py-1 cursor-pointer"
      >
        Go to Admin Page
      </div>
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
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
          onClick={onSave}
        >
          Save
        </button>
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

const withInlines = (editor: Editor) => {
  const { insertData, insertText, isInline, isElementReadOnly, isSelectable } =
    editor;

  editor.isInline = (element) =>
    ["link", "button", "badge"].includes(element.type) || isInline(element);

  editor.isElementReadOnly = (element) =>
    element.type === "badge" || isElementReadOnly(element);

  editor.isSelectable = (element) =>
    element.type !== "badge" && isSelectable(element);

  editor.insertText = (text) => {
    if (text && isUrl(text)) {
      wrapLink(editor, text);
    } else {
      insertText(text);
    }
  };

  editor.insertData = (data) => {
    const text = data.getData("text/plain");

    if (text && isUrl(text)) {
      wrapLink(editor, text);
    } else {
      insertData(data);
    }
  };

  return editor;
};

const AddLinkButton: React.FC = () => {
  const editor = useSlate();
  return (
    <Button
      active={isLinkActive(editor)}
      onMouseDown={(event: React.MouseEvent) => {
        event.preventDefault();
        const url = window.prompt("Enter the URL of the link:");
        if (!url) return;
        insertLink(editor, url);
      }}
    >
      <LinkIcon className="w-5 h-5" />
    </Button>
  );
};

const RemoveLinkButton: React.FC = () => {
  const editor = useSlate();

  return (
    <Button
      active={isLinkActive(editor)}
      onMouseDown={(event: React.MouseEvent) => {
        event.preventDefault();
        if (isLinkActive(editor)) {
          unwrapLink(editor);
        }
      }}
    >
      <UnlinkIcon className="w-5 h-5" />
    </Button>
  );
};

const insertLink = (editor: Editor, url: string) => {
  if (editor.selection) {
    wrapLink(editor, url);
  }
};

const unwrapLink = (editor: Editor) => {
  Transforms.unwrapNodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === "link",
  });
};

const wrapLink = (editor: Editor, url: string) => {
  if (isLinkActive(editor)) {
    unwrapLink(editor);
  }
  const { selection } = editor;
  const isCollapsed = selection && Range.isCollapsed(selection);
  const link: LinkElement = {
    type: "link",
    url,
    children: isCollapsed ? [{ text: url }] : [],
  };
  if (isCollapsed) {
    Transforms.insertNodes(editor, link);
  } else {
    Transforms.wrapNodes(editor, link, { split: true });
    Transforms.collapse(editor, { edge: "end" });
  }
};

const isLinkActive = (editor: Editor) => {
  const [link] = Editor.nodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === "link",
  });
  return !!link;
};

const InlineChromiumBugfix = () => (
  <span
    contentEditable={false}
    className={css`
      font-size: 0;
    `}
  >
    {String.fromCodePoint(160) /* Non-breaking space */}
  </span>
);

type LinkComponentProps = {
  attributes: RenderElementProps["attributes"];
  children: React.ReactNode;
  element: LinkElement;
};

const LinkComponent: React.FC<LinkComponentProps> = ({
  attributes,
  children,
  element,
}) => {
  const allowedSchemes = ["http:", "https:", "mailto:", "tel:"];
  const safeUrl = useMemo(() => {
    let parsedUrl: URL | null = null;
    try {
      parsedUrl = new URL(element.url);
      // eslint-disable-next-line no-empty
    } catch {}
    if (parsedUrl && allowedSchemes.includes(parsedUrl.protocol)) {
      return parsedUrl.href;
    }
    return "about:blank";
  }, [element.url]);

  return (
    <a {...attributes} href={safeUrl} className="text-blue-500 underline">
      <InlineChromiumBugfix />
      {children}
      <InlineChromiumBugfix />
    </a>
  );
};

type ToggleBlockProps = {
  editor: Editor;
  format: string;
};
const toggleBlock = ({ editor, format }: ToggleBlockProps) => {
  const isActive = isBlockActive(
    editor,
    format,
    TEXT_ALIGN_TYPES.includes(format) ? "align" : "type"
  );
  const isList = LIST_TYPES.includes(format);

  Transforms.unwrapNodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) &&
      SlateElement.isElement(n) &&
      LIST_TYPES.includes(n.type) &&
      !TEXT_ALIGN_TYPES.includes(format),
    split: true,
  });
  let newProperties: Partial<SlateElement>;
  if (TEXT_ALIGN_TYPES.includes(format)) {
    newProperties = {
      align: isActive ? undefined : format,
    };
  } else {
    const type = isActive ? "paragraph" : isList ? "list-item" : format;
    newProperties = {
      type: type as CustomElement["type"],
    };
  }

  Transforms.setNodes<SlateElement>(editor, newProperties);

  if (!isActive && isList) {
    const block = { type: format, children: [] } as CustomElement;
    Transforms.wrapNodes(editor, block);
  }
};

type ToggleMarkProps = {
  editor: Editor;
  format: string;
};
const toggleMark = ({ editor, format }: ToggleMarkProps) => {
  const isActive = isMarkActive(editor, format);
  console.log(format);

  if (format === "color") {
    const color = window.prompt("Enter color:");
    Editor.addMark(editor, format, color);
  } else {
    if (isActive) {
      Editor.removeMark(editor, format);
    } else {
      Editor.addMark(editor, format, true);
    }
  }
};

const isBlockActive = (editor: Editor, format: string, blockType = "type") => {
  const { selection } = editor;
  if (!selection) return false;

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: (n) =>
        !Editor.isEditor(n) &&
        SlateElement.isElement(n) &&
        n[blockType as keyof CustomElement] === format,
    })
  );

  return !!match;
};

const isMarkActive = (editor: Editor, format: string) => {
  const marks = Editor.marks(editor);
  // @ts-expect-error - Slate's marks can have dynamic string keys for formatting
  return marks ? marks[format] === true : false;
};

type CustomRenderLeafProps = {
  children: React.ReactNode;
  leaf: CustomText;
  text: CustomText;
  attributes: {
    "data-slate-leaf": true;
  };
};

const Leaf = ({ attributes, children, leaf }: CustomRenderLeafProps) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  return (
    <span {...attributes} style={{ color: leaf.color }}>
      {children}
    </span>
  );
};

type BlockButtonProps = {
  format: string;
  icon: React.ReactNode;
};
const BlockButton: React.FC<BlockButtonProps> = ({ format, icon }) => {
  const editor = useSlate();
  return (
    <Button
      active={isBlockActive(
        editor,
        format,
        TEXT_ALIGN_TYPES.includes(format) ? "align" : "type"
      )}
      onMouseDown={(event: React.MouseEvent) => {
        event.preventDefault();
        toggleBlock({ editor, format });
      }}
    >
      {icon && icon}
    </Button>
  );
};

type MarkButtonProps = { format: string; icon: React.ReactNode };
const MarkButton: React.FC<MarkButtonProps> = (props) => {
  const editor = useSlate();
  const { format, icon } = props;

  return (
    <>
      <Button
        active={isMarkActive(editor, format)}
        onMouseDown={(event: React.MouseEvent) => {
          event.preventDefault();
          toggleMark({ editor, format });
        }}
      >
        {icon && icon}
      </Button>
    </>
  );
};

const withImages = (editor: Editor) => {
  const { insertData, isVoid } = editor;

  editor.isVoid = (element) => {
    return element.type === "image" ? true : isVoid(element);
  };

  editor.insertData = (data) => {
    const text = data.getData("text/plain");
    const { files } = data;

    if (files && files.length > 0) {
      for (const file of files) {
        const reader = new FileReader();
        const [mime] = file.type.split("/");

        if (mime === "image") {
          reader.addEventListener("load", () => {
            const url = reader.result;
            if (typeof url === "string") {
              insertImage(editor, url);
            }
          });

          reader.readAsDataURL(file);
        }
      }
    } else if (isImageUrl(text)) {
      insertImage(editor, text);
    } else {
      insertData(data);
    }
  };

  return editor;
};

const insertImage = (editor: Editor, url: string) => {
  const text = { text: "" };
  const image: ImageElement = { type: "image", url, children: [text] };
  Transforms.insertNodes(editor, image);
  // Transforms.insertNodes(editor, {
  //   type: "paragraph",
  //   children: [{ text: "" }],
  // });
};

type TextAlign = "left" | "center" | "right" | "justify";
type ElementWithAlign = CustomElement & { align?: TextAlign };

const Element = (props: RenderElementProps & { element: CustomElement }) => {
  const { attributes, children, element } = props;
  const style = { textAlign: (element as ElementWithAlign).align };

  switch (element.type) {
    case "image":
      return (
        <Image {...(props as RenderElementProps & { element: ImageElement })} />
      );

    case "block-quote":
      return (
        <blockquote style={style} {...attributes}>
          {children}
        </blockquote>
      );
    case "bulleted-list":
      return (
        <ul style={style} {...attributes}>
          {children}
        </ul>
      );
    case "heading":
      return (
        <h1 style={style} {...attributes} className="font-bold text-4xl">
          {children}
        </h1>
      );
    case "heading-two":
      return (
        <h2 style={style} {...attributes} className="font-bold text-3xl">
          {children}
        </h2>
      );
    case "heading-three":
      return (
        <h3 style={style} {...attributes} className="font-bold text-2xl">
          {children}
        </h3>
      );
    case "heading-four":
      return (
        <h4 style={style} {...attributes} className="font-bold text-xl">
          {children}
        </h4>
      );
    case "list-item":
      return (
        <li style={style} {...attributes}>
          {children}
        </li>
      );
    case "check-list-item":
      return (
        <div style={style} {...attributes}>
          {children}
        </div>
      );
    case "link":
      return <LinkComponent {...props} element={element as LinkElement} />;
    default:
      return (
        <p style={style} {...attributes}>
          {children}
        </p>
      );
  }
};

type ImageProps = {
  attributes: React.HTMLAttributes<HTMLDivElement>;
  children: React.ReactNode;
  element: ImageElement;
};
const Image: React.FC<ImageProps> = ({ attributes, children, element }) => {
  const editor = useSlateStatic();
  const path = ReactEditor.findPath(editor, element);

  const selected = useSelected();
  const focused = useFocused();
  return (
    <div {...attributes} className="inline-flex w-max">
      {children}
      <div contentEditable={false} className="inline-flex w-max">
        <img
          src={element.url}
          className={css`
            display: block;
            max-width: 100%;
            box-shadow: ${selected && focused ? "0 0 0 3px #B4D5FF" : "none"};
          `}
          alt="image"
        />
        <Button
          active
          onClick={() => Transforms.removeNodes(editor, { at: path })}
          className={css`
            display: ${selected && focused ? "inline" : "none"};
            position: absolute;
            top: 0.5em;
            left: 0.5em;
            background-color: white;
          `}
        >
          delete
        </Button>
      </div>
    </div>
  );
};

const InsertImageButton = () => {
  const editor = useSlateStatic();
  return (
    <Button
      onMouseDown={(event: React.MouseEvent) => {
        event.preventDefault();
        const url = window.prompt("Enter the URL of the image:");
        if (url && !isImageUrl(url)) {
          alert("URL is not an image");
          return;
        }
        if (url) {
          insertImage(editor, url);
        }
      }}
    >
      <ImageIcon className="w-5 h-5" />
    </Button>
  );
};

const isImageUrl = (url: string) => {
  if (!url) return false;
  if (!isUrl(url)) return false;
  const ext = new URL(url).pathname.split(".").pop() || "";
  return imageExtensions.includes(ext);
};

export default RichTextExample;
