import { motion, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Image {
  id: string;
  imageUrl: string;
}

interface CarouselProps {
  images: Image[];
  selected: Image;
  onSelect: (image: Image) => void;
}

function Carousel({ images, selected, onSelect }: CarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [imageContainerWidth, setImageContainerWidth] = useState<number>(0);
  const [carouselWidth, setCarouselWidth] = useState<number>(0);

  const mouseX = useMotionValue<number>(0);

  useEffect(() => {
    function calculateCarouselWidth() {
      if (!carouselRef.current) return;
      setCarouselWidth(carouselRef.current.clientWidth);
    }

    function calculateImageContainerWidth() {
      if (!imageContainerRef.current) return;
      const nodes = imageContainerRef.current.childNodes;

      setImageContainerWidth(
        Array.from(nodes).reduce((acc, node) => {
          return acc + (node as HTMLElement).clientWidth;
        }, 0)
      );
    }

    calculateCarouselWidth();
    calculateImageContainerWidth();

    window.addEventListener("resize", calculateCarouselWidth);
    window.addEventListener("resize", calculateImageContainerWidth);

    return () => {
      window.removeEventListener("resize", calculateCarouselWidth);
      window.removeEventListener("resize", calculateImageContainerWidth);
    };
  }, [imageContainerWidth, carouselWidth]);

  const maxBounds = -(imageContainerWidth - carouselWidth);

  return (
    <div
      role="listbox"
      ref={carouselRef}
      className="relative overflow-hidden mb-12 mt-6"
    >
      <motion.div
        ref={imageContainerRef}
        className="flex cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{
          left: maxBounds,
          right: 0,
        }}
        style={{ x: mouseX }}
        dragElastic={0.2}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
      >
        {images.map((image) => (
          <button
            role="option"
            key={image.id}
            className="relative shrink-0 h-[120px] w-[96px] md:h-[185px] md:w-[205px] lg:h-[190px] lg:w-[175px] pr-4"
            onClick={() => !isDragging && onSelect(image)}
          >
            <div className="w-full h-full overflow-hidden rounded-lg">
              <img
                className="pointer-events-none"
                src={image.imageUrl}
                alt={`Product image ${image.id}`}
              />

              <div
                role="presentation"
                className={`absolute inset-0 right-4 transition-all ${selected.id === image.id ? "border-4" : "border-0"} border-indigo-500 rounded-lg`}
              />
            </div>
          </button>
        ))}
      </motion.div>
    </div>
  );
}

interface ProductGalleryProps {
  images: Image[];
}

function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<Image>(
    images[0] || ({} as Image)
  );

  return (
    <div>
      <div className="overflow-hidden rounded-lg max-h-[400px] lg:max-h-[800px] md:max-h-[810px]">
        <img
          className="aspect-[2/3]"
          src={selectedImage.imageUrl}
          alt="Main product image"
        />
      </div>

      <Carousel
        images={images}
        selected={selectedImage}
        onSelect={setSelectedImage}
      />
    </div>
  );
}

export default ProductGallery;
