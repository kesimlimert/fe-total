import React from "react";

type Props = {};

export default function Advertisement({}: Props) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex px-3 pb-1 pt-3 mx-auto justify-center flex-col items-center bg-white rounded-md shadow-md overflow-hidden">
        <p className="text-center text-2xl">Momsista Family Meeting</p>
        <p className="text-center text-2xl text-gray-400 pb-5">July’19</p>
        <img alt="ads" src="https://i.imgur.com/sxYvWzg.png" />
        <button
          type="button"
          className="py-1 px-12 me-2 mt-5 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-800"
        >
          Join
        </button>
      </div>
      <div className="flex items-center mt-3">
        <p className="text-purple-400 text-3xl">&#8226;</p>
        <p className="text-gray-300 text-xl">&#8226;</p>
        <p className="text-gray-300 text-xl">&#8226;</p>
        <p className="text-gray-300 text-xl">&#8226;</p>
      </div>
    </div>
  );
}
