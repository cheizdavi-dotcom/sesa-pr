import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from 'next/link';

const technicalProducts = [
    { name: "Técnico de Enfermagem" },
    { name: "Técnico de Laboratório" },
    { name: "Técnico de Segurança do Trabalho" },
];

const superiorProducts = [
    { name: "Administrador" },
    { name: "Analista de Sistemas" },
    { name: "Arquiteto" },
];

const features = [
    "Acesso Imediato",
    "Acesso Vitalício",
    "Pode Imprimir",
]

export default function ProductsSection() {
    return (
        <section id="products" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 text-gray-800">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                        Escolha a Apostila do Seu Cargo
                    </h2>
                    <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                        Materiais completos, alinhados ao edital SESA-PR e focados na banca FAFIPA.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto my-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg text-center shadow-sm">
                    <p className="text-gray-600 text-lg">
                        Apostilas desse nível normalmente custam entre <span className="line-through">R$ 60 e R$ 120</span>
                    </p>
                    <p className="text-2xl md:text-3xl font-bold text-blue-600 mt-2">
                        Aqui, você paga apenas R$ 19,90
                    </p>
                    <p className="text-gray-600 mt-2">
                        Sem mensalidade. Acesso vitalício. Garantia de 7 dias.
                    </p>
                </div>
                
                <div className="space-y-12">
                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-gray-800">Nível Técnico</h3>
                        <div className="mx-auto grid max-w-5xl items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                            {technicalProducts.map((product) => (
                                <Card key={product.name} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 border-gray-200 bg-white">
                                    <CardHeader className="bg-blue-600 text-white rounded-t-lg p-4">
                                        <CardTitle className="text-lg font-bold">{product.name}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-1 p-6">
                                        <div className="text-3xl font-bold text-gray-900 mb-4">
                                            R$ 19,90
                                        </div>
                                        <ul className="space-y-2 text-sm text-gray-600">
                                            {features.map(feature => (
                                                <li key={feature} className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-500" /> {feature}</li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                    <CardFooter className="p-6">
                                        <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-md font-bold">
                                            <Link href="#">
                                                COMEÇAR A ESTUDAR AGORA
                                            </Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold mb-6 text-gray-800">Nível Superior</h3>
                        <div className="mx-auto grid max-w-5xl items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                            {superiorProducts.map((product) => (
                                <Card key={product.name} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 border-gray-200 bg-white">
                                    <CardHeader className="bg-blue-600 text-white rounded-t-lg p-4">
                                        <CardTitle className="text-lg font-bold">{product.name}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-1 p-6">
                                        <div className="text-3xl font-bold text-gray-900 mb-4">
                                            R$ 19,90
                                        </div>
                                        <ul className="space-y-2 text-sm text-gray-600">
                                            {features.map(feature => (
                                                <li key={feature} className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-500" /> {feature}</li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                    <CardFooter className="p-6">
                                        <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-md font-bold">
                                            <Link href="#">
                                                COMEÇAR A ESTUDAR AGORA
                                            </Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
