import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from 'next/link';

const technicalProducts = [
    { name: "Técnico de Enfermagem" },
    { name: "Técnico de Laboratório" },
    { name: "Técnico de Segurança do Trabalho" },
    { name: "Técnico em Contabilidade" },
    { name: "Técnico em Informática" },
    { name: "Técnico em Radiologia" },
];

const higherLevelProducts = [
    { name: "Administrador" },
    { name: "Analista de Sistemas" },
    { name: "Arquiteto" },
    { name: "Assistente Social" },
    { name: "Biólogo" },
    { name: "Biomédico" },
    { name: "Contador" },
    { name: "Enfermeiro" },
    { name: "Engenheiro Civil" },
    { name: "Farmacêutico" },
    { name: "Fisioterapeuta" },
    { name: "Fonoaudiólogo" },
    { name: "Médico Veterinário" },
    { name: "Nutricionista" },
    { name: "Psicólogo" },
];

const ProductCard = ({ name }: { name: string }) => (
    <Card className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white rounded-xl overflow-hidden border-gray-200">
        <CardHeader className="bg-blue-600 text-white p-4">
            <CardTitle className="text-lg font-bold text-center">{name}</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 p-6 space-y-4 flex flex-col justify-between">
            <div>
                <div className="text-center">
                     <p className="text-4xl font-bold text-gray-900">
                        R$ 19,90
                     </p>
                </div>
                <ul className="space-y-2 text-sm text-gray-600 mt-4">
                    <li className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-blue-600 shrink-0" /> 
                        <span>Acesso Imediato</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-blue-600 shrink-0" /> 
                        <span>Acesso Vitalício</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-blue-600 shrink-0" /> 
                        <span>Pode Imprimir</span>
                    </li>
                </ul>
            </div>
            <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-md font-bold mt-4 animate-pulse-strong">
                <Link href="#">
                    COMEÇAR A ESTUDAR AGORA
                </Link>
            </Button>
        </CardContent>
    </Card>
);

export default function ProductsSection() {
    return (
        <section id="products" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 text-gray-800">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                        Escolha a Apostila do Seu Cargo
                    </h2>
                    <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl mt-4">
                        Materiais completos, alinhados ao edital SESA-PR e focados na banca FAFIPA.
                    </p>
                </div>

                <div className="space-y-16">
                    <div>
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-8 text-left">
                            Nível Técnico
                        </h3>
                        <div className="mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {technicalProducts.map((product) => (
                                <ProductCard key={product.name} name={product.name} />
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-8 text-left">
                            Nível Superior
                        </h3>
                        <div className="mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {higherLevelProducts.map((product) => (
                                <ProductCard key={product.name} name={product.name} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
