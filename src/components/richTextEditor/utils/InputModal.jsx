import React from "react";
import { useForm } from "react-hook-form";

export default function InputModal({
  label,
  addImageHandler,
  addLinkHandler,
  setShowInputModal,
}) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    if (label === "Image") {
      addImageHandler(data.url);
    } else if (label === "Link") {
      addLinkHandler(data.url);
    }

    setShowInputModal(false); //to Hide our Modal
  };

  const onCancelHandler = () => {
    setShowInputModal(false);
  };
  return (
    <div className="border-2 mx-auto my-4 p-4 w-1/2 rounded-lg z-50	bg-white">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          class="border-2 min-w-full border-gray-400 px-4 py-2 my-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
          autoFocus
          {...register("url")}
          placeholder="Enter Url Here"
        />
        <div>
          <button
            className="btn-secondary bg-indigo-400 border-indigo-400 text-white"
            type="submit"
          >
            Add
          </button>
          <button onClick={onCancelHandler} className="btn-secondary ">
            cancel
          </button>
        </div>
      </form>
    </div>
  );
}
