"use client"

import * as React from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export default function HandoutsCarouselSection() {
    const handoutImages = PlaceHolderImages.filter(p => p.id.startsWith('handout-'));
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

  return (
    <section id="handouts" className="w-full py-12 md:py-20 lg:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-gray-800">
            Conheça as Apostilas SESA-PR
          </h2>
        </div>
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {handoutImages.map((image) => (
              <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="shadow-lg">
                    <CardContent className="flex aspect-[3/4] items-center justify-center p-2">
                        <Image 
                            src={image.imageUrl}
                            alt={image.description}
                            width={400}
                            height={600}
                            className="rounded-md object-cover"
                            data-ai-hint={image.imageHint}
                        />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  )
}
