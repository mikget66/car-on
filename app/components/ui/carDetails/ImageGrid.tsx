import React, { useState } from "react";
import Image from "next/image";
import { MdFullscreen } from "react-icons/md";
import ImageViewer from "@/app/components/ui/carDetails/ImageViewer";

interface ImageGridProps {
  images: string[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  const [isViewerOpen, setIsViewerOpen] = useState<boolean>(false);
  const [initialIndex, setInitialIndex] = useState<number>(0);

  const openImageViewer = (index: number) => {
    setInitialIndex(index);
    setIsViewerOpen(true);
  };

  const closeImageViewer = () => {
    setIsViewerOpen(false);
  };

  return (
    <div className="rounded-xl overflow-hidden grid grid-cols-3 grid-rows-2 gap-2 h-[210px] sm:h-[330px] md:h-[350px] xl:h-[480px] 2xl:h-[540px] relative">
      <div className="row-span-full col-span-full md:row-span-2 md:col-span-2 relative">
        <div className="w-full h-full cursor-pointer" onClick={() => openImageViewer(0)}>
          <Image
            src={images[0]}
            fill
            alt="Car image"
            className="object-cover"
          />
        </div>
      </div>
      <div className="hidden md:block relative w-full h-full cursor-pointer" onClick={() => openImageViewer(1)}>
        <Image
          src={images[1]}
          alt="Car image"
          fill
          className="object-cover w-full h-full"
        />
      </div>
      <div className="hidden md:block relative w-full h-full cursor-pointer" onClick={() => openImageViewer(2)}>
        <Image
          src={images[2]}
          alt="Car image"
          fill
          className="object-cover w-full h-full"
        />
      </div>
      <div
        onClick={() => openImageViewer(2)}
        className="absolute bottom-0 text-sm font-medium right-0 z-10 m-4 p-2 rounded-lg flex flex-row items-center cursor-pointer btn-light"
      >
        <MdFullscreen className="inline text-[1.5rem]" />
        View photos
      </div>
      {isViewerOpen && (
        <ImageViewer
          images={images}
          initialIndex={initialIndex}
          onClose={closeImageViewer}
        />
      )}
    </div>
  );
};

export default ImageGrid;
