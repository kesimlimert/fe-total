import React from "react";
import { FaceSmileIcon } from "@heroicons/react/24/outline";

type Props = {};

export default function TextCard({}: Props) {
  return (
    <div className="flex items-center flex-col p-4 h-34 pb-1 bg-white shadow rounded-lg">
      <div className="flex w-full items-center">
      <div className="flex-shrink-0">
        <div className="w-20 h-20 flex items-center justify-center rounded-full border border-purple-200 border-2">
          <img
            className="w-16 h-16 rounded-full"
            src="https://i.imgur.com/p1YV49X.png"
            alt="Avatar"
          />
        </div>
      </div>
      <div className="ml-4 w-full">
        <textarea
          className="form-textarea mt-1 h-14 p-4 pl-8 block resize-none w-full rounded-md bg-gray-100"
          rows={3}
          placeholder="Write something Merve"
        ></textarea>
      </div>
      </div>
      <div className="flex ml-auto mt-4">
        <FaceSmileIcon className="w-6 h-6 mr-5 text-gray-300" />
        <div className="border-l border-gray-800 mr-5 h-5 mx-2"></div>
      </div>
    </div>
  );
}
