import RichTextEditor from "./components/richTextEditor/index";

function App() {
  return (
    <div className="App bg-gray-50 min-h-screen	 ">
      <h1 className="  text-center font-bold text-gray-900 text-3xl md:text-6xl pt-4 ">
        Textify
      </h1>
      <div className="bg-white rounded-md  shadow-lg md:mx-24 my-12 p-4">
        <RichTextEditor />
      </div>
    </div>
  );
}

export default App;
