"use client";
import Image from "next/image";
import { useAssetRetriever } from "../AssetRetriever";
import NoImageAsset from "@/assets/noImage.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faWindowRestore } from "@fortawesome/free-solid-svg-icons";

interface ProjectCardProps {
  name: string;
  github: string;
  Projectkey: string;
  link: string;
}

export default function ProjectCard({
  name,
  github,
  Projectkey,
  link,
}: ProjectCardProps) {
  const imageSrc = useAssetRetriever({ id: Projectkey });
  return (
    <div className="rounded shadow flex-1 overflow-hidden basis-52">
      <Image
        src={imageSrc || NoImageAsset}
        alt={name}
        height={300}
        width={300}
        className={`h-52 aspect-square w-full object-cover ${imageSrc ? "": "blur-xl"}`}
      />
      <div className="p-4">
        <h1 className="text-lg font-semibold text-gray-900 text-center">
          {name}
        </h1>

        <div className="flex gap-2 mt-2 justify-center">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-200 px-2 py-1 rounded-sm text-sm font-semibold"
          >
            <FontAwesomeIcon icon={faWindowRestore} className="mr-2" />
            View Project
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-200 px-2 py-1 rounded-sm text-sm font-semibold"
          >
            <FontAwesomeIcon icon={faGithub} className="mr-2" />
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
}
