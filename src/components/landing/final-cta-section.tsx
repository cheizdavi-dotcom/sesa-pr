import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCtaSection() {
    return (
        <section className="w-full py-12 md:py-20 bg-background text-primary">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-6 text-center">
                    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline text-primary">
                        A prova vai acontecer com ou sem você preparado.
                    </h2>
                    <div className="max-w-2xl text-primary/90 text-xl md:text-2xl">
                        <p>A diferença é a decisão que você toma hoje.</p>
                        <p>Comece agora. Estude com método. Chegue confiante.</p>
                    </div>
                    <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full text-lg font-bold py-6 px-10">
                        <Link href="#products">
                            ESCOLHER MINHA APOSTILA
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                    <p className="text-sm text-primary/80">
                        Garantia incondicional de 7 dias. Você não tem nada a perder.
                    </p>
                </div>
            </div>
        </section>
    );
}
