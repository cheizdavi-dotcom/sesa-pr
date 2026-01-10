"use client";

import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full pt-12 pb-12 md:pb-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((testimonial, index) => (
                <div key={index} className="p-1 h-full">
                    <Card className="bg-white shadow-md rounded-lg h-full flex flex-col">
                        <CardContent className="p-6 flex flex-col items-center justify-center text-center space-y-4 flex-1">
                            <div className="flex text-yellow-400">
                                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                            </div>
                            <blockquote className="text-gray-600 italic flex-grow">
                                "{testimonial.quote}"
                            </blockquote>
                            <p className="font-semibold text-gray-800">{testimonial.author}</p>
                        </CardContent>
                    </Card>
                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
