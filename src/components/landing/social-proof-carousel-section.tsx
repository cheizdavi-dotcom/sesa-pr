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

export default function SocialProofCarouselSection() {
    const socialProofImage = PlaceHolderImages.find(p => p.id === 'social-comments');
    const plugin = React.useRef(
        Autoplay({ delay: 2500, stopOnInteraction: true })
    )

  return (
    <section id="social-proof-carousel" className="w-full py-12 md:py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-gray-800">
            Depoimentos de Candidatos
          </h2>
        </div>
        {socialProofImage && (
            <Carousel
            plugins={[plugin.current]}
            opts={{
                loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            >
            <CarouselContent>
                <CarouselItem>
                    <div className="p-1">
                    <Card className="shadow-lg rounded-xl overflow-hidden">
                        <CardContent className="flex items-center justify-center p-0">
                            <Image 
                                src={socialProofImage.imageUrl}
                                alt={socialProofImage.description}
                                width={1080}
                                height={600}
                                className="rounded-md object-cover"
                                data-ai-hint={socialProofImage.imageHint}
                            />
                        </CardContent>
                    </Card>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className="p-1">
                    <Card className="shadow-lg rounded-xl overflow-hidden">
                        <CardContent className="flex items-center justify-center p-0">
                            <Image 
                                src={socialProofImage.imageUrl}
                                alt={socialProofImage.description}
                                width={1080}
                                height={600}
                                className="rounded-md object-cover"
                                data-ai-hint={socialProofImage.imageHint}
                            />
                        </CardContent>
                    </Card>
                    </div>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
            </Carousel>
        )}
      </div>
    </section>
  )
}
