import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";

type Props = {
  suggestions: any;
};

export default function SuggestionCard({ suggestions }: Props) {
  return (
    <div className="w-full flex relative flex-col mx-auto bg-gray-100 rounded-xl shadow-md m-5">
      <div className="absolute margin-minus-right top-48 bg-white flex justify-center items-center w-7 h-7 right-0 rounded-full"><ChevronRightIcon className="w-5 h-5 text-gray-300" /></div>
      <div className="absolute margin-minus-left flex top-48 justify-center items-center bg-white w-7 h-7 left-0 rounded-full"><ChevronLeftIcon className="w-5 h-5 text-gray-300" /></div>
      <div className="flex items-center py-4 px-4">
        <p className="text-gray-500 text-center flex-grow">
          Members You May Know
        </p>
        <p className="text-sm text-right">SEE ALL</p>
      </div>
      <div className="flex mx-5">
        {suggestions.map((suggestion: any, index: number) => {
          return (
            <div className="w-full flex h-80 flex-col mx-1 bg-white rounded-xl shadow-md overflow-hidden m-5">
              {suggestion.doctor ? (
                <div className="flex h-full mt-8 items-center flex-col px-2">
                  <div className="rounded-full flex overflow-hidden items-center justify-center w-36 h-36  bg-gradient-to-r from-green-400 to-yellow-500">
                    <div className="relative w-32 h-32 flex items-center justify-center rounded-full overflow-hidden bg-white">
                      <img
                        className="relative w-28 h-28 rounded-full"
                        src={suggestion.profilePic}
                        alt="Avatar"
                      />
                    </div>
                  </div>
                  <div className="flex pt-2 flex-col">
                    <p className="text-md text-center">{suggestion.userName}</p>
                    <p className="text-yellow-500 text-center text-md">
                      {suggestion.title}
                    </p>
                  </div>
                  <p className="text-sm text-gray-700">{suggestion.location}</p>
                  <button type="button" className="text-white bg-orange-300 font-medium rounded-full text-sm px-8 py-1.5 mt-2 text-center">Follow</button>
                </div>
              ) : (
                <div className="flex h-full flex-col mt-8 items-center px-2 py-2">
                  <div className="relative w-36 h-36 flex items-center justify-center rounded-full overflow-hidden border-2 border-gray-300">
                    <img
                      className="relative w-32 h-32 rounded-full"
                      src={suggestion.profilePic}
                      alt="Avatar"
                    />
                  </div>
                  <div className="flex justify-center pt-2 flex-col">
                    <p className="text-md text-center">{suggestion.userName}</p>
                  </div>
                  <p className="text-sm text-gray-700 text-center">{suggestion.location}</p>
                  <button type="button" className="text-white bg-purple-300 font-medium rounded-full text-sm px-8 py-1.5 mt-2 text-center">Follow</button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
