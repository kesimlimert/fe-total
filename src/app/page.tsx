import React from "react";
import TextCard from "./components/textCard";
import Post from "./components/post";
import SuggestionCard from "./components/suggestionCard";
import SidePost from "./components/sidePost";
import Advertisement from "./components/advertisement";

export default async function Home() {
  const posts = await fetch("http://localhost:3000/api/posts").then(
    (res) => res.json()
  );

  const suggestions = await fetch("http://localhost:3000/api/suggestions").then(
    (res) => res.json()
  );

  const sidePosts = await fetch("http://localhost:3000/api/sidePosts").then(
    (res) => res.json()
  );

  return (
    <React.Fragment>
      <div className="flex mt-8 justify-center">
        <div className="flex w-full max-w-xl flex-col ml-28 mr-24">
          <TextCard />
          {posts.map((post: any, index: number) => (
            <React.Fragment key={index}>
              <Post
                profilePic={post.profilePic}
                image={post.image}
                userName={post.userName}
                title={post.title}
                sponsored={post.sponsored}
                doctor={post.doctor}
                likes={post.likes}
                shares={post.shares}
                hashtags={post.hashtags}
                minutesToRead={post.minutesToRead}
                views={post.views}
                comments={post.comments}
                content={post.content}
              />
              {index === 0 && suggestions.length > 0 && (
                <SuggestionCard suggestions={suggestions} />
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="flex max-w-60 flex-col">
          {sidePosts.map((sidePost: any, index: number) => (
            <SidePost
              key={index}
              profilePic={sidePost.profilePic}
              image={sidePost.image}
              userName={sidePost.userName}
              likes={sidePost.likes}
              comments={sidePost.comments}
              content={sidePost.content}
              doctor={sidePost.doctor}
            />
          ))}
          <Advertisement />
        </div>
      </div>
    </React.Fragment>
  );
}
