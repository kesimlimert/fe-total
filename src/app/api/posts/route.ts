import { NextResponse } from "next/server";

const posts = [
  {
    profilePic: "https://i.imgur.com/pabWXEn.png",
    image: "https://i.imgur.com/iWW97xC.png",
    userName: "Ahmet Yıldız Kenter",
    title: "Medical Doctor",
    sponsored: false,
    doctor: true,
    likes: 3,
    shares: 1,
    hashtags: ["#child", "#doctor", "#hospital", "#fever"],
    minutesToRead: 2,
    views: 4,
    comments: 5,
    content:
      "Normal healthy 21 y/o patient came in presenting odd symptoms.Patient described a new set of symptoms they all get well…",
  },
  {
    profilePic: "https://i.imgur.com/a29Vc4Q.png",
    image: "https://i.imgur.com/3il3kQJ.png",
    userName: "Derya Deniz",
    title: "",
    sponsored: false,
    doctor: false,
    likes: 24,
    shares: 0,
    hashtags: ["#child", "#doctor", "#hospital", "#fever"],
    minutesToRead: 2,
    views: 4,
    comments: 5,
    content:
      "The mom said she struggled with fertility issues and had an ectopic pregnancy after giving birth to her daughter.",
  },
  {
    profilePic: "https://i.imgur.com/pabWXEn.png",
    image: "",
    userName: "Dr. Ahmet Yıldız Kenter",
    title: "Medical Doctor",
    sponsored: false,
    doctor: true,
    likes: 1,
    shares: 0,
    hashtags: ["#child", "#doctor", "#hospital", "#fever"],
    minutesToRead: 2,
    views: 4,
    comments: 5,
    content:
      "The mom said she struggled with fertility issues and had an ectopic pregnancy after giving birth to her daughter.",
  },
  {
    profilePic: "https://i.imgur.com/pabWXEn.png",
    image: "https://i.imgur.com/XYReHIy.png",
    userName: "Dr. Ahmet Yıldız Kenter",
    title: "Medical Doctor",
    sponsored: false,
    doctor: true,
    likes: 3,
    shares: 1,
    hashtags: ["#child", "#doctor", "#hospital", "#fever"],
    minutesToRead: 2,
    views: 4,
    comments: 5,
    content:
      "Normal healthy 21 y/o patient came in presenting odd symptoms.Patient described a new set of symptoms they all get well…",
  },
  {
    profilePic: "https://i.imgur.com/WJ0muOK.png",
    image: "https://i.imgur.com/SLVj9L4.png",
    userName: "Milupa",
    title: "SPONSORED",
    sponsored: true,
    doctor: false,
    likes: 3,
    shares: 1,
    hashtags: ["#child", "#doctor", "#hospital", "#fever"],
    minutesToRead: 2,
    views: 4,
    comments: 5,
    content:
      "Normal healthy 21 y/o patient came in presenting odd symptoms.Patient described a new set of symptoms they all get well…",
  },
  {
    profilePic: "https://i.imgur.com/pabWXEn.png",
    image: "https://i.imgur.com/XYReHIy.png",
    userName: "Dr. Ahmet Yıldız Kenter",
    title: "Medical Doctor",
    sponsored: false,
    doctor: true,
    likes: 3,
    shares: 1,
    hashtags: ["#child", "#doctor", "#hospital", "#fever"],
    minutesToRead: 2,
    views: 4,
    comments: 5,
    content:
      "Maecenas pulvinar nulla eu nibh imperdiet, et ullamcorper metus interdum. Duis vehicula quam non tempor viverra. Quisque sit amet commodo sem. Quisque eu cursus libero. Suspendisse cursus magna dui, id condimentum mi rutrum ac. Sed eget orci at tortor iacu",
  },
];

export async function GET(request: Request) {
  return NextResponse.json(posts);
}
