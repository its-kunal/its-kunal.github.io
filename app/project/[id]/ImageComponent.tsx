"use client";

import { useAssetRetriever } from "@/components/AssetRetriever";
import NoImageAsset from "@/assets/noImage.jpg";
import Image from "next/image";

export default function ImageComponent({ id }: { id: string }) {
  const imageSrc = useAssetRetriever({ id });

  return (
    <Image alt={id} src={imageSrc || NoImageAsset} className="w-full max-h-96 object-cover" />
  );
}
