import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { MdClose, MdArrowBack, MdArrowForward } from "react-icons/md";

interface ImageViewerProps {
  images: string[];
  initialIndex?: number;
  onClose: () => void;
}

const ImageViewer: React.FC<ImageViewerProps> = ({
  images,
  initialIndex = 0,
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(initialIndex);
  const dialogRef = useRef<HTMLDialogElement>(null);

  // For touch swipe
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  // Show the dialog and disable background scroll
  useEffect(() => {
    dialogRef.current?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Update the currentIndex if initialIndex changes
  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Touch event handlers
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (touchStart !== null && touchEnd !== null) {
      const distance = touchStart - touchEnd;
      if (distance > minSwipeDistance) {
        handleNext();
      } else if (distance < -minSwipeDistance) {
        handlePrev();
      }
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  const handleDialogClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.currentTarget === e.target) {
      handleClose();
    }
  };

  const handleClose = () => {
    dialogRef.current?.close();
    onClose();
  };

  return (
    <>
      <dialog
        ref={dialogRef}
        onClick={handleDialogClick}
        onCancel={handleClose}
        className="w-full max-w-4xl p-0 border-0 bg-transparent"
      >
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {images.map((src, i) => (
              <div key={i} className="relative w-full h-[90vh] flex-shrink-0">
                <Image
                  src={src}
                  alt={`Image ${i + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors"
        >
          <MdClose size={24} />
        </button>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-1 rounded-lg">
          {currentIndex + 1} / {images.length}
        </div>
        <div className="flex justify-between p-4 absolute top-1/2 -translate-y-1/2 right-0 left-0">
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white bg-black/30 rounded-full hover:bg-black/50 transition-colors"
          >
            <MdArrowBack size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white bg-black/30 rounded-full hover:bg-black/50 transition-colors"
          >
            <MdArrowForward size={24} />
          </button>
        </div>
      </dialog>

      <style jsx global>{`
        dialog::backdrop {
          backdrop-filter: blur(8px);
          background: none !important;
        }
      `}</style>
    </>
  );
};

export default ImageViewer;
