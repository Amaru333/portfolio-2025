import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

function ProjectImageCarousel({ folder, count }: { folder: string; count: number }) {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
    >
      <CarouselContent>
        {Array(count)
          .fill(" ")
          .map((_, index) => (
            <CarouselItem key={index}>
              <img
                src={`/projects/${folder}/${index + 1}.png`}
                alt="medverse"
                className="w-full object-contain rounded-2xl"
              />
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default ProjectImageCarousel;
