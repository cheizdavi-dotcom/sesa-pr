import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from 'next/link';

const products = [
    { 
        name: "Técnico de Enfermagem",
        description: "Acelere sua Aprovação: Material focado no cargo com o maior número de vagas da SESA-PR.",
        price: "19,90",
        features: [
            "Teoria Filtrada: Conteúdo de Enfermagem direto ao ponto, sem enrolação.",
            "Padrão FAFIPA: Análise das pegadinhas técnicas que a banca costuma usar.",
            "Base Completa: Legislação do SUS e matérias comuns inclusas no material."
        ],
        buttonText: "QUERO MINHA APOSTILA AGORA"
    },
    { 
        name: "Enfermeiro (Nível Superior)",
        description: "Estratégia de Elite: Preparação de alto nível para quem busca estabilidade e um cargo superior.",
        price: "19,90",
        features: [
            "Manual do SUS: Domine a legislação da saúde pública que mais reprova candidatos.",
            "Foco em Conhecimentos Específicos: Temas de Enfermagem masterizados conforme o edital 2026.",
            "Vantagem Competitiva: Guia de estudos otimizado para quem tem pouco tempo."
        ],
        buttonText: "QUERO MINHA APOSTILA AGORA"
    },
    { 
        name: "Conhecimentos Comuns (Todos os Cargos)",
        description: "O Coringa do Edital: Essencial para Administrativo, Psicologia, Farmácia, Biologia e demais cargos.",
        price: "19,90",
        features: [
            "A Base que Aprova: Português, Raciocínio Lógico e Ética 100% focados na FAFIPA.",
            "60% da sua Nota: Garanta a pontuação nas matérias que representam o coração da prova.",
            "Universal e Objetivo: O guia definitivo para quem precisa bater a base comum rápido."
        ],
        buttonText: "QUERO MINHA APOSTILA AGORA"
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
                        <Card key={product.name} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 border-transparent bg-white rounded-xl overflow-hidden">
                            <CardHeader className="bg-blue-600 text-white p-6">
                                <CardTitle className="text-xl font-bold text-center">{product.name}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1 p-6 space-y-6 flex flex-col">
                                <p className="text-gray-600 text-center">{product.description}</p>
                                
                                <div className="flex-1">
                                    <h4 className="font-semibold mb-3 text-gray-700">O que você recebe:</h4>
                                    <ul className="space-y-3 text-sm text-gray-600">
                                        {product.features.map(feature => (
                                            <li key={feature} className="flex items-start gap-2">
                                                <Check className="h-5 w-5 text-green-500 mt-0.5 shrink-0" /> 
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="text-center pt-4">
                                     <p className="text-sm text-gray-500">Investimento:</p>
                                     <p className="text-4xl font-bold text-gray-900">
                                        R$ {product.price}
                                     </p>
                                </div>

                            </CardContent>
                            <CardFooter className="p-6 bg-white border-t border-gray-100">
                                <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-md font-bold text-lg py-6 animate-pulse-strong">
                                    <Link href="#">
                                        {product.buttonText}
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
