import Image from "next/image";
import BookLover from "@/assets/book-lover.webp";
import BlogCard from "@/components/BlogCard";

export default function page() {
  return (
    <div className="max-w-4xl mx-auto px-2 md:px-0">
      <div className="p-4">
        <Image
          src={BookLover}
          height={500}
          width={1000}
          style={{
            objectFit: "cover",
            objectPosition: "center",
            borderRadius: "10px",
          }}
          alt={""}
        />
      </div>
      <h1 className="text-center md:text-4xl font-bold md:px-0 text-2xl my-2 md:my-4">
        Your Full Stack Guide 🦮
      </h1>
      <div className="h-[1px] rounded-full bg-gray-900"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2 pb-10">
        {/* card */}
        {Array(30)
          .fill(0)
          .map((_, i) => (
            <BlogCard />
          ))}
      </div>
    </div>
  );
}