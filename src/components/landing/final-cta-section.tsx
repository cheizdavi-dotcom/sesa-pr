import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCtaSection() {
    return (
        <section className="w-full py-12 md:py-20 lg:py-24 bg-background text-primary">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-6 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">
                        A prova vai acontecer com ou sem você preparado.
                    </h2>
                    <div className="max-w-2xl text-primary/90 md:text-lg">
                        <p>A diferença é a decisão que você toma hoje.</p>
                        <p>Comece agora. Estude com método. Chegue confiante.</p>
                    </div>
                    <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg transition-transform duration-300 hover:scale-105">
                        <Link href="#products">
                            ESCOLHER MINHA APOSTILA
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                    <p className="text-sm text-primary/70">
                        Garantia incondicional de 7 dias. Você não tem nada a perder.
                    </p>
                </div>
            </div>
        </section>
    );
}