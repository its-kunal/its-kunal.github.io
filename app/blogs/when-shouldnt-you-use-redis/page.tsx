"use client";
import React from "react";
import ContentMDX from "./content.mdx";

export default function page() {
  return (
    <div className="max-w-4xl mx-auto px-2 md:px-0">
      {/* title */}
      <h1 className="text-4xl my-4 font-extrabold capitalize text-center">
        when shouldn't you use redis?
      </h1>
      {/* content */}
      <ContentMDX />
      <div className="h-10"></div>
    </div>
  );
}