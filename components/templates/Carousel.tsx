import React, {
  FC,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from "react";
import useEmblaCarousel, { UseEmblaCarouselType } from "embla-carousel-react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { cn } from "../../lib/cn";

export interface CarouselProps {
  className?: string;
  buttonClassName?: string;
}

const Carousel: FC<PropsWithChildren<CarouselProps>> = ({
  children,
  className,
  buttonClassName,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const [visibleSlides, setVisibleSlides] = useState<number>(0);
  useEffect(() => {
    if (emblaApi) {
      console.log("emblaApi", emblaApi);
      const handler = (api: UseEmblaCarouselType[1]) => {
        console.log("settled", api!.selectedScrollSnap());
        return setVisibleSlides(api!.selectedScrollSnap());
      };
      emblaApi.on("scroll", handler);
      return () => {
        console.log("cleanup");
        emblaApi?.off("scroll", handler);
      };
    }
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const totalSlides = Array.isArray(children) ? children.length : 1;

  return (
    <div className={className}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {React.Children.map(children, (child) => (
            <div className="grow-0 shrink-0 basis-full min-w-0">
              {child}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-center mt-2">
        <button className="hover:bg-gray-300 rounded-md" onClick={scrollPrev}>
          <ChevronLeft
            className={cn("stroke-black dark:stroke-white", buttonClassName)}
          />
        </button>

        <div className="mx-2">
          <div className="flex justify-center items-center h-full">
            {Array.from(Array(totalSlides).keys()).map((index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                style={{ width: "0.5rem" }}
                className={`h-2 rounded-full mx-1 ${
                  visibleSlides == index
                    ? "bg-black dark:bg-white"
                    : "bg-gray-300"
                } transition-colors`}
              />
            ))}
          </div>
        </div>

        <button className="hover:bg-gray-300 rounded-md" onClick={scrollNext}>
          <ChevronRight
            className={cn("stroke-black dark:stroke-white", buttonClassName)}
          />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
