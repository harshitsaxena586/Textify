import { Node, nodeInputRule, mergeAttributes } from "@tiptap/core";

export const inputRegex = /{{.*}} $/; //used To find {{someTest}} followed by a space

export const keywordRegex = /[^{\}]+(?=})/g; //used To find matching string inside{{}}

export const Meme = Node.create({
  name: "meme",
  group: "block",
  content: "block*",
  atom: true,
  selectable: true,
  draggable: true,

  renderHTML({ HTMLAttributes }) {
    return [
      "img",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
    ];
  },
  addAttributes() {
    return {
      src: {
        default: null,
      },
      alt: {
        default: null,
      },
      title: {
        default: null,
      },
    };
  },
  addInputRules() {
    return [
      nodeInputRule(inputRegex, this.type, (match) => {
        //match returns the expression matching the input regex

        const keyword = match[0].match(keywordRegex)[0]; //getting actual keyword

        let src = `https://dynamicMemeApi.harshitsaxena58.repl.co/meme/?keyword=${keyword}`;

        //this custom api fetches meme from Giphy and redirects to the image , we are just
        //inserting this url but ,it dynamically redirects to the giphyUrl under the hood
        //You can check this https://replit.com/@harshitsaxena58/dynamicMemeApi#index.js repl to understand it's working

        return { src };
      }),
    ];
  },
});
