import { useState } from "react";
import "./index.css";
import InputModal from "./utils/InputModal";
export const MenuBar = ({ editor }) => {
  const [showInputModal, setShowInputModal] = useState(false);
  const [label, setLabel] = useState(null);

  const addImageHandler = (url) => {
    editor.chain().focus().setImage({ src: url }).run();
  };

  const addLinkHandler = (url) => {
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  };

  if (!editor) {
    return null;
  }

  return (
    <div className="bg-white py-4 z-50 sticky top-0 border-b-2	 ">
      <button
        title="bold"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={
          editor.isActive("bold") ? "btn-primary-active" : "btn-primary"
        }
      >
        <img src="/icons/bold.svg" alt="bold" />
      </button>

      <button
        title="bold"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={
          editor.isActive("italic") ? "btn-primary-active" : "btn-primary"
        }
      >
        <img src="/icons/italic.svg" alt="bold" />
      </button>

      <button
        title="strike-through"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={
          editor.isActive("strike") ? "btn-primary-active" : "btn-primary"
        }
      >
        <img src="/icons/strike-through.svg" alt="strike-through" />
      </button>
      <button
        title="underline"
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={
          editor.isActive("underline") ? "btn-primary-active" : "btn-primary"
        }
      >
        <img src="/icons/underline.svg" alt="underline" />
      </button>

      <button
        title="bullet list"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={
          editor.isActive("bulletList") ? "btn-primary-active" : "btn-primary"
        }
      >
        <img src="/icons/ul.svg" alt="bullet list" />
      </button>

      <button
        title="numbered list"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={
          editor.isActive("orderedList") ? "btn-primary-active" : "btn-primary"
        }
      >
        <img src="/icons/ol.svg" alt="numbered list" />
      </button>

      <button
        title="codeblock"
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={
          editor.isActive("codeBlock") ? "btn-primary-active" : "btn-primary"
        }
      >
        <img src="/icons/code.svg" alt="codeblock" />
      </button>

      <button
        title="add link"
        onClick={() => {
          setLabel("Link");
          setShowInputModal(true);
        }}
        className="btn-primary"
      >
        <img src="/icons/link.svg" alt="add link" />
      </button>

      <button
        title="add image"
        onClick={() => {
          setLabel("Image");
          setShowInputModal(true);
        }}
        className="btn-primary"
      >
        <img src="/icons/image.svg" alt="add image" />
      </button>

      {
        // redo and undo only visible for mobile and tab users
      }

      <button
        title="undo"
        onClick={() => {
          editor.chain().focus().undo().run();
        }}
        className="btn-primary md:hidden"
      >
        <img src="/icons/undo.svg" alt="undo" />
      </button>

      <button
        title="redo"
        onClick={() => {
          editor.chain().focus().redo().run();
        }}
        className="btn-primary md:hidden"
      >
        <img src="/icons/redo.svg" alt="redo" />
      </button>

      {showInputModal && (
        <InputModal
          label={label}
          setShowInputModal={setShowInputModal}
          addImageHandler={addImageHandler}
          addLinkHandler={addLinkHandler}
        />
      )}
    </div>
  );
};
