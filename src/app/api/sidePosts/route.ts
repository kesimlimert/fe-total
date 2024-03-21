import { NextResponse } from "next/server";

const sidePosts = [
  {
    profilePic: "https://i.imgur.com/pabWXEn.png",
    image: "https://i.imgur.com/iWW97xC.png",
    userName: "Ahmet Yıldız Kenter",
    likes: 3,
    comments: 5,
    doctor: true,
    content:
      "Normal healthy 21 y/o patient came in presenting odd symptoms.Patient described a new set of symptoms they all get well…",
  },
  {
    profilePic: "https://i.imgur.com/a29Vc4Q.png",
    image: "https://i.imgur.com/3il3kQJ.png",
    userName: "Derya Deniz",
    likes: 24,
    comments: 5,
    doctor: false,
    content:
      "The mom said she struggled with fertility issues and had an ectopic pregnancy after giving birth to her daughter.",
  }
];

export async function GET(request: Request) {
  return NextResponse.json(sidePosts);
}
