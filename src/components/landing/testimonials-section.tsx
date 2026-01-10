"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Star } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const testimonials = [
    {
        quote: "O material é bem organizado e claro. Consegui entender os tópicos facilmente.",
        author: "Candidato SESA-PR"
    },
    {
        quote: "A apostila é completa e aborda tudo que preciso estudar para a prova.",
        author: "Candidata SESA-PR"
    },
    {
        quote: "Gostei muito da forma como o conteúdo é apresentado, sem complicações desnecessárias.",
        author: "Candidato SESA-PR"
    },
    {
        quote: "Vale muito a pena. Tem tudo que você precisa e pode imprimir também!",
        author: "Candidata SESA-PR"
    },
    {
        quote: "O material é bem organizado e claro. Consegui entender os tópicos facilmente.",
        author: "Candidato SESA-PR"
    },
    {
        quote: "A apostila é completa e aborda tudo que preciso estudar para a prova.",
        author: "Candidata SESA-PR"
    },
    {
        quote: "Gostei muito da forma como o conteúdo é apresentado, sem complicações desnecessárias.",
        author: "Candidato SESA-PR"
    },
    {
        quote: "Vale muito a pena. Tem tudo que você precisa e pode imprimir também!",
        author: "Candidata SESA-PR"
    },
];

export default function TestimonialsSection() {
  const socialCommentsImage = PlaceHolderImages.find(p => p.id === 'social-comments');
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-gray-800">
            Depoimentos de Candidatos
          </h2>
          {socialCommentsImage && (
            <div className="max-w-4xl mx-auto">
                <Image
                    src={socialCommentsImage.imageUrl}
                    alt={socialCommentsImage.description}
                    width={900}
                    height={350}
                    className="rounded-lg object-contain shadow-lg"
                    data-ai-hint={socialCommentsImage.imageHint}
                />
            </div>
          )}

            <Carousel
            plugins={[plugin.current]}
            opts={{
                align: "start",
                loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            >
            <CarouselContent>
                {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                    <div className="p-4">
                        <Card className="bg-white shadow-md rounded-lg h-full">
                            <CardContent className="p-6 flex flex-col items-center justify-center text-center space-y-4">
                                <div className="flex text-yellow-400">
                                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                                </div>
                                <blockquote className="text-gray-600 italic">
                                    "{testimonial.quote}"
                                </blockquote>
                                <p className="font-semibold text-gray-800">{testimonial.author}</p>
                            </CardContent>
                        </Card>
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>
            </Carousel>
        </div>
      </div>
    </section>
  );
}
