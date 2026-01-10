import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";
import Link from 'next/link';

const products = [
    { name: "Enfermeiro" },
    { name: "Técnico de Enfermagem" },
    { name: "Médico" },
];

export default function ProductsSection() {
    return (
        <section id="products" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">
                        Escolha sua Apostila Direcionada
                    </h2>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                        Apostilas desse nível no mercado custam R$ 120,00. Aqui, você garante por apenas R$ 19,90.
                    </p>
                </div>
                <div className="mx-auto grid max-w-5xl items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 mt-12">
                    {products.map((product) => (
                        <Card key={product.name} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-transparent hover:border-primary">
                            <CardHeader className="text-center">
                                <CardTitle className="text-2xl">{product.name}</CardTitle>
                                <CardDescription className="text-4xl font-bold text-primary pt-2">
                                    R$ 19,90
                                    <span className="text-sm font-normal text-muted-foreground"> / Pagamento Único</span>
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-500" /> Conteúdo 100% Pós-Edital</li>
                                    <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-500" /> Foco Total Banca FAFIPA</li>
                                    <li className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-500" /> Download Liberado na Hora</li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-md">
                                    <Link href="#">
                                        COMPRAR E COMEÇAR AGORA
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
