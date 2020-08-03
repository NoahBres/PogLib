import React, { useEffect, useState } from "react";

export default function UploadGridItem({ className = "", style = {} }) {
  const [randomColorIndex, setRandomColorIndex] = useState(0);

  const [pattern, setPattern] = useState("");

  const colorChoices = [
    "bg-blue-500",
    "bg-red-500",
    "bg-green-500",
    "bg-purple-500",
    "bg-pink-500",
  ];

  const svgBgColor = ["2B6CB0", "C53030", "2F855A", "6B46C1", "B83280"];

  const borderColor = [
    "border-orange-500",
    "border-green-500",
    "border-red-500",
    "border-yellow-500",
    "border-blue-500",
  ];

  const buttonBgColor = [
    "bg-orange-500",
    "bg-green-500",
    "bg-red-500",
    "bg-yellow-600",
    "bg-blue-500",
  ];

  useEffect(() => {
    setRandomColorIndex(Math.floor(Math.random() * colorChoices.length));
  }, []);

  useEffect(() => {
    const patterns = [
      `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23${svgBgColor[randomColorIndex]}' fill-opacity='0.4'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${svgBgColor[randomColorIndex]}' fill-opacity='0.4'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    ];

    setPattern(patterns[Math.floor(Math.random() * patterns.length)]);
  }, [randomColorIndex]);

  return (
    <div
      className={`flex justify-center items-center flex-col relative ${colorChoices[randomColorIndex]} ${className}`}
      style={{
        ...style,
        backgroundImage: pattern,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.4)",
        }}
      ></div>
      <p className="text-2xl text-white font-semibold z-10">
        This could be you!
      </p>
      <button
        className={`text-white z-10 px-3 py-1 rounded mt-2 ${buttonBgColor[randomColorIndex]}`}
      >
        Upload your pog
      </button>
      <div
        style={{
          position: "absolute",
          top: "1rem",
          left: "1rem",
          width: "calc(100% - 2rem)",
          height: "calc(100% - 2rem)",
          borderStyle: "solid",
          borderWidth: "0.2rem",
        }}
        className={`${borderColor[randomColorIndex]} pointer-events-none`}
      ></div>
    </div>
  );
}
