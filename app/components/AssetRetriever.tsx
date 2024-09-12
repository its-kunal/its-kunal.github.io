"use client";
import React, { useEffect, useState } from "react";

export enum ProjectKeys {
  CHATTERBOX = "chatterbox",
  AGROSITE = "agrosite",
  OPINIONEST = "opinionest",
}

async function AssetRetrieverUtil({ id }: { id: string }) {
  switch (id) {
    case ProjectKeys.AGROSITE: {
      const Asset = await import("@/app/assets/thumbnails/agrosite.jpeg");
      return Asset;
    }
    case ProjectKeys.CHATTERBOX: {
      const Asset = await import("@/app/assets/thumbnails/chatterbox.jpeg");
      return Asset;
    }
    case ProjectKeys.OPINIONEST: {
      const Asset = await import("@/app/assets/thumbnails/opinionest.jpeg");
      return Asset;
    }
    default:
      {
        const Asset = await import("@/app/assets/noImage.jpg")
        return Asset;
      }
  }
}

export function useAssetRetriever({ id }: { id: string }) {
  const [imageSrc, setImageSrc] = useState<typeof import("*.jpeg")| undefined>(undefined);
  useEffect(()=>{
    AssetRetrieverUtil({id}).then((value)=>{
      setImageSrc(value)
    })
  }, [])
  return imageSrc;
}