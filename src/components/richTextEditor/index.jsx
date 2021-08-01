import React from "react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import { useEditor, EditorContent } from "@tiptap/react";
import { MenuBar } from "./MenuBar";
import { Typography } from "@tiptap/extension-typography";
import Image from "@tiptap/extension-image";
import { Meme } from "./customExtensions/Meme";
import Underline from "@tiptap/extension-underline";

export default function RichTextEditor() {
  const editor = useEditor({
    extensions: [StarterKit, Image, Underline, Typography, Link, Meme],
    editorProps: {
      attributes: {
        class:
          "prose max-w-none prose-md sm:prose lg:prose-lg xl:prose-2xl m-5 focus:outline-none",
      },
    },
    content:
      '<h1>Welcome to Textify 👋</h1><h2>Your smart editor</h2><h3>Features</h3><ul><li><p>All Essential basic editor features like bold, italic, underline ,strike-through</p></li><li><p>Supports Markdown input</p></li><li><p>Clever enough to understand -&gt; this and convert to →,or did</p></li><li><p>Add Images with a link</p></li><li><p>Embed Links as text</p></li><li><p>Horizontal lines by typing ---</p></li><li><p>add code blocks with ``` and blockquotes with &gt;followed by spacebar</p><h2>And Get Memes just by typing {{text}}+space</h2><h4>And it will replace that with an actual MEME fetched from Giphy (adding gif memes soon)</h4></li></ul><img src="https://dynamicMemeApi.harshitsaxena58.repl.co/meme/?keyword=suparman"><p>bye </p>',
  });

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}
