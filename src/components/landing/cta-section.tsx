import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
    return (
        <section className="w-full py-12 md:py-20 bg-background text-primary">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                        Edital Publicado. Banca Definida. Prova Chegando.
                    </h2>
                    <div className="max-w-xl text-primary/90 md:text-lg">
                        <p>Quem começa agora estuda com calma.</p>
                        <p>Quem espera o edital apertar, estuda sob pressão.</p>
                        <p className="font-bold mt-2">Qual é sua escolha?</p>
                    </div>
                    <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg transition-transform duration-300 hover:scale-105">
                        <Link href="#products">
                            COMEÇAR AGORA
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
