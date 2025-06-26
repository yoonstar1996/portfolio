"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Dialog,
  DialogContent,
  DialogTrigger,
} from "../ui";

import { DialogTitle } from "@radix-ui/react-dialog";
import { Image as ImageIcon } from "lucide-react";
import Image from "next/image";

interface ImageButtonProps {
  images: string[];
}

function ImageButton({ images }: ImageButtonProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex items-center gap-1 rounded-lg border border-[#ccc] px-3 py-1">
          <ImageIcon size={16} />
          <div className="font-semibold">{"이미지"}</div>
        </button>
      </DialogTrigger>
      <DialogContent className="p-5">
        <DialogTitle className="hidden">이미지</DialogTitle>
        <div className="mx-auto max-w-xs">
          <Carousel setApi={setApi} className="w-full max-w-xs">
            <CarouselContent>
              {images.map((imgSrc, index) => (
                <CarouselItem key={index}>
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-4">
                      <Image
                        src={`/images${imgSrc}`}
                        alt={`carousel-img-${index}`}
                        width={286}
                        height={286}
                        className="h-full w-full rounded-lg object-contain shadow-md"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="py-2 text-center text-sm text-muted-foreground">
            {current} / {count}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ImageButton;
