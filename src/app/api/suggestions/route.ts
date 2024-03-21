import { NextResponse } from "next/server";

const suggestions = [
  {
    profilePic: "https://i.imgur.com/pabWXEn.png",
    image: "https://i.imgur.com/iWW97xC.png",
    userName: "Ahmet Yıldız Kenter",
    title: "Medical Doctor",
    doctor: true,
    location: "Istanbul",
  },
  {
    profilePic: "https://i.imgur.com/pabWXEn.png",
    image: "https://i.imgur.com/iWW97xC.png",
    userName: "Ahmet Yıldız Kenter",
    title: "Medical Doctor",
    doctor: true,
    location: "Izmir",
  },
  {
    profilePic: "https://i.imgur.com/a29Vc4Q.png",
    image: "https://i.imgur.com/3il3kQJ.png",
    userName: "Derya Deniz",
    title: "",
    doctor: false,
    location: "Isparta",
  },
];

export async function GET(request: Request) {
  return NextResponse.json(suggestions);
}
