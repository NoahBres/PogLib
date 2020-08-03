import React, { useEffect, useState } from "react";

export default function UploadGridItem({ className = "", style = {} }) {
  const [randomIndex, setRandomIndex] = useState(0);

  const colorChoices = [
    "bg-blue-500",
    "bg-red-500",
    "bg-green-500",
    "bg-purple-500",
    "bg-pink-500",
  ];

  const svgBgColor = ["2B6CB0", "C53030", "2F855A", "6B46C1", "B83280"];

  useEffect(() => {
    setRandomIndex(Math.floor(Math.random() * colorChoices.length));
  }, []);

  return (
    <div
      className={`flex justify-center items-center flex-col ${colorChoices[randomIndex]} ${className}`}
      style={{
        ...style,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23${svgBgColor[randomIndex]}' fill-opacity='0.4'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      <p className="text-2xl">This could be you!</p>
      <button>Upload POG</button>
    </div>
  );
}
