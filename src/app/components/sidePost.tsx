import React from 'react'

type Props = {
    profilePic: string;
    image: string;
    userName: string;
    likes: number;
    comments: number;
    content: string;
    doctor: boolean;
  };

export default function SidePost({profilePic, doctor, image, userName, likes, comments, content}: Props) {
  return (
    <div className="w-full mx-auto bg-white rounded-md shadow-md overflow-hidden mb-5">
        {doctor ? (
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
          <div className="flex justify-center pl-2 flex-col">
            <p className="text-sm">{userName}</p>
          </div>
        </div>
      ) : (
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
        </div>
      )}
        <img src={image} />
      <div className="px-4 py-2">
        <p className="text-md">{content}</p>
      </div>
      <div className="flex justify-between pb-2 px-4">
        <div className="flex">
            <p className="text-xs pr-1 text-gray-700">{likes}</p>
            <p className="text-xs pr-1 text-gray-300">Likes</p>
        </div>
        <div className="flex">
            <p className="text-xs pr-1 text-gray-700">{comments}</p>
            <p className="text-xs pr-1 text-gray-300">Comments</p>
        </div>
      </div>
    </div>
  )
}