"use client";
import Carousel from "@/components/Carousel";
import hero1 from "../../public/1hero.svg";
import hero2 from "../../public/2hero.svg";
import hero3 from "../../public/3hero.svg";
import TopPart from "@/components/TopPart";
import MiddlePart from "@/components/MiddlePart";
import BottomPart from "@/components/BottomPart";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useState } from "react";
const slides = [
  {
    image: hero1,
    title1: "Lessons and insights",
    title2: "from 8 years",
    desc: "Where to grow your business as a photographer: site or social media?",
    textBtn: "Register",
  },
  {
    image: hero2,
    title1: "Guarding your data",
    title2: "with trust.",
    desc: "Where to grow your business as a photographer: site or social media?",
    textBtn: "Register",
  },
  {
    image: hero3,
    title1: "Crafted uniquely for you",
    title2: "every time.",
    desc: "Where to grow your business as a photographer: site or social media?",
    textBtn: "Register",
  },
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`w-full font-sans ${
        darkMode && "bg-[#263238]"
      } prevent-select`}
    >
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main
        className={`flex min-h-screen flex-col items-center ${
          darkMode && "bg-gray-700"
        } justify-center  mx-auto`}
      >
        <Carousel slides={slides} darkMode={darkMode} />
        <TopPart darkMode={darkMode} />
        <MiddlePart darkMode={darkMode} />
        <BottomPart darkMode={darkMode} />
      </main>
      <Footer />
    </div>
  );
}
