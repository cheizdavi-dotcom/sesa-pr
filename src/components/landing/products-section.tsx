import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, PlusCircle } from "lucide-react";
import Link from 'next/link';

const products = [
    { 
        name: "Técnico de Enfermagem",
        focus: "O cargo com maior número de vagas e inscritos.",
        includes: "Conteúdo completo (Comuns + Específicos).",
        bonuses: [
            "DNA da FAFIPA",
            "Edital Verticalizado",
            "Cronograma 60 dias",
        ]
    },
    { 
        name: "Enfermeiro (Nível Superior)",
        focus: "Público qualificado e de alta conversão.",
        includes: "Conteúdo completo (Comuns + Específicos).",
        bonuses: [
            "DNA da FAFIPA",
            "Edital Verticalizado",
            "Cronograma 60 dias",
        ]
    },
    { 
        name: "Conhecimentos Comuns (Todos os Cargos)",
        focus: "O \"Coringa\". Serve para todos os outros 20+ cargos (Administrativo, Psicologia, Farmácia, etc.).",
        includes: "Português + Raciocínio Lógico + Legislação do SUS + Ética.",
        bonuses: [
            "DNA da FAFIPA",
            "Edital Verticalizado",
            "Cronograma 60 dias",
        ]
    },
];

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
                
                <div className="my-12 max-w-2xl mx-auto">
                    <div className="rounded-lg border border-orange-300 bg-orange-50 p-6 text-center shadow-sm">
                        <p className="text-lg text-gray-600">
                            Apostilas desse nível normalmente custam entre <span className="line-through">R$ 60</span> e <span className="line-through">R$ 120</span>
                        </p>
                        <p className="mt-2 text-2xl font-bold text-blue-600">
                            Aqui, você paga apenas R$ 19,90
                        </p>
                        <p className="mt-2 text-sm text-gray-500">
                            Sem mensalidade. Acesso vitalício. Garantia de 7 dias.
                        </p>
                    </div>
                </div>

                <div className="mx-auto grid max-w-5xl items-stretch gap-8 sm:grid-cols-1 lg:grid-cols-3 lg:gap-8">
                    {products.map((product) => (
                        <Card key={product.name} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 border-blue-200 bg-white rounded-xl overflow-hidden">
                            <CardHeader className="bg-blue-600 text-white p-6">
                                <CardTitle className="text-xl font-bold">{product.name}</CardTitle>
                                <CardDescription className="text-blue-100">{product.focus}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1 p-6 space-y-6">
                                <div>
                                    <h4 className="font-semibold mb-2 text-gray-700">O que inclui:</h4>
                                    <p className="text-sm text-gray-600">{product.includes}</p>
                                </div>
                                
                                <div>
                                    <h4 className="font-semibold mb-3 text-gray-700">Bônus Inclusos:</h4>
                                    <ul className="space-y-2 text-sm text-gray-600">
                                        {product.bonuses.map(bonus => (
                                            <li key={bonus} className="flex items-center gap-2">
                                                <PlusCircle className="h-4 w-4 text-green-500" /> 
                                                <span>{bonus}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="text-center pt-4">
                                     <p className="text-sm text-gray-500">Por apenas</p>
                                     <p className="text-4xl font-bold text-gray-900">
                                        R$ 19,90
                                     </p>
                                </div>

                            </CardContent>
                            <CardFooter className="p-6 bg-gray-50">
                                <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-md font-bold text-lg py-6">
                                    <Link href="#">
                                        COMPRAR AGORA
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
