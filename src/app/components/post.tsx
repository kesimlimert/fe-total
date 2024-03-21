import {
  BookmarkIcon,
  EllipsisHorizontalIcon,
  HeartIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import React from "react";

type Props = {
  profilePic: string;
  image: string;
  userName: string;
  title: string;
  likes: number;
  shares: number;
  hashtags: string[];
  minutesToRead: number;
  views: number;
  comments: number;
  content: string;
  sponsored: boolean;
  doctor: boolean;
};

export default function Post({
  profilePic,
  image,
  userName,
  title,
  likes,
  shares,
  hashtags,
  minutesToRead,
  views,
  comments,
  content,
  doctor,
  sponsored,
}: Props) {
  return (
    <div className="w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden m-5">
      {doctor && (
        <div className="flex px-2 py-2 gradient-border-bottom">
          <div className="rounded-full flex overflow-hidden items-center justify-center w-10 h-10 bg-gradient-to-r from-green-400 to-yellow-500">
            <div className="relative w-9 h-9 flex items-center justify-center rounded-full overflow-hidden bg-white">
              <img
                className="relative w-8 h-8 rounded-full"
                src={profilePic}
                alt="Avatar"
              />
            </div>
          </div>
          <div className="flex pl-2 flex-col">
            <p className="text-sm">{userName}</p>
            <p className="text-yellow-500 text-sm">{title}</p>
          </div>
          <EllipsisHorizontalIcon className="w-6 ml-auto stroke-2 h-6text-gray-900" />
        </div>
      )}
      {!doctor && !sponsored && (
        <div className="flex px-2 py-2">
        <div className="relative w-10 h-10 flex items-center justify-center rounded-full overflow-hidden border-2 border-gray-300">
          <img
            className="relative w-8 h-8 rounded-full"
            src={profilePic}
            alt="Avatar"
          />
        </div>
        <div className="flex justify-center pl-2 flex-col">
            <p className="text-sm">{userName}</p>
          </div>
          <EllipsisHorizontalIcon className="w-6 ml-auto stroke-2 h-6text-gray-900" />
        </div>
      )}
      {sponsored && (
        <div className="flex px-2 py-2 gradient-bg">
        <div className="relative w-10 h-10 flex items-center justify-center rounded-full overflow-hidden border-2 border-red-400">
          <img
            className="relative w-8 h-8 rounded-full"
            src={profilePic}
            alt="Avatar"
          />
        </div>
        <div className="flex pl-2 flex-col">
            <p className="text-sm">{userName}</p>
            <p className="text-red-400 text-sm">{title}</p>
          </div>
          <EllipsisHorizontalIcon className="w-6 ml-auto stroke-2 h-6text-gray-900" />
        </div>
      )}
      <img src={image} />
      <div className="flex justify-between p-5">
        <div className="flex justify-between w-full">
          <div className="flex">
            <div className="flex flex-col items-center">
              <HeartIcon className="w-6 h-6 text-gray-700" />
              <p className="text-xs text-gray-700">{likes}</p>
            </div>
            <div className="flex pl-3 flex-col items-center">
              <ShareIcon className="w-6 h-6 text-gray-700" />
              <p className="text-xs text-gray-700">{shares}</p>
            </div>
          </div>
          <div>
            <BookmarkIcon className="w-6 h-6 text-gray-700" />
          </div>
        </div>
      </div>
      <div className="flex px-4">
        <p className="text-xs pr-1 text-gray-700">{minutesToRead}</p>
        <p className="text-xs pr-1 text-gray-300">Min</p>
        <p className="text-xs pr-1 text-gray-300">&#8226;</p>
        <p className="text-xs pr-1 text-gray-700">{views}</p>
        <p className="text-xs pr-1 text-gray-300">Views</p>
        <p className="text-xs pr-1 text-gray-300">&#8226;</p>
        <p className="text-xs pr-1 text-gray-700">{comments}</p>
        <p className="text-xs pr-1 text-gray-300">Comments</p>
      </div>
      <div className="px-4 py-2">
        <p className="text-md">{content}</p>
      </div>
      <div className="flex px-4 pb-3">
        {hashtags.map((hashtag, index) => (
          <p key={index} className="text-xs pr-2 text-gray-500">
            {hashtag}
          </p>
        ))}
      </div>
      <hr className="border-gray-300" />
      <div className="flex justify-between p-4">
        <textarea
          className="form-textarea outline-none w-full h-7 p-2 block resize-none rounded-md bg-transparent"
          rows={3}
          placeholder="Comment this"
        ></textarea>
        <button
          type="button"
          className="text-gray-300 bg-transparent font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 border border-gray-300 hover:bg-gray-300 hover:text-white"
        >
          Post
        </button>
      </div>
    </div>
  );
}
