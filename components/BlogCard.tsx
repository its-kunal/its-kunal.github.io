"use client";
import React from "react";
import Database from "@/assets/database.webp";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function BlogCard() {
  const navigate = useRouter();
  return (
    <div className="p-2 rounded-[10px] shadow-lg bg-white">
      <Image
        src={Database}
        alt=""
        height={300}
        width={300}
        style={{
          objectFit: "cover",
          objectPosition: "center",
          borderRadius: "10px",
          width: "auto",
        }}
      />
      <div className="my-2 text-center">
        <h2 className="text-lg font-semibold text-center">
          When Shouldn't You Use Redis?
        </h2>
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => {
            navigate.push("/blogs/when-shouldnt-you-use-redis");
          }}
          className="text-sm px-2 py-1 hover:bg-purple-100 hover:shadow-sm rounded transition-all duration-75 ease-in-out hover:-translate-y-1 hover:-translate-x-1"
        >
          Learn More 👉
        </button>
      </div>
    </div>
  );
}