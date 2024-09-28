import BlogAppBar from "@/components/BlogAppBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kunal Agrawal's Blogs",
  description: "Technical, Developer Blogs by Kunal Agrawal.",
};

export default function layout({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) {
  return (
    <>
      <BlogAppBar />
      <div>{children}</div>
    </>
  );
}